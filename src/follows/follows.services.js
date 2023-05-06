<<<<<<< HEAD
const followaControllers = require('./follows.controllers')

const getAllFollows = (req, res) => {
    const userId = req.user.id
    followaControllers.findAllFollowsByUser(userId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err=> {
=======
const Users = require('../models/users.models')
const followsControllers = require('./follows.controllers')

const getAllFollows = (req, res) => {
    const userId = req.user.id
    followsControllers.findAllFollowsByUser(userId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
            res.status(400).json({err: err.message})
        })
}

<<<<<<< HEAD
const getAllFollwers = (req, res) => {
    const userId = req.user.id
    followaControllers.findAllFollwersByUser(userId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err=> {
=======
const getAllFollowers = (req, res) => {
    const userId = req.user.id
    followsControllers.findAllFollowersByUser(userId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
            res.status(400).json({err: err.message})
        })
}

const postNewFollow = (req, res) => {
    const userId = req.user.id
    const userId2 = req.params.id
<<<<<<< HEAD
    followaControllers.createFollowToUser(userId, userId2)
        .then(res.status(201).json(data))
=======
    followsControllers.createFollowToUser(userId, userId2)
        .then(data => {
            res.status(201).json(data)
        })
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
        .catch(err => {
            res.status(400).json({err: err.message})
        })
}

const deleteFollow = (req, res) => {
    const userId = req.user.id
<<<<<<< HEAD
    const userId2 = req.params.id
    followaControllers.deleteFollow(userId, userId2)
        .then(data => {
            if(!data) return res.status(404).json({messaga: 'Invalid ID'})
            res.status(200).json({message: 'user unfollowed successfully'})
=======
    const userId2 = req.params.id 
    followsControllers.deleteFollow(userId, userId2)
        .then(data => {
            if(!data) return res.status(404).json({message: 'Invalid ID'})

            res.status(200).json({message: 'User unfollowed successfully'})
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
}

module.exports = {
<<<<<<< HEAD
    getAllFollows, 
    getAllFollwers,
    postNewFollow,
    deleteFollow
}
=======
    getAllFollowers,
    getAllFollows,
    postNewFollow,
    deleteFollow
}
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
