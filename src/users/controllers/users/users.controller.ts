import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
// import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users') // @Controller("/users") => this mean it will present on /users
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get() // @Get("/fetch") => this mean it will present on /users/fetch
  getUsers() {
    return this.userService.fetchUsers();
  }

  //   @Get('posts')
  //   getUserPosts() {
  //     return [
  //       {
  //         username: 'Harsh',
  //         email: 'harsh@gmail.com',
  //         posts: [
  //           { id: 1, title: 'Post 1' },
  //           { id: 2, title: 'Post 2' },
  //         ],
  //       },
  //     ];
  //   }

  //   @Get('posts/comments')
  //   getUserPostsComments() {
  //     return [
  //       {
  //         id: 1,
  //         title: 'Post 1',
  //         comments: [
  //           { id: 1, comment: 'comment 1' },
  //           { id: 2, comment: 'comment 2' },
  //         ],
  //       },
  //     ];
  //   }

  //   @Post('posts')
  //   createUser(@Req() request: Request, @Res() response: Response) {
  //     console.log(request.body);
  //     response.send('Created');
  //   }
  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    // console.log(userData);
    return this.userService.createUser(userData);
  }
  @Get('userId')
  getUserQuery(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return { username: 'Harsh', email: 'harsh@gmail.com' };
  }

  //   @Get(':id')
  //   getUserById(@Req() request: Request, @Res() response: Response) {
  //     console.log(request.params);
  //     return response.send("User's data");
  //   }
  //
  // we can also get the params from the request object
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.fetchUserById(id);
  }
  // if we have multiple params
  //   @Get(':id/:postId')
  //   getUserById(@Param('id') id: string, @Param('postId') postId: string) {
  //     console.log(id,postId);
  //     return { id,postId };
  //   }

  // we also have query params to get the data
}
