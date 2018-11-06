'use-strict';

// requires.
const fs = require('fs');
const Sequelize = require('sequelize');
const DataTypes = require('sequelize/lib/data-types');
// requires-end

// sequelize initialization
const databaseConfig = JSON.parse(fs.readFileSync('config/database.json'));
const sequelize = new Sequelize(databaseConfig.development);

// entity registration.
const entitySet = {
    state: require('./models/states')(sequelize, DataTypes)
}

module.exports = entitySet;
