const mongoose = require('mongoose');

let uri = "mongodb://localhost:27017/demo_db";

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection.once('open', () => {
    console.log('Sucessfully connected to database');
});

module.exports = mongoose;