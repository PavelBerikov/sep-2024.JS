/*#AiN5CoUQ
Створити функцію, яка робить глибоку копію об'єкту.
Додати перевірки на undefined, null, NaN.
Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

*/
const user = {
    name: 'Vasya',
    age: 21,
    status: true,
    greeting(){
        console.log(`hello ${this.name}`)
    },
    wife: {
        name: 'Anna',
        age: 22,
        wifeGreet(){
            console.log(`hello ${this.name}`)
        },
        son: {
            name: 'misha',
            sonGreet(){
                console.log(`hello ${this.name}`)
            }
        }
    }
}


let fun = function (obj) {
    /*Наличие объекта*/
    if (obj){
        /*coздаем джсн копию*/
        const copy = JSON.parse(JSON.stringify(obj))
        /*достаем ключ*/
        for (const objKey in obj) {
            let item = obj[objKey]
            /*если значение ключа является фн */
            if (typeof item === 'function'){
            /*то добавляем поле в копию объекта */
                copy[objKey] = item
            }else if (typeof obj[objKey] === 'object'){
                /*copy[objKey] = fun(item)*/
                copy[objKey] = item
            }
        }
        return copy
    }else {
        console.log('else')
    }
}

let copy = fun(user)
copy.greeting()
copy.wife.wifeGreet()
copy.wife.son.sonGreet()
console.log(copy)

/*- є масив за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
    Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.map((item, index) => ({...item, id:index + 1})))
