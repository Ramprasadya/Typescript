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
        this._courseCount = 1;
        this.city = "varanasi";
    }
    get getAppleEmail() {
        return `apple value ${this.email}`;
    }
    // getter
    get courseCount() {
        return this._courseCount; // we can not get direct value of a private value , for getting value we use getter 
    }
    // setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("CourseNum can should be 1");
        }
        this._courseCount = courseNum;
    }
}
let yadav = new Form("rhaul", "rahul@gmail.com");
