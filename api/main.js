'use-strict';

/**
* requires.
*/
const express = require('express');
/** */

/**
* controller imports
*/
const accountController = require('./controllers/account.controller');
const entitiesController = require('./controllers/entities.controller');

/**
* service registrations
*/
const bodyParser = require("body-parser");

/**
* create app.
*/
const app = express();
/** */

/** bodyParser.urlencoded(options)
* parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
* and exposes the resulting object (containing the keys and values) on req.body
*/
app.use(bodyParser.urlencoded({
	extended: true
}));

/**bodyParser.json(options)
* parses the text as JSON and exposes the resulting object on req.body.
*/
app.use(bodyParser.json());
/** */

/**
* web services => controller routings.
*/

// ACCOUNT
app.get('/account/login', (request, response) => accountController.login(request, response));
// ENTITIES
app.post('/entities', (request, response) => entitiesController.handle(request, response));
/** */

// start http listener.
app.listen(8888, () => {
    console.log('server started..');
});
/** */