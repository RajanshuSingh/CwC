const user ={
    userName: "rajanshu",
    price:129,

    welcomeMessage:function(){
        console.log(`${this.userName} , Welcome to website`)

    }
}

// user.welcomeMessage()
// user.userName="rajanshu singh sir"
// user.welcomeMessage(
// )

// console.log(this)


// function chai(){

//     let userName="rajanshu"
//     console.log(this.userName)
// }

// chai()

const chai = () => {
    let userName="rajanshu"
    console.log(this.userName)


}

    const love = (num1,num2) => num1+num2
 



console.log(love(3,4))
