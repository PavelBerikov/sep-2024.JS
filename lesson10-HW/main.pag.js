/*PAGINATION
 зробити масив на 100 об'єктів та дві кнопки prev next
 при завантажені сторінки з'являються перші 10 об'єктів.
 При натисканні next виводяться наступні 10 об'єктів
 При натисканні prev виводяться попередні 10 об'єктів*/
const arr = []
const a = 100
let i = 0
while (i < a){
    arr.push({name: 'Vasya', age: 22})
    i++
}
const map = arr.map((item, index) => {
    return {id: index + 1, ...item}
});
const card = document.createElement("div");
console.log(map)
localStorage.setItem('users', `${JSON.stringify(map)}`)
localStorage.setItem('counter', '1')
const users = JSON.parse(localStorage.getItem('users'))

