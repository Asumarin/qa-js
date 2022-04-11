// Написать функцию, которая принимает два параметра -
// массив и число и выводит индекс элемента массива равный числу

let array = [1, 22, 34, 45, 58, 0, 9, 0];

function indexation (arr, num) {
  // for(i=0; i<arr.length; i++) {
  //   if (arr[i] === num){
  //   return i
  // }
  // }
  return arr.indexOf(num)
};

console.log(indexation(array, 58))