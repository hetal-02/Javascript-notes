let userName = "chauhan ";

//To print string length
let length = userName.length;
console.log(length);

//To print character at particular index
let char = userName.charAt(0);
console.log(char);

//To print first occurence of character
let firstOccurence = userName.indexOf('a');
console.log(firstOccurence);

//To print last occurence of character
let lastOccurence = userName.lastIndexOf('a');
console.log(lastOccurence);

//To trim(removes unwanted spaces)
userName.trim();
console.log(userName);

//Replace all
let phoneNumber = '123-456-7890';
phoneNumber = phoneNumber.replaceAll('-','')
console.log(phoneNumber);


//String slicing
//It extractgs a section of string and returns it as new string without modifying the original string

let fullname = 'Hetal Chauhan';
let firstName;
let LastName;
console.log("Firstname: " + fullname.slice(0,5));
console.log("Lastname: " + fullname.slice(fullname.indexOf(' ') + 1));
