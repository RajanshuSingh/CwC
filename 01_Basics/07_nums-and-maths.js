const score = 400;
console.log(score);


const balance = new Number(1000);
console.log(balance);

console.log(typeof(balance.toString().length));
console.log(balance.toFixed(2));

const otherNumber= 123.2343;
console.log(otherNumber.toPrecision(3));

const hundreds= 1000000;

console.log(hundreds.toLocaleString('en-IN'));  //1,000,000



//****************************** Maths *****************************************/

console.log(typeof Math)
console.log( Math.min(1,2,3,4,5))
console.log( Math.max(1,2,3,4,5))
console.log(( Math.random()*10)+1)


const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min + 1) )+min )
