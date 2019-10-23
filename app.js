$(document).ready(function () {
  let word = "Barcelona";

  // Create a function that takes a string message as an argument, and logs that message to the console

  function message() {
      console.log(word);
  }

  // Now call your function with a message
message(word);

/*
 Use setTimeout to call your function again, but with a different message and after 2 seconds ** Hint: If you both of your messages log at the same time, look at the syntax of a setTimeout. You'll need to call your function within an anonymous function the timeOut executes.
*/

  setTimeout(() => {message("Now its Birmingham")}, 2000);

/*
Create a new function called getWords that will attempt to do the following using several setTimeout calls: ** Log a word instantly ** After 3 seconds, log another word ** After 2 seconds, log another word ** After 1 second, log a final word
*/
  function getWords() {
      console.log("1st word: Australia");
      setTimeout(function () { console.log("2nd word: Bondi Beach") }, 3000);
      setTimeout(function () { console.log("3rd word: Manly") }, 2000);
      setTimeout(function () { console.log("4th word: Opera House") }, 1000);
  }
  getWords();         // logs words in this order: 1st, 4th, 3rd, 2nd


  // count down from a number, when it gets to one, call another function
  function countDown(num, callback) {
    console.log(num);
    if (num > 1) {
      setTimeout(() => {
        num--;
        countDown(num, callback) }, 1000)
    }
    if (num === 1) {
      return callback();
    }
  }
  function done() {
      console.log("Job's done!");
    }
  countDown(9, done);

// practice with promise -- change true to false to see resolve & reject
let lunchTime = true;
// let lunchTime = false;

// create a new promise
const orderMeSomeFood = new Promise(function(resolve, reject) {

    // set up conditions
    if(lunchTime) {
        let lunch = {
            favLunch: "Laksa Soup",
            drink: "Ginger, Chilli and Lime Martini"
        }
// resolve with lunch object
    resolve(lunch);
// create a new error and reject with it
    } else {
        let noFood = new Error("We are out of Laksa today!")
        reject(noFood);
    }
// log message and promise result/output for resolve and for reject
}).then(function (result){
    console.log('promise resolved')
    console.log(result)
})
.catch(function(error){
    console.log(error);
});


// Call your orderMeSomeFood function used an IIFE here to call onload
(function orderFood() {
  let lunchTime = true;
    return orderMeSomeFood ;
  })();

}); // ends Document Ready
