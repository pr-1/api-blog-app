import { Post } from './post.model';
export interface User {
    id: string;
    username: string;
    age: number;
    gender: Gender;
    created: Date;
    token?: string;
    posts?: Post[];
    bookmarks?: Post[];
}
export declare enum Gender {
    MALE = "Male",
    FEMALE = "Female",
    TRANGENDER = "Transgender"
}
