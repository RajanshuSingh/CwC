function sayMyname(num1 ,num2){      //  ( parameters)

  
   let result =num1+num2;
   return result;

   console.log("halwa")


}

sayMyname(3, undefined)    //    (arguments)


const result = sayMyname(3,4)
// console.log(result)  //undefined   


// ***********************************************************************************


function loginUserMessage(userName){

    if(!userName){
        return "Please provide a username"

    }
   

    return `Welcome ${userName} to our website`
}



const message=loginUserMessage()

// console.log(message)

//

function calculateCartPrice(val1,val2, ...num1){     // rest operator

    return num1
}

const totalPrice=calculateCartPrice(5,10,15,20,25,30,35,40,45,50)
console.log(totalPrice);


const user = {
    username: "rajanshu",
    email: "rajanshusignh258",
    password: "123456",
    price: 199 ,

}

function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)

}

    handleObject(user)

handleObject({
    username: "rajansh" ,
    price: 199
})

const myArray=[1,2,3,4,5,6,7,8,9,10]

function returnSecondValue(getArray){

     return getArray[1];

}

console.log(returnSecondValue(myArray))
