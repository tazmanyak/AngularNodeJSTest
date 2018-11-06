'use-strict';

/**
* requires.
*/
const entityRepository = require('../db/entity-repository');

/**
* 
* @param {*} request 
* @param {*} response 
*/
const handle = async (request, response) => {
    const requestModel = request.body;
    /*
    requestModel =>
    {
        key: string = 'state' | 'district'...
        operation: string = 'findOne' | 'findAll' | 'update' | 'build' | 'destroy'
        entity: TEntity = { }
        query: object = { } => query options format of sequelize
        includes: array<object> => include format of sequelize
    }
    */
    if (!requestModel) {
        response.end('Error => Request model not provided.');
    }
    
    // get entity.
    const entity = entityRepository[requestModel.key];
    
    try {
        // execute request.
        let result = undefined;
        switch (requestModel.operation) {
            case 'findOne':
            result = await entity.findOne(requestModel.query);
            response.end(JSON.stringify(result));
            break;
            
            case 'findAll':
            result = await entity.findAll(requestModel.query);
            response.end(JSON.stringify(result));
            break;
            
            case 'add':
            result = await entity.build(requestModel.entity).save();
            response.end(JSON.stringify(result));
            break;
            
            case 'update':
            result = await entity.update(requestModel.entity, requestModel.query);
            response.end(JSON.stringify(result));
            break;
            
            case 'destroy':
            result = await entity.destroy(requestModel.query);
            response.end(JSON.stringify(result));
            break;
            
            default:
            response.end(JSON.stringify(null));
            break;
        }
    } catch (error) {
        response.end(JSON.stringify(error));
    }
};

module.exports.handle = handle;
