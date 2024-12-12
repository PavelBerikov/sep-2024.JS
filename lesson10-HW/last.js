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
console.log(users)
// document.createElement("div")
const foo = (value) => {
    for (const user of users) {
        if (user.id <= value) {
            document.write(`<div>${JSON.stringify(user)}</div>`)
        }
    }
}
document.write(`<div>`)
foo(10)
document.write(`</div>`)
const prev = document.createElement("button")
const next = document.createElement("button")
prev.innerText = 'prev'
next.innerText = 'next'
document.body.append(prev, next)
