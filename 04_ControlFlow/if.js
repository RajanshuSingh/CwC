// if(condition){
//   // code to run if condition is true
// }

// <,>,<=,>=,==,!=,===,!== 
// === checks for type also (type checking) (strict equality)
// !== checks for type also
// == checks only for value
// != checks only for value
// &&, ||, ! are logical operators


//shorthand notation

// if(condition) statement; // if condition is true, statement will be executed

// if(condition) statement1; else statement2; // if condition is true, statement1 will be executed, else statement2 will be executed

// if(condition) statement1; else if(condition2) statement2; else statement3; // if condition is true, statement1 will be executed, else if condition2 is true, statement2 will be executed, else statement3 will be executed

//ternary operator 
//syntax: condition ? statement1 : statement2


const balance = 1000;   

// if(balance <500){
//     console.log("less than 500");
// }
// else if(balance <750){
//     console.log("less than 750");
// }
// else if(balance <1000){
//     console.log("less than 1000");
// }
// else{
//     console.log("less than 1200");
// }


const userLoggedIn = false;
const debitCard = true;

 if(userLoggedIn && debitCard){
    console.log("User can make payment");
}
else if(debitCard==true){
    console.log("User have to login first to make payment");
}
else if(userLoggedIn==true){
    console.log("User have to add debit card to make payment");
}

else{
    console.log("User have to login and add debit card to make payment");
}