require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { mongo, logger } = require('./config');

// Parse POST data and place in req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require('./routes');
app.use('/', router);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => logger.info(`Express server listening on port ${PORT}`));
