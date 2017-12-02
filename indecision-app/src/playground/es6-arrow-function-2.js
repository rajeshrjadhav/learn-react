//using foreach
// const multiplier={
// 	numbers: [1,2,3] ,
// 	multiplyBy: 2,
// 	multiply : function (){

// 		this.numbers.forEach((number)=>{
// 			console.log(this.multiplyBy * number);
// 		});
// 	}
// };

//using map
const multiplier={
	numbers: [1,2,3] ,
	multiplyBy: 2,
	//this keyword no longer bound or we can't use this inside function
	// multiply : function () {
	// 	const that=this;
	// 	return that.numbers.map(function(number){
	// 		return that.multiplyBy * number ;
	// 	});

	// multiply(){
	// 	return this.numbers.map((number)=>{
	// 		return this.multiplyBy * number;
	// 	});

	//shorthand syntax
	multiply(){
		return this.numbers.map((number)=> this.multiplyBy * number);		
	}
};

console.log(multiplier.multiply());