const path = require('path');
const mongoose = require('mongoose');

const logger = require(path.join(__dirname, 'logger'));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
}, (err) => {
    if (err) {
        throw new Error(err);
    } else {
        logger.info('Mongoose connection successful');
    }
});
mongoose.Promise = global.Promise;

/*
    Import models - singleton,
    allows us to do `const ModelName = mongoose.model('ModelName');`
    in any file
*/
// require(path.join(__dirname, '../models/ModelName'));

module.exports = mongoose;
