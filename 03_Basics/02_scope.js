let  a=10
const b=20

// var c =30

// console.log(a)
// console.log(b)
// console.log(c)


{} // scope(when it comes with a function)

if(true){
    let a=10
    const b=20
    // console.log("Inner: ", a)
    // var c=30   

                 // var is not block scoped but function scoped 
                // let and const are block scoped
                // let and const are not hoisted but var is hoisted
                // let and const are not redeclared but var is redeclared
                // let and const are not reassigned but var is reassigned
            
}

// console.log(a)      
// console.log(b)
// console.log(c)

function  one(){
    const userName="Rajanshu"

    function two(){
        const website="youTube"
        console.log(userName)

    }

    // console.log(website) //error //ye andar tha function

    // two()
}

one() 

// two can access one but one can't access two  



if(true){
    const userName="rajanshu"

    if(userName==="rajanshu"){
const website="rajxyz"
// console.log(userName+website)//
    }
    // console.log(website);

}

// console.log(userName)//


//**************************Interesting******************************* */

function addOne(num){

    return num+1;

}

console.log(addOne(5))

const addTwo = function(num){       //addOne--is a function
                                    //addTwo-- is a function but can also be called as an expression
    return num+2
}

console.log(addTwo(5))