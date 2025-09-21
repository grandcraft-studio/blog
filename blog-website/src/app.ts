import express from 'express';
import bodyParser from 'body-parser';
import { setAdminRoutes } from './routes/adminRoutes';
import { setAuthRoutes } from './routes/authRoutes';
import { setBlogRoutes } from './routes/blogRoutes';
import { checkAuth } from './middleware/authMiddleware';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/admin', checkAuth, setAdminRoutes());
app.use('/auth', setAuthRoutes());
app.use('/blogs', setBlogRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});