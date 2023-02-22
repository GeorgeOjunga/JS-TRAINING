//Question One a template literal that includes the variables name and age, and outputs a string saying the user's name and age.
const name = 'George Ojunga';
const age = 26;

const user = `My name is ${name} and I am ${age} years old`;

console.log(user);

//Question 2 a conditional statement that checks if the length of the fruits array is greater than 3, and outputs "You have a lot of fruits!" if it is, or "You need to buy more fruits!" if it isn't.
const fruits1 = ["apple", "banana", "orange", "grape"];

if (fruits1.length > 3) {
  console.log("You have a lot of fruits!");
} else {
  console.log("You need to buy more fruits!");
}

//Question 3 an object person with the properties name, age, city, and hobbies, and set their values to your own name, age, city, and a list of your hobbies in an array.
const person = { name: "George Ojunga", 
    age: 26, 
    city: "Nairobi", 
    hobbies: ["Coding", "Reading", "Watching Movies"] 
};
console.log(person.age);

person ['ocupation'] = 'Software Developer';
console.log(person);

//Question 7  a variable fruits and set it to an array of objects, each representing a fruit and containing the properties name, color, and taste. 
const fruits = [
    { name: "apple", color: "red", taste: "sweet" },
    { name: "banana", color: "yellow", taste: "sweet" },
    { name: "orange", color: "orange", taste: "sour" },
];

for (const fruit of fruits) {
    console.log(`The ${fruit.name} is ${fruit.color} and tastes ${fruit.taste}.`);
  }

  //Question 8 Declare a function addNumbers that takes two number parameters and returns their sum. Call the function with the arguments 5 and 7, and output the result.
    function addNumbers(num1, num2) {
        return num1 + num2;
    }
    const result = addNumbers(5, 7);
    console.log(result);


