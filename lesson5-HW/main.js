/*- створити функцію яка об числює та повертає площу прямокутника зі сторонами а і б*/
const areaRec = (a, b) => a * b;
console.log(areaRec(2,3))

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/
const areaCircle = (r) => Math.PI*(r**2)
console.log(areaCircle(3))

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
const areaCone = (r, h) => 2 * Math.PI * r * (r + h)
console.log(areaCone(2, 3))

/*- створити функцію яка приймає масив та виводить кожен його елемент*/
const iter = (arr) => {
    for (const item of arr) {
        console.log(item)
    }
}
iter([1, 2, 3, '', true])
/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
const creatorP = (txt) => document.write(`<p>${txt}</p>`)
creatorP('lorem5 lorem5 lorem5 lorem5 lorem5')
/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
const creatorUl = (txt) => {
    document.write(`<ul>`)
    document.write(`<li>${txt}</li>`)
    document.write(`<li>${txt}</li>`)
    document.write(`<li>${txt}</li>`)
    document.write(`</ul>`)
}
creatorUl('lorem')
/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
const creatorUlHard = (txt, count) => {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`)
}
creatorUlHard('lorem', 5)
/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
const arr = [1, 'max', 2, true, 'proof']
const transformerArr = (arr) => {
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
transformerArr(arr)
/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "David", age: 35 },
    { id: 5, name: "Eva", age: 28 }
];
const divCreator = (arr) => {
    for (const item of arr) {
        document.write(`<div>`)
        document.write(`Id - ${item.id} `)
        document.write(`Name - ${item.name} `)
        document.write(`Age - ${item.age}`)
        document.write(`</div>`)
    }
}
divCreator(users)
/*- створити функцію яка повертає найменьше число з масиву*/
const nums = [-100, 2, 4, 6, 22, 11, -2];
const minNum = (arr) => {
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]){
            min = arr[i]
        }
    }
    console.log(min)
}
minNum(nums)
/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/
const arrNums = [1, 2, 3, 4, 5]
const sum = (arr) => {
    let count = 0;
    for (const item of arr) {
        count += item
    }
    return count
}

console.log(sum(arrNums))
/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах*/
let newArr = [1, 2, 3, 4]
const swap = (arr, index1, index2) => {
    let id1 = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = id1
    console.log(arr)
}

swap(newArr, 2,3)
/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    if (exchangeCurrency === 'EUR') {
        for (const item of currencyValues) {
            if (item.currency === 'EUR') {
                console.log(sumUAH / item.value)
            }
        }
    } else if (exchangeCurrency === 'USD') {
        for (const item of currencyValues) {
            if (item.currency === 'USD') {
                console.log(sumUAH / item.value)
            }
        }
    }
}
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')



