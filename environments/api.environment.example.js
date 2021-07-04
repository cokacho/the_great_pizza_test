const serverPort = 3000;
const environment = {
    NODE_URL: process.env.NODE_URL,
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    swaggerConfig: {
        info: {
            title: "D'Carlo Pizza",
            description: "API documentationm this is a sample for make new pizzas with distinct ingredients",
            version: '1.0.0',
            contact: {
                name: "Nelson F. Escudero",
                email: "nel.esc.cas@gmail.com"
            },
            servers: [`http://localhost:/${serverPort}`],
        }
    },
    list_limit_per_page: 5,
    port: serverPort,
    mysql_logger_lvl: 'error',
    general_logger_format: (req) => {
        return {
            baseUrl: req.baseUrl,
            hostname: req.hostname,
            xhr: req.xhr,
            protocol: req.protocol,
            method: req.method,
            ip: req.ip,
            ips: req.ips,
            body: req.body,
            params: req.params,
            query: req.query
        }
    },
    db: {
        DB_HOST: process.env.DB_HOST,
        DB_USER: process.env.DB_USER,
        DB_PASS: process.env.DB_PASS,
        DB_NAME: process.env.DB_NAME,
        DB_LIMIT_PER_PAGE: process.env.DB_LIMIT_PER_PAGE,
        dialect: "mysql",
        pool: {
            max: 999,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
};

module.exports = environment;
