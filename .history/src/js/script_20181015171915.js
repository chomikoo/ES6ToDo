(function(){
	'use strict';

	const generateID = () => {
		const chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		let id = 'task-';

		for(let i = 0; i < 5; i++) {
			id += chars[Math.floor(Math.random() * chars.length)];

		};

		return id;
	}

	console.log(generateID());


	class Task {
		constructor(text) {
			this.type = "task",
			this.text = text;
		}

		remove() {
			console.log(`remove ${this.text}`);
		}
	}

	const task1 = new Task('umyc zeby');

	task1.remove();

})();