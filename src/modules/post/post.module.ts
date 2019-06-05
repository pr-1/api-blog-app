import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Post } from 'src/models/post.model';
import { PostsController } from './post.controller';
import { PostsService } from './post.service';

@Module({
  imports: [TypegooseModule.forFeature(Post)],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostModule {}
