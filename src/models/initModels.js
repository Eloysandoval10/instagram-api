const Users = require('./users.models')
const Posts = require('./posts.models')
const Likes = require('./likes.models')
const Follows = require('./follows.models')
const Comments = require('./comments.models')
const PostsMultimedia = require('./posts_multimedia.models')

const initModels = () => {

    Users.hasMany(Posts)
    Posts.belongsTo(Users)

    // post 1:m comments
    Posts.hasMany(Comments)
    Comments.belongsTo(Posts)

    // users 1:m Comments
    Users.hasMany(Comments)
    Comments.belongsTo(Users)

    // post 1:m postmulti
    Posts.hasMany(PostsMultimedia)
    PostsMultimedia.belongsTo(Posts)

    // post 1:m likes
    Posts.hasMany(Likes)
    Likes.belongsTo(Posts)

    // users 1:m follows
    Users.hasMany(Follows)
    Follows.belongsTo(Users, {
        foreignKey: 'userId',
        as: 'follower'
    })

    // users 1:m follows
    Follows.belongsTo(Users, {
        foreignKey: 'userId2',
        as: 'followed'
    }) 
}


module.exports = initModels