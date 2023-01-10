import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipeService {
    constructor(
        @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>
    ) {
    }
    getAllRecipe = (): Promise<Array<Recipe>> => {
        return this.recipeRepository.find();
    }
    createRecipe = (createRecipeDto: CreateRecipeDto): Promise<Recipe> => {
        try {
            const newRecipe = new Recipe();
            // newRecipe.id = createRecipeDto.id;
            newRecipe.description = createRecipeDto.description;
            newRecipe.ingredients = createRecipeDto.ingredients;
            newRecipe.method = createRecipeDto.method;
            newRecipe.title = createRecipeDto.title;
            newRecipe.preparationTime = createRecipeDto.preparationTime;
            return this.recipeRepository.save(newRecipe)
        } catch (err: any) {
            console.log(err);
            // trow error
        }

    }
}
