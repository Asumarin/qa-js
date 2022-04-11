// Реализовать цикл, который выводит в консоль нечетные числа
function isOdd(num){
    return (num % 2)
}


function logging(n){
    var arr = [];
    for (var i = 1; i < n; i++){
        if (isOdd(i)){
            arr.push(i);
        }
    }
    console.log(arr); 
}

logging(100);