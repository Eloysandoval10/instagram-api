const uuid = require('uuid')
const Posts = require('../models/posts.models')
const Users = require('../models/users.models')
const PostsMultimedia = require('../models/posts_multimedia.models')
const { host } = require('../../config')

const findAllPosts = async(offset, limit) => {
    const posts = await Posts.findAndCountAll({
        offset: offset,
        limit: limit,
        include: [{
            model: Users
        }, {  
            model: PostsMultimedia
        }]
    })
    return posts
}

const findPostById = async (id) => {
    const post = await Posts.findOne({
        where: {
            id: id
        }
    })
    return post
}

const findPostsByUserId = async(userId) => {
    const posts = await Posts.findAll({
        where: {
            userId: userId
        },
        include: {
            model: Users, 
            attributes: ['id', 'firstName', 'lastName']
        },
    })
    return posts
}

const createPost = async(postObj) => {
    const newPost = await Posts.create({
        id: uuid.v4(),
        content: postObj.content,
        userId: postObj.userId
    })
    return newPost
}

const updatePost = async(postId, userId, postObj) => {
    const selectedPost = await Posts.findOne({
        where: {
            id: postId,
            userId: userId
        }
    })
    if(!selectedPost) return null 
    const updatePost = await selectedPost.update(postObj)
    return updatePost
}

const deletePost = async(postId, userId) => {
    const selectedPost = await Posts.findOne({
        where: {
            id: postId,
            userId: userId
        }
    })
    if(!selectedPost) return null 
    const updatePost = await selectedPost.update({
        status: 'deleted'
    })
    return updatePost
}

const creatrMultimediaPost = async(multimediaArray, postId) => {
    const arrayData = multimediaArray.map(obj => {
        return {
            id: uuid.v4(),
            url: `${host}/api/v1/uploads/${obj.filename}`,
            postId: postId,
            type: obj.type,
            status: 'active'
        }
    })
    const newMultimedia = await PostsMultimedia.bulkCreate(arrayData)
    return newMultimedia
}

module.exports = {
    findAllPosts,
    findPostById,
    findPostsByUserId,
    createPost,
    updatePost,
    deletePost,
    creatrMultimediaPost
}