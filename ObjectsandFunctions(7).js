// Напишите функцию, которая определяет является ли число простым или нет

function checkIfSimple(number){
    if(number === 0) return false
    if(number === 1) return true

    for(i = 2; i < number; i++){
        if(number % i === 0) {
            return false
        }
    }

    return true
}

console.log(checkIfSimple(12))