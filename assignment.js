// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy'

// function that checks if string meets requirements
const containsY = (string) => string.toLowerCase().includes('y');

// check str using containsY and log 'YES' if it contains 'y'
const checkForY = (str) => {
    if(containsY(str)){
        console.log('YES')
    }
    else{
        console.log('NO')
    }

}

// 2. Write a function that finds a factorial of a number.
// Example - 5! = 120 (Use a normal loop for this one.)

// Function to calculate factorial using for loop
const findFactorial = (num) => {
    // Finds factorial of a number
    const factorial = (n) => {
       let total = 1;
       
       for (let i = 1; i <= n; i++){
           total *= i;
       }
       return total
    }
    console.log(`${num} factorial is ${factorial(num)}`)
}

findFactorial(3)


//3. You have an array of students
let studentList = [
  { name: "Mike", marks: [80, 50, 60, 100] },
  { name: "Daniel", marks: [40, 50, 100, 100] },
  {
    name: "Stacy",
    marks: [20, 100, 50, 70],
  },
];

// Creates the function to get the average of each student 
const getAverage = marks => {
    // Using reduce, get the sum of all the marks and get avg
    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    return sum / marks.length
}

// Function to get the highest average grade using getAverage function
const getHighestAverage = (studentList) => {
    // Return the student with the highest average
    return studentList.reduce((highest, currentStudent) => {
        // Gets the average of a student using getAverage function
        const currentAverage = getAverage(currentStudent.marks);

        // Check current average with the new average 
        if (currentAverage > highest.average){
            // if the current average is higher, update the highest object with the student's info
            return {name: currentStudent.name, average: currentAverage};
        }
        else{
            return highest;
        }
        // Initialize highest object and set to empty and 0
    }, {name: "", average: 0}).name; 
};

const highestAvgStudent = getHighestAverage(studentList);

console.log(`The student with the highest average marks: ${highestAvgStudent}`);




//4. HARD Question - You have to write a function that has the highest number of occurrences
const highOccurList = [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4


//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
const numList = [20, 20, 11, 4, 11, 20, 2, 4];

const findUniqueNumber = (arr) => {
  // Use reduce to find the unique number
  const uniqueNumber = arr.reduce((unique, num) => {
    // Check if arr first index is = to last index
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
      // If the number is unique, set it as the result
      unique = num;
    }
    return unique;
  }, 'Not found');

  return uniqueNumber;
};

// Call the function and print the result
const uniqueNumber = findUniqueNumber(numList);
console.log("The unique number is: ", uniqueNumber);

//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

const palindromes = arr => {
    const isPalindrome = str => str === str.split('').reverse().join('');

    return arr.filter(word => isPalindrome(word));
};

const words = ['abc', 'aba', 'ccc', 'dca', 'a']
const palindromeArray = palindromes(words);

console.log('Palindromes:', palindromeArray);
// ['aba', 'ccc', 'a']