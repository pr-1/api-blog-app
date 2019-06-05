import { prop, Typegoose } from 'typegoose';

export class Post extends Typegoose {
  @prop({ required: true })
  title: string;
  @prop({ required: true })
  description: string;
}
