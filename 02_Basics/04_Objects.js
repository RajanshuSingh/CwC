const tinderUser= new Object();

tinderUser.id="123"
tinderUser.name="Rajanshu"
tinderUser.age=21
tinderUser.location="India"
tinderUser.email="rajanshusingh258"
tinderUser.isLoggedin=true

// console.log(tinderUser)         \

const regularUser={
    id:"1234",
    fullName: {
        userfullname: {firstName:"Rajanshu",
        lastName:"Singh"}
    }, 
    age:21,
    location:"India",
    email:"regularUserdotcom",
}

// console.log(regularUser.fullName?.userfullname?.firstName)


const obj1= {1:"one",2:"two",3:"three"}
const obj2= {4:"four",5:"five",6:"six"}

const obj3= {...obj1,...obj2}  //aisa krna h  (90% times)
const obj4={ obj1,obj2}  //aise ni krna h
const obj5=Object.assign({}, obj1,obj2)  //aise bi  kr skte h


const users=[
    {name:"Rajanshu",age:21},
    {name:"Singh",age:22},
    {name:"Rajanshu Singh",age:23},
    {name:"John",age:23},
    {name:"Doe",age:23},
    {name:"Jane",age:23},
]

console.log(users[1].age)

// console.log(obj3)
// console.log(obj5)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser));  //important -the data type is array so we can run loop on it and access the values 
// console.log(Object.values(tinderUser));  //important 
// console.log(Object.entries(tinderUser));  //important 



const course ={
    name: "jsin hindi" ,
    price: "free",
    duration: "2 months",
    teacher: " Hitesh sir"

}

// course.name="js in english";

const {teacher: t}= course
const {name: n, price:p}= course

console.log(t,n,p) 
// (
// const navbar=()=>{

// }

// navbar(company="rajanshu")  //used in react)

//JSON

// {
//     name:"Rajanshu",
//     age:21,
//     location:"India",
//     price: "free" 


// }

{
   [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
  {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }