const express = require('express');
const app = express();
// const db = require('./data/entity-repository');

/**
* Controller Imports
*/
const accountController = require('./controllers/account.controller');
const entitiesController = require('./controllers/entities.controller');
/** */

/**
* Service Registrations
*/
const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
* Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
* and exposes the resulting object (containing the keys and values) on req.body
*/
app.use(bodyParser.urlencoded({
	extended: true
}));

/**bodyParser.json(options)
* Parses the text as JSON and exposes the resulting object on req.body.
*/
app.use(bodyParser.json());
/** */

app.get('/account/login', (request, response) => accountController.login(request, response));
app.get('/entities', (request, response) => entitiesController.handle(request, response));

app.listen(8888, function() {
    console.log('server started..');
});
