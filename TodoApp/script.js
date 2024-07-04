const addContent = document.getElementById('addContent');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');


addBtn.addEventListener('click', function(){
    
    const todo = document.createElement('li');

    if(!addContent.value){
        alert('내용을 입력해주세요');
    }
    else{
        todo.innerText = addContent.value;
        todoList.appendChild(todo);
        addContent.value = '';
    }
})