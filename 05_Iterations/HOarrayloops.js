//for of loop - used for arrays

// const heroes = ["Superman", "Batman", "flask", "Ironman"];
// const obj=[{},{},{}]

const arr=[1,2,3,4,5,6,7,8,9,10]

for (const variableName of arr) {         // for (const/var variableName of jispeloopLgana ho){}
  // console.log(variableName)
}

const greet="Hello World"
for (const letter of greet) {
    if(letter==" "){
        break;
    }
    console.log(letter)
}

//Maps

const map = new Map();
map.set("name","rajanshu")
map.set("age",23)
map.set("height","5.9")
map.set("weight",70)
map.set("BMI",23)


console.log(map)

for (const [key,value] of map) {      //destructuring of map(array) into key and value:syntax 
    console.log(`Key is ${key} and value is ${value}`)
}

const obj= {
    name:"rajanshu",
    age:23,
    height:"5.9",
    weight:70,
    BMI:23
}

for(const [key,value] of obj){
    console.log(`Key is ${key} and value is ${obj[key]}`)
}