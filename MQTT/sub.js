//MQTT Subscriber

const mqtt = require('mqtt');
const mqttClient = mqtt.connect('mqtt://localhost:1234');
var topic = [
	'slot1',
	'slot2'
];

//MongoDB
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const MONGO_URL = 'mongodb://localhost/smrtprk';

var db,
	c = 0;

function mongo_con() {
	MongoClient.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
		if (err) throw err;

		db = client.db('smrtprk');
		//start db
	});
}

mongo_con();

mqttClient.on('message', (tp, message) => {
	//recalculate topics in database

	db.collection('parks').find().toArray(function(err, results) {
		if (err) throw err;
		data = results;

		topic = [];

		for (let i = 0; i < data.length; i++) {
			topic[i] = 'slot' + data[i].slot_no;
		}

		mqttClient.subscribe(topic);
		console.log('[RPI][MQTT SUBSCRIBER] : Subscribed to topics : ', topic);

		message = message.toString();
		let slot_no = tp.substring(4, 5);

		if (message.slice(0, 1) != '{' && message.slice(0, 4) != 'mqtt') {
			let myquery = { slot_no: slot_no };
			let newvalues = { $set: { status: message } };

			if (slot_no === '1') {
				console.log('\n');
			}
			db.collection('parks').updateOne(myquery, newvalues, function(err, result) {
				if (err) throw err;
				console.log(
					`[RPI][MQTT SUBSCRIBER] : Slot ${slot_no} updated with status :`,
					message + ' | [Update_No] : ' + ++c
				);
			});

			// console.log('[MQTT SUBSCRIBER] :  The following messahe was recieved', tp, message, myquery);
		}
	});
});

mqttClient.on('connect', () => {
	mqttClient.subscribe(topic);
	console.log('Subscribed to topics : ', topic);
});
