(function(){
	'use strict';

	const taskArr = [];

	const getTime = () => {
		const data = new Date();
		return `${data.getDate()}-${data.getMonth()+1}-${data.getFullYear()} || ${data.getHours()}:${data.getMinutes()} `
	}

	const generateID = () => {
		const chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		let id = 'task-';

		for(let i = 0; i < 10; i++) {
			id += chars[Math.floor(Math.random() * chars.length)];

		};

		return id;
	}


	class Task {
		constructor(text = 'Zadanie') {
			this.id = generateID(),
			this.type = "task",
			this.text = text;
			this.date = getTime();
		} 

		// add() {
		// 	taskArr.push(this.text);
		// 	console.log(`dodajemy ${this.text}`);
		// }

		remove() {
			console.log(`remove ${this.text}`);
		}
	}


	const form = document.getElementById('form');
	
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		task1.add();
	});


	console.log(taskArr);

	// Dodawanie Zadania do tablicy 

	addTask = (obj) => {
		taskArr.push(obj);
	}

	// Render tablicy 




})(); 