 //dates

//  let myDate = new Date()
//  console.log(myDate.toLocaleString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toString());
//  console.log(myDate.toLocaleDateString());

//  let myCreatedDate = new Date(2023,0,23)
// //  let myCreatedDate = new Date(2023,0,23,5,3)
// //  let myCreatedDate = new Date("2023-01-23")
//     let myCreatedDate = new Date("01-14-2023")

//  console.log(myCreatedDate.toString())
//     console.log(myCreatedDate.toLocaleString())


    // let myTimeStamp = Date.now()
    
    // console.log(myTimeStamp)
    // console.log(myCreatedDate.getTime())   //milliseconds
    // console.log(myCreatedDate.getFullYear())  //year
    // console.log(Math.floor(Date.now()/1000)  )

    let newDate= new Date()
    // console.log(newDate)


    let x = newDate.toLocaleString('default', {weekday: 'long'})

    console.log(x)
