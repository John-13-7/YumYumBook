import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

function Reference() {
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
      if (first_input === "post") {
        const index = inp.findIndex((int) => /\d/.test(int)); // regex for ints, used for when splicing input for post
        setInput("");
        //One word food like "chicken" or "meat"
        if (index == 2) {
          const name = inp[1];
          const cal = inp[2];
          const des = inp.slice(3).join(" ");

          const post = {
            method: "POST",
            body: JSON.stringify({ name, calories: cal, description: des }),
            headers: {
              "Content-Type": "application/json",
            },
          };

          fetch("http://localhost:4000/recipes", post)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
        } else {
          // foods with more than one name "chicken parmesan"
          console.log(index);
          const name = inp.slice(1, index);
          const cal = inp[index];
          const des = inp.slice(index + 1).join(" ");
          const post = {
            method: "POST",
            body: JSON.stringify({ name, calories: cal, description: des }),
            headers: {
              "Content-Type": "application/json",
            },
          };
          fetch("http://localhost:4000/recipes", post)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
        }
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

      //read
      if (first_input === "read" || first_input === "Read") {
        //read off id
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
        } else if (second_input === "name") {
          fetch(`http://localhost:4000/recipes/search?name=${third_input}`)
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
    console.log("use effect runs");
    fetchRecipes();
  }, []); //Add a value inside [] and whenever it changes this will run again

  return (
    <div>
      <ApiDirections>
        <h1>Commands</h1>
        <h2>update</h2>
        <h2>delete &lt;id&gt;</h2>
        <h2>post &lt;food&gt; &lt;calories&gt; &lt;description&gt;</h2>
        <h2>read id &lt;idnumber&gt;</h2>
      </ApiDirections>
      <SearchBar>
        <input
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
      </SearchBar>
      <UpdateTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Calories</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {update &&
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
              </tr>
            ))}
        </tbody>
      </UpdateTable>
      <ReadDiv>
        {read.map((recipe) => (
          <tr>
            <td>{recipe.shortId}</td>
            <td>{recipe.name}</td>
            <td>{recipe.calories}</td>
            <td>{recipe.description}</td>
          </tr>
        ))}
      </ReadDiv>
    </div>
  );
}

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  .search-bar {
    border: 2px solid black;
    padding: 10px;
    width: 1000px;
    font-size: 1.2rem;
    font-family: "Open-sans", sans-serif;
  }
  @media screen and (max-width: 768px) {
    .search-bar {
      width: 100%;
    }
  }
`;
const ApiDirections = styled.div`
  h1 {
    font-family: "Red Hat Display", sans-serif;
    text-align: center;
    font-size: 2.5rem;
  }
  h2 {
    font-family: "Open-sans", sans-serif;
    text-align: center;
    font-weight: normal;
    font-size: 1.2rem;
  }
`;

const UpdateTable = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  font-family: "Open-sans", sans-serif;
  font-size: 1.2rem;
  th,
  td {
    text-align: center;
    padding: 10px;
  }
`;

const ReadDiv = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Open-sans", sans-serif;
  font-size: 1.2rem;
  td {
    text-align: center;
    padding: 10px;
  }
`;

export default Reference;
