//Question 1
const arrowMyFunction = (num1, num2) => num1 + num2;
// console.log(arrowMyFunction(1, 2));
//Question 2
const arrowAdd100 = (money) => money + 100;
// console.log(arrowAdd100(500));

//Question 3
//Create arrow function
// with two parameters a string and a single letter
//make function count the number of times the specific letter occurs in the string
//google a method or way to count
//use a for loop to count the number of times the letter appears
//use charAt() to return the charcter at a specified index in a string

const stringCounter = (string, letter) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) {
      count += 1;
    }
  }
  return count;
};

// console.log(stringCounter("Hardee's", "b"));
