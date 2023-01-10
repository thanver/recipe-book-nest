import { Body, Controller, UseGuards } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { RecipeService } from './recipe.service';
import { Get, Post } from '@nestjs/common/decorators';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/gaurd/jwt-auth.guard';

@ApiTags('recipe')
@Controller('recipe')
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) { }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Post()
    create(@Body() createRecipeDto: CreateRecipeDto) {
        return this.recipeService.createRecipe(createRecipeDto);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Get()
    getAll() {
        return this.recipeService.getAllRecipe();
    }
}
