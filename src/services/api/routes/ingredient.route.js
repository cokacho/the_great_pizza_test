const ingredientController = require("../controller/ingredient.controller");

var express = require("express");

var router = express.Router();

router.get('/list', ingredientController.listObj);
/**
 * @swagger
 * /ingredient/list:
 *   get:
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
 *            name: sort
 *            type: string
 *            description: Sort data
 *            required: false
 *      responses:
 *          '200':
 *              description: Resource added successfully
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
 *      description: Used to add ingredient
 *      tags:
 *          - ingredient
 *      parameters:
 *          - in: body
 *            name: ingredient
 *            description: Post data
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
 *                      example: Name of pizza
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

router.put("/update", ingredientController.updateObj);
/**
 * @swagger
 * /ingredient/update:
 *   put:
 *      name: updateIngredient
 *      description: Update a ingredient
 *      tags:
 *          - ingredient
 *      parameters:
 *          - in: body
 *            name: ingredient
 *            description: Post data
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
 *                      example: Name of pizza
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
 *            description: Returns a ingredient using the ingredient id
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
 *      description: Delete one ingredient (Soft delete proach=
 *      tags:
 *          - ingredient
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Delete a ingredient using the ingredient id
 *            required: true
 *            schema:
 *              type: integer
 *
 *      responses:
 *          '200':
 *              description: Element delete successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


module.exports = router;
