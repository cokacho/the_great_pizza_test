const db = require("../config/db.config");

exports.listObj = (data, callback) => {
    db.query(
        `SELECT i.id, i.name, i.description, i.topping, i.status 
        FROM ingredient i where deleted_at is NULL`,
        [],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results);
        }
    );
};

exports.addObj = (data, callback) => {
    db.query(
        `INSERT INTO ingredient (name, description, topping, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?)`,
        [data.name, data.description, data.topping, new Date(), new Date()],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    );
};

exports.updateObj = (data, callback) => {
    db.query(
        `UPDATE ingredient set name = ?, description = ?, topping = ?,
         status = ?, updated_at = ? WHERE (id = ?)`,
        [data.name, data.description, data.status, new Date(), data.id],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results);
        }
    );
};

exports.getObj = (data, callback) => {
    db.query(
        `SELECT i.id, i.name, i.description, i.topping, i.status 
        FROM ingredient i where deleted_at is NULL and id = ?`,
        [data.id],
        (error, results, fields) => {
            console.log(error)
            if (error) {
                return callback(error);
            }
            if (results.length === 0) {
                return callback('Not Found');
            }

            return callback(null, results);
        }
    );
};

exports.deleteObj = (data, callback) => {
    `UPDATE ingredient set deleted_at = ? WHERE (id = ?)`,
        [new Date(), data.id],
        (error, results, fields) => {
            console.log(error)
            if (error) {
                return callback(error);
            }
            if (results.length === 0) {
                return callback('Not Found');
            }

            return callback(null, results);
        }
};

