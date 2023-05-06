const Likes = require('../models/likes.models')
const Users = require('../models/users.models')

<<<<<<< HEAD
const findAllLikesFromPost = async(postId) => {
    const likes = await Likes.findAndCountAll({
        where: {
            postId: postId
        }, 
        include: {
            model: Users
=======
const findAllLikesFromPost = async (postId) => {
    const likes = await Likes.findAndCountAll({
        where: {
            postId: postId
        },
        include: {
            model :Users
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
        }
    })
    return likes
}

<<<<<<< HEAD
const createLikes = async(postId, userId) => {
=======
const createLikes = async (postId, userId) => {
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
    const validateIfLikeExists = await Likes.findOne({
        where: {
            postId,
            userId
        }
    })

    if(validateIfLikeExists){
        await validateIfLikeExists.destroy()
        return false
    }

    await Likes.create({
        postId,
        userId
    })
    return true
}

module.exports = {
    findAllLikesFromPost,
    createLikes
<<<<<<< HEAD
}
=======
}
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
