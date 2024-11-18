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
console.log(coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, ...value}
}))
/*=========================
описати колоду карт (від 6 до туза без джокерів)
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше

{
cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
value: '', // '6'-'10', 'ace','jack','queen','king','joker'
color:'', // 'red','black'
}*/
let cards = []
let cardSuit = ['spade', 'diamond','heart', 'clubs']
let value = [ '6', '7', '8', '9', '10', 'ace','jack','queen','king']
for (const suit of cardSuit) {
    for (const item of value) {
        if (suit === 'spade' || suit === 'clubs'){
            cards.push({cardSuit: suit, value: item, color: 'black'})
        }else if(suit === 'heart' || suit === 'diamond'){
            cards.push({cardSuit: suit, value: item, color: 'red'})
        }
    }
}
console.log(cards.filter(value => value.cardSuit === 'spade' && value.value === 'ace'))
console.log(cards.filter(value => value.value === '6'))
console.log(cards.filter(value => value.color === 'red'))
console.log(cards.filter(value => value.cardSuit === 'diamond'))
console.log(cards.filter(value => value.cardSuit === 'clubs' && (value.value >= 9 || !parseInt(value.value) )))
/*
Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
spades:[],
diamonds:[],
hearts:[],
clubs:[]
}*/
console.log(cards.reduce((accum, card) => {
    switch (card.cardSuit){
        case 'spade':
            accum.spades.push(card)
            break
        case 'clubs':
            accum.clubs.push(card)
            break
        case 'heart':
            accum.hearts.push(card)
            break
        case 'diamond':
            accum.diamonds.push(card)
            break

    }
    return accum
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}))
/*взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker*/
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(value => value.modules.includes('sass')))
console.log(coursesArray.filter(value => value.modules.includes('docker')))