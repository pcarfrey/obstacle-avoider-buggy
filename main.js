let config = require('./src/config/config');
let httpClient = require('./src/modules/http-client');
let uuid = require('uuid');
const log = require('bunyan').createLogger({name: "obstacle-avoider-buggy"});
const URL = config.url;

process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');
process.stdin.resume();

log.info('STARTED');

process.stdin.on('data', function(key){
	if (key == '\u0003') {
		log.info('STOPPED');
		process.exit(); // ctrl-c
	} else {
		httpClient.post(URL, {id: uuid.v4(), command: key});
	}
});