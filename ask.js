const ooga = require('./index.js');
const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var domain;

function domainInput(callback) {
	rl.question(chalk.cyanBright('Domain to test to: '), (input) => {
		domain = input;
		callback(true);
	});
}

domainInput(celebrate => {
	if(celebrate) {
		ooga(domain);
	}
})