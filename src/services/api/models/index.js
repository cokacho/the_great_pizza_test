const environment = require("../config/environment");
const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize(
    environment.db.DB_NAME,
    environment.db.DB_USER,
    environment.db.DB_PASS,
    {
        host: environment.db.DB_HOST,
        // operatorsAliases: false,
        dialect: environment.db.dialect,
        poll: {
            max: environment.db.pool.max,
            min: environment.db.pool.min,
            acquire: environment.db.pool.acquire,
            idle: environment.db.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.pizza = require("./pizza.model.js")(sequelize, Sequelize, DataTypes);
db.ingredient = require("./ingredient.model.js")(sequelize, Sequelize, DataTypes);
db.pizza_ingredient = require("./pizza_ingredient.model.js")(sequelize, Sequelize, DataTypes);

db.pizza.belongsToMany(db.ingredient, {
    through: "pizza_ingredient",
    foreignKey: "pizza_id",
    otherKey: "ingredient_id"
});


module.exports = db;
