import logo from './logo.svg';
import './App.css';

// function twoSum(nums, target) {
//   const hashTable = {};
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (complement in hashTable) {
//       return [hashTable[complement], i];
//     }
//     hashTable[nums[i]] = i;
//   }
//   return [];

// Create a class called "Animal" with the following properties: name and sound. Create a subclass called 
//"Dog" that inherits from the Animal class and adds an additional property called "breed". Create an instance 
//of the Dog class called "rover" with a name of "Rover", a sound of "woof", and a breed of "Labrador".

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
}
class Dog extends Animal {
  constructor(name, sound, breed) {
    super(name, sound);
    this.breed = breed;

  }
}
const rover = new Dog('Rover', 'Woof', 'Labrador');
console.log(rover);

//Write an arrow function that takes in an array of numbers and returns an array of the same numbers 

const arrayNum = (arr) => arr;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arrayNum(numbers);
console.log(result);

//Write a program to print the Fibonacci sequence up to a given number.
function fibonacciSequence(n) {
  let sequence = [0, 1]; // initialize the sequence with the first two numbers
  let i = 2; // set the starting index
  while (sequence[i-1] + sequence[i-2] <= n) { // continue until the next number in the sequence is greater than n
    sequence[i] = sequence[i-1] + sequence[i-2]; // add the next number to the sequence
    i++; // increment the index
  }
  return sequence;
}
console.log(fibonacciSequence(50)); 

//Write a program to find the factorial of a given number.
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}
console.log(factorial(5));


export default App;
