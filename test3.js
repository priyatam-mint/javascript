var bigObj = {

	"id" : 1 ,
	"name" : "Prathamesh",
	"roll" : 8 
};

bigObj.sirname = "Chandekar";

var len = (Object.keys(bigObj).length);

for(var k in bigObj)
{
	console.log("key : " + k +  "   value: " + bigObj[k]);
}