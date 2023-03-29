var bigObj = {

	"id" : 1 ,
	"name" : "Prathamesh",
	"roll" : 8 ,
	"4" : "Some value"
};

bigObj.sirname = "Chandekar";


console.log("id : " + bigObj.id);

// console.log("4th : " + bigObj.4);

console.log("4th :  " + bigObj[4]);


// *****************

// Output ->

// ➜  JS-Basics git:(main) ✗ node jslearn3.js
// id : 1
// 4th :  Some value
