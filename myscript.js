const todos = []

function clicked(){

    const todo = document.getElementById('todoItem').value
    todos.push(todo)
    const list = document.getElementById("todoList")

    let temp = ""
    todos.forEach(todo => temp += `<li>${todo}</li> <button> delete </button>` )
    list.innerHTML = temp;


    // const sp = document.getElementById('sp')
    // sp.nextElementSibling.style.background = "red"
    // console.log(sp.nextElementSibling)
};