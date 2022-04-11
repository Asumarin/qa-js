// Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
// Дан массив производителей автомобилей, преобразовать массив в стрbоку и обратно в массив
// Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello

let arrMovies = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5'];
let arrCars = ['manufacturer1','manufbbcturer3','manufacturer4'];
let myFriends = ['Mark', 'Dima', 'Nikita'];

//1
for (let movie of arrMovies){
    console.log(movie);
}

//2
let str = arrCars.toString(arrCars);
console.log(str)
let arrAgain = str.split(',')
console.log(arrAgain)

//3
myFriends = myFriends.map(item => 'Hello, ' + item);
console.log(myFriends)