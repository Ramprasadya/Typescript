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