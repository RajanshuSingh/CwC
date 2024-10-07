//for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

for (let index = 0; index < 10; index++) {
    let element = index;
    console.log(element);
}

//keywords : break and continue

// for (let index = 1; index <= 20; index++) {
//  console.log(`Value of i is ${index}`);
//     if(index==5){
//         console.log("favorite number is 5 ")
//          break;
//     }
// }  

// continue: skip the current iteration and continue with the next iteration
// continue one mistake and skip

for (let index = 1; index <= 20; index++) {
    if(index%2==0){
        continue;
    }
    console.log(`Value of i is ${index}`);
}