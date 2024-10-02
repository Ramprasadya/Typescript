"use strict";
class User {
    constructor(email, name) {
        this.city = "Bhadohi";
        (this.name = name), (this.email = email);
    }
}
const Ram = new User("ram@gmail.com", "ram");
// Ram.city ="Bhadohi"
class Form {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.city = "varanasi";
    }
}
let yadav = new Form("rhaul", "rahul@gmail.com");
