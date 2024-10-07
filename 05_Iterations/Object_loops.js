const myObject ={
    a: 1,
    b: 2,
    c: 3
}

for (const key in myObject) {
    console.log(`Key is ${key} and value is ${myObject[key]}`)  // key to object nikalne ka tareeka 
                                                                // myObject[key] is used to get the value of the key
}

const arr=['a','b','c']

for(const key in arr){
    // console.log(`the value of halwa ${arr}`)
    console.log(arr[key])  // keys of arrays are nothing but indexes
}


// const map = new Map();   // here, map is not iterable 
// map.set("name","rajanshu")
// map.set("age",23)
// map.set("height","5.9")
// map.set("weight",70)
// map.set("BMI",23)

// for(const key in map){
//     console.log(key)      
// }


//arrays-for of 
//objects- for in