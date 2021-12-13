// selecter 
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

// add event listener 
todoButton.addEventListener("click", addTodo);
// delete event listener 
todoList.addEventListener("click",TodoListDelete);
// all function 
function addTodo(event) {
    // prevent form submitted handler 
    event.preventDefault();
    // if input value is black 
    if(todoInput.value === ""||todoInput.value === undefined){
        alert("Add at least one value")
    }else{
     // create a new todo div 
    const CreaetTodoDiv = document.createElement("div");
    // create a new li tag
    const createTodoLi = document.createElement("li");
    // li tag add a style 
    createTodoLi.style.fontFamily = "arial";
    // li iner text add input values
    createTodoLi.innerText = todoInput.value;
    // new div appenedchild li tag  
    CreaetTodoDiv.appendChild(createTodoLi);
    // check mark button 
    const checkButton = document.createElement("button");
    checkButton.innerHTML = "<i class='fas fa-check'></i>";
    checkButton.classList.add("checkbutton");
    CreaetTodoDiv.appendChild(checkButton);
    // check trash button 
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trasgbutton");
    CreaetTodoDiv.appendChild(trashButton);
    // todo list append child the new div
    todoList.appendChild(CreaetTodoDiv)
    }
}
// todo item delete functionality 
function TodoListDelete(e){
    // item target 
    const Item = e.target;
    // delete item 
    if(Item.classList[0] === "trasgbutton"){
        const PreElement = Item.parentElement;
        PreElement.remove();
    }
}

