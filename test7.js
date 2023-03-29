var ano_add = function (a,b){
	console.log("Addition in anonymous add function : " + (a+b));

	return a+b;
}


var ano_sub = function (a,b){
	console.log("Subtraction in anonymous sub function : " + (a-b));

	return a-b;
}



var a = 12;
var b = 10;


ano_add(a,b);
ano_sub(a,b);


// ***********************

// Output ->


// ➜  JS-Basics git:(main) ✗ node jslearn6.js
// Addition in anonymous add function : 22
// Subtraction in anonymous sub function : 2
