#!/bin/bash
# Copy environments into respective folder
cp './environments/mysql.env' './src/services/mysql/.env'
cp './environments/api.db.config.js' './src/services/api/config/db.config.js'
cp './environments/api.environment.js' './src/services/api/config/environment.js'