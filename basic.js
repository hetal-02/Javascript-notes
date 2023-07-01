// //To print the output
// console.log('Hello world');
// //primitive data types
// //nn ss bb u
// /* Null number
//    symbol string
//    boolean bigint
//    undefined
//  */

//    let a = null;
//    let b = 345;
//    let c = Symbol('I am learning javascript');
//    let d = "Hetal";
//    let e = false;
//    let f = BigInt('345') + BigInt('5');
//    let g = undefined;
//    console.log(a,'\n',b,'\n',c,'\n',d,'\n',e,'\n',f,'\n',g);

// //Non-primitive data types which is also called as "OBJECT"
// //we can't change the object by object name but we can change its elements
// //eg. we can't do ==>> const hetal = 45;
// //    we can do   ==>> hetal['friend'] = xyz;
// //**********TO PRINT OBJECT ELEMENTS LINE BY LINE**********
// //SYNTAX: JSON.stringify({},null,"\t")

// const hetal = JSON.stringify({
//     RollNO :  "321015",
//     GrNO : "22011000",
//     Department : "Computer Science"
// },null,"\t")
// console.log(hetal);
// const darshan = {
//     RollNO :  "321015",
//     GrNO : "22011000",
//     Department : "Computer Science"
// }

// console.log(darshan.Department);

// //To check the data type of variable
// //Use typeof variable
// console.log(typeof c);

// //we can also add a string and number which means concatenate

// console.log(b + ' '+ d)

// //#####------->>toLocaleString = returns a string with a language sensitive representation of this number(USED FOR CURRENCY, PERCENT AND UNIT OF MEASUREMENT AS SHOWN BELOW)
// //number.toLocaleString(locale, {options});

// //locale = specify that language
// //options = object with formating options


//                 ************* CURRENCY *************

//let myNum = 0.5;
//For dollar
// myNum = myNum.toLocaleString("en-US", {style:"currency" ,currency: "USD" });
// //For indian ruppee
// myNum = myNum.toLocaleString("hi-IN", {style:"currency" ,currency: "INR" });
// //For german euro
// myNum = myNum.toLocaleString("de-DE", {style:"currency" ,currency: "EUR" });
// console.log(myNum);


//                      *************  PERCENT  *************

// myNum = myNum.toLocaleString(undefined,{style: "percent"})
//  console.log(myNum);



//              ************* UNIT OF MEASUREMENT *************
// myNum = myNum.toLocaleString(undefined,{style: "unit", unit: "celsius"});
// console.log(myNum);

//                      ********** ARRAYS **********
// let fruits = ["apple","orange","banana"];


// for(let i =0;i<=2;i++){
//     console.log(fruits[i]);
// }
// //OR

// for(let fruit of fruits){
//     console.log(fruit);
// }
// // to push element to array
// fruits.push("litchi");
// fruits.push("Grapes");
// fruits.pop();  //removes last element
// fruits.unshift("Custard apple");     //adds elemetmt to the beggining
// fruits.shift();      //removes the beggining element

// let length = fruits.length;
// console.log(length);
// let index = fruits.indexOf("orange");
// console.log(index);

// console.log(fruits);

// fruits = fruits.sort(); //sorts the array
// console.log(fruits);
// fruits = fruits.sort().reverse(); //sorts array in reverse order
// console.log(fruits);

//     ############# 2D ARRAYS ############
// let fruits = ["apple","banana","oranges"];
// let vegetables = ["tomato","potato","eggplant"];
// let dairyProducts = ["milk","paneer","curd","buttermilk"];

// let grocery = [fruits, vegetables ,dairyProducts];

// for(let list of grocery){
//     for(let food of list){
//         console.log(food);
//     }
// }

//          $$$$$$$$$$---- SPREAD OPERATOR ----$$$$$$$$$$$

//usually used to unpack the elements or to expand array or string(eg.)

let array = [1,2,3,4,5,6,7,8,9];
let maximum = Math.max(array);
console.log(maximum)        //this will return Nan (not a number)

let max = Math.max(...array);   //unpacked the elements from array
console.log(max);

let class1 = ["spongebob","Mr.bean","doraemon"];
let class2 = ["shinchan","bheem","shiva"];

//class1.push(class2);
//console.log(class1);
//to merge all the elements separately using spread operator

// class1.push(...class2);
// console.log(...class1);
/*OUTPUT 
[ 'spongebob', 'Mr.bean', 'doraemon', 'shinchan', 'bheem', 'shiva' ]   */


//      (((((((((( REST PARAMETER ))))))))))
//packs arguments into an array.
//-----> Can be used to call function having indefinite parameters

// let a = 4;
// let b = 3;
// let c = 1;
// let d = 8;
// let e = 7;

// console.log(sum(a,c,d)) //for each varying we have to create differnt function here, to get rid of this we can use rest parameter
// //which will sum the parameters in separate array 

// function sum(...numbers){
//     let total = 0;
//     for(let num of numbers){
//         total += num;
//     }
//     return total;
// }


//                                      ((((( CALLBACK )))))
/*a function passed as an argument to another function(like recursion in cpp).
Ensures that a funcition is not going to run before a task is completed
Helps us develop asynchronous code.(when one function has to wait for another function)
that help us avoid errors and potential problems Ex. wait for a file to load.*/

sum(2,3,displayConsole);

function sum(x,y,callBack){
    let ans = x + y;
    callBack(ans);

}

function displayConsole(output){
    console.log(output);
}

//              ****** array.forEach() ******
//------> Executes a provided callback function once for each array element
// A program that will capitalize the first letter of the element
// let students = ["spongebob","doraemon","ninja"];

// students.forEach(capitalize);
// students.forEach(print);
// function capitalize(element,index,array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(array){
//     console.log(array);
// }

