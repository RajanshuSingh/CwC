const marvelHeroes= ["thor", "IronMan", "SpiderMan"," CaptainAmerica"]

const dcHeroes=["batman","SuperMan","Flash"]

// marvelHeroes.push(DC)
// console.log(marvelHeroes)  //  

// var x = marvelHeroes.concat(dcHeroes)
// console.log(x)  // [ 'thor', 'IronMan', 'SpiderMan', ' CaptainAmerica', 'batman', 'SuperMan', 'Flash' ]


const Heroes= [...marvelHeroes, ...dcHeroes]
console.log(Heroes)

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usableArray= anotherArray.flat(Infinity)
console.log(usableArray);


console.log(Array.isArray("rajanshu"))
console.log(Array.from("rajanshu"))
console.log(Array.from([1,2,3,4,5]))

const  score1= 100
let score2= 200
 let score3=300

 console.log(Array.of(score1,score2,score3))
