import express from 'express';
import upload from '../Middlewares/multer.js';
import { isAuth } from '../Middlewares/isauth.js';
import { createBlog, allblogs, deleteBlog, userblogs, singleblog} from '../Controllers/blog.controller.js';

const router = express.Router();

router.post('/create', isAuth, upload.single('image'), createBlog);
router.get('/all', allblogs);
router.get('/user/blogs', isAuth, userblogs); 
router.delete('/delete/:id', isAuth, deleteBlog);
router.get('/:id', singleblog);

export default router;
