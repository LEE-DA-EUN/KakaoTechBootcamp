const addContent = document.getElementById('addContent');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');


addBtn.addEventListener('click', function(){
    
    const todo = document.createElement('li');

    if(!addContent.value){
        alert('내용을 입력해주세요');
    }
    else{
        const checkBox = document.createElement('input');        
        const todoSpan = document.createElement('span');        
        const removeBtn = document.createElement('button');

        checkBox.setAttribute('type','checkbox');
        todoSpan.textContent = addContent.value;

        todo.appendChild(checkBox);
        todo.appendChild(todoSpan);
        todo.appendChild(removeBtn);
        todoList.appendChild(todo);
        addContent.value = '';

    }
})