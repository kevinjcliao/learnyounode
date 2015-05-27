var inputArray = process.argv;
var total = 0; 

for( i = 2; i < inputArray.length; i++){
	total += Number(inputArray[i]); 
}

console.log(total); 
