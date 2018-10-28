'use strict';

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const path = require('path');

// This creates an app that is both, an Express and Feathers app
const app = express(feathers());

// serve static files
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

// Turn on JSON body parsing for REST services
app.use(express.json())
// Turn on URL-encoded body parsing for REST services
app.use(express.urlencoded({ extended: true }));
// Set up REST transport using Express
app.configure(express.rest());

// Set up an error handler that gives us nicer errors
app.use(express.errorHandler());

app.get('/api', (req, res) => {
  res.status(200).send('Hello world!b!!\n');
});

module.exports = app;