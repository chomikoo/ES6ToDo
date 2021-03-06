(function () {
	'use strict';

	class Todo {
		constructor {
			// DOM elements
			this.form = document.getElementById('form');
			this.taskList = document.getElementById('taskList');
			this.addBtn = document.getElementById
			this.todoArr = [];
		}

		// events/



		//methods/

		generateID = () => {
			const chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
			let id = chars.map();

	
	
			for (let i = 0; i < 10; i++) {
				id += chars[Math.floor(Math.random() * chars.length)];
			};
	
			return id;
		}

		getTime = () => {
			const data = new Date();
			return `${data.getDate()}-${data.getMonth()+1}-${data.getFullYear()} || ${data.getHours()}:${data.getMinutes()} `
		}

	}

	let r = Math.random().toString(36).substring(7);
	console.log("random", r);

	// const taskArr = [];

	const getTime = () => {
		const data = new Date();
		return `${data.getDate()}-${data.getMonth()+1}-${data.getFullYear()} || ${data.getHours()}:${data.getMinutes()} `
	}

	const generateID = () => {
		const chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		let id = 'task-';

		for (let i = 0; i < 10; i++) {
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
			this.checked = false;
		}


		remove() {
			console.log(`remove ${this.text}`);
		}
	}


	// Dodawanie Zadania do tablicy 

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		let input = document.getElementById('todo-task');

		taskArr.unshift(new Task(input.value));
		console.log(taskArr);
		input.value = '';

		arrayRender();
	});

	// Usowanie elementu

	taskList.addEventListener('click', (e) => {
		console.log(e);		
		console.log(e.target.parentElement.id);
		const index = taskArr.findIndex(x => x.id == e.target.id);
		console.log(index)

		arrayRender();
	})

	// Render tablicy 

	const arrayRender = () => {
		taskList.innerHTML = '';
		taskArr.forEach((elem, i) => {
			// console.log(elem, i);
			taskList.innerHTML += 
			`<div class="task" id="${elem.id}">
				<div class="task__content">
						${elem.text}
					<span class="task__date">${elem.date}</span>
				</div>
				<button class="btn btn--delete" title="Usuń">&#x2212;</button>
			</div>`;
		});
	}



})();