import { Typegoose } from 'typegoose';
import { User } from './user.model';
export declare class Post extends Typegoose {
    title: string;
    description: string;
    created: Date;
    updated: Date;
    author: User;
    votes: number;
}
