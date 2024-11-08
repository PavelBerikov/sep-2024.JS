/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/
for (let i = 0; i < 10; i++) {
    document.write(`<div>Lorem ipsum dolor.</div>`)
}
/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/
for (let i = 0; i < 10; i++) {
    document.write(`<div>Lorem ipsum dolor. ID - ${i+1}</div>`)
}
/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/
let a = 0
while (a < 20) {
    document.write(`<h1>Lorem ipsum.</h1>`)
    a++
}
/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/
a = 0
while (a < 20) {
    document.write(`<h1>Lorem ipsum.${a+1}</h1>`)
    a++
}
/*- Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону*/
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`)
}
document.write(`</ul>`)
/*Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон*/
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let i = 0; i < products.length; i++) {
    document.write(`<div class='product-card'>`)
    document.write(`<h3>${products[i].title}. Price - ${products[i].price}</h3>`)
    document.write(`<img src='${products[i].image}'>`)
    document.write(`</div>`)
}
/*за допомоги циклу вивести:
 - користувачів зі статусом true
 - користувачів зі статусом false
 - користувачів які старші за 30 років*/
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users) {
    if (user.status){
        console.log(user)
    }
}
for (const user of users) {
    if (!user.status){
        console.log(user)
    }
}
for (const user of users) {
    if (user.age > 30){
        console.log(user)
    }
}
/*1. Створити пустий масив та :
       a. заповнити його 50 парними числами за допомоги циклу.
       b. заповнити його 50 непарними числами за допомоги циклу.
       c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
       d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)*/
{
    let arr = [];
    arr[0] = 1
    let a = 1;
    let b = 0;

    for (let i = 2; i < 50; i+=2) {
        arr[i] = a += 2
    }
    for (let i = 1; i < 50; i+=2) {
        arr[i] = b += 2
    }
    for (let i = arr.length; i < 70; i++) {
            arr[i] = Math.round(Math.random())
    }
    for (let i = arr.length; i < 90; i++) {
            arr[i] =Math.round(Math.random() * (732 - 8) + 8)
    }
    /* 2. Вивести за допомогою console.log кожен третій елемен
 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.*/
    for (let i = 2; i < arr.length ; i+=3) {
        console.log(arr[i])
    }
    for (let i = 2; i < arr.length ; i+=3) {
        let a = arr[i] % 2
        if (!a){
            console.log(arr[i])
        }
    }
    /*4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив*/
    let arr2 = [];
    for (let i = 2; i < arr.length ; i+=3) {
        let a = arr[i] % 2
        console.log(a)
        if (!a){
            arr2[i] = arr[i]
            /*arr2.push(arr[i])*/
        }
    }
    console.log(arr2)
    /*5. Вивести кожен елемент масиву, сусід справа якого є парним*/
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i] + 1
        let y = x % 2
        if (!y){
            console.log(arr[i])
        }
    }
}
/*6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.*/
let check = [100,250,50,168,120,345,188];
let c = 0
for (const price of check) {
    c += price
}
console.log(c / check.length)
/*7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.*/
{
    let arr = [];
    let arr2 = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random() * (10 - 1) + 1)
    }
    for (let i = 0; i < arr.length; i++) {
        arr2[i] = arr[i] * 5
    }
    console.log(arr2)
}
/*8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.*/
let random = [
    45, 'World', true, 'Hello', 78, false, 'World', 12,
    'Hello', true, 34, 'World', false, 'Hello', true,
    67, false, 'World', 23, 'Hello'
];

let nums = [];
for (let i = 0; i < random.length; i++) {
    if (typeof random[i] === 'number'){
        nums[i] = random[i]
    }
}
/*- Дано 2 масиви з рівною кількістю об'єктів.
З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
]*/
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let newArr = []
/*for (let i = 0; i < usersWithId.length; i++) {
    let user = usersWithId[i]
    let address = citiesWithId[i]
    for (let j = 0; j < usersWithId.length; j++) {
        if (user.id === address.user_id){
            newArr[i] = {
                user:user,
                address:address
            }
        }
    }*/
   /* let address = citiesWithId[i]
    if (user.id === address.user_id){

    }
}*/
for (let i = 0; i < usersWithId.length; i++) {
    let user = usersWithId[i]
    for (let j = 0; j < citiesWithId.length; j++) {
        let address = citiesWithId[j]
        if (user.id === address.user_id){
            newArr[i] = {
                user:user,
                address:address
            }
        }

    }
}
console.log(newArr)
/*- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.*/
{
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random() * (10 - 1) + 1)
    }
    for (const arrElement of arr) {
        if (arrElement % 2 === 0){
            console.log(arrElement)
        }
    }
}
/*- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.*/
{
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random() * (10 - 1) + 1)
    }
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr2[i] = arr[i]
    }
    console.log(arr2)
}
/*
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.*/
/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.*/
let letters = [ 'a', 'b', 'c']
let i = 0
let word =''
while (i < letters.length){
    word += letters[i]
    i++
}
console.log(word)
word = ''
for (const letter of letters) {
    word += letter
}
console.log(word)
word = ''
for (let j = 0; j < letters.length; j++) {
    word += letters[j]
}
console.log(word)