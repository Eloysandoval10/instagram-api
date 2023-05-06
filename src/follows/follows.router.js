const router = require('express').Router()

const followServices = require('./follows.services')
const passportJwt = require('../middlewares/passport.middleware')

<<<<<<< HEAD
router.use(passportJwt.authenticate('jwt', { session: false }))

router.get('/followers', followServices.getAllFollwers)

router.get('/following', followServices.getAllFollows)

module.exports = router
=======

router.use(passportJwt.authenticate('jwt', {session: false}))

router.get('/followers', followServices.getAllFollowers)

router.get('/following', followServices.getAllFollows)

module.exports = router
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
