interface User {
    readonly db : string // you can not  change this value if readony value is 
    name:string,
    userId:number,
    userName?:string // optional value 
    // Starttrial : ()=> string // one waay 
    Starttrial():string // second way 
    CuponCode(code:string,off:number):number

}


const hitesh:User = {
    db:"2334",
    name:"hetesh",
    userId:34   ,
    Starttrial:()=>{
        return ""
    },
    CuponCode:(code:"hitesh",off:20)=>{ // No matter what function i applied but rturn will be a number 
    return 10
    }
}

