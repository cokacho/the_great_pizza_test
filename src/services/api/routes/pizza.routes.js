const pizzaController = require("../controller/pizza.controller");

var express = require("express");

var router = express.Router();

router.get('/list', pizzaController.listObj);
/**
 * @swagger
 * /pizza/list:
 *   get:
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

module.exports = router;
