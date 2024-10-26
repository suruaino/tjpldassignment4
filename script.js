//Getting the exixting html elements
let addBtn = document.getElementById("add-task");
let toDo = document.getElementById("todo");
let todoMaminContainer = document.getElementById("to-do-main-bx");


addBtn.addEventListener("click", function(){

    let toDoValue = toDo.value;
    //Creating the paragraph tag
    let toDoText = document.createElement("p");
    toDoText.innerText = toDoValue
    
    //Creating complete button
    let completeBtn = document.createElement("button");
    completeBtn.style.backgroundColor = "green"
    completeBtn.innerText = "Complete";

    //Creating undo button
    let undoBtn = document.createElement("button");
    undoBtn.innerText = "Undo";
    undoBtn.style.display = "none";
    undoBtn.style.backgroundColor = "green";

    //adding onclick event listener to the undo button
    undoBtn.addEventListener("click", () => {
        completeBtn.style.display = "block";
        undoBtn.style.display = "none";
        toDoText.style.textDecoration = "none";
        toDoContainer.style.backgroundColor = "transparent"
    })

    //adding onclick event listener to the complete button
    completeBtn.addEventListener("click", function(){
        toDoText.style.textDecoration = "line-through";
        toDoText.style.textDecorationThickness = "3px";
        toDoContainer.style.backgroundColor = "#96ebbcda";

        undoBtn.style.display = "block";
        completeBtn.style.display = "none";
    })

    //adding onclick event listener to the delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.style.backgroundColor = "red"
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function(){
        todoMaminContainer.removeChild(toDoContainer);
    
        completeBtn.style.display = "none";

    })

    //Creating and adding class to the sub container
    let toDoContainer = document.createElement("div");
    toDoContainer.classList.add("to-do-container");

    //Injecting all created elements to their respective containers
    toDoContainer.appendChild(toDoText);
    toDoContainer.appendChild(completeBtn);
    toDoContainer.appendChild(undoBtn);
    toDoContainer.appendChild(deleteBtn);


    //injecting sub container into the main container
    todoMaminContainer.appendChild(toDoContainer);

    //Clearing the input feild when the add task button is clicked
    toDo.value = ""

})