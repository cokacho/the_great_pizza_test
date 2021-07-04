const pizzaIngredientService = require("../services/pizza_ingredient.service");
const errorResponse = require("../common/errorResponse")

exports.listObj = (req, res, next) => {
    const data = {
        page: req.query.page,
        limit: req.query.limit,
        query: req.query.query
    };
    pizzaIngredientService.listPizza(data, (error, results) => {
        if (error) {
            return errorResponse(res, data, error, 500)
        }
        return res.status(200).send({
            success: 1,
            data: results,
            message: null
        });
    });
};

exports.addObj = (req, res, next) => {
    const data = {
        pizza_id: +req.params.pizza_id,
        ingredient_id: req.body.ingredient_id,
    };

    pizzaIngredientService.addPizzaIngredient(data, (error, results) => {
        if (error) {
            return errorResponse(res, data, error, 500)
        }
        return res.status(200).send({
            success: 1,
            data: results,
            message: null
        });
    });
};

exports.updateObj = (req, res, next) => {
    const data = {
        id: +req.params.id,
        ingredient_id: req.body.ingredient_id
    };
    pizzaIngredientService.updatePizzaIngredient(data, (error, results) => {
        if (error) {
            return errorResponse(res, data, error, 500)
        }
        if (!results) {
            return res.status(404).send({
                success: 0,
                data: results,
                message: null
            });
        }
        return res.status(200).send({
            success: 1,
            data: results,
            message: null
        });
    });
};

exports.getObj = (req, res, next) => {
    const data = {
        id: +req.params.pizza_id
    };
    pizzaIngredientService.getPizzaIngredient(data, (error, results) => {
        if (error) {
            return errorResponse(res, data, error, 500)
        }
        if (!results) {
            return res.status(404).send({
                success: 0,
                data: results,
                message: null
            });
        }
        return res.status(200).send({
            success: 1,
            data: results,
            message: null
        });
    });
};

exports.deleteObj = (req, res, next) => {
    const data = {
        id: +req.params.id,
    };
    pizzaIngredientService.deletePizzaIngredient(data, (error, results) => {
        if (error) {
            return errorResponse(res, data, error, 500)
        }
        if (!results) {
            return res.status(404).send({
                success: 0,
                data: results,
                message: null
            });
        }
        return res.status(204).send({
            success: 1,
            data: results,
        });
    });
};

