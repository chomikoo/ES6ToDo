(function(){
	'use strict'

	import { generateID } from 'modules/generateID.js';
	
	console.log('Hello from script.js a ');

	// const generateID = () => {
	// 	const chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
	// 	let id = 'task-';

	// 	for(let i = 0; i < 5; i++) {
	// 		id += chars[Math.floor(Math.random() * chars.length)];

	// 	};

	// 	return id;
	// }

	console.log(generateID());



})();