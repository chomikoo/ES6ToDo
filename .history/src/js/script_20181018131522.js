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
			return Math.random().toString(36).substring(2,8);
		}

		getTime() {
			const data = new Date();
			return `${data.getDate()}-${data.getMonth()+1}-${data.getFullYear()} || ${data.getHours()}:${data.getMinutes()} `
		}

	}


	// Dodawanie Zadania do tablicy 



	// Usowanie elementu

	// taskList.addEventListener('click', (e) => {
	// 	console.log(e);		
	// 	console.log(e.target.parentElement.id);
	// 	const index = taskArr.findIndex(x => x.id == e.target.id);
	// 	console.log(index)

	// 	arrayRender();
	// })

	// Render tablicy 

	// const arrayRender = () => {
	// 	taskList.innerHTML = '';
	// 	taskArr.forEach((elem, i) => {
	// 		// console.log(elem, i);
	// 		taskList.innerHTML += 
	// 		`<div class="task" id="${elem.id}">
	// 			<div class="task__content">
	// 					${elem.text}
	// 				<span class="task__date">${elem.date}</span>
	// 			</div>
	// 			<button class="btn btn--delete" title="Usuń">&#x2212;</button>
	// 		</div>`;
	// 	});
	// }

	const TODO = new Todo("form");

})();