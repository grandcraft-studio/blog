# Blog Website

This project is a simple blog website that allows users to register, log in, create blog posts, and comment on them. It features an admin dashboard for managing blog content.

## Features

- User registration and authentication
- Create, edit, and delete blog posts (admin functionality)
- Comment on blog posts
- View all blog posts and individual blog details

## Project Structure

```
blog-website
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── controllers             # Contains controllers for handling requests
│   │   ├── adminController.ts   # Manages blog posts for admins
│   │   ├── authController.ts    # Handles user authentication
│   │   └── blogController.ts     # Manages blog-related functionalities
│   ├── models                  # Contains data models
│   │   ├── user.ts             # User model
│   │   ├── blog.ts             # Blog post model
│   │   └── comment.ts          # Comment model
│   ├── routes                  # Defines application routes
│   │   ├── adminRoutes.ts      # Routes for admin functionalities
│   │   ├── authRoutes.ts       # Routes for authentication
│   │   └── blogRoutes.ts       # Routes for blog functionalities
│   ├── middleware              # Middleware functions
│   │   └── authMiddleware.ts   # Auth middleware to protect routes
│   └── types                   # Type definitions
│       └── index.ts           # Interfaces for User, Blog, and Comment
├── package.json                # NPM dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/blog-website.git
   cd blog-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the application:
   ```
   npm start
   ```

## Usage

- Navigate to `http://localhost:3000` to access the blog website.
- Users can register and log in to comment on blog posts.
- Admins can manage blog posts through the admin dashboard.

## Contributing

Feel free to submit issues or pull requests to improve the project.