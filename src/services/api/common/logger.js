const {createLogger, format, transports} = require('winston');
// Logs configuration

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.prettyPrint(),
        format.colorize(), format.simple(), format.json()),
    defaultMeta: { service: 'pizza-service' },
    transports: [
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' }),
        new transports.Console({
            json: false,
            colorize: true
        })
    ],
    msg: "HTTP {{req.method}} {{req.url}}",
    expressFormat: true,
});

module.exports = logger;
