class User{
    email:string
    name : string
    readonly city:string ="Bhadohi"
    constructor(email:string,name:string){
        this.name =  name,
        this.email = email
    }
}

const Ram = new User("ram@gmail.com","ram")

// Ram.city ="Bhadohi" 