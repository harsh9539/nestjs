import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Harsh', email: 'harsh@gmail.com' },
    { username: 'Harsh Goyal', email: 'harshg@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(payload: CreateUserType) {
    this.fakeUsers.push(payload);
    return;
  }

  fetchUserById(id: number) {
    return this.fakeUsers[id];
  }
}
