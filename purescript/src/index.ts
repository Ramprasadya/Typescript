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
  readonly city: string = "varanasi";
  constructor(
    public name: string,
    public email: string,
    // private userId: number
  ) {

  }
}

let yadav =  new Form("rhaul","rahul@gmail.com")
