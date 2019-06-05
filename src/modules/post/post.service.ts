import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';
import { Post } from 'src/models/post.model';
import { Observable } from 'rxjs';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private readonly postModel: ModelType<Post>) {}

  async create(createPostDto: Post): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return await createdPost.save();
  }

  findAll(): Observable<Post[] | null> {
    return this.postModel.find().exec();
  }
}
