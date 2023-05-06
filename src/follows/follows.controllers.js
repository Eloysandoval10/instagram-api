const Follows = require('../models/follows.models')
const Users = require('../models/users.models')

<<<<<<< HEAD
const findAllFollowsByUser = async(userId) => {
    const follows = await Follows.findAll({
        where: {
            userId: userId
=======
const findAllFollowsByUser = async (userId) => {
    const follows = await Follows.findAll({
        where: {
            userId: userId //? Follows
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
        },
        include: {
            model: Users,
            as: 'followed'
        }
    })
<<<<<<< HEAD
    return follows.map(({ followed }) => followed)
}

const findAllFollwersByUser = async(userId) => {
    const follows = await Follows.findAll({
        where: {
            userId2: userId
=======
    return follows.map(({followed}) => followed)
}

const findAllFollowersByUser = async (userId) => {
    const follows = await Follows.findAll({
        where: {
            userId2: userId //? Followers
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
        },
        include: {
            model: Users,
            as: 'follower'
        }
    })
<<<<<<< HEAD
    return follows.map(({ follower }) => follower)
}

const createFollowToUser = async(userId, userId2) => {
    const newFollows = await Follows.findAll({
        userId,
        userId2
    })
    return newFollows
}

const deleteFollow = async(userId, userId2) => {
    const deleteFollows = await Follows.destroy({
        userId,
        userId2
    })
    return deleteFollows
}

module.exports = {
    findAllFollwersByUser,
=======
    return follows.map(({follower}) => follower)
}

const createFollowToUser = async (userId, userId2) => {
    const newFollow = await Follows.create({
        userId,
        userId2
    })
    return newFollow
}

const deleteFollow = async (userId, userId2) => {
    const deletedFollow = await Follows.destroy({
        where: {
            userId,
            userId2
        }
    })
    return deletedFollow
}

module.exports = {
    findAllFollowersByUser,
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
    findAllFollowsByUser,
    createFollowToUser,
    deleteFollow
}