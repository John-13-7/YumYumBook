import React from "react";
import { useState, useEffect } from "react";
import {LookupSearchBar, DisplaySearch} from "./Styles";

function Lookup() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  function pressed_key(e) {
    if (e.key === "enter" || e.key === "Enter") {
      const inp = input.split(" "); //splits all the words
      //inputRef.current.value = "";
      const isInt = inp.findIndex((int) => /\d/.test(int)); // Finds the int value inside the user input
      console.log(isInt);
      //Means a number is being input first, means an integer
      if (isInt == 0) {
        filter_calories(inp);
      } else {
        //filter by name or cuisine
        filter_other(inp);
      }
      e.preventDefault();
    }
  }

  //checks only if the first input is an integer value
  function filter_calories(inp) {
    const filter = recipes.filter(
      (recipe) => recipe.calories === parseInt(inp[0])
    );
    setFilteredRecipes([...filteredRecipes, ...filter]);
  }

  //alot of input validation could be added
  function filter_other(inp) {
    //cuisine
    const filter = recipes.filter(
      (recipe) => recipe.cuisine.toLowerCase() === inp[0].toLowerCase()
    );
    setFilteredRecipes([...filteredRecipes, ...filter]);
  }
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

  //Empty the array with searched items
  useEffect(() => {
    setFilteredRecipes([]);
  }, [input]);
  return (
    <div>
      <LookupSearchBar>
        <input
          className="search-bar"
          placeholder="Search for the wisdom you seek"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={pressed_key}
        ></input>
      </LookupSearchBar>
      <DisplaySearch>
        {filteredRecipes.map((recipe) => (
          <div className="recipe-card">
            <img src={recipe.image} alt="Recipe" className="image" />
            <h4>{recipe.name}</h4>
            <h5>{recipe.calories}</h5>
            <h5>{recipe.description}</h5>
            <h5>{recipe.cuisine}</h5>
          </div>
        ))}
      </DisplaySearch>
    </div>
  );
}


export default Lookup;
