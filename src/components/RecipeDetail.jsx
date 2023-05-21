import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RecipeDetailDiv } from "./Styles";

function RecipeDetail() {
  const { name } = useParams();
  const [recipes, setRecipes] = useState([]);

  const recipe = recipes.find((recipe) => recipe.name === name);

  function fetchRecipes() {
    fetch("http://localhost:4000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }

  const renderIngredients = (recipe) => {
    const des = recipe.ingredients.split(",");
    return des.map((ingredient, index) => <p key={index}>{ingredient.trim()}</p>);
  };

  //Get the recipes
  useEffect(() => {
    fetchRecipes();
    console.log(recipes);
  }, []);

  return (
    <RecipeDetailDiv>
      {recipe ? (
        <div className="recipe-card">
          <div className="title">
            <img src={recipe.image} className="image" />
            <h2>{recipe.name}</h2>
            <p className="calories">{recipe.calories} calories</p>
          </div>
          <div className="ingredients">
            <p>{renderIngredients(recipe)}</p>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
          </div>
        </div>
      ) : (
        <h2>Recipe not found</h2>
      )}
    </RecipeDetailDiv>
  );
}

export default RecipeDetail;
