const ingredientController = require("../controller/ingredient.controller");

var express = require("express");

var router = express.Router();

router.get('/list', ingredientController.listObj);
/**
 * @swagger
 * /ingredient/list:
 *   get:
 *      summary: GetToppings() get all ingredients (toppings), set parameter topping=1 to returns toppings only
 *      description: Used to get all ingredients
 *      tags:
 *          - ingredient
 *      parameters:
 *          - in: query
 *            name: page
 *            type: integer
 *            description: Number of page
 *            required: false
 *          - in: query
 *            name: limit
 *            type: integer
 *            description: Limit of pages per page
 *            required: false
 *          - in: query
 *            name: query
 *            type: string
 *            description: Search data using a word
 *            required: false
 *          - in: query
 *            name: topping
 *            type: integer
 *            description: 1
 *            required: false
 *      responses:
 *          '200':
 *              description: Returned a list successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/add", ingredientController.addObj);
/**
 * @swagger
 * /ingredient/add:
 *   post:
 *      summary: AddTopping() Create new topping use the flag topping in true (1) for define topping
 *      description: Used to add ingredient
 *      tags:
 *          - ingredient
 *      parameters:
 *          - in: body
 *            name: ingredient
 *            description: Ingredient data
 *            schema:
 *              type: object
 *              required:
 *                 - name
 *                 - description
 *              properties:
 *                  name:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: Name of ingredient
 *                      required: true
 *                  description:
 *                      type: string
 *                      minLength: 0
 *                      maxLength: 200
 *                      example: This is sample of description
 *                  topping:
 *                      type: boolean
 *                      example: true
 *
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put("/update/:id", ingredientController.updateObj);
/**
 * @swagger
 * /ingredient/update/{id}:
 *   put:
 *      name: updateIngredient
 *      description: Update a ingredient
 *      tags:
 *          - ingredient
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Id ingredient
 *            required: true
 *            schema:
 *              type: integer
 *          - in: body
 *            name: ingredient
 *            description: Ingredient data
 *            schema:
 *              type: object
 *              required:
 *                 - name
 *                 - description
 *              properties:
 *                  id:
 *                      type: integer
 *                      minLength: 1
 *                      example: 1
 *                      required: true
 *                  name:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: Name of ingredient
 *                      required: true
 *                  description:
 *                      type: string
 *                      minLength: 0
 *                      maxLength: 200
 *                      example: This is sample of description
 *                  topping:
 *                      type: boolean
 *                      example: true
 *                  status:
 *                      type: boolean
 *                      example: true
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/:id", ingredientController.getObj);
/**
 * @swagger
 * /ingredient/{id}:
 *   get:
 *      description: Get one ingredient
 *      tags:
 *          - ingredient
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Id ingredient
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



router.delete("/:id", ingredientController.deleteObj);
/**
 * @swagger
 * /ingredient/{id}:
 *   delete:
 *      description: Delete one ingredient (Soft delete approach)
 *      tags:
 *          - ingredient
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Id ingredient
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
