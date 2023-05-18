import React from "react";
import { useState, useEffect } from "react";
import {
  DatabaseSearchBarForm,
  DatabaseDirectionsDiv,
  RenderTable,
} from "./Styles";
//simulates a database
function DatabaseSimulation() {
  const [recipes, setRecipes] = useState([]); // Holds the recipes from the backend
  const [input, setInput] = useState(""); // User input when searching api references
  const [read, setRead] = useState([]); // Reads
  const [update, setUpdate] = useState(false); // Updates

  //This function runs whenever the person presses enter key
  function useEnterKey(e) {
    if (e.key === "enter" || e.key === "Enter") {
      const inp = input.split(" "); //splits all the words
      const first_input = inp[0]; //first word
      const second_input = inp[1]; //second word
      const third_input = inp[2]; //third word for like read id 3, 3 is the third item

      //create
      if (first_input === "create") {
        const index = inp.findIndex((int) => /\d/.test(int)); // regex for ints, used for when splicing input for post
        setInput("");
        const name = inp.slice(1, index);
        const cal = inp[index];
        const des = inp.slice(index + 1).join(" ");
        const imgi = "./recipe_images/pizza.jpg";
        const cui = "temp";
        const post = {
          method: "POST",
          body: JSON.stringify({
            name,
            calories: cal,
            description: des,
            image: imgi,
            cuisine: cui,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch("http://localhost:4000/recipes", post)
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }

      //delete off id
      if (first_input === "delete" || first_input === "Delete") {
        fetch(`http://localhost:4000/recipes/${second_input}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              fetchRecipes();
              setInput(""); //resets the search bar to empty
            } else {
              console.log("Error deleting recipe");
            }
          })
          .catch((error) => console.error(error));
      }

      //read off id
      if (first_input === "read" || first_input === "Read") {

        if (second_input === "id") {
          fetch(`http://localhost:4000/recipes/search?shortId=${third_input}`)
            .then((response) => response.json())
            .then((data) => {
              if (data) {
                setRead([data]);
              } else {
                console.log("Erroring getting the stuff");
              }
            });
          setInput("");
          //read off name
        } else if (second_input === "name") {
          const firstLetter = third_input.charAt(0).toUpperCase();
          const restLetters = third_input.slice(1).toLowerCase();
          const buffer = firstLetter + restLetters;
          console.log(third_input);
          fetch(`http://localhost:4000/recipes/search?name=${buffer}`)
            .then((response) => response.json())
            .then((data) => {
              if (data) {
                setRead([data]);
              } else {
                console.log("Erroring getting the stuff");
              }
            });
          setInput("");
        }
      }

      //update
      if (first_input === "update") {
        fetchRecipes();
        setUpdate(true);
        setInput("");
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

  //This runs whenver the program mounts
  useEffect(() => {
    console.log(recipes);
    fetchRecipes();
  }, []); //Add a value inside [] and whenever it changes this will run again

  return (
    <div>
      <DatabaseDirectionsDiv>
        <h1>Database</h1>
        <h2>create &lt;name&gt; &lt;calories&gt; &lt;description&gt;</h2>
        <h2>read id &lt;value&gt; read name  &lt;value&gt;</h2>
        <h2>update</h2>
        <h2>delete &lt;id&gt;</h2>
      </DatabaseDirectionsDiv>
      <DatabaseSearchBarForm>
        <input
          placeholder=""
          className="search-bar"
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
            setUpdate(false);
            setRead([]);
          }}
          value={input}
          onKeyDown={useEnterKey}
        ></input>
      </DatabaseSearchBarForm>
      <RenderTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Calories</th>
            <th>Description</th>
            <th>Cuisine</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {update && //user enters update
            recipes.map((recipe) => (
              <tr key={recipe.shortId}>
                <td>{recipe.shortId}</td>
                <td>
                  {Array.isArray(recipe.name)
                    ? recipe.name.join(" ")
                    : recipe.name}
                </td>
                <td>{recipe.calories}</td>
                <td>{recipe.description}</td>
                <td>{recipe.cuisine}</td>
                <td>
                  <img src={recipe.image} className="recipe-image" />
                </td>
              </tr>
            ))}
          {read.map((recipe) => ( //user enters read id <idnumber>
            <tr>
              <td>{recipe.shortId}</td>
              <td>{recipe.name}</td>
              <td>{recipe.calories}</td>
              <td>{recipe.description}</td>
              <td>{recipe.cuisine}</td>
              <td>
                <img src={recipe.image} className="recipe-image" />
              </td>
            </tr>
          ))}
        </tbody>
      </RenderTable>
    </div>
  );
}

export default DatabaseSimulation;
