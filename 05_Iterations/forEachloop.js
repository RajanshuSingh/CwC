const coding=["js","cpp","java","python"];

// coding.forEach(  function (anyValue){
//     console.log(anyValue) })

//    coding.forEach( (item)=>{
//     console.log(item)
//     })

//     function printMe(halwa){
//         console.log(printMe)
//     }

// coding.forEach(printMe)

coding.forEach( (item,index,arr)=>{
    console.log(`The value of ${item} is ${index} and the array is ${arr}`)
    })

    //[{},{},{}]

    const myCoding =[{
        languageName:"Javascript",
        languageFile:"Js",
        languageType:"Scripting",
    },
    {
        languageName:"Cpp",
        languageFile:"c++",
        languageType:"Compiled",
    },
    {
        languageName:"Java",
        languageFile:"j",
        languageType:"Compiled",
    },
    {
        languageName:"Python",
        languageFile:"py",
        languageType:"Scripting",
    }
]

myCoding.forEach( (item,index,arr)=>{

    console.log(item.languageName)  //item is the object and we are accessing the key of the object
                                  // this is how we can access inside the object
    
    })