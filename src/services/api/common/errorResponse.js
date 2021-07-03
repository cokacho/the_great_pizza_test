const logger = require('../common/logger');

const commonResponse = (res, data, error, code) => {
    logger.error(error);
    return res.status(code).send({
        success: 0,
        data,
        message: 'Error in server'
    });
};

module.exports = commonResponse;
