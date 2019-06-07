import { prop, Typegoose } from 'typegoose';
import { IsString } from 'class-validator';

export class Post extends Typegoose {
  @IsString()
  @prop({ required: true })
  title: string;
  @prop({ required: true })
  description: string;
}
