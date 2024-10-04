#Recipes App

## Overview
The Recipes App is a complete CRUD application built with Node.js, Express.js, and Mongoose, following the MVC pattern. It allows users to manage recipes by performing operations like creating, reading, updating, and deleting recipes. The application integrates with MongoDB for data storage and provides a comprehensive API with detailed documentation using Postman.

## Features
Create new recipes with details like title, description, ingredients, and instructions.
Retrieve all recipes or a single recipe by its ID.
Update an existing recipe by its ID.
Delete a recipe by its ID.
Full API documentation available via Postman, including sample requests and responses.
Error handling and input validation.
Clean and well-organized code adhering to the MVC architecture.
MongoDB integration using Mongoose for database operations.

# Technologies Used
Node.js: Server-side JavaScript runtime.
Express.js: Web framework for building REST APIs.
MongoDB: NoSQL database for storing recipe data.
Mongoose: Object Data Modeling (ODM) library for MongoDB.
Postman: API documentation and testing tool.


# Installation
## Prerequisites
Node.js installed on your machine.
MongoDB running locally or on a cloud service like MongoDB Atlas.
Postman for testing the API.

## Steps to Install
1. Clone this repository to your local machine:
```git clone https://github.com/somugowdasoft/recipes-app.git ```

2. Navigate into the project directory:
```cd recipes-app```

3. Install the required dependencies:
```npm install```

4. Create a .env file at the root of the project with the following content:
```PORT=3000
MONGODB_URI=mongodb://localhost:27017/recipedb
```

5. Start the server:
```npm start```

6. The server will run on http://localhost:3001.

# API Endpoints

The following are the API endpoints for the Recipes App:

## 1. Create a New Recipe

### URL: /recipes

### Method: POST

### Request Body:
```{
 "title": "Biryani",
      "description": "A flavorful and aromatic one-pot dish made with layers of spiced rice and marinated chicken or vegetables, cooked to perfection.",
      "ingredients": [
        "2 cups basmati rice",
        "500g chicken, marinated with yogurt and spices",
        "2 onions, sliced",
        "2 tomatoes, chopped",
        "2 tbsp ginger-garlic paste",
        "1 tbsp garam masala",
        "1 tsp turmeric powder",
        "1 tsp red chili powder",
        "4 cups water",
        "Fresh mint and coriander leaves",
        "Saffron soaked in warm milk",
        "2 tbsp ghee",
        "Salt to taste"
      ],
      "instructions": "Cook the basmati rice until it's 70% done and set aside. In a large pan, heat ghee and fry the onions until golden brown. Add ginger-garlic paste and sauté for a few minutes. Add tomatoes, turmeric powder, chili powder, garam masala, and salt. Cook until the tomatoes soften. Add the marinated chicken and cook until tender. In a deep pot, layer the rice and chicken mixture, adding mint, coriander leaves, and saffron milk in between layers. Cover and cook on low heat (dum) for 20-25 minutes. Serve hot with raita.",
}
```
### Response:
Success: 201 Created
Error: 400 Bad Request (for validation errors)

## 2. Get All Recipes

### URL: /recipes

### Method: GET

### Response:
```[
  {
        "_id": "6700108472a5766bc5a5ca41",
        "title": "Biryani",
        "description": "A flavorful and aromatic one-pot dish made with layers of spiced rice and marinated chicken or vegetables, cooked to perfection.",
        "ingredients": [
            "2 cups basmati rice",
            "500g chicken, marinated with yogurt and spices",
            "2 onions, sliced",
            "2 tomatoes, chopped",
            "2 tbsp ginger-garlic paste",
            "1 tbsp garam masala",
            "1 tsp turmeric powder",
            "1 tsp red chili powder",
            "4 cups water",
            "Fresh mint and coriander leaves",
            "Saffron soaked in warm milk",
            "2 tbsp ghee",
            "Salt to taste"
        ],
        "instructions": "Cook the basmati rice until it's 70% done and set aside. In a large pan, heat ghee and fry the onions until golden brown. Add ginger-garlic paste and sauté for a few minutes. Add tomatoes, turmeric powder, chili powder, garam masala, and salt. Cook until the tomatoes soften. Add the marinated chicken and cook until tender. In a deep pot, layer the rice and chicken mixture, adding mint, coriander leaves, and saffron milk in between layers. Cover and cook on low heat (dum) for 20-25 minutes. Serve hot with raita.",
        "createdAt": "2024-10-04T15:57:56.883Z",
        "__v": 0
    }
]
```

## 3. Get a Recipe by ID

### URL: /recipes/:id
### Method: GET
### Response:
### Success: 200 OK
### Error: 404 Not Found (if recipe does not exist)

## 4. Update a Recipe
### URL: /recipes/:id
### Method: PUT
### Request Body:
```{
  "title": "Chicken Biryani",
  "description": "A fragrant and flavorful rice dish cooked with marinated chicken, layered with aromatic basmati rice, herbs, and spices, cooked to perfection in a traditional dum style.",
  "ingredients": [
    "2 cups basmati rice",
    "600g chicken, marinated with yogurt, ginger-garlic paste, and spices",
    "2 large onions, sliced and fried until golden (birista)",
    "3 tomatoes, chopped",
    "2 tbsp ginger-garlic paste",
    "2 tbsp biryani masala",
    "1 tsp turmeric powder",
    "1 tsp red chili powder",
    "4 cups water",
    "Fresh mint and coriander leaves",
    "Saffron soaked in warm milk",
    "3 tbsp ghee",
    "Salt to taste",
    "Juice of 1 lemon"
  ],
  "instructions": "Cook the basmati rice until it is 70% done and set aside. Marinate the chicken with yogurt, ginger-garlic paste, turmeric, chili powder, and biryani masala for at least 2 hours. Heat ghee in a pan and fry the onions (birista) until golden brown, then set aside. In the same pan, cook the marinated chicken until almost done. In a deep pot, layer the rice and chicken, adding mint, coriander, fried onions, saffron milk, and lemon juice in between layers. Cover the pot and cook on low heat (dum) for 25-30 minutes. Serve hot with raita."
}
```
### Response:
Success: 200 OK
Error: 400 Bad Request (for validation errors)

## 5. Delete a Recipe
### URL: /recipes/:id
### Method: DELETE
### Response:
Success: 200 OK
Error: 404 Not Found (if recipe does not exist)


## Error Handling
The application includes comprehensive error handling for:

Missing or invalid fields during creation or update.
Recipe not found for GET, PUT, or DELETE operations.
General server errors (500 status code).

