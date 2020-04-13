// =================================== app config beg ===================================

// const functions = require('firebase-functions');

// modules ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const express = require('express');
const logger = require('morgan');
const app = express();

const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const router = express.Router();

//modules end here ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//port & environment ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'DEVELOPMENT';

app.set('port', PORT);
app.set('env', NODE_ENV);
//port & environment end here ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//mongodb connection ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var MONGO_URL = 'mongodb://localhost/smrtprk';

function mongo_con() {
	MongoClient.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
		if (err) throw err;
		db = client.db('smrtprk');
	});
}
mongo_con();
//mongodb connection ends here ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//middlewares ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.use(logger('tiny'));
app.use(cors());
app.use('/api', router);

//middlewares end here ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// =================================== app config end ===================================

// =================================== routing beg ======================================

//router functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const get_data = function(req, res, next) {
	try {
		db.collection('parks').find().toArray(function(err, results) {
			if (err) throw err;
			data = results;

			res.json(data);
		});
	} catch (e) {
		next(e);
	}
};

//router functions end here ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//routs ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
router.route('/get_data').get(get_data);

//routs end here ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// =================================== routing end ======================================

// =================================== app port beg =====================================
app.use(function(req, res) {
	res.status(404).send('404 : Page not found');
});

app.listen(PORT, function() {
	console.log(
		`[APP] : Express Application Runnung Successfully on PORT : ${app.get('port')} | Environment : ${app.get(
			'env'
		)}`
	);
});
// =================================== app port end =====================================

// =================================== api list beg =====================================
/*
GET localhost:8080/api/get_data
*/
// =================================== api list end =====================================
