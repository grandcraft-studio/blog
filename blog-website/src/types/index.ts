export interface User {
    id: string;
    username: string;
    password: string;
}

export interface Blog {
    id: string;
    title: string;
    content: string;
    authorId: string;
}

export interface Comment {
    id: string;
    blogId: string;
    userId: string;
    content: string;
}