
const fullName="Rajesh Jadhav";

//es5 function
// function getFirstName(fullName){
// 	return fullName.split(" ")[0];
// }

//es6 arrow function
// const getFirstName = (fullName) => {
// 	return fullName.split(" ")[0];
// }


//es6 arrow function shorthand
const getFirstName = (fullName) => fullName.split(" ")[0];

console.log(getFirstName(fullName));