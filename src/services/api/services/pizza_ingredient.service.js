const models = require('../models');
const db = require("../models");
const Op = db.Op;
const Pizza = models.pizza;
const Ingredient = models.ingredient;
const PizzaIngredient = models.pizza_ingredient;
const environment = require("../config/environment");

exports.listPizza = (data, callback) => {
    let limit = environment.list_limit_per_page;
    let page = 1;

    if (data.limit && data.limit > 0) {
        limit = +data.limit;
    }
    if (data.page && data.page > 0) {
        page = +data.page;
    }
    const offset = (page - 1) * limit;


    const query = data.query;
    let condition = { deleted_at: { [Op.is]: null}};
    if (query) {
        condition.name = { [Op.like]: `%${query}%` };
    }

    Pizza.findAll({
        limit: limit,
        offset: offset,
        where: condition,
        //include: Ingredient,
        attributes: { exclude: ['created_at', 'deleted_at'] }
    })
    .then(data => {
        return callback(null, {
            list: data,
            page
        });
    })
    .catch(error => {
        return callback(error);
    });
};

exports.addPizzaIngredient = (data, callback) => {
    PizzaIngredient.create({
        pizza_id: data.pizza_id,
        ingredient_id: data.ingredient_id
    })
    .then(data => {
        return callback(null, data);
    })
    .catch(error => {
        return callback(error);
    });
};

exports.updatePizzaIngredient = (data, callback) => {
    console.log(data)
    PizzaIngredient.update({
        ingredient_id: data.ingredient_id
    }, {
        where: { id: data.id }
    })
    .then(num => {
        if (num instanceof Array && num?.pop() === 1) {
            return callback(null, data);
        } else {
            return callback(null, null);
        }
    })
    .catch(error => {
        return callback(error);
    });
};

exports.getPizzaIngredient = (data, callback) => {
    Pizza.findByPk(data.id,{
        include: Ingredient,
        attributes: { exclude: ['created_at', 'deleted_at'] }
    })
    .then(data => {
        return callback(null, data);
    })
    .catch(error => {
        return callback(error);
    });
};

exports.deletePizzaIngredient = (data, callback) => {
    Ingredient.destroy({
        where: { id: data.id }
    })
    .then(num => {
        if (num instanceof Array && num?.pop() === 1) {
            return callback(null, data);
        } else {
            return callback(null, null);
        }
    })
    .catch(error => {
        return callback(error);
    });
};
