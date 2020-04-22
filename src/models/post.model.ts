import { prop, Typegoose } from 'typegoose';
import { IsString } from 'class-validator';
import { User } from './user.model';

export class Post extends Typegoose {
  @IsString()
  @prop({ required: true })
  title: string;
  @prop({ required: true })
  description: string;
  @prop({default: Date.now()})
  created: Date;
  @prop({default: Date.now()})
  updated: Date;
  @prop({default: false})
  isDone: boolean;
}
