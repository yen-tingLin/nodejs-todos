const express = require('express');
const engine = require('ejs-locals');
const db = require('mongoose');

const app = express();
app.engine('ejs', engine);
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
    console.log(db);
});

app.listen(3000);

