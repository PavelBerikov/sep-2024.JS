/*- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".*/
const h1 = document.createElement('h1');
h1.innerText = 'Hello!!!'
const button = document.createElement('button');
button.classList.add('btn')
button.innerText = 'click'
document.body.append(h1, button)
button.onclick = function (eu) {
    eu.preventDefault()
    h1.classList.toggle('hide')
}
/*- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача*/
const buttonElement = document.getElementById('bt');
const inputElement  = document.getElementById('inpt');
buttonElement.onclick = function (eu) {
    eu.preventDefault()
    if (inputElement.value >= 18){
        console.log('Done!')
    }else if (inputElement.value < 18){
        console.log('Close')
    }
}
/*Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом*/
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const ageInput = document.getElementById('age');
const userBt = document.getElementById('userBt');

userBt.onclick = function (eu) {
    eu.preventDefault()
    const box = document.createElement("div");
    box.style.display = 'flex'
    box.style.gap = '20px'
    const boxAge = document.createElement("div");
    const boxName = document.createElement("div");
    const boxSurname = document.createElement("div");
    boxName.innerHTML = `Name - ${nameInput.value}`
    boxSurname.innerText = `Surname - ${surnameInput.value}`
    boxAge.innerText = `${ageInput.value} y.o.`
    box.append(boxName, boxSurname, boxAge)
    document.body.appendChild(box)

}
/*є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1*/
const block = document.createElement('div');
const h2 = document.createElement('h2');
const count = localStorage.getItem('count');
h2.innerText = `${count}`
block.append(h2)
document.body.append(block)
window.addEventListener("beforeunload", function () {
    if (!count || count === 'NaN'){
        localStorage.setItem('count', '0')
    }else if (parseInt(count) >= 0){
        localStorage.setItem('count', `${parseInt(count) + 1}`)
    }
})
/*Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM*/
const visits = localStorage.getItem('visits');
window.addEventListener('load', function (eu){
    const time = new Date()
    const visit = {
        date: `${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`,
        time: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    }
    const item = localStorage.getItem('visits');
    if (!item){
        const arr = []
        arr.push(visit)
        localStorage.setItem('visits', `${JSON.stringify(arr)}`)
    }else if (item){
        const arrClone = JSON.parse(item)
        arrClone.push(visit)
        localStorage.setItem('visits', `${JSON.stringify(arrClone)}`)

    }


})
/*створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок*/
const convert = document.createElement('input');
document.body.append(document.createElement('h3').innerText = 'Converter of measurement units')
convert.type = 'number'
convert.placeholder = 'kg'
document.body.append(convert)
convert.oninput = function () {
    console.log(this.value * 2.2 + 'lb')
}
/*В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
сигнатура функції -
addToLocalStorage(arrayName:string,objToAdd:any{}):void*/
const addToLocalStorage = (arrayName,objToAdd) => {
    const arr = JSON.parse(localStorage.getItem(`${arrayName}`));
    if (arr){
        arr.push(objToAdd)
        localStorage.setItem(`${arrayName}`, `${JSON.stringify(arr)}`)
    }else {
        console.log('нет нужного массива')
    }
}
localStorage.setItem('Users', `${JSON.stringify([])}`)
addToLocalStorage('Users', {name: 'Vasya', age: 22})
addToLocalStorage('Users', {name: 'Misha', age: 23})
/* Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.*/
const raw = document.getElementById('raw');
const column = document.getElementById('column');
const txt = document.getElementById('txt');
const createBtn = document.getElementById('create');
const father = document.createElement('div');
createBtn.onclick = function (eo) {
    eo.preventDefault()
    father.style.display = 'grid'
    father.style.gridTemplateRows = `repeat(${raw.value}, 1fr)`
    father.style.gridTemplateColumns = `repeat(${column.value}, 1fr)`
    const count = parseInt(column.value) * parseInt(raw.value)
    let i = 0
    while (i < count){
        const divElement = document.createElement("div");
        divElement.innerText = `${txt.value}`
        father.append(divElement)
        i++
    }
}
document.body.append(father)
/* (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
 при перезавантаженні сторінки до значаення додається по 10грн, але !!!
 зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
 При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається*/

if (!localStorage.getItem('grn')){
    localStorage.setItem('grn', '100')
}
const grn = parseInt(localStorage.getItem('grn'))
window.onload = function () {
    const loadTime = new Date().getTime()
    const dif = loadTime - parseInt(localStorage.getItem('time'))
    if (dif >= 10000){
        localStorage.setItem('grn', `${grn + 10}`)
    }
    localStorage.setItem('time', `${loadTime}`)
}
const h1HTMLElement = document.createElement('h1');
h1HTMLElement.innerText = `${grn}грн`
document.body.append(h1HTMLElement)
/*PAGINATION
 зробити масив на 100 об'єктів та дві кнопки prev next
 при завантажені сторінки з'являються перші 10 об'єктів.
 При натисканні next виводяться наступні 10 об'єктів
 При натисканні prev виводяться попередні 10 об'єктів*/