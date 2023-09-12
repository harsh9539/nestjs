import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class ControllersController {
  @Get()
  getPosts() {
    return [
      {
        id: 1,
        title: 'Post 1',
      },
      {
        id: 2,
        title: 'Post 2',
      },
    ];
  }
}
