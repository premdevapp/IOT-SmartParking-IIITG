//MQTT Broker

const mosca = require('mosca');
const settings = { port: 1234 };
const broker = new mosca.Server(settings);
var c = 0;

broker.on('ready', () => {
	console.log('[MQTT BROKER] : Broker is ready!');
});

broker.on('published', (packet) => {
	console.log('\n\n[MQTT BROKER] : Broadcasting message - ', packet.payload.toString());

	message = packet.payload.toString();
	if (message.slice(0, 1) != '{' && message.slice(0, 4) != 'mqtt') {
		console.log('[MQTT BROKER] : Message count = ', ++c);
	}
});
