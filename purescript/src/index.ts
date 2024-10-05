class User {
  email: string;
  name: string;
  readonly city: string = "Bhadohi";
  constructor(email: string, name: string) {
    (this.name = name), (this.email = email);
  }
}

const Ram = new User("ram@gmail.com", "ram");

// Ram.city ="Bhadohi"

class Form {

  private _courseCount = 1;

  readonly city: string = "varanasi";
  constructor(
    public name: string,
    public email: string,
    // private userId: number
  ) {

  }


  get getAppleEmail():string{
    return `apple value ${this.email}`
  }
  // getter

  get courseCount():number{
    return this._courseCount  // we can not get direct value of a private value , for getting value we use getter 
  }

  // setter

  set courseCount(courseNum){
    if(courseNum <=1){
      throw new Error ("CourseNum can should be 1")
    }

    this._courseCount = courseNum

  }

}

let yadav =  new Form("rhaul","rahul@gmail.com")
