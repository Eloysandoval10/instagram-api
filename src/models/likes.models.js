const { DataTypes } = require('sequelize')
<<<<<<< HEAD
const db = require('../utils/database')
const Users = require('./users.models')
const Posts = require('./posts.models')
const Likes = db.define('likes', {  
    userId: {      
        type: DataTypes.UUID,        
        primaryKey: true,        
        references: {            
            model: Users,            
            key: 'id'        
        },    
    },    
    postId: {        
        type: DataTypes.UUID,       
        primaryKey: true,        
        references: {            
            model: Posts,           
            key: 'id'        
        }    
    }})
    
    module.exports = Likes
=======

const db = require('../utils/database')
const Users = require('./users.models')
const Posts = require('./posts.models')

const Likes = db.define('likes', {
    userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
            model: Users,
            key: 'id'
        },
    },
    postId: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
            model: Posts,
            key: 'id'
        }
    }
})

module.exports = Likes
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
