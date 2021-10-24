console.log(`script.js is linked into index.html!`);

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

let todoArray = [];

enterButton.addEventListener("click", (e) => {
    e.preventDefault();
    let todo = localStorage.getItem("todo");
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);
    }
    todoArray.push(input.value);
    input.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    console.log(todoArray)
    displayTodo();
   });

   function displayTodo() {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);
    }
    let htmlCode = "";
    todoArray.forEach((list, ind) => {
      htmlCode += `<div>
      <p>${list}</p>
      <button onclick='edit(${ind})'>Edit</button>
      <button onclick='deleteTodo(${ind})'>Delete</button>
   </div>`;
    });
    ul.innerHTML = htmlCode;
   }
