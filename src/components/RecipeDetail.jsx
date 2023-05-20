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

  //Get the recipes
  useEffect(() => {
    fetchRecipes();
    console.log(recipes);
  }, []);

  return (
    <RecipeDetailDiv>
      {recipe ? (
        <div>
            <img src={recipe.image} alt="Recipe" className="image"/>
          <h2>{recipe.name}</h2>
          <p>{recipe.calories}</p>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
        </div>
      ) : (
        <h2>Recipe not found</h2>
      )}
    </RecipeDetailDiv>
  );
}

export default RecipeDetail;
