(function(){
	'use strict'
	
	console.log('Hello from script.js ');

	const generateID = () => {
		const chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		let id = '';

		for(let i = 0; i < 5; i++) {
			id += chars[Math.random() * chars.length];
		};

		return id;
	}

	console.log(generateID());

})()