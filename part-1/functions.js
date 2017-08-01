//Write a function month(date) to find the month for a given Date object, returing
// the name of the month as a string ('January', 'February', 'March', 'April', 'May', ... etc).

//Ex.  let date = new Date(2017, 5, 19) // June 19, 2017
//month(date) // returns "June"
//let christmas = new Date(2017, 11, 25) // Dec 25, 2017
//month(christmas) // returns "December"


module.exports = {
  month : function(date) {

    let monthName = date.getMonth(); //gets month number.
    switch (monthName) {             //months 0-11 matched
      case 0:
              monthName = "January";
              break;
      case 1:
              monthName = "February";
              break;
      case 2:
              monthName = "March";
              break;
      case 3:
              monthName = "April";
              break;
      case 4:
              monthName = "May";
              break;
      case 5:
              monthName = "June";
              break;
      case 6:
              monthName = "July";
              break;
      case 7:
              monthName = "August";
              break;
      case 8:
              monthName = "September"
              break;
      case 9:
              monthName = "October"
              break;
      case 10:
              monthName = "November"
              break;
      case 11:
              monthName = "December"
              break;
      default:
              monthName = "";
    }
    return (monthName); //name of month returned
  },
  /* -----------------------------------------------------------------*/
  //Write a function reverseSentence(string) that takes a string of words and returns a string
  //with the words in reverse order. If there is only one word in the string return it
  //unchanged. Consider any series of non-space characters a word.

 reverseSentence: function(string) {
  var arr = string.split(" ");
  string = arr.reverse().join(" ");

  return string;


},
  /* -----------------------------------------------------------------*/
  //Write a function nameProps(obj) that returns the names of the properties an object has in
  //alphabetical order. Ignore symbolic properties and count only the "own properties"
  //(not inherited) of the object.

  nameProps: function(obj) {

    return Object.keys(obj).sort();
  },
/* -----------------------------------------------------------------*/


//Write a function filterBetween(array, min, max) that takes an array of strings, a min value,
//and a max value. It returns a new array containing only the elements that come after min
//alphabetically and before max.
  filterBetween: function(array, min, max) {
    var newArray = [];
    array.forEach(function(x) {
      if(x >= min && x <= max ) {
        newArray.push(x);
    }
  })
return newArray;
  }
}
