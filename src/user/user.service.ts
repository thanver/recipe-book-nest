import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) { }

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(user: CreateUserDto): Promise<User> {
    try {
      const saltRounds = 10;
      const hash = await bcrypt.hashSync(user.password, saltRounds);
      const newUser = new User();
      newUser.name = user.name;
      newUser.username = user.email;
      newUser.phone = user.phone;
      newUser.password = hash;
      return this.userRepository.save(newUser);
    } catch (err: any) {
      console.log(err);
      // trow error
    }
  }
  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ username });
  }
}
