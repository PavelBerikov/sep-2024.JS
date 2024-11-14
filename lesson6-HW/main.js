/*- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/
console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length)
/*- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/
console.log('hello world'.toUpperCase(), 'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase())
/*- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
console.log('HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase())
/*- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/
let str = ' dirty string   '
console.log(str.trim())
/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/
{
    let str = 'Ревуть воли як ясла повні';
    const stringToArray = (str) => str.split(' ')
    console.log(stringToArray(str))
}
/*- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.*/
console.log([10,8,-7,55,987,-1011,0,1050,0].map(value => value.toString()))
/*- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]
*/
let nums = [11,21,3];
const sortNums = (arr, direction) => {
    if (direction === 'ascending'){
        console.log(arr.sort((a, b) => a - b))
    }else if (direction === 'descending'){
        console.log(arr.sort((a, b) => b - a))
    }
}
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
/*-- відсортувати його за спаданням за monthDuration*/
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration))
/*-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5))
/*-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/
