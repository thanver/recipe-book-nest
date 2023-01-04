import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { LoginUserDto } from 'src/user/dto/login-dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // constructor(private authService: AuthService) { }
  
  @Get()
  findAllUsers(): any {
    return [{ id: 0 }];
  }
  @Get(':id')
  findUserById(@Param() params): string {
    return params.id;
  }

}
