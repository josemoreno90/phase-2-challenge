//Write a function month(date) to find the month for a given Date object, returing
// the name of the month as a string ('January', 'February', 'March', 'April', 'May', ... etc).

//Ex.  let date = new Date(2017, 5, 19) // June 19, 2017
//month(date) // returns "June"
//let christmas = new Date(2017, 11, 25) // Dec 25, 2017
//month(christmas) // returns "December"


/* -----------------------------------------------------------------*/

//Write a function reverseSentence(string) that takes a string of words and returns a string
//with the words in reverse order. If there is only one word in the string return it
//unchanged. Consider any series of non-space characters a word.

//Ex.reverseSentence("The cat jumped over the dog.") // => "dog. the over jumped cat The"


/* -----------------------------------------------------------------*/

//Write a function nameProps(obj) that returns the names of the properties an object has in
//alphabetical order. Ignore symbolic properties and count only the "own properties"
//(not inherited) of the object.

/* Example
let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

nameProps(friend) // => ['age', 'name', 'phone']
nameProps({}) // => []
/*


/* -----------------------------------------------------------------*/


//Write a function filterBetween(array, min, max) that takes an array of strings, a min value,
//and a max value. It returns a new array containing only the elements that come after min
//alphabetically and before max.


/* Example
let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

filterBetween(arr, 'deer', 'giraffe') // => ['dog']
filterBetween(arr, 'chimp', 'lobster') // => ['dog', 'lion', 'cow']
filterBetween(arr, 'chickadee', 'chimpanzee') // => []
/*
