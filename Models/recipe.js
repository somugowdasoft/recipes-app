//import monggose
const mongoose = require("mongoose");

//schema for recipe
const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [String],
    instructions: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

//create and export the recipe model from the schema
module.exports = mongoose.model('Recipe', recipeSchema);