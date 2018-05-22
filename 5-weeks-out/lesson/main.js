console.log("hello!");

//variable assignment goes from right to left. "Meg" will be stored in meg
var meg = "Meg"

//declaring variables
var num1 = 3;
var num2 = 4;

//declaring a function. Remember - scope is between the {}s. You can look out from within the function, but you cannot access values within the function from the outside (line 16)
var add = function(){
    var sum = num1 + num2;
    //returning a value from a function is a way to access it outside the scope of the function
    return sum;
};

// console.log(sum);

//co26 is an array
var co27 = ["Shu", "Emily", "Will", "Klaus"];

//cohort26 (sorry I am bad at naming things) is an object. Objects have PROPERTIES and VALUES. The co26 array is the value of the "students" property 
var cohort26 = {
    "instructor": "Brenda",
    "startDate": "July 2",
    "students": co27
};

//accessing Emily within the cohort26 object with dot notation
var emily = cohort26.students[1];
console.log("girl", emily);

//accessing Jisie from the cohort 26 object
var coolInstructor = cohort26.instructor;
console.log(coolInstructor);

//accesssing the DOM from JavaScript and inserting an inspirational message via JavaScript
var c26 = document.getElementById("c26");
c26.innerHTML = "You can do it!🐷";

//querying the DOM by TagName
var h2s = document.getElementsByTagName["h2"];





































////////Schedule for Tonight -- DONT LOOK AT THIS!
// let topics = ['hangout', 'meet your friends', 'intro to JS', 'loops', 'writing to the DOM'];
// localStorage.setItem('topics', JSON.stringify(topics));

function addToDo(todo){
    let topics = JSON.parse(localStorage.getItem("topics"));
    topics.push(todo);
    localStorage.setItem("topics", JSON.stringify(topics));
    printToDos();
}

printToDos = () => {
    let topics = JSON.parse(localStorage.getItem("topics"));
    let list = document.getElementById("topics");
    list.innerHTML = "";
    for(let i = 0; i < topics.length; i++){
        let listEl = document.createElement("li");
        listEl.textContent = topics[i];
        list.appendChild(listEl);
    }
};
printToDos();

document.getElementById("addToDo").addEventListener("click", function(){
    let newTodo = document.getElementById("todo");
    addToDo(newTodo.value);
    newTodo.value = " ";
});