//reduce 

const myNums=[1,2,3];

const mySum=myNums.reduce((acc,num)=>{
    console.log(`acc: ${acc } and  num: ${num}   `)
    return acc+num;           //intial value = 0
}, 0 )

console.log(mySum)

const myTotal= myNums.reduce((acc,num)=>{ return acc + num}, 0)  //arrow function declaration
console.log(myTotal)