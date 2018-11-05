const state = require('./models/states');
const Sequelize = require('sequelize');
const DataTypes = require('sequelize/lib/data-types');

const sequelize = new Sequelize('vericuriousdb', 'root', 'qwq1234.', {
    host: '192.168.2.134',
    dialect: 'mysql',
    
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
});

const entitySet = {
    state: state(sequelize, DataTypes)
}

module.exports = entitySet;
