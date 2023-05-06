const { DataTypes } = require('sequelize')
<<<<<<< HEAD
const db = require('../utils/database')
const Users = require('./users.models')

const Follows = db.define('follows', {    
    userId : {        
        type: DataTypes.UUID,        
        primaryKey: true,        
        references: {            
            model: Users,            
            key: 'id'        
        }    
    },    
    userId2: {        
        type: DataTypes.UUID,        
        primaryKey: true,        
        references: {            
            model: Users,            
            key: 'id'        
        }    
    }})
    
    module.exports = Follows
=======

const db = require('../utils/database')
const Users = require('./users.models')

const Follows = db.define('follows', {
    userId : { //? Usuario que sigue a alguien (follower)
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
            model: Users,
            key: 'id'
        }
    },
    userId2: { //? Usuario que es seguido por alguien (following)
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
            model: Users,
            key: 'id'
        }
    }
})

module.exports = Follows
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
