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
			
			// const self = this;
			// console.log('self ', self)
			// console.log('this ', this)
			this.events();
		}
		
		// events/
		events() {
			this.arrayRender();
			this.form.addEventListener('submit', (e) => {
				e.preventDefault();
				let input = this.form.querySelector('#todo-task');
				const task = new Task(input.value);
				
				// this.todoArr.push(task);
				this.createTask(task);
				
				input.value = '';
			});
			const self = this;
			
			// console.log('events', this);
			// console.log('e self ', self);
			
		}

		//methods/

 
		createTask(ob, i) {
			// console.log('createTask ',this);
			// console.log('ob ',ob);
			// console.log(i);

			this.todoArr.push(ob);
			this.storageUpdate();

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
			deleteBtn.addEventListener('click', function(e){
				this.deleteTask(e);
			}.bind(this));

			const checkBtn = document.createElement('button');
			checkBtn.innerText = "✓";
			checkBtn.classList.add('btn', 'btn--checked');
			checkBtn.addEventListener('click', function(e){
				this.checkTask(e)
			}.bind(this));

			todoWrapper.appendChild(todoContent);
			todoWrapper.appendChild(deleteBtn);
			todoWrapper.appendChild(checkBtn);
			
			if(ob.checked) {
				listDone.insertBefore(todoWrapper, listDone.childNodes[0]);
			} else {
				listToDo.insertBefore(todoWrapper, listToDo.childNodes[0]);
			}

		}
		arrayRender() {
			JSON.parse(localStorage.getItem('todo')).forEach((elem, i)=>{
				// console.log(i);
				// console.log(this);				
				setTimeout(() => {
					this.createTask(elem,i);
				}, 350*i);
			});
		}

		storageUpdate() {
			// console.log('storage ',this);
			// console.log('storage arr ',this.todoArr);

			localStorage.setItem('todo', JSON.stringify(this.todoArr));
		}

		deleteTask(e) {
			// console.log('deleteTask s',self)
			// console.log('deleteTask ev', e.target.parentNode)
			console.log('deleteTask arrayB',this.todoArr);

			const item = e.target.parentNode;
			
			let list = this.todoArr.filter((obj,i) =>{

				console.log(i);
				console.log(obj);
				console.log(obj.id + ' ' + item.id);
				console.log(obj.id !== item.id);

				obj.id !== item.id;
			});
			
			console.log('deleteTask arrayA ',this.todoArr,list);

			item.classList.add('slide--out');
			setTimeout(()=>{
				item.parentNode.removeChild(item);
			}, 200);

		}

		checkTask(e) {
			console.log('checkTask ',this.todoArr);
			console.log('checkTask ev',e.target.parentNode.id);

			// console.log(JSON.parse(localStorage.getItem('todo')));

			// JSON.parse(localStorage.getItem('todo')).forEach(function(elem) {
			// 	console.log(elem);
			// 	createTask(elem);
			// });

	
		}


	}


	class Task {
		constructor(text = 'Zadanie') {
			console.log('Task  ',this);

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
			return `${data.getDate()}-${data.getMonth()+1}-${data.getFullYear()} || ${data.getHours()}:${(data.getMinutes() < 10 ) ? '0'+data.getMinutes() : data.getMinutes()} `
		}

	}



	// INIT TODO
	const TODO = new Todo("form");

})();