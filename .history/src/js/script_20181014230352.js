(function(){
	'use strict'
	
	console.log('Hello from script.js ');

	const generateID = () => {
		const chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		let id = '';

		for(let i = 0; i < 5; i++) {
			console.log(Math.random() * chars.length);
			id += chars[Math.floor(Math.random() * chars.length)];

		};

		return id;
	}

	console.log(generateID());

})()