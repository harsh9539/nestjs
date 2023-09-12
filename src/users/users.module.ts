import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import {
  ExampleMiddleware,
  ExampleMiddleware2,
} from './middlewares/example/example.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // all this will work
    // consumer.apply(ExampleMiddleware).forRoutes(UsersController);
    // consumer.apply(ExampleMiddleware).forRoutes('users');
    consumer.apply(ExampleMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.GET,
    });
    consumer.apply(ExampleMiddleware2).forRoutes({
      path: 'users/create',
      method: RequestMethod.POST,
    });
  }
}
