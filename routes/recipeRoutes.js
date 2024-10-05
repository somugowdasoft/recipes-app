//import the express
const express = require("express");


//import the router from express
const router = express.Router();

//import the controllers
const recipeControllers = require("../controllers/recipeController");

//define the route 

router.post('/', recipeControllers.createRecipe);
router.get('/', recipeControllers.getAllRecipes);
router.get('/:id', recipeControllers.getRecipeById);
router.put('/:id', recipeControllers.updateRecipe);
router.delete('/:id', recipeControllers.deleteRecipe);

module.exports = router;