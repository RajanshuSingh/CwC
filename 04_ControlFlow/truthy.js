const userEmail="rjanshusingh258@gmail.com"

if(userEmail){
    console.log("Email is present")
}
else{
    console.log("Email is not present")  
}

// no need of using if(userEmail==true) as it is already a boolean value
// falsy values: 0, null, undefined, '', NaN, false, -0, 0n,""
// truthy values: all values other than falsy values, including empty arrays and objects
// example of truthy values: "0", 'false', 'null', [], " ",' ', {},  function(){}




const emptyObj={}             //check if object is empty
if(Object.keys(emptyObj).length==0){
    console.log("Object is empty")
}

const emptyArray=[]             //check if array is empty
if(emptyArray.length==0){
    console.log("Array is empty")
}

//Nullish coalescing operator(??): null/undefined check 
// if value is null or undefined, it will return the right side value
// if value is not null or undefined, it will return the left side value

let val1;
// val1=51 ?? 10
val1= undefined ?? 10
console.log(val1)   


//ternary operator
//syntax: condition ? statement1 : statement2  (statement 1 will be executed if condition is true, else statement 2 will be executed)