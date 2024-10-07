// const coding=['js','cpp','java','python','ruby'];

// const store= coding.forEach((item)=>{
//     console.log(item);
    
// })

// console.log();


//filter--method 1

const numbers=[1,2,3,4,5,6,7,8,9,10]

const newNums= (numbers.filter((num)=>num>4 ))   //filter is important and takes callback function like forEach
console.log(newNums)

//forEach--method 2

const newNums2= []

numbers.forEach((num)=>{
    if (num>4) {
        newNums2.push(num)
    }
})

console.log(newNums2)


//book wali exercise 8:38:20 (vdo part 1)

let books= [{
    title:"The Alchemist",
    genre:"Adventure",
    publish: 1988,
    edition: 2017

},{
    title:"The Da Vinci Code",
    genre:"Mystery",
    publish: 2003,
    edition: 2006


},{
    title:"The Monk Who Sold His Ferrari",
    genre:"Self-help",
    publish: 1997,
    edition: 2003
        
    },{

        title:"The Kite Runner",
        genre:"Drama",
        publish: 2003,
        edition: 2005
    
    },{
        title:"The Lean Startup",
        genre:"Business",
        publish: 2011,
        edition: 2016
    }]

const userBooks= books.filter((bk)=>bk.genre=="Adventure" || bk.publish!==2011)

console.log(userBooks)