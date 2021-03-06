(function () {
	'use strict';

	class Todo {
		constructor(id) {
			// DOM elements
			this.form = document.getElementById(id);
			this.listToDo = document.getElementById('listToDo');
			this.listDone = document.getElementById('listDone');

			// this.addBtn = document.getElementById();
			this.todoArr = [];
			
			this.events();
			this.arrayRender();
		}

		// events/
		events() {
			this.form.addEventListener('submit', (e) => {
				e.preventDefault();
				let input = this.form.querySelector('#todo-task');
				const task = new Task(input.value);

				this.todoArr.push(task);
				this.createTask(task);

				input.value = '';
			});
			console.log('events', this)
			
		}


		//methods/
		arrayRender() {
			console.log(JSON.parse(localStorage.getItem('todo')));
			JSON.parse(localStorage.getItem('todo')).forEach(this.createTask);
		}
 
		createTask(ob, list) {
			// console.log(this)
			// this.storageUpdate();

			// SINGLE TASK WRAPPER
			const todoWrapper = document.createElement('li');
			todoWrapper.classList.add('task', 'slide');
			todoWrapper.setAttribute("id", ob.id)

			const todoContent = document.createElement('div');
			todoContent.classList.add('task__content');
			todoContent.innerText = ob.text;

			const todoDate = document.createElement('span');
			todoDate.classList.add('task__date');
			todoDate.innerText = ob.date;

			todoContent.appendChild(todoDate);

			const deleteBtn = document.createElement('button');
			deleteBtn.innerText = "🗑";
			deleteBtn.classList.add('btn');
			deleteBtn.addEventListener('click', this.deleteTask);

			const checkBtn = document.createElement('button');
			checkBtn.innerText = "✓";
			checkBtn.classList.add('btn', 'btn--checked');
			checkBtn.addEventListener('click', this.checkTask);

			todoWrapper.appendChild(todoContent);
			todoWrapper.appendChild(deleteBtn);
			todoWrapper.appendChild(checkBtn);
			
			if(ob.checked) {
				listDone.insertBefore(todoWrapper, listDone.childNodes[0]);
			} else {
				listToDo.insertBefore(todoWrapper, listToDo.childNodes[0]);
			}

		}

		deleteTask() {
			this.storageUpdate();

			const item = this.parentNode;
			item.classList.add('slide--out');
			setTimeout(()=>{
				item.parentNode.removeChild(item);
			}, 200);

		}

		checkTask() {
			console.log(localStorage.getItem('todo'));

			console.log(this);
		}

		storageUpdate() {
			localStorage.setItem('todo', JSON.stringify(this.todoArr));
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



	// INIT TODO
	const TODO = new Todo("form");

})();