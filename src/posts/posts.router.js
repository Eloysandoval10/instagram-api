const router = require("express").Router();

const postServices = require("./posts.services");
const commentsServices = require('../comments/comments.services')
const likesServices = require('../likes/likes.services')

const passportJwt = require("../middlewares/passport.middleware");
<<<<<<< HEAD
const uploads = require('../middlewares/multer.midleware')

router
  .route("/")
=======
const uploads = require('../middlewares/multer.middleware')



router.route("/")
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
  .get(postServices.getAllPosts)
  .post(
    passportJwt.authenticate("jwt", { session: false }),
    uploads.array('postImages', 10),
<<<<<<< HEAD
    postServices.postNewPost    
  );
router
  .route("/:id")
=======
    postServices.postNewPost
  );

router.route("/:id")
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
  .get(postServices.getPostById)
  .patch(
    passportJwt.authenticate("jwt", { session: false }),
    postServices.patchPost
  )
  .delete(
    passportJwt.authenticate("jwt", { session: false }),
    postServices.deletePost
  );

router.route('/:id/comments')
    .get(commentsServices.getAllCommentsByPost)
<<<<<<< HEAD
    .post(passportJwt.authenticate("jwt", { session: false }), commentsServices.postComment)

router.route('/:id/likes')
    .get(likesServices.getAllLikesByPost)
    .post(passportJwt.authenticate("jwt", { session: false }), likesServices.postLike)

router
    .get('/user/me', passportJwt.authenticate('jwt', {session: false}), postServices.getPostsByMyUser)

router
    .get('/user/:id', postServices.getPostsByUser)
   
module.exports = router;
=======
    .post(passportJwt.authenticate('jwt', {session: false}), commentsServices.postComment)

router.route('/:id/likes')
    .get(likesServices.getAllLikesByPost)
    .post(passportJwt.authenticate('jwt', {session: false}), likesServices.postLike)

router.get('/user/me', passportJwt.authenticate('jwt', {session: false}), postServices.getPostsByMyUser)
router.get('/user/:id', postServices.getPostsByUser)

module.exports = router;
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
