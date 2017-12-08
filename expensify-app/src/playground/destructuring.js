const book={
	name : "Test Name",
	author : "Test Author",
	publisher : {
		name : "Test Publisher"
	}
};

//object destructing 
console.log("Object destructing");

const { name : newName = 'RJ', author } = book ;

console.log(`Book Name is ${newName}`);

const { name : publisherName }=book.publisher;

console.log(publisherName);


//Array destructing
console.log("Array destructing");

const item=['Coffee',10,20,30];

const [name,smSizeCost,mdSizeCost,lgSizeCost]= item;

console.log(`Small Size ${name} cost is ${smSizeCost}`);

