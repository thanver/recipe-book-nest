import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth/auth.controller';
import { UserModule } from './user/user.module';
import config from './config/ormconfig';
import { AuthModule } from './auth/auth/auth.module';
import { RecipeModule } from './recipe/recipe.module';
@Module({
  imports: [TypeOrmModule.forRoot(config), ConfigModule.forRoot({ isGlobal: true }), UserModule, AuthModule, RecipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
