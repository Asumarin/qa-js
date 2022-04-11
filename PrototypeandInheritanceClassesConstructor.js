//Создать 2 объекта: animal и cat, в объект animal добавить свойство
//move, объект cat должен наследовать свойство move, 
//реализовать и через прототипы и через классы.

let animal = {
   move: true
};
let cat = {};

 cat.__proto__ = animal;
 console.log(cat.move);

// class animal {
//     constructor(name){
//         this.name = name;
//     }
//     move(name){
//         console.log(`${this.name} побежал(а)!`);
//     }
// }

// class cat extends animal{
//     bite(){
//         console.log(`${this.name} делает кусь!`);
//     }
// }

// let white = new cat('Ася');

// white.move();
// white.bite();