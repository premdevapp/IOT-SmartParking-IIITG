//MQTT Publisher

const mqtt = require('mqtt');
const mqttClient = mqtt.connect('mqtt://localhost:1234');
const topic = [];
var slot_status = [
	true,
	false
];
var message,
	c = 0;

//MongoDB
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const MONGO_URL = 'mongodb://localhost/smrtprk';

var db;

function mongo_con() {
	MongoClient.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
		if (err) throw err;

		db = client.db('smrtprk');
		//start db
	});
}

mongo_con();

mqttClient.on('connect', () => {
	setInterval(() => {
		//making topics list

		db.collection('parks').find().toArray(function(err, results) {
			if (err) throw err;
			data = results;

			let sl = slot_status.length,
				dl = data.length;

			if (sl !== dl) {
				console.log('\n\n[Publisher] : Broadcast Aborted!');
				if (sl > data.lenght) {
					console.log('\n\n[Publishser] : Connected Modules are more than Registered Modules!');
				}
				else if (sl < dl) {
					console.log('\n\n[Publishser] : Connected Modules are fewer than Registered Modules!');
				}
			}
			else if (sl === dl) {
				console.log('\n\n[MQTT Publisher] : Connected and Registered modules matched Successfully !');
				console.log('[MQTT Publisher] : Publish count = ', ++c);

				for (let i = 0; i < dl; i++) {
					let slotNo = data[i].slot_no;

					topic[i] = 'slot' + slotNo;

					if (slot_status[i]) {
						message = 'Available';
					}
					else if (!slot_status[i]) {
						message = 'Occupied';
					}

					mqttClient.publish(topic[i], message);
					console.log('[MQTT PUBLISHER] : Sent the following message successfully - ', message);
				}
			}
			else {
				console.log('\n\n[MQTT Publisher] : Unknown Error! Please check the system manually for deffects !');
			}
		});
	}, 5000);
});
