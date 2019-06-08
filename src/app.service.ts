import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      message: 'Go To /posts to get the list of Posts',
    };
  }
}
