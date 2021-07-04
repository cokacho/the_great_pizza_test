const pizzaController = require("../controller/pizza.controller");

var express = require("express");

var router = express.Router();

router.get('/list', pizzaController.listObj);
/**
 * @swagger
 * /pizza/list:
 *   get:
 *      summary: getPizzas() get all pizzas with yours ids
 *      description: Used to get all pizzas
 *      tags:
 *          - pizza
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
 *      responses:
 *          '200':
 *              description: Returned a list successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/add", pizzaController.addObj);
/**
 * @swagger
 * /pizza/add:
 *   post:
 *      summary: addPizza() Used for add a new pizza
 *      description: Used to add pizza
 *      tags:
 *          - pizza
 *      parameters:
 *          - in: body
 *            name: pizza
 *            description: Pizza data
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
 *
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put("/update/:id", pizzaController.updateObj);
/**
 * @swagger
 * /pizza/update/{id}:
 *   put:
 *      description: Update a pizza
 *      tags:
 *          - pizza
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Id pizza
 *            required: true
 *            schema:
 *              type: integer
 *          - in: body
 *            name: pizza
 *            description: Pizza data
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

router.get("/:id", pizzaController.getObj);
/**
 * @swagger
 * /pizza/{id}:
 *   get:
 *      summary: getpizza() Get single pizza information
 *      description: Get one pizza
 *      tags:
 *          - pizza
 *      parameters:
 *          - in: path
 *            name: id
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



router.delete("/:id", pizzaController.deleteObj);
/**
 * @swagger
 * /pizza/{id}:
 *   delete:
 *      summary: DeletePizza() Delete a pizza
 *      description: Delete one pizza (Soft delete approach)
 *      tags:
 *          - pizza
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Id pizza
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
