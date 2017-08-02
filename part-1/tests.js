
const month = require("./functions.js").month;
const reverseSentence = require("./functions.js").reverseSentence;
const nameProps = require("./functions.js").nameProps;
const filterBetween = require("./functions.js").filterBetween;


// A test using expected/valid inputs for the month() function is written in tests.js.
console.log("-MONTH FUNCTION TEST- ")
console.log("month() function test A. starts");
let date = new Date(2017, 06, 10);
console.log("Checking if string...")
console.assert(typeof month(date) == "string", "Not returning month name.");
console.log("Returned: " + "'" + month(date) + "'");
console.log("Returned a String")
console.log("month() function test A. passed");


// A test using unexpected/invalid inputs for the month() function is written in tests.js.
// console.log("1st Test B. Starts");
console.log("month() function test B. starts");
let christmas = new Date(2017, 1, 25);
console.log("Checking if month(christmas) equals a valid month name...")

console.assert(month(christmas) == "January" || month(christmas) == "February" || month(christmas) == "March" || month(christmas) == "April"
                                   || month(christmas) == "May" || month(christmas) == "June" || month(christmas) == "July"
                                   || month(christmas) == "August" || month(christmas) == "September" || month(christmas) == "October"
                                   || month(christmas) == "November" || month(christmas) == "December", "Incorrect format?");

console.log("Returned: " + month(christmas));
console.log("Month name valid");

console.log("month() function test B. passed");
console.log("\n")


/* -------------------------------------------------------------------------------------------------------------------------------*/
//A test using expected/valid inputs for the reverseSentence() function is written in tests.js.
console.log("-REVERSE SENTENCE FUNCTION TEST- ")

console.log("reverseSentence() function test A. starts.")
console.log("Checking if string has correct reversed order...")

console.assert(reverseSentence("Hello how are you") == "you are how Hello", "String not reversing right."  )
console.log("Input was 'Hello how are you'\nOutput was: " + reverseSentence("Hello how are you"));
console.log("Strings reversed successfully!")
console.log("reverseSentence() function test A. passed.");

//A test using unexpected/invalid inputs for the reverseSentence() function is written in tests.js.
console.log("reverseSentence() function test B. starts.")
console.log("Checking if string is empty")
const jumped = "dog. the over jumped cat The";
console.assert(reverseSentence(jumped) !== "", "Nothing was entered" ) // => "dog. the over jumped cat The"
console.log("Returned: " + reverseSentence(jumped));
console.log("String not empty")
console.log("reverseSentence() function test B. passed");
console.log("\n")



/* -------------------------------------------------------------------------------------------------------------------------------*/

//A test using expected/valid inputs for the nameProps() function is written in tests.js.
//
console.log("-NAME PROPS. FUNCTION TEST- ")

let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

console.log("nameProps() function test A. starts")
console.log("Check if object format entered correctly")
// console.log(nameProps(friend)); //['age','name','phone']
console.assert(typeof nameProps(friend) == 'object', "Entered incorrect object format." )
console.log("Returned typeof: " + "'" + typeof nameProps(friend) + "'");
console.log("napeProps is an object")
console.log("nameProps() function test A. passed ")
//A test using unexpected/invalid inputs for the nameProps() function is written in tests.js.
console.log("nameProps() function test B. starts ")
console.log("Checking if nameProps property length is 3.")
console.assert(nameProps(friend).length == 3, "nameProps is false!"  ) // => []
console.log("nameProps length output is: " + nameProps(friend).length);
console.log("length check successful");

console.log("nameProps() function test B. passed ")
console.log("\n")

/* -------------------------------------------------------------------------------------------------------------------------------*/

//A test using expected/valid inputs for the filterBetween() function is written in tests.js.
console.log("-FILTER BETWEEN FUNCTION TEST- ")

console.log("filterBetween() function test A. starts")
console.log("Check if list is filtered correctly...")
let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
console.log("List is: " + "[" + arr + "]" );
console.log("filterBetween(arr, 'chimp', 'lobster') should return ['dog', 'lion', 'cow']")
console.assert(filterBetween(arr, 'chimp', 'lobster') !==['dog', 'lion', 'cow'], "not filtering correctly") // => ['dog', 'lion', 'cow']
console.log("filterBetween Returned: " + "[" + filterBetween(arr, 'chimp', 'lobster' ) + "]")
console.log("Filtered correctly");
console.log("filterBetween() function test A. passed")

//A test using unexpected/invalid inputs for the filterBetween() function is written in tests.js.
console.log("filterBetween() function test B. starts")
console.log("Checking if filterBetween(arr, 'chickadee', 'chimpanzee') is an object...")
console.assert(typeof filterBetween(arr, 'chickadee', 'chimpanzee') == 'object', "Something went wrong"); // => []
console.log("Typeof Returned: " + typeof filterBetween(arr, 'chickadee', 'chimpanzee'));
console.log("filterBetween() function test B. passed")
