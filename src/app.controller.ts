import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { Body, Get } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth/auth.service';
import { JwtAuthGuard } from './auth/gaurd/jwt-auth.guard';
import { LocalAuthGuard } from './auth/gaurd/local-auth.guard';
import { LoginUserDto } from './user/dto/login-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}
