const uuid = require('uuid')
const Posts = require('../models/posts.models')
const Users = require('../models/users.models')
<<<<<<< HEAD
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
=======
const PostMultimedia = require('../models/posts_multimedia.models')

const { host } = require('../../config')

const findAllPosts = async (offset, limit) => {
    const posts = await Posts.findAndCountAll({
        limit: limit,
        offset: offset,
        include: [{
            model: Users
        },{
            model: PostMultimedia
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
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

<<<<<<< HEAD
const findPostsByUserId = async(userId) => {
    const posts = await Posts.findAll({
        where: {
            userId: userId
        },
        include: {
            model: Users, 
            attributes: ['id', 'firstName', 'lastName']
=======
const findPostsByUserId = async (userId) => {
    const posts = await Posts.findAll({
        where: {
            userId : userId
        },
        include: {
            model: Users,
            attributes: ["id", "firstName", "lastName"]
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
        },
    })
    return posts
}

<<<<<<< HEAD
const createPost = async(postObj) => {
=======
const createPost = async (postObj) => {
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
    const newPost = await Posts.create({
        id: uuid.v4(),
        content: postObj.content,
        userId: postObj.userId
    })
    return newPost
}

<<<<<<< HEAD
const updatePost = async(postId, userId, postObj) => {
=======
const updatePost = async (postId, userId, postObj) => {
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
    const selectedPost = await Posts.findOne({
        where: {
            id: postId,
            userId: userId
        }
    })
<<<<<<< HEAD
    if(!selectedPost) return null 
    const updatePost = await selectedPost.update(postObj)
    return updatePost
}

const deletePost = async(postId, userId) => {
=======

    if(!selectedPost) return null

    const updatedPost = await selectedPost.update(postObj)

    return updatedPost
}

const deletePost = async (postId, userId) => {
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
    const selectedPost = await Posts.findOne({
        where: {
            id: postId,
            userId: userId
        }
    })
<<<<<<< HEAD
    if(!selectedPost) return null 
    const updatePost = await selectedPost.update({
        status: 'deleted'
    })
    return updatePost
}

const creatrMultimediaPost = async(multimediaArray, postId) => {
=======

    if(!selectedPost) return null

    const updatedPost = await selectedPost.update({
        status: 'deleted'
    })

    return updatedPost
}

const createMultimediaPost = async (multimediaArray, postId) => {

>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
    const arrayData = multimediaArray.map(obj => {
        return {
            id: uuid.v4(),
            url: `${host}/api/v1/uploads/${obj.filename}`,
            postId: postId,
            type: obj.type,
            status: 'active'
        }
    })
<<<<<<< HEAD
    const newMultimedia = await PostsMultimedia.bulkCreate(arrayData)
=======

    const newMultimedia = await PostMultimedia.bulkCreate(arrayData)
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
    return newMultimedia
}

module.exports = {
    findAllPosts,
    findPostById,
    findPostsByUserId,
    createPost,
    updatePost,
    deletePost,
<<<<<<< HEAD
    creatrMultimediaPost
}
=======
    createMultimediaPost
}
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
