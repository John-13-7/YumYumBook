const express = require("express");
const app = express();
app.use(express.json());
const { recipes } = require("./Data");
const shortid = require("shortid");

//So it can run locally
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.post("/recipes", (req, res) => {
  const { name, calories, description, image, cuisine, ingredients, directions } = req.body;
  const new_recipe = {
    shortId: shortid.generate(),
    name,
    calories,
    description,
    image,
    cuisine,
    ingredients,
    directions
  };
  recipes.push(new_recipe);
  res.status(201).json(new_recipe);
});

//delete
app.delete("/recipes/delete", (req, res) => {
  const { shortId, name, calories } = req.query;
  console.log(shortId, name, calories);
  //id
  if (shortId) {
    const recipe_index = recipes.findIndex(
      (recipe) => recipe.shortId === shortId
    );
    console.log("Recipe index: ", recipe_index);
    if (recipe_index !== -1) {
      recipes.splice(recipe_index, 1); //only removes one item
      res.status(204).send();
      console.log("Deleted id: ", shortId);
    } else {
      res.status(404).send();
    }
  }

  //name
  if (name) {
    const recipe_index = recipes.findIndex(
      (recipe) => recipe.name.toLowerCase() === name.toLowerCase()
    );
    if (recipe_index !== -1) {
      recipes.splice(recipe_index, 1); //only removes one item
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  }

  //calories
  if (calories) {
    const filteredIndexes = recipes.map((recipe, index) => {
      if (recipe.calories === parseInt(calories)) {
        return index;
      }
    }).filter(index => index !== undefined);
    filteredIndexes.sort((a, b) => b - a);
    filteredIndexes.forEach(index => {
      recipes.splice(index, 1);
    })
  }
});

//get all the recipes
app.get("/recipes", (req, res) => {
  res.json(recipes);
});

//gets recipes based on what you search
app.get("/recipes/search", (req, res) => {
  const { shortId, name, calories } = req.query;
  console.log(shortId, name, calories);
  if (shortId) {
    const recipe = recipes.find((recipe) => recipe.shortId === shortId);
    console.log("Printing id: ", recipe);
    return res.json(recipe);
  }

  if (name) {
    const recipe = recipes.find((recipe) => recipe.name.toLowerCase() === name.toLowerCase());
    console.log("Returning name: ", recipe);
    return res.json(recipe);
  }

  if (calories) {
    const recipe = recipes.filter(
      (recipe) => recipe.calories === parseInt(calories)
    );
    console.log("Returning calories: ", recipe);
    return res.json(recipe);
  }

  res.status(400).send("Invalid query parameters");
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
