import { useState } from "react";
import RecipeInput from "./RecipeInput";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";

const Recipes = ({ onRecipeSave }) => {
  
  const [ingredient, setIngredient] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [area, setArea] = useState("");
  const [dishSelected, setDishSelected] = useState([]);
  const [isRecipeShow, setIsRecipeShow] = useState(false);

  const handleSearch = (value, isVegetarian, selectedArea) => {
    setIngredient(value.trim());
    setIsVegetarian(isVegetarian);
    setArea(selectedArea);
  };

  const handleRandomRecipe = (dishRandom) => {
    setDishSelected(dishRandom);
    setIsRecipeShow(true);
  };

  const handleShowRecipe = (dish) => {
    setDishSelected(dish);
    setIsRecipeShow(true);
  };

  const handleSaveRecipe = (dish) => {
    onRecipeSave(dish);
    window.alert("meal saved to meal-schedule");
  };

  const handleCloseRecipe = () => {
    setDishSelected([]);
    setIsRecipeShow(false);
  };


  if (isRecipeShow) {
    return (
      <div className="Recipes">
        <RecipeInput onClickingSearch={handleSearch} onClickingRandom={handleRandomRecipe} onCheckboxChange={setIsVegetarian} onAreaChange={setArea} />
        <RecipeDetails recipeDetails={dishSelected} onSave={handleSaveRecipe} onClose={handleCloseRecipe} />
      </div>
    );
  } else {
    return (
      <div className="Recipes">
        <RecipeInput onClickingSearch={handleSearch} onClickingRandom={handleRandomRecipe} onCheckboxChange={setIsVegetarian} onAreaChange={setArea} />
        <RecipeList ingredient={ingredient} isVegetarian={isVegetarian} area={area} onClickRecipe={handleShowRecipe} />
      </div>
    );
  }
};

export default Recipes;
