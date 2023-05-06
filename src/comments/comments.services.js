const commentsControllers = require('./comments.controllers')

const getAllCommentsByPost = (req, res) => {
    const postId = req.params.id 
    commentsControllers.findAllCommentsByPostId(postId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
}

<<<<<<< HEAD
const postComment = (req, res) => {   
    const { content } = req.body
    const postId = req.params.id  
=======
const postComment = (req, res) => {
    const { content } = req.body
    const postId = req.params.id
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
    const userId = req.user.id
    commentsControllers.createComment({content, postId, userId})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
}


module.exports = {
    getAllCommentsByPost,
    postComment
<<<<<<< HEAD
}
=======
}
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
