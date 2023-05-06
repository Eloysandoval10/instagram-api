const Follows = require('../models/follows.models')
const Users = require('../models/users.models')

const findAllFollowsByUser = async(userId) => {
    const follows = await Follows.findAll({
        where: {
            userId: userId
        },
        include: {
            model: Users,
            as: 'followed'
        }
    })
    return follows.map(({ followed }) => followed)
}

const findAllFollwersByUser = async(userId) => {
    const follows = await Follows.findAll({
        where: {
            userId2: userId
        },
        include: {
            model: Users,
            as: 'follower'
        }
    })
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
    findAllFollowsByUser,
    createFollowToUser,
    deleteFollow
}