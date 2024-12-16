/*зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
При натисканні next виводяться наступні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів*/
const users = []
let i = 0;
while (i < 100) {
    users.push({id: users.length + 1, name: 'Vasya' + (users.length + 1)})
    i++
}


if (!localStorage.getItem('count1') && !localStorage.getItem('count2')){
    localStorage.setItem('count1', '1')
    localStorage.setItem('count2', '10')
}

const divElement = document.createElement('div');
document.body.appendChild(divElement)
const prev = document.createElement("button")
const next = document.createElement("button")
prev.innerText = 'prev'
next.innerText = 'next'


document.body.append(prev, next)
const foo = () => {
    const count1 = localStorage.getItem('count1');
    const count2 = localStorage.getItem('count2');
    for (const user of users) {
        if (user.id >= count1 && user.id <= count2) {
            const div = document.createElement('div');
            div.innerText = `${user.id} - ${user.name}`
            divElement.append(div)
        }
    }
    prev.disabled = parseInt(localStorage.getItem('count1')) <= 1;
    next.disabled = parseInt(localStorage.getItem('count2')) >= users.length;
}
foo()


next.addEventListener('click', function (eu) {
    eu.preventDefault()
    const count1 = localStorage.getItem('count1');
    const count2 = localStorage.getItem('count2');
    localStorage.setItem('count1', parseInt(count1) + 10 + '')
    localStorage.setItem('count2', parseInt(count2) + 10 + '')
    divElement.innerText = ''
    foo()



})

prev.addEventListener('click', function (eu) {
    eu.preventDefault()
    const count1 = localStorage.getItem('count1');
    const count2 = localStorage.getItem('count2');
    localStorage.setItem('count1', parseInt(count1) - 10 + '')
    localStorage.setItem('count2', parseInt(count2) - 10 + '')
    divElement.innerText = ''
    foo()


})
