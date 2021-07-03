const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const bodyParser = require("body-parser");
const environment = require("./config/environment");
const pizzaRoutes = require("./routes/pizza.routes");
const ingredientRoutes = require("./routes/ingredient.route");
const logger = require('./common/logger');

app.use(bodyParser.json());
app.use(function (req, res, next) {
    logger.info(environment.general_logger_format(req));
    next();
});

// Swagger configuration
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = environment.swaggerConfig),
    apis: ["index.js", "./routes/*.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOption);

// APi docs configuration and format logs
if (!environment.prod) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

// COnfiguration routes
app.use("/pizza", pizzaRoutes);
app.use("/ingredient", ingredientRoutes);


app.listen(environment.port, () => {
    console.log(`Server running using port: ${environment.port}... `);
});
