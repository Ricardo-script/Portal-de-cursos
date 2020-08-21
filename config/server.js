const express = require('express');

const app = express();
app.set('view engine','ejs');
app.set('views','./src/views');

const consign = require('consign');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

	consign()
		.include('src/routes')
		.then('src/models')
		.then('src/controllers')
		.then('config/bdConnection.js')
		.into(app);


module.exports = app;