
class Person{

	constructor(name='Anonyomus',age=0){
		this.name=name;
		this.age=age;
	}
	getGreeting(){
		return `Hi. I am ${this.name} !`;
	}
	getDescription(){
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

class Student extends Person{

	constructor(name,age,major){
		super(name,age);
		this.major=major;
	}

	hasMajor(){
		return !!this.major;
	}
	getDescription(){
		let description=super.getDescription();
		if(this.hasMajor()){
			description += ` Their major is ${this.major} !`;
		}
		return description;
	}
}

class Traveler extends Person{
	constructor(name,age,homeLocation){
		super(name,age);
		this.homeLocation=homeLocation;
	}

	getGreeting(){
		let greeting=super.getGreeting();
		if(this.homeLocation){
			greeting += ` I am visiting from ${this.homeLocation} !`;	
		}
		return greeting;
	}
}

// const me= new Person('Rajehs Jadhav',26);
// console.log(me.getDescription());

// const other=new Person();
// console.log(other.getDescription());

// const studentObj= new Student('Rajesh Jadhav',26,'CSE');
// console.log(studentObj.getDescription());

const travelerObj= new Traveler('Rajesh Jadhav',26,'Sangli');
console.log(travelerObj.getGreeting());

const otherTravelerObj =new Traveler();
console.log(otherTravelerObj.getGreeting());