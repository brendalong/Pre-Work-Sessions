// Given the following objects -- > Dont change these
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
};
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
};
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
};
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
};
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
};

// Array containing the objects to be cooked
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// Empty array that will store the objects after the function 'cooks' the meat
const cookedFood = [];

// ----> This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.
// Our grill() function, takes in an object (which is a variable that represents the current object returned by the loop) and returns it with the boolean set to true
const grill = currentObject => {
  
	//return cooked food set to true
	currentObject.cooked = true;
	
	// push the newly cooked object (still represented by 'currentObject') into the empty array cookedFood
	cookedFood.push(currentObject);
};


// ----> You will need to write the necessary Javascript below.
// 1. Write a for loop that iterates over the objects in the uncookedFood array. Ensure the loop only iterates to the end of the array only.

// 2. Console.log() the results to ensure your loop is returning Food objects.

// 3. Save uncookedFood[i] into a variable named 'currentObject'.

// 4. Now, add a line that calls the grill() function and passes in the current item being iterated. over.






// If the loop successfully iterates over the array and successfully executes the grill() function on each object. This console log should appear as an array that has each object's 'cooked' key now shows true.
console.log('CookedFood array after our javascript!: ', cookedFood);