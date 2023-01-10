import { Module } from '@nestjs/common';
// import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../strategy/local.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt/dist';
import { JwtStrategy } from '../strategy/jwt.strategy';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: '#2dfldn',// need to access from env
    signOptions: { expiresIn: '3600s' },
  }),],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
