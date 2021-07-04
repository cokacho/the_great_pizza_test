const models = require('../models');
const db = require("../models");
const Op = db.Op;
const Pizza = models.pizza;
const environment = require("../config/environment");

exports.listObj = (data, callback) => {
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

exports.addObj = (data, callback) => {
    Pizza.create(data)
    .then(data => {
        return callback(null, data);
    })
    .catch(error => {
        return callback(error);
    });
};

exports.updateObj = (data, callback) => {
    Pizza.update(data, {
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

exports.getObj = (data, callback) => {
    Pizza.findByPk(data.id, )
    .then(data => {
        return callback(null, data);
    })
    .catch(error => {
        return callback(error());
    });
};

exports.deleteObj = (data, callback) => {
    Pizza.update({'deleted_at': new Date()}, {
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

