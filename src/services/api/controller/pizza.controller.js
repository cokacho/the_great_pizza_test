const pizzaService = require("../services/pizza.service");



exports.listObj = (req, res, next) => {
    const data = {
        page: req.param('page'),
        limit: req.param('limit', 10),
        sort: req.param('sort', 'id')
    };
    console.log(data);
    return res.status(200).send({
       success: 1,
       data: data
    });
};

exports.addObj = (req, res, next) => {

};

exports.updateObj = (req, res, next) => {

};

exports.getObj = (req, res, next) => {

};

exports.deleteObj = (req, res, next) => {

};
