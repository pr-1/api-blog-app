import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { PostModule } from './modules/post/post.module';
import { UsersModule } from './modules/users/users.module';
import bluebird from 'bluebird';
import 'dotenv/config';
const dbUrl = 'mongodb://prince:prince123@ds131747.mlab.com:31747/db-blog-app';

@Module({
  imports: [
    TypegooseModule.forRoot(dbUrl, {promiseLibrary: bluebird, useNewUrlParser: true }),
    PostModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
