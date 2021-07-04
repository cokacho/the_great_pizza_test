const ingredientService = require("../services/ingredient.service");
const errorResponse = require("../common/errorResponse")

exports.listObj = (req, res, next) => {
    const data = {
        page: req.query.page,
        limit: req.query.limit,
        query: req.query.query,
        topping: req.query.topping
    };
    ingredientService.listObj(data, (error, results) => {
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
        name: req.body.name,
        description: req.body.description,
        topping: req.body.topping
    };

    ingredientService.addObj(data, (error, results) => {
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
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        topping: req.body.topping,
        status: req.body.status
    };
    ingredientService.updateObj(data, (error, results) => {
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

exports.getObj = (req, res, next) => {
    const data = {
        id: req.params.id
    };
    ingredientService.getObj(data, (error, results) => {
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
        id: req.params.id,
    };
    ingredientService.deleteObj(data, (error, results) => {
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
