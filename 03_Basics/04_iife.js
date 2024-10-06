//Immediately Invoked Function Expression (IIFE)
//IIFE is a JavaScript function that runs as soon as it is defined.
//It is a design pattern which is also known as Self-Executing Anonymous Function and contains two major parts.
//The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
//This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
//The second part creates the immediately executing function expression () through which the JavaScript engine will directly interpret the function.
//The JavaScript engine treats the function as an expression and the function runs as soon as it is defined.
//The function can receive arguments as well.
//The IIFE is a common pattern for creating local scopes.

// INTERVIEW: global scope ke pollution se problem hoti hai kayi baar usko htane k liye iife ka use hoga


( function chai(){       //named IIFE because it has a name Chai
    console.log(`DB CONNECTED`)
})();   //here semicolon is important so that the 2nd fucntion aurCode gets connected

((name)=> {              //not a named IIFE because it has no name and uses arrow func
    console.log(`DB CONNECTED TWO ${name}`)
}) ('rajanshu')


// IIFE is used to avoid global scope pollution