import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateRecipeDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsAlphanumeric()
  description: string;

  @ApiProperty()
  @IsNumber()
  preparationTime: number;

  @ApiProperty()
  @IsAlphanumeric()
  ingredients: string;

  @ApiProperty()
  @IsAlphanumeric()
  method: string;

}
