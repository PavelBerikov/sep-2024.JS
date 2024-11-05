/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/
let arr = [1, 2, 3, 'name', 1 > 2, 'lorem', true, false, a = [], 3.14]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])
/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/
{
    let book1 = {
        title: 'last wish',
        pageCount: 500,
        genre: 'fantasy'
    }
    let book2 = {
        title: 'Sword of destiny',
        pageCount: 450,
        genre: 'fantasy'
    }
    let book3 = {
        title: 'Elven blood',
        pageCount: 650,
        genre: 'fantasy'
    }
    console.log(book1, book2, book3)
}
/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/
{
    let book1 = {
        title: 'The Picture of Dorian Grey',
        pageCount: 320,
        genre: 'Gothic literature',
        authors: ['Oscar Wilde', 36]
    }
    let book2 = {
        title: 'Snuff',
        pageCount: 260,
        genre: 'Erotic literature',
        authors: ['Charles Michael «Chuck» Palahniuk', 40]
    }
    let book3 = {
        title: 'The Old Man and The Sea',
        pageCount: 220,
        genre: 'maritime fiction',
        authors: ['Ernest Hemingway', 45]
    }
    console.log(book1, book2, book3);

}
/*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/
{
    let user = [
        {name: 'Pasha', username: 'NoooB', password: 'h47fndh'},
        {name: 'Sasha', username: 'Sweet', password: '7fh46dbs'},
        {name: 'Misha', username: 'apple12', password: 'md83md'},
        {name: 'Katya', username: 'loop', password: '29mfj7vs'},
        {name: 'Lena', username: 'Poleno', password: '127gnvj'},
        {name: 'Vasya', username: 'Witcher', password: 'n5n7n43'},
        {name: 'Mia', username: 'Zona117', password: 'nyc326'},
        {name: 'Albina', username: 'arbat64', password: 'coi3434c687'},
        {name: 'Vika', username: '12krot12', password: 'c426rv'},
        {name: 'Jhon', username: 'azkaban', password: '3cmfh7'},
    ]
    console.log(user[0].password, user[1].password, user[2].password, user[3].password, user[4].password, user[5].password, user[6].password, user[7].password, user[8].password, user[9].password)

}
/*- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу*/
{

    let temp = [
        monday = {
            morning: 12,
            afternoon: 18,
            evening: 15
        },
        tuesday = {
            morning: 10,
            afternoon: 17,
            evening: 14
        },
        wednesday = {
            morning: 11,
            afternoon: 19,
            evening: 16
        },
        thursday = {
            morning: 13,
            afternoon: 20,
            evening: 17
        },
        friday = {
            morning: 14,
            afternoon: 21,
            evening: 18
        },
        saturday = {
            morning: 15,
            afternoon: 22,
            evening: 19
        },
        sunday = {
            morning: 13,
            afternoon: 20,
            evening: 17
        }
    ];
    console.log(temp)
}
/*- Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
{
    let x = -3
    if (x !== 0) {
        console.log(`Вірно!`)
    } else {
        console.log(`Невірно!`)
    }
}
/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/
{
    let time = 44
    if (time < 0) {
        console.log('Помилка')
    }else if (time <= 15) {
        console.log('Перша четверть')
    }else if (time <= 30) {
        console.log('Друга четверть')
    }else if (time <= 45) {
        console.log('Третя четверть')
    }else if (time <= 59) {
        console.log('Четверта четверть')
    } else {
        console.log('Помилка')
    }
}
/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/
{
    let day = 20
    if (day < 0) {
        console.log('Помилка')
    }else if (day <= 10) {
        console.log('Перша декада')
    }else if (day <=20) {
        console.log('Друга декада')
    }else if (day <= 31) {
        console.log('Третя декада')
    }else {
        console.log('Помилка')
    }
}
/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/
{
    let a = prompt('День тижня')
    switch (a) {
        case '7':
            console.log('Sunday');
            break;
        case '6':
            console.log('Saturday');
            break;
        case '5':
            console.log('Friday');
            break;
        case '4':
            console.log('Thursday');
            break;
        case '3':
            console.log('Wednesday');
            break;
        case '2':
            console.log('Tuesday');
            break;

        case '1':
            console.log('Monday');
            break;
        default:
            console.log('Err')
    }
}
/*
- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.*/
{
    let a = prompt('Число 1')
    let b = prompt('Число 2')
    if (a === b) {
        console.log('Числа рівні')
    } else if (a < b) {
        console.log(b)
    } else {
        console.log(a)
    }
}
/*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
 буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
*/
{
    let a = ''
    if (!a){
        a = 'default'
    }
    console.log(a)
}
/*- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    if (coursesAndDurationArray[0].monthDuration > 5){
        console.log('super')
    }
    if (coursesAndDurationArray[1].monthDuration > 5){
        console.log('super')
    }
    if (coursesAndDurationArray[2].monthDuration > 5){
        console.log('super')
    }
    if (coursesAndDurationArray[3].monthDuration > 5){
        console.log('super')
    }
    if (coursesAndDurationArray[4].monthDuration > 5){
        console.log('super')
    }
    if (coursesAndDurationArray[5].monthDuration > 5){
        console.log('super')
    }
}