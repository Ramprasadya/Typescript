let obj = {
    name:"Ram",
    email:"ram@gmail.com",
    isPaid : true
}


function CreateUser({name:string,isPaid:boolean}){}

// When direct try to add a new object that not mention above {name:"ram",isPaid:false,email:"ram@gmail.com"} get error
// CreateUser({name:"ram",isPaid:false,email:"ram@gmail.com"})

// but 

let newUser = {name:"ram",isPaid:false,email:"ram@gmail.com"}
CreateUser(newUser) //And now this is workin fine 

// Object in return 
function CreateCourse():{name:string,price:number}{
        return {name:"reactjs",price:299}
}

type User={

    name:string;
    email:string;
    isActive:boolean
}

function CreateUsers(user:User):User{      //must return a value if (user:User):User
   return {name:"",email:"",isActive:true}
}


type UserOne ={
    readonly _id : string;
    name:string;
    email:string;
    isActive:boolean;
    creditCardDetails?:number;
}

let myUser:UserOne = {
     _id:"12345",
     name:"manish",
     email:"m@gmail.com",
     isActive:true
}

myUser.email = "g@g.com"
// myUser._id : "rgerg4"


type cardNumber = {
    cardNumber: number
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}

