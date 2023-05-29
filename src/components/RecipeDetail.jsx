import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RecipeDetailDiv, UpdateForm } from "./Styles";

function RecipeDetail() {
  const { name } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);

  const recipe = recipes.find((recipe) => recipe.name === name);

  function fetchRecipes() {
    fetch("http://localhost:4000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }

  const handleImage = () => {
    setIsLoading(false);
  };

  const handleDoubleClick = () => {
    setIsEdit(true);
  };

  const handleUpdate = () => {
    setIsUpdate(true);
  };

  const handleSubmit = (e) => {
    console.log(e);
  };

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // const updatedRecipe = { ...recipe, [name]: value };
    // const updatedRecipes = recipes.map((r) => {
    //   if (r.name === recipe.name) {
    //     return updatedRecipe;
    //   }
    //   return r;
    // });
    // setRecipes(updatedRecipes);
  };

  //Get the recipes
  useEffect(() => {
    fetchRecipes();
    console.log(recipes);
  }, []);

  return (
    <RecipeDetailDiv>
      {recipe && !isUpdate ? (
        <div className="recipe-card" onDoubleClick={handleDoubleClick}>
          <div className="first">
            <h2 className="name">{recipe.name}</h2>
            <img src={recipe.image} className="image" onLoad={handleImage} />
            <div className="second">
              <p className="calories">{recipe.calories} calories</p>
              <button className="update" onClick={handleUpdate}>
                Update Form
              </button>
            </div>
          </div>
          <div className="third">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.split(",").map((r) => {
                const sentence = r.trim();
                return sentence && <li className="ingredients">{sentence}</li>;
              })}
            </ul>
            <h3>Instructions</h3>
            <ul>
              {recipe.instructions.split(".").map((r) => {
                const sentence = r.trim();
                return sentence && <li className="instructions">{sentence}</li>;
              })}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      {recipe && isUpdate ? (
        <UpdateForm onSubmit={handleSubmit}>
          <label htmlFor="food">Food</label>
          <input
            type="text"
            name="name"
            id="name"
            value={recipe.name}
            onChange={handleChange}
          ></input>
          <label htmlFor="calories">Calories</label>
          <input
            type="text"
            name="calories"
            id="calories"
            value={recipe.calories}
            onChange={handleChange}
          ></input>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            name="ingredients"
            id="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={recipe.description}
            onChange={handleChange}
          ></textarea>
          <button type="submit">update</button>
        </UpdateForm>
      ) : (
        ""
      )}
    </RecipeDetailDiv>
  );
}

export default RecipeDetail;
