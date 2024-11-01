const express = require('express');
const { createPostController,editPostController,getPosts, getAllPosts,increaseVote,decreaseVote } = require('../controllers/post.controller');
const { authenticateJWT } = require('../middleware/auth');
const checkDrivelink = require('../config/checkDrive'); 
const authenticateToken = require('../middleware/auth');
const router = express.Router();


router.post('/createPost',authenticateToken, createPostController);
router.get('/team/:teamId',authenticateToken, getPosts);
router.put('/:id',authenticateToken, editPostController);

router.get('/all', getAllPosts);

router.post("/vote/:postId",authenticateToken,increaseVote)
router.post("/downvote/:postId",authenticateToken,decreaseVote)

module.exports = router;
