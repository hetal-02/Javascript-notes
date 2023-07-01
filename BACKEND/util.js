//local(not accessible by the module which means it is encapsulated)
const secret = "super secret";
//global
const username = ()=>{
    console.log('peter')
}
const sayHi = (name) =>{
    console.log(`Hello there ${name}`);
}


module.exports = {
   username,
   sayHi
} ;

