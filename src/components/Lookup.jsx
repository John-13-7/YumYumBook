import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
function Lookup() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  function pressed_key(e) {
    if (e.key === "enter" || e.key === "Enter") {
      //Also could work with e.keyCode == 13
      //Parse input
      const inp = input.split(" "); //splits all the words
      const isInt = inp.findIndex((int) => /\d/.test(int)); // regex for ints, used for when splicing input for post
      //Means a number is being input first, means an integer
      if (isInt == 0) {
        // get all recipes equal to the value
        setFilteredRecipes([]); //reset it before
        const filter = recipes.filter(
          (recipe) => recipe.calories === parseInt(inp[0])
        );
        setFilteredRecipes([...filteredRecipes, ...filter]);
        console.log(filteredRecipes);
      }
      e.preventDefault();
    }
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
  }, []);
  return (
    <div>
      <SearchBar>
        <input
          className="search-bar"
          placeholder="Search for the wisdom you seek"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={pressed_key}
        ></input>
      </SearchBar>
      <DisplaySearch>
        {filteredRecipes.map((recipe) => (
          <div>
            <img src={recipe.image} alt="Recipe" className="image"/>
            <h4>{recipe.name}</h4>
            <h5>{recipe.calories}</h5>
            <h5>{recipe.description}</h5>
          </div>
        ))}
      </DisplaySearch>
    </div>
  );
}

const SearchBar = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  .search-bar {
    margin-top: 10px;
    border: 2px solid black;
    width: 750px;
    padding: 10px;
    font-size: 1.5rem;
    font-family: "Open-sans", sans-serif;
  }
`;

const DisplaySearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .image{
    width: 300px;
    height: 300px;
    border-radius: 75%;
    border: 2px solid black;
  }
`;

export default Lookup;
