(function () {
	'use strict';

	class Todo {
		constructor(id) {
			// DOM elements
			this.form = document.getElementById(id);
			// this.taskList = document.getElementById('taskList');
			this.listToDo = document.getElementById('listToDo');
			this.listDone = document.getElementById('listDone');

			// this.addBtn = document.getElementById();
			this.todoArr = [];

			this.events();
		}

		// events/
		events() {
			this.form.addEventListener('submit', (e) => {
				e.preventDefault();
				let input = this.form.querySelector('#todo-task');

				this.todoArr.push(new Task(input.value));

				input.value = '';

				console.log(this.todoArr);
				this.arrayRender();
			});
		}


		//methods/
		arrayRender() {
			// console.log(this.todoArr);
			this.todoArr.forEach(this.createTask);
		}

		createTask(ob, list) {
			// SINGLE TASK WRAPPER
			const todoWrapper = document.createElement('li');
			todoWrapper.classList.add('task');

			const todoContent = document.createElement('div');
			todoContent.classList.add('task__content');
			todoContent.innerText = ob.text;

			const todoDate = document.createElement('span');
			todoDate.classList.add('task__date');
			todoDate.innerText = ob.date;

			todoContent.appendChild(todoDate);

			const deleteBtn = document.createElement('button');
			deleteBtn.classList.add('btn', 'btn--delete');

			todoWrapper.appendChild(todoContent);
			todoWrapper.appendChild(deleteBtn);

			// console.log(todoWrapper);
			
			if(ob.checked) {
				// console.log(listDone);
				listDone.appendChild(todoWrapper);
			} else {
				// console.log(listToDo)
				listToDo.appendChild(todoWrapper);
			}

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