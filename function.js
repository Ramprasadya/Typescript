"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoNum(num) {
    return num + 3;
}
console.log(addTwoNum(9));
function singUp(name, email, isPro) {
}
singUp("ramprasad", "ram@gamil.com", false);
// Function what if i dont want to pass an argument 
var SignIn = function (name, email, isPro) {
    if (isPro === void 0) { isPro = false; }
};
SignIn("manish", "manish@gmail.com");
// Map function 
var heros = ["ironman", "spiderman", "batman", "thor"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
