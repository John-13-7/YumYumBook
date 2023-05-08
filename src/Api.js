const express = require("express");
const app = express();
const shortid = require('shortid');
//npm install shortid
app.use(express.json());

//So it can run locally
app.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

//Api items
const recipes = [
    {shortId: shortid.generate(), name: "Pizza", calories: 1000, description: "Yum italian pizza"},
    {shortId: shortid.generate(), name: "Lasagna", calories: 800, description: "Yum italian lasagna, garfield approves"},
    {shortId: shortid.generate(), name: "Chicken Parmesan", calories: 500, description: "Yum italian chicken parm, beware lactose people"},
    {shortId: shortid.generate(), name: "Egg Fried Rice", calories: 1200, description: "Uncle Roger Approved"},
    {shortId: shortid.generate(), name: "Tonkotsu Ramen", calories: 1500, description: "Don't worry, not instant"},
    {shortId: shortid.generate(), name: "Fruit Bowl", calories: 450, description: "Fruits... in a bowl... with mint simple syrup and some rum"},
    {shortId: shortid.generate(), name: "Pork Katsu Don", calories: 1350, description: "Rice bowls ftw"},
    {shortId: shortid.generate(), name: "Pad Thai", calories: 750, description: "Sweet and Spicy Noods"},
    {shortId: shortid.generate(), name: "Fried Chicken", calories: 1600, description: "The best way to have chicken"},
    {shortId: shortid.generate(), name: "Steak", calories: 500, description: "Not Wagyu, but still pretty dam good"},
    {shortId: shortid.generate(), name: "Hamburger", calories: 350, description: "Dang, it's a cheeseburger without cheese"},
    {shortId: shortid.generate(), name: "Cheeseburger", calories: 450, description: "Dang, it's a hamburger with cheese"},
    {shortId: shortid.generate(), name: "Apple Pie", calories: 2400, description: "The classic cinnamon + fruit pie"},
    {shortId: shortid.generate(), name: "Chicken Alfredo", calories: 1800, description: "Creamy deliciousness"},
    {shortId: shortid.generate(), name: "Black Cod", calories: 550, description: "Nice delicious tender fish. Yum."},
    {shortId: shortid.generate(), name: "Shrimp Po Boy", calories: 700, description: "A New Orleans Staple"},
    {shortId: shortid.generate(), name: "Chili Dog", calories: 600, description: "Meat on Meat in between Buns"},
    {shortId: shortid.generate(), name: "Orange Chicken", calories: 900, description: "Not Chinese Food, but still pretty good"},
    {shortId: shortid.generate(), name: "Country Fried Steak", calories: 850, description: "A classic southern breakfast"},
    {shortId: shortid.generate(), name: "Okonomiyaki", calories: 1150, description: "Yum Savory Pancake"},
    {shortId: shortid.generate(), name: "Curry Fishballs", calories: 650, description: "Yum fish balls dunked in curry"},
    {shortId: shortid.generate(), name: "Doughnut", calories: 500, description: "Yum Fried and Glazed Dough Rings"},
    {shortId: shortid.generate(), name: "Peanut Butter and Jelly Sandwich", calories: 300, description: "You really need a recipe for this one?"},
    {shortId: shortid.generate(), name: "Lemon Pepper Chicken Wings", calories: 400, description: "Tangy chicken wings for those who love flavor"},
    {shortId: shortid.generate(), name: "Chicken and Broccoli", calories: 250, description: "The gym bros will definitely approve of this one"}

];

app.post("/recipes", (req,res) =>{
    const {name, calories, description} = req.body;
    const new_recipe = {shortId: shortid.generate(), name, calories, description};
    recipes.push(new_recipe);
    res.status(201).json(new_recipe);
});

//deleting based off id, only one id works so far
app.delete("/recipes/:shortId", (req, res) =>{
    const {shortId} = req.params;
    const recipe_index = recipes.findIndex((recipe) => recipe.shortId === shortId);
    if(recipe_index !== -1){
        recipes.splice(recipe_index, 1); //only removes one item
        res.status(204).send();
    }
    else{
        res.status(404).send();
    }
});

//welcome world
app.get("/", (req, res) => { 
    res.send("Build back-end api here");
});

//get all the recipes
app.get("/recipes", (req,res) => { 
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
      const recipe = recipes.find((recipe) => recipe.calories === parseInt(calories));
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