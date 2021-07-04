#!/bin/bash
# Move environments for remove '.example'
cp './environments/mysql.example.env' './environments/mysql.env'
cp './environments/api.mysql.example.env' './environments/api.mysql.env'
cp './environments/api.environment.example.js' './environments/api.environment.js'
# Copy environments into respective folder
cp './environments/mysql.env' './src/services/mysql/.env'
cp './environments/api.mysql.env' './src/services/api/.env'
cp './environments/api.environment.js' './src/services/api/config/environment.js'