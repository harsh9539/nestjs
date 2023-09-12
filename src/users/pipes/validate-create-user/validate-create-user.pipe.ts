import {
  ArgumentMetadata,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('Inside validateCreateUserPipe');
    console.log(value, 'value');
    console.log(metadata, 'metadata');
    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      throw new HttpException('Age should beasdfdasfsd a number', 400);
    }
    value.age = parseAgeToInt;
    console.log('Returningn..');
    return value;
  }
}
