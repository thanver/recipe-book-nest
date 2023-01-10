import { Body, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Get, Post } from '@nestjs/common/decorators';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { Request } from '@nestjs/common/decorators/http/route-params.decorator';
import { LoginUserDto } from './dto/login-dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  GetUsers() {
    return this.userService.getAll();
  }
  
}
