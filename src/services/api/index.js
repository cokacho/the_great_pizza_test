const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const bodyParser = require("body-parser");
const environment = require("./config/environment");
const pizzaRoutes = require("./routes/pizza.routes");
const logger = require('./common/logger');
const cors = require('cors');

const corsOptions = {
    origin: environment.NODE_URL
};
const middlewarte = (req, res, next) => {
    logger.info(environment.general_logger_format(req));
    next();
}
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Swagger configuration
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = environment.swaggerConfig),
    apis: ["index.js", "./routes/*.js"],

};
const swaggerDocs = swaggerJsdoc(swaggerOption);

// APi docs configuration and format logs
if (environment.NODE_ENV === 'development') {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

// Configuration routes
app.use("/pizza", middlewarte, pizzaRoutes);


app.listen(environment.port, () => {
    console.log(`Server running using port: ${environment.port}... `);
});
