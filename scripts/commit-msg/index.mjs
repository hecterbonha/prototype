import fs from 'fs';

function readTextFile(filePath) {
	return fs.readFileSync(filePath, 'utf8');
}

function splitMultilineResult(multilineResult) {
	return multilineResult.split(/\n/);
}

async function main() {
	const filePath = './scripts/commit-msg/message.txt';
	const multilineResult = await readTextFile(filePath);
	const arrayResult = splitMultilineResult(multilineResult);
	const names = [
		'Nick',
		'Steve',
		'Andy',
		'Qi',
		'Fanny',
		'Sarah',
		'Cord',
		'Todd',
		'Chris',
		'Pasha',
		'Gabe',
		'Tony',
		'Jason',
		'Randal',
		'Ali',
		'Kim',
		'Rainer',
		'Guillaume',
		'Kelan',
		'David',
		'John',
		'Stephen',
		'Tom',
		'Steven',
		'Jen',
		'Marcus',
		'Edy',
		'Rachel',
		'Ethan',
		'Dan',
		'Darren',
		'Greg'
	];
	const message = arrayResult[Math.floor(Math.random() * arrayResult.length)].toLowerCase();

	if (message.includes('XNAMEX')) {
		console.log(message.replace('XNAMEX', names[Math.floor(Math.random() * names.length)]));
	} else {
		console.log(message);
	}
}

main();
