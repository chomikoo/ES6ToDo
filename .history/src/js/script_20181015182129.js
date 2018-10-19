(function(){
	'use strict';

	// DOM elements
	const form = document.getElementById('form');


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


	
	
	console.log(taskArr);
	
	// Dodawanie Zadania do tablicy 

	form.addEventListener('submit', function(e) {
		e.preventDefault();
		let input = document.getElementById('todo-task');

		taskArr.push(new Task(input.value));
		console.log(taskArr);
		input.value = '';
		
	});

	// Render tablicy 




})(); 