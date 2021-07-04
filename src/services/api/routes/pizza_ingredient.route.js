const pizzaIngredientController = require("../controller/pizza_ingredient.controller");

var express = require("express");

var router = express.Router();


router.post("/add/:pizza_id", pizzaIngredientController.addObj);
/**
 * @swagger
 * /pizza_ingredient/add/{pizza_id}:
 *   post:
 *      summary: addToppingToPizza() add new ingredient (topping) to pizza
 *      description: Used to add ingredient to pizza
 *      tags:
 *          - pizza_ingredient
 *      parameters:
 *          - in: path
 *            name: pizza_id
 *            description: Id pizza table
 *            required: true
 *            schema:
 *              type: integer
 *          - in: body
 *            name: pizza_ingredient
 *            description: Used to add ingredient to pizza
 *            schema:
 *              type: object
 *              required:
 *                 - ingredient_id
 *              properties:
 *                  ingredient_id:
 *                      type: integer
 *                      example: 1
 *                      required: true
 *
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.put("/update/:id", pizzaIngredientController.updateObj);
/**
 * @swagger
 * /pizza_ingredient/update/{id}:
 *   put:
 *      description: Update a pizza ingredient
 *      tags:
 *          - pizza_ingredient
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Id pizza_ingredient table
 *            required: true
 *            schema:
 *              type: integer
 *          - in: body
 *            name: pizza_ingredient
 *            description: Pizza Ingredient data
 *            schema:
 *              type: object
 *              required:
 *                 - ingredient_id
 *              properties:
 *                  ingredient_id:
 *                      type: integer
 *                      example: 1
 *                      required: true
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.get("/:pizza_id", pizzaIngredientController.getObj);
/**
 * @swagger
 * /pizza_ingredient/{pizza_id}:
 *   get:
 *      summary: getToppingsForPizza() Returns a pizza with ingredients (toppings) and Object of intermediate table
 *      description: Get one pizza with ingredients
 *      tags:
 *          - pizza_ingredient
 *      parameters:
 *          - in: path
 *            name: pizza_id
 *            description: Id pizza
 *            required: true
 *            schema:
 *              type: integer
 *
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.delete("/:id", pizzaIngredientController.deleteObj);
/**
 * @swagger
 * /pizza_ingredient/{id}:
 *   delete:
 *      summary: DeleteTopping() Delete a ingredient, using the pizza_ingredient id
 *      description: Delete one pizza_ingredient (Hard delete approach)
 *      tags:
 *          - pizza_ingredient
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Id pizza_ingredient table
 *            required: true
 *            schema:
 *              type: integer
 *
 *      responses:
 *          '204':
 *              description: Element delete successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */



module.exports = router;
