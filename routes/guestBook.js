const express = require("express");
const router = express.Router();

const { renderMain, getPost, writePost, deletePost } = require('../controllers/guestBook.js');

router.get('/', renderMain);
router.get('/guestBooks', getPost);
router.post('/guestBooks', writePost);
// router.put('/guestBooks/:postId');
router.delete('/guestBooks/:postId', deletePost);

module.exports = router;