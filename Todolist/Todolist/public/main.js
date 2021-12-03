let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    var div = document.createElement('div');
    paragraph.classList.add("text-break")
    div.classList.add("p-1")
    div.classList.add("m-3")
    div.classList.add("rounded-2")
    div.classList.add("bg-white")
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    var cont = toDoContainer.appendChild(div);
    cont.appendChild(paragraph)
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(div);
    })
})