 function addTwoNum(num: number){
      return num + 3 ;
}

console.log(addTwoNum(9))


function singUp(name:string,email:string,isPro:boolean){

}
singUp("ramprasad","ram@gamil.com",false)

// Function what if i dont want to pass an argument 

const SignIn =(name:string,email:string,isPro:boolean=false)=>{
  
}

SignIn("manish","manish@gmail.com")

// Map function 

let heros = ["ironman","spiderman","batman","thor"]

heros.map((hero):string=>{
    return `hero is ${hero}`
})

// when we are not returning  aything 

const ErrorMessage =(error:string):void =>{
    console.log(error)
}
const errMessage =(error:string):never =>{
    throw new Error(error)
}



export{}