// /* Primitive 

// 1. Number
// 2. String
// 3. Boolean
// 4. null 
// 5. Undefind
// 6. Symbol
// 7. BigInt  


// //Reference(non-primitive data types)

// //arrays/objects/functions

// */

// const score= 100
// const scoreValue= 100.9
// const isLoggedIn= false
// const outSideTemp= null
// let userEmail;

// const id= Symbol('12345')
// console.log(Symbol)
// console.log(typeof Symbol);


//**************************************** Memories********************************************* */

// Stack and Heap

// Stack: used in primitive data types
// Heap: non primitive data types

//stack(call by value)  value change ni hogi kyunki hm uski copy k sath khelte h

let myYoutubename="rajanshusingh.com"

let anotherName= myYoutubename
anothername= "mayanksingh.com"

console.log(myYoutubename)
console.log(anothername)

//heap(call by reference) value change ho jaegi kyunki hm directly value k sath khel rhe h


let user1={

    email: "rajanshusingh258dotcom" ,
    upi: "raj@ybl" ,
    aadhar: "7xx4xx5xx8"



}

let user2= user1

user2.email = "rajanshu69dotcom"

console.log(user1.email)
console.log(user2.email)

