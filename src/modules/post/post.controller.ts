import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { PostsService } from './post.service';
import { Post as BlogPost } from 'src/models/post.model';
import { Observable } from 'rxjs';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): Observable<BlogPost[] | null> {
    return this.postsService.findAll();
  }

  @Post()
  async create(@Body() post: BlogPost): Promise<BlogPost> {
    return await this.postsService.create(post);
  }

  @Put(':id')
  updatePost() {}

  @Delete(':id')
  deletePost() {}
}
