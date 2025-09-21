import { Request, Response } from 'express';
import Blog from '../models/blog';
import Comment from '../models/comment';

export default class BlogController {
    public async getAllBlogs(req: Request, res: Response): Promise<void> {
        try {
            const blogs = await Blog.find();
            res.status(200).json(blogs);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving blogs' });
        }
    }

    public async getBlogById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const blog = await Blog.findById(id);
            if (!blog) {
                res.status(404).json({ message: 'Blog not found' });
                return;
            }
            res.status(200).json(blog);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving blog' });
        }
    }

    public async addComment(req: Request, res: Response): Promise<void> {
        const { blogId, userId, content } = req.body;
        try {
            const comment = new Comment({ blogId, userId, content });
            await comment.save();
            res.status(201).json(comment);
        } catch (error) {
            res.status(500).json({ message: 'Error adding comment' });
        }
    }
}