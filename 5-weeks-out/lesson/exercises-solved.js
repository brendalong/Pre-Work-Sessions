//////////////////////////////////////////////////////////////
///////////////////////////walkthrough////////////////////////
//////////////////////////////////////////////////////////////


//console.log is a way for us to get a snapshot of our code in the console or "dev tools" in the browser
console.log("Hello, ALL!");


//variable assignment 
var firstName = "Meg";


//when you declare a variable and assign a value to it, JavaScript will read the right side of the equation,
//evaluate the value, and store the value in the left side (in the variable name). That variable name now 
//represents that value.
var num1 = 3 + 5;//8 is stored in num1
console.log(num1) //8


//co27 is an array. Arrays are like lists and you can access each item in the list with bracket notataion 
//and the index you want. Indexes start at 0. 
var co27 = ["John", "Grady", "Klaus"];
var firstPerson = co27[0]; //JavaScript will evaluate what's on the right side of the equation and store it in the left
console.log(firstPerson); //John


//Objects have KEYS and VALUES. KEYS can have any data type as their value. Here we have strings. 
var meg = {
    "firstName": "Meg",
    "lastName": "Ducharme"
};

//to access the VALUE of a KEY, we use dot notation. 
console.log(meg.lastName)//Ducharme

//the value of the students key here is an array
var cohort27 = {
    "instructor": "Brenda Long",
    "startDate": "July 2",
    "students": [meg, "Grady", "Klaus"]
};

console.log(cohort27.instructor);//Brenda Long
console.log(cohort27.students[2]);//Grady
//we will access data within an object the same way we are used to, with brack notation when we are dealing 
//with an array, and dot notation when we are dealing with an object. Here, we are going into the cohort27 
//object, then into the students array and then into the meg object
console.log(cohort27.students[0].lastName);//Ducharme


//accesssing the DOM from JavaScript and inserting an inspirational message via JavaScript - don't worry 
//about this too much for right now, but know that it can be done. 
var c27 = document.getElementById("c27");
c27.innerHTML = "You can do it!🐷";



//////////////////////////////////////////////////////////////
//////////////////////////exercises///////////////////////////
//////////////////////////////////////////////////////////////



//instantiate and assign your first name to a firstName variable
var firstName = "Meg";
console.log(firstName);


//instantiate and assign your last name to a lastName variable
var lastName = "Ducharme";
console.log(lastName);


//concatenate your first and last name and console log "My name is <firstName> <lastName>"
var fullName = firstName + " " + lastName;
console.log("My name is " + firstName + " " + lastName);
console.log("My name is " + fullName);


//create an array of 5 of your favorite places to visit (cities or places)
var favoritePlaces = ["Baltimore", "Thailand", "Johnson City", "Crema", "Boston"];


//arrays have PROPERTIES on them, just like objects. The length property will tell us how many items are in 
//an array. We access that by doing array.length
console.log(favoritePlaces.length);


//loop over the array and print each of the places to the console
//a for loop will run the block of code between the curly brackets as many times as the condition in the loop
//the condition here is i < favoritePlaces.length (which is 5)
//each time through the loop (starting at 0), i++ means that i will increase by one = i++ is the same as i = i + 1
//as i increases by one, i < favoritePlaces.length will fail when i reaches 5 because 5 is equal to, not less than 5
//when the condition fails, the loop will end
//we also use favoritePlaces[i] in the loop becuase as i increases, it accesses the next index in the array
for (var i = 0; i < favoritePlaces.length; i++) {
    console.log(i);
    console.log(favoritePlaces[i]);
}


//functions are little bits of code that you want to run over and over and over again. You can pass the 
//function "raw materials" and get out a "finished product." In this example, we are passing the function 
//numbers as raw materials and getting the sum as the finished product.
//when you declare (or define) a function, it will not run until you call or invoke it (line 92)
//when you return a value from a funtion, it will return to where you called the function (line 92)
var add = function(num1, num2){
    var sum = num1 + num2;
    return sum;
};
var addedNumbers = add(3, 4);


//write a function that takes two arguments, a drink type and a coffee shop name. Print the sentence to the 
//console 'Meg wants a latte from Frothy Monkey'
var getMeCoffee = function(drink, shop){
  console.log("Meg wants a " + drink + " from " + shop);
};
getMeCoffee("small coffee", "Crema"); //Meg wants a small coffee from Crema
getMeCoffee("latte", "Frothy Monkey");// Meg wants a latte from Frothy Monkey
getMeCoffee("cortado", "Barista Parlor");//Meg wants a cortado from Barista Parlor
























/////DO NOT LOOK BELOW, YOU DO NOT HAVE TO KNOW THIS.





















//DO NOT LOOK AT THIS, IT'S FOR FUN TO PRINT TO THE DOM. If you have a lot of programming experince and want //to try to figure it out, you can ask us about it 
////////Schedule for Tonight -- REMINDER: DONT LOOK AT THIS!
let topics = ['hangout', 'meet your friends', 'intro to JS', 'loops', 'writing to the DOM'];
localStorage.setItem('topics', JSON.stringify(topics));

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