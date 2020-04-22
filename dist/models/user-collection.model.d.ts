import { Typegoose } from 'typegoose';
import { Post } from './post.model';
import { Gender } from './user.model';
export declare class UserCollectionModel extends Typegoose {
    email: string;
    password: string;
    name: string;
    age: number;
    gender: Gender;
    created: Date;
    token?: string;
    posts?: Post[];
    bookmarks?: Post[];
}
