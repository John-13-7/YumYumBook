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
  const { name, calories, description, image, cuisine } = req.body;
  const new_recipe = {
    shortId: shortid.generate(),
    name,
    calories,
    description,
    image, 
    cuisine,
  };
  recipes.push(new_recipe);
  res.status(201).json(new_recipe);
});

//deleting based off id, only one id works so far
app.delete("/recipes/:shortId", (req, res) => {
  const { shortId } = req.params;
  const recipe_index = recipes.findIndex(
    (recipe) => recipe.shortId === shortId
  );
  if (recipe_index !== -1) {
    recipes.splice(recipe_index, 1); //only removes one item
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

//welcome world
app.get("/", (req, res) => {
  res.send("Build back-end api here");
});

//get all the recipes
app.get("/recipes", (req, res) => {
  res.json(recipes);
});

//gets recipes based on what you search
app.get("/recipes/search", (req, res) => {
  const { shortId, name, calories, description } = req.query;

  if (shortId) {
    const recipe = recipes.find((recipe) => recipe.shortId === shortId);
    return res.json(recipe);
  }

  if (name) {
    const recipe = recipes.find((recipe) => recipe.name === name);
    return res.json(recipe);
  }

  if (calories) {
    const recipe = recipes.find(
      (recipe) => recipe.calories === parseInt(calories)
    );
    return res.json(recipe);
  }

  if (description) {
    const recipe = recipes.find((recipe) => recipe.description === description);
    return res.json(recipe);
  }

  res.status(400).send("Invalid query parameters");
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
