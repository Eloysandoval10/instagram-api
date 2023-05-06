const followaControllers = require('./follows.controllers')

const getAllFollows = (req, res) => {
    const userId = req.user.id
    followaControllers.findAllFollowsByUser(userId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err=> {
            res.status(400).json({err: err.message})
        })
}

const getAllFollwers = (req, res) => {
    const userId = req.user.id
    followaControllers.findAllFollwersByUser(userId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err=> {
            res.status(400).json({err: err.message})
        })
}

const postNewFollow = (req, res) => {
    const userId = req.user.id
    const userId2 = req.params.id
    followaControllers.createFollowToUser(userId, userId2)
        .then(res.status(201).json(data))
        .catch(err => {
            res.status(400).json({err: err.message})
        })
}

const deleteFollow = (req, res) => {
    const userId = req.user.id
    const userId2 = req.params.id
    followaControllers.deleteFollow(userId, userId2)
        .then(data => {
            if(!data) return res.status(404).json({messaga: 'Invalid ID'})
            res.status(200).json({message: 'user unfollowed successfully'})
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
}

module.exports = {
    getAllFollows, 
    getAllFollwers,
    postNewFollow,
    deleteFollow
}