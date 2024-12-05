import express from 'express';
import { getPost, getPosts, savePost, updatePost } from '../controllers/postController.js';
const router = express.Router();


// get all posts
router.get('/', getPosts);

// get a single posts
router.get('/:id', getPost);

// create new post
router.post('/', savePost);

// update post
router.put('/:id', updatePost);

export default router;