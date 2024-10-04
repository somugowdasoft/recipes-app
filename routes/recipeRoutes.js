//import the express
const express = require("express");


//import the router from express
const router = express.Router();

//import the controllers
const recipeControllers = require("../controllers/recipeController");

//define the route 

router.post('/recipes', recipeControllers.createRecipe);
router.get('/recipes', recipeControllers.getAllRecipes);
router.get('/recipes/:id', recipeControllers.getRecipeById);
router.put('/recipes/:id', recipeControllers.updateRecipe);
router.delete('/recipes/:id', recipeControllers.deleteRecipe);

module.exports = router;