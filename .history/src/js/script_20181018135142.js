(function () {
	'use strict';

	class Todo {
		constructor(id) {
			// DOM elements
			this.form = document.getElementById(id);
			this.taskList = document.getElementById('taskList');
			// this.addBtn = document.getElementById();
			this.todoArr = [];

			this.events();

			const self = this;
		}

		// events/
		events() {
			this.form.addEventListener('submit', (e) => {
				e.preventDefault();
				let input = this.form.querySelector('#todo-task');

				this.todoArr.push(new Task(input.value));

				input.value = '';

				// console.log(this.todoArr);
				this.arrayRender();
			});
		}


		//methods/
		arrayRender() {
			console.log(this.todoArr);
			this.todoArr.forEach(this.createTask);
		}

		createTask(ob) {
			console.log(ob.checked);
			console.log(ob.date);
			console.log(ob.id);
			console.log(ob.text);
		}


	}


	class Task {
		constructor(text = 'Zadanie') {
			this.id = this.generateID(),
				this.type = "task",
				this.text = text;
			this.date = this.getTime();
			this.checked = false;
		}

		generateID() {
			return Math.random().toString(36).substring(2, 8);
		}

		getTime() {
			const data = new Date();
			return `${data.getDate()}-${data.getMonth()+1}-${data.getFullYear()} || ${data.getHours()}:${data.getMinutes()} `
		}

	}



	const TODO = new Todo("form");

})();