import { Router } from 'express';
import AdminController from '../controllers/adminController';

const router = Router();
const adminController = new AdminController();

export function setAdminRoutes(app) {
    app.use('/admin', router);
    
    router.post('/create-post', adminController.createPost);
    router.put('/edit-post/:id', adminController.editPost);
    router.delete('/delete-post/:id', adminController.deletePost);
}