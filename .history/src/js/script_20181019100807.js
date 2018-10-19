(function () {
	'use strict';

	class Todo {
		constructor(id) {
			// DOM elements
			this.form = document.getElementById(id);
			this.listToDo = document.getElementById('listToDo');
			this.listDone = document.getElementById('listDone');
			
			this.todoArr = [];
	
			this.events();
		}
		
		// events/
		events() {
			this.arrayRender();
			this.form.addEventListener('submit', (e) => {
				e.preventDefault();
				let input = this.form.querySelector('#todo-task');
				const task = new Task(input.value);
				
				this.createTask(task);
				this.storageUpdate();

				input.value = '';
				
			});
		}

		//methods/

 
		createTask(ob, i) {
			this.todoArr.push(ob);

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
			const item = e.target.parentNode;
			this.todoArr = this.todoArr.filter(obj => obj.id !== item.id );
			
			item.classList.add('slide--out');
			setTimeout(()=>{
				item.parentNode.removeChild(item);
			}, 200);
			
			this.storageUpdate();
		}

		checkTask(e) {
			// console.log('checkTask ',this.todoArr);
			
			const item = e.target.parentNode;
			// console.log('checkTask ev',item.id);

			this.todoArr.forEach((ob) => {
				// console.log(ob.id);
				console.log('check ' + ob.checked);

				if (ob.id === item.id) {
					if( !ob.checked ) {
						// console.log('ch ' + ob.checked);
						ob.checked = true;
						item.classList.add('task--checked');
					} else {
						// console.log('ch ' + ob.checked);
						ob.checked = false;
						item.classList.remove('task--checked');
					}
				}

			});

			this.storageUpdate();
			this.arrayRender();

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