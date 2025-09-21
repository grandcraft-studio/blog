export interface User {
    id: string;
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export class UserModel {
    constructor(public user: User) {}

    // Additional methods related to user can be added here
}