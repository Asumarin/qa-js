// Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
// Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
// Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
// Выполнить явное преобразование(number, string, boolean)

let a = 20;
let b = true;
let c = '123';

let answerA = a + b;
let answerB = c + b;
let answerC = a + c;

console.log(answerA)
console.log(answerB)
console.log(answerC)
console.log('')

let answerD = a * b;
let answerE = c * b;
let answerF = a * c;

console.log(answerD)
console.log(answerE)
console.log(answerF)
console.log('')

let answerG = a / b;
let answerH = c / b;
let answerI = a / c;

console.log(answerG)
console.log(answerH)
console.log(answerI)
console.log('')

b = String(b)
console.log(typeof b)

a = Boolean(a);
console.log(typeof a)

c = Number(c);
console.log(typeof c)