
const month = require("./functions.js").month;
const reverseSentence = require("./functions.js").reverseSentence;
const nameProps = require("./functions.js").nameProps;
const filterBetween = require("./functions.js").filterBetween;


// A test using expected/valid inputs for the month() function is written in tests.js.
console.log("month() function test A. Starts");
let date = new Date(2017, 06, 10);
console.log("Checks if string")
console.assert(typeof month(date) == "string", "Not returning month name.");

console.log("Returns String")
console.log("month() function test A. Passed");


// A test using unexpected/invalid inputs for the month() function is written in tests.js.
// console.log("1st Test B. Starts");

console.log("month() function test B. Starts");
let christmas = new Date(2017, 11, 25);
console.log("check if month(christmas) equals a valid month name")

console.assert(month(christmas) == "January" || month(christmas) == "February" || month(christmas) == "March" || month(christmas) == "April"
                                   || month(christmas) == "May" || month(christmas) == "June" || month(christmas) == "July"
                                   || month(christmas) == "August" || month(christmas) == "September" || month(christmas) == "October"
                                   || month(christmas) == "November" || month(christmas) == "December", "Incorrect format?");

console.log("Returned: " + month(christmas));
console.log("month() function test B. Passed");
console.log("\n")


/* -------------------------------------------------------------------------------------------------------------------------------*/
//A test using expected/valid inputs for the reverseSentence() function is written in tests.js.

console.log("reverseSentence() function test A. starts.")
console.log("Check if strings reversed right")

console.assert(reverseSentence("Hello how are you") == "you are how Hello", "Strings not reversing right."  )

console.log("Strings reversed")
console.log("reverseSentence() function test A. passed");

//A test using unexpected/invalid inputs for the reverseSentence() function is written in tests.js.
console.log("reverseSentence() function test B. starts.")
console.log("check if string is empty")
const jumped = "dog. the over jumped cat The";
console.assert(reverseSentence(jumped) !== "", "Nothing was entered" ) // => "dog. the over jumped cat The"

console.log("String not empty")
console.log("reverseSentence() function test B. passed");
console.log("\n")



/* -------------------------------------------------------------------------------------------------------------------------------*/

//A test using expected/valid inputs for the nameProps() function is written in tests.js.
//
console.log("nameProps() function test A. starts")
console.log("Check if object format entered correctly")
let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}
console.log(nameProps(friend)); //['age','name','phone']
console.assert(typeof nameProps(friend) == 'object', "Enter in correct object format." )

console.log("napeProps(friend) is an object")
console.log("nameProps() function test A. passed ")
//A test using unexpected/invalid inputs for the nameProps() function is written in tests.js.
console.log("nameProps() function test B. starts ")
nameProps({}) // => []



console.log("nameProps() function test B. ends ")
console.log("\n")

/* -------------------------------------------------------------------------------------------------------------------------------*/

//A test using expected/valid inputs for the filterBetween() function is written in tests.js.
console.log("filterBetween() function test A. starts")
console.log("Check if filtered correctly...")
let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

console.assert(filterBetween(arr, 'chimp', 'lobster') !==['dog', 'lion', 'cow'], "not filtering correctly") // => ['dog', 'lion', 'cow']
console.log("Filtered correctly");
console.log("filterBetween() function test A. passed")

//A test using unexpected/invalid inputs for the filterBetween() function is written in tests.js.
console.log("filterBetween() function test B. starts")

console.assert(filterBetween(arr, 'chickadee', 'chimpanzee')) // => []

console.log("filterBetween() function test B. ends")
