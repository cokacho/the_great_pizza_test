const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const bodyParser = require("body-parser");
const environment = require("./config/environment");

app.use(bodyParser.json());
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = environment.swaggerConfig),
    apis: ["index.js", "./routes/*.js"],
  };

const swaggerDocs = swaggerJsdoc(swaggerOption);
if (!environment.prod) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

app.listen(environment.port, () => {
    console.log(`Server running using port: ${environment.port}... `);
});