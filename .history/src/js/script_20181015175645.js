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

		add() {
			console.log(`dodajemy ${this.text}`);
		}

		remove() {
			console.log(`remove ${this.text}`);
		}
	}

	const task1 = new Task('umyc zeby');
	const task2 = new Task();


	console.dir(task1);
	console.dir(task2);

	const form = document.getElementById('form');
	
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		task1.add();
	});


	// Dodawanie Zadania do tablicy 



	// Render tablicy 




})(); 