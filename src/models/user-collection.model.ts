import { prop, Typegoose } from 'typegoose';
import { Post } from './post.model';
import { Gender } from './user.model';

export class UserCollectionModel extends Typegoose {
  @prop({ required: true, unique: true, index: true })
  email: string;
  @prop({ required: true })
  password: string;
  @prop()
  name: string;
  @prop()
  age: number;
  @prop()
  gender: Gender;
  @prop()
  created: Date;
  @prop()
  token?: string;
  @prop()
  posts?: Post[];
  @prop()
  bookmarks?: Post[];
}
