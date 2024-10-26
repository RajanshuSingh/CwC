# Projects related to DOM
## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 01

 ```javascript

const buttons= document.querySelectorAll('.button')
const body= document.querySelector("body")

buttons.forEach((button)=>{
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === "grey"){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === "white"){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === "purple"){
      body.style.backgroundColor= e.target.id;
    }

    else{
      body.style.backgroundColor= e.target.id;
    }

  });
});


```


