// В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

let terminal = {
name : 'kelt',
detect(enteredName){
if (enteredName === terminal.name){
    return 'hello ' + enteredName
}
else{
    return 'no such name'
}
} 
}

console.log(terminal.detect('kelt'))