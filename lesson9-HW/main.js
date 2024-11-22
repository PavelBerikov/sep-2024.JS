/*- створити блок,
- додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.
*/
let divElement = document.createElement('div');
divElement.classList.add('wrap', 'beta', 'collapse', 'alpha');
divElement.style.background = 'red';
divElement.style.color = 'snow';
divElement.style.fontSize = '22px'
divElement.innerText = 'box'
document.body.append(divElement)
const div = divElement.cloneNode(true)
document.body.append(div)
/*- Є масив:
['Main','Products','About us','Contacts']
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
*/
const arr = ['Main','Products','About us','Contacts']
const ul = document.createElement('ul');
for (const item of arr) {
    const li = document.createElement('li');
    li.innerText = item
    ul.append(li)
}
document.body.append(ul)
/*- Є масив
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.
*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const item of coursesAndDurationArray) {
    const div = document.createElement('div');
    const h1 = document.createElement("h1");
    h1.innerText = item.title
    const h2 = document.createElement('h2');
    h2.innerText = item.monthDuration + ' month'
    div.append(h1, h2)
    document.body.appendChild(div)
}
/*За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
Завдання робити через цикли.*/
for (const item of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('item')
    const h1 = document.createElement('h1');
    h1.innerText = item.title
    h1.classList.add('heading')
    const p = document.createElement('p')
    p.classList.add('description')
    p.innerText = item.monthDuration
    div.append(h1, p)
    document.body.append(div)
}
