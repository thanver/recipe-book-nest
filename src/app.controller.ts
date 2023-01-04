import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { Body, Get } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/gaurd/local.authgaurd';
import { LoginUserDto } from './user/dto/login-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
  
}
