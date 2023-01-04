import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsEmail,
  IsMobilePhone,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsMobilePhone()
  phone: number;

  @ApiProperty()
  @IsAlphanumeric()
  password: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({required: false})
  @IsString()
  @IsOptional()
  address?: string;
}
