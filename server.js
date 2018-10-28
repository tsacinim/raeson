'use strict';

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');

// This creates an app that is both, an Express and Feathers app
const app = express(feathers());

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Turn on JSON body parsing for REST services
app.use(express.json())
// Turn on URL-encoded body parsing for REST services
app.use(express.urlencoded({ extended: true }));
// Set up REST transport using Express
app.configure(express.rest());

// Set up an error handler that gives us nicer errors
app.use(express.errorHandler());

app.get('/', (req, res) => {
  res.send('Hello world!\n');
});

// Start the server 
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);



