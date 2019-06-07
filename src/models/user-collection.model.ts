import { prop, Typegoose } from 'typegoose';

export class UserCollectionModel extends Typegoose {
  @prop({ required: true, unique: true, index: true })
  email: string;
  @prop({ required: true })
  password: string;
}
