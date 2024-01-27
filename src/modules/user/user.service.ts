import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './Dto/create-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    let mesg = 'Now its working on get request '
    return {
      sucess: true,
      result: mesg
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
