import React from "react";
import { useState, useEffect } from "react";
import { LookupSearchBar, DisplaySearch } from "./Styles";
import ReactCountryFlag from "react-country-flag";
import { motion } from "framer-motion";

function Lookup() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const transparentPixel =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC";

  const handleImage = () => {
    setIsLoading(false);
  };

  function pressed_key(e) {
    if (e.key === "enter" || e.key === "Enter") {
      const inp = input.split(" "); //splits all the words
      const isInt = inp.findIndex((int) => /\d/.test(int)); // Finds the int value inside the user input
      console.log(isInt);
      //Means a number is being input first, means an integer
      if (isInt == 0) {
        filter_calories(inp);
      } else {
        //filter by name or cuisine
        filter_other(inp);
      }
      setInput("");
      e.preventDefault();
    }
  }

  const renderFlag = (recipe) => {
    const flags = {
      American: "US",
      Korean: "KR",
      Mexican: "MX",
      Chinese: "CN",
      Greek: "GR",
      Indian: "IN",
      Japanese: "JP",
      Thai: "TH",
      Italian: "IT",
      MiddleEast: "ME",
      French: "FR",
    };
    const flag = flags[recipe.cuisine];
    if (flag) {
      return <ReactCountryFlag countryCode={flag} svg />;
    } else {
      return "Flag not found";
    }
  };

  //I could just build it so it gets all the recipes, like input: "mexican chicken 700"
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
    //means there's a cuisine search
    if (filter.length > 0) {
      setFilteredRecipes([...filteredRecipes, ...filter]);
    }
    //name search
    else {
      const lookup_recipe = inp.join(" ");
      const lookup_filter = recipes.filter((recipe) => {
        let recipeName = Array.isArray(recipe.name)
          ? recipe.name.join(" ")
          : recipe.name;
        return recipeName.toLowerCase().includes(lookup_recipe.toLowerCase());
      });
      setFilteredRecipes([...filteredRecipes, ...lookup_filter]);
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
    console.log(recipes);
  }, []);

  return (
    <div>
      <LookupSearchBar>
        <input
          value={input}
          className="search-bar"
          placeholder="Search for the wisdom you seek"
          onChange={(e) => {
            setInput(e.target.value);
            setFilteredRecipes([]);
          }}
          onKeyDown={pressed_key}
        ></input>
      </LookupSearchBar>
      <DisplaySearch>
        {filteredRecipes.map((recipe) => (
          <a
            key={recipe.id}
            href={`/${recipe.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              animate={{ opacity: 1, transition: { duration: 2 } }}
              initial={{ opacity: 0 }}
            >
              <div className="recipe-card">
                <img
                  src={isLoading ? transparentPixel : recipe.image}
                  alt="Recipe"
                  className="image"
                  onLoad={handleImage}
                />
                <h4>{recipe.name}</h4>
                <h5>{recipe.calories} Calories</h5>
                <h5>{recipe.description}</h5>
                <div className="center-flag">
                  <h3 className="flag">{renderFlag(recipe)}</h3>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </DisplaySearch>
    </div>
  );
}

export default Lookup;
