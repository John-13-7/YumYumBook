import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RecipeDetailDiv } from "./Styles";

function RecipeDetail() {
  const { name } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState("");

  const recipe = recipes.find((recipe) => recipe.name === name);

  function fetchRecipes() {
    fetch("http://localhost:4000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }

  const handleDoubleClick = () => {
    setIsEdit(true);
  };

  //Get the recipes
  useEffect(() => {
    fetchRecipes();
    console.log(recipes);
  }, []);

  return (
    <RecipeDetailDiv>
      {recipe ? (
        <div className="recipe-card" onDoubleClick={handleDoubleClick}>
          <img src={recipe.image} className="image" />
          <h2 className="name">{recipe.name}</h2>
          <p className="calories">{recipe.calories} calories</p>
          <ul>
            {recipe.ingredients.split(",").map((r) => {
              const sentence = r.trim();
              return sentence && <li className="ingredients">{sentence}</li>;
            })}
          </ul>
          <ul>
            {recipe.instructions.split(".").map((r) => {
              const sentence = r.trim();
              return sentence && <li className="instructions">{sentence}</li>;
            })}
          </ul>
        </div>
      ) : (
        <h2>Recipe not found</h2>
      )}
    </RecipeDetailDiv>
  );
}

export default RecipeDetail;
