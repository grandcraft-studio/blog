import { Router } from 'express';
import { BlogController } from '../controllers/blogController';

const router = Router();
const blogController = new BlogController();

router.get('/blogs', blogController.getAllBlogs.bind(blogController));
router.get('/blogs/:id', blogController.getBlogById.bind(blogController));
router.post('/blogs/:id/comments', blogController.addComment.bind(blogController));

export function setBlogRoutes(app) {
    app.use('/api', router);
}