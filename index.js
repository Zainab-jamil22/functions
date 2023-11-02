// write a program that return your age in days (take a age as an input)

function getAgeFromUser() {
     const age = parseInt(prompt("Enter your age in years:"));
     return age;
   }
   
   function calculateAgeInDays(age) {
     const daysInAYear = 365.25; // Taking into account leap years
     const ageInDays = age * daysInAYear;
     return Math.floor(ageInDays);
   }
   
   function nowage() {
     const age = getAgeFromUser();
     const ageInDays = calculateAgeInDays(age);
     console.log(`Your age in days is approximately ${ageInDays} days.`);
   }
   
   nowage();
   
   //create a function that take a number as an argument , increment the number by +1 and return the result ( take a number as an input )

   
  function incrementNumberByOne(number) {
    return number + 1;
  }
  
  function nums() {
    const userInput = parseFloat(prompt("Enter a number:"));
  
    if (!isNaN(userInput)) {
      const incrementedNumber = incrementNumberByOne(userInput);
      console.log(`The incremented number is: ${incrementedNumber}`);
    } else {
      console.log("Invalid input. Please enter a valid number.");
    }
  }
  
  nums();


///create a function that take a number as an argument , decrement the number by -1 and return the result ( take a number as an input )
 
function decrementNumberByOne(number) {
     return number - 1;
   }
   
   function main() {
     const userInput = parseFloat(prompt("Enter a number:"));
   
     if (!isNaN(userInput)) {
       const decrementedNumber = decrementNumberByOne(userInput);
       console.log(`The decremented number is: ${decrementedNumber}`);
     } else {
       console.log("Invalid input. Please enter a valid number.");
     }
   }
   
   main();

   
  
//  create a funtion who take a number and return a square of number



function squareNumber(number) {
     return number * number;
   }
   
   function sqnum() {
     const userInput = parseFloat(prompt("Enter a number:"));
   
     if (!isNaN(userInput)) {
       const squaredNumber = squareNumber(userInput);
       console.log(`The square of the number is: ${squaredNumber}`);
     } else {
       console.log("Invalid input. Please enter a valid number.");
     }
   }
   
   sqnum();

   // create a function that tells current time in y-m-d format


   
   function getCurrentTimeYMD() {
     const now = new Date();
     const year = now.getFullYear();
     const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1, and pad with '0'
     const day = String(now.getDate()).padStart(2, '0'); // Pad with '0'
   
     return `${year}-${month}-${day}`;
   }
   
   const currentTimeYMD = getCurrentTimeYMD();
   console.log(`Current time in Y-M-D format: ${currentTimeYMD}`);
   

   //create a function that tells your date in H:I:S format

   function getCurrentTimeHIS() {
     const now = new Date();
     const hours = String(now.getHours()).padStart(2, '0');
     const minutes = String(now.getMinutes()).padStart(2, '0');
     const seconds = String(now.getSeconds()).padStart(2, '0');
   
     return `${hours}:${minutes}:${seconds}`;
   }
   
   const currentTimeHIS = getCurrentTimeHIS();
   console.log(`Current time in H:i:s format: ${currentTimeHIS}`);
   