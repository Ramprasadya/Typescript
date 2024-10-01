let  score : number | string = 3

score = 44
score = "44"

type User = {
    name:string,
    id :number
}

type Admin = {
    userName:string,
    id:number
}

let member : User | Admin = {name:"rhul",id:344}

member

// If i am not checking the what is id type then we get error for we to check it 
function GetUserId(id:number|string){
   if(typeof id === "string"){
     id.toLocaleLowerCase()
   }else{
    id +2
   }
}

GetUserId("e5")


const data1: number[] = [1,2,334]
const data2: string[] = ["1","45","22"]
// const data3 : string[] | number[] = [34,56,"34"] //In this case either you can store string or only number 

const data4 : (number|string|boolean)[] = [12,"34",false]  // this is the way to pass multiple types 

let air : "aisle" | "window" | "prime"

air = "aisle"
// air = "crew" //it will now allow 