//                  ((((  array.map()  ))))
// executes a provide callback function once for each element of arry and creates a new array

// let numbers = [1,2,3,4,5];
// let squares = numbers.map(square);

// function square(element){
//     return Math.pow(element,2);
// }
// console.log(squares);
// //                  ((((  array.filter()  ))))
// //creates a new array with the element that passes the test provided

// let ages = [7,56,12,18,21,34,9];
// let adults = ages.filter(checkAge);
// adults.forEach(print);
// function checkAge(element){
//     return element>=18;

// }
// function print(element){
//     console.log(element);
// }

// //                  ((((  array.reduce()  ))))
// //reduce the array element into single value

// let prices = [3,56,12,56,89];
// let total = prices.reduce(checkOut,1);
// //here 1 is the initial value provided to the function(it is completely optional, it means that the function will start with this value before array element)

// function checkOut(total,element){
//     return total + element;
// }
// console.log(total);

// const nums = [1.8, 2.3, 15.1, 4.7];

// let ans = nums.reduce(sum);
// console.log(ans);
// function sum(total,element){
//     return total + Math.round(element);
// }
// function print(element){
//     console.log(element);
// }


//                  %%%%%%%  Sorting an array of NUMBERS  %%%%%%%

//there is an in-built method array.sort();
//-----> By default sort functions sort values as strings.
//-----> We can fix this by using compare functio

let grades = [46,70,20,40,100,80];

grades = grades.sort(DescendingSort);
console.log("Grades in descending order: ",grades);
grades = grades.sort(AscendingSort);
console.log("Grades in ascending order: ", grades);
//grades.forEach(print);
function DescendingSort(a,b){
    return b - a;
}

function AscendingSort(x,y){
    return x - y;
}


//          \/\/\/\/\/\/\/\/  FUNCTION EXPRESSION \/\/\/\/\/\/\/\/\/
// we don't need to think about different func name we can assign an anonymous function to a variable

let greetings = function(){
    console.log("Hello All!!");
}

//              ======= ARROW FUNCTION ========
//We can write function in more simple way
//NOTE: we must use curly braces if our function contains more than one statement;

let greeting = () => {console.log("Hello All!!");}

// we can write the sort function using arrow func

let marks = [30,20,80,60,40];

marks.sort(function(x,y){       //by function expression
    return y - x;
});

marks.sort((x,y) => x - y);     //by arrow function


//                        \/\/\//\/\/\/\/\ Map \/\/\/\/\/\/\/\/
//object holds key-value pairs and remembers the original insertion order of the keys. 
//also acts as forEach method for array

//to add the elements (map.set('a',1))
//to print the element (map.get('a'));

const myMap = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);

  console.log(myMap.get(3));

//      ^^^^^ OOPS ^^^^^
//OBJECT
/*a group of properties and methods
  properties = what an obj has
  methods = what a object can do
  use . to access properties/methods */

  const car ={
    //properties
    model:"Mustang",
    color: "red",
    year:2023,

    //methods
    drive:function(){
        console.log(`you drive the car!`)
    },
    brake: function(){
        console.log(`you step on the brakes!`)
    }
  }
  //to accss the properties
  console.log(car.model);
  console.log(car.color);

  car.drive();  //to invoke the methods

// this = reference to a particular object
//        the object depends on the immediate context

const car1 ={
    //properties
    model:"Mustang",
    color: "red",
    year:2023,

    //methods
    drive:function(){
        console.log(`you drive the ${this.model}`) //here if we write model without this than it will give error as drive function don't know about model property.
    },
    brake: function(){
        console.log(`you step on the brakes!`)
    }
  }
  //to accss the properties
  console.log(car.model);
  console.log(car.color);

  car.drive(); 

  // CLASS
  // a blueprint for creating obj, defines what properties and methods they have, uses a constructor for unique properties

  class Player{
    score = 0;
    pause(){
        console.log(`pause the game`);

    }
    exit(){
        console.log(`you exited the game`);
    }
  }

  const player1 = new Player();
  const player2 = new Player();

  player1.score += 1;

  console.log(player1.score);
  console.log(player2.score);

  player1.pause();
  player2.exit();

// CONSTRUCTOR = a specia method of a class, accepts arguments and assigns properties

class Student{
    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }

}
const student1 = new Student("spongebog",30,3.4);
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

student1.study();

//static keyword
//belongs to the class, not the object
//properties: useful for caches, fixed-configuration
//methods: usefyl for utility function


class Cars{
    static numberOfCars = 0;
    constructor(model){
        this.model = model;
        Cars.numberOfCars += 1;

    }

}
const carA = new Cars("audi");
const carB = new Cars("Lamborghini");
const carC = new Cars("Mercedes");
console.log(Cars.numberOfCars);

// SUPER KEYWORD
// refers to the parent class.
//commonly used to invoke constructor of a parent class
//helps with code reusability

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
}
class Rabit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age); //to invoke parent class constructor
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age); //to invoke parent class constructor
        this.swimSpeed = swimSpeed;
    }
}

const fish = new Fish("salmon",1,30);
console.log(fish.name);

// GETTERS AND SETTERS

//get = binds an obj property to a function when that property is accessed.(read only)
//set = binds an obj property to a function when that property is assigned a value(read and write only)
//increases data security.
class Vehicle{
    constructor(power){
        this._power = power;
        this._gas = 25;
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas/50*100}%)`;
    }
    set gas(value){
        if(value>50){
            value = 50;
        }else if(value < 0 ){
            value = 0;
        }
    }
}
//_power represents that the function is protected
let motorcycle = new Vehicle(500);
motorcycle.gas = -100;
console.log(motorcycle.power);
console.log(motorcycle.gas);
console.log("Hello world");
















