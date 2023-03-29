var myObj = {
	"name" : "Prathamesh" , 
	"sirname" : "Chandekar",

	"display" : function (){
		console.log("name : " + myObj.name + "    sirname: " + myObj.sirname);
	}
}


console.log("myObj values : ");
myObj.display();
console.log("\n");


var newObj = myObj;

myObj = {};


console.log("newObj values : ");
newObj.display();


// ***********************

// Output ->

// ➜  JS-Basics git:(main) ✗ node jslearn7.js
// myObj values : 
// name : Prathamesh    sirname: Chandekar


// Without this keyword

// newObj values : 
// name : undefined    sirname: undefined


// with this keyword 
// newObj values : 
// name : Prathamesh    sirname: Chandekar

