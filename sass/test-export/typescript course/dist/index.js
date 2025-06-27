"use strict";
class Player {
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn() {
        console.log("Loggin In");
    }
    logOut(msg) {
        console.log(`Logged Out, ${msg}`);
    }
}
let player1 = new Player(100, "Elzero", 95);
console.log(player1.id);
console.log(player1.title);
console.log(player1.level);
player1.logIn();
player1.logOut("Good Bye");
