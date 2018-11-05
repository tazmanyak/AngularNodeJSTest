const entityRepository = require('../db/entity-repository');

const handle = (request, response) => {
    console.log('handle entity req.');
    
    const entity = entityRepository['state'];
    
    
    entity['findAll']().then(results => {
        console.log(results.map(r => { return r.dataValues }));
    });
    
    entity['update']({name: 'pooiuouioiu'}, { where: {id: 1} }).then(() => {
        console.log(entity);
        response.end();
    });
    
    entity['build']({name: 'pooiuouioiu'}).save(() => {
        console.log(entity);
        response.end();
    });
};

module.exports.handle = handle;
