/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/
function User (id, name, surname , email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}
let users = []
users.push(new User(`${users.length + 1}`, 'petya', 'ivanov', '@gmail.com', '132556144'))
users.push(new User(`${users.length + 1}`, 'vova', 'gat', '@gmail.com', '54454454'))
users.push(new User(`${users.length + 1}`, 'sasha', 'strel', '@gmail.com', '5545456144'))
users.push(new User(`${users.length + 1}`, 'jenya', 'simpson', '@gmail.com', '1154545144'))
users.push(new User(`${users.length + 1}`, 'lesha', 'cart', '@gmail.com', '132444151556)144'))
users.push(new User(`${users.length + 1}`, 'lena', 'ipsum', '@gmail.com', '5452556144'))
users.push(new User(`${users.length + 1}`, 'vanya', 'koval', '@gmail.com', '4545121144'))
users.push(new User(`${users.length + 1}`, 'anna', 'sidorov', '@gmail.com', '454216644'))
users.push(new User(`${users.length + 1}`, 'katya', 'lorem', '@gmail.com', '1948424'))
users.push(new User(`${users.length + 1}`, 'sasha', 'petrov', '@gmail.com', '1325454824'))
console.log(users)
/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/
console.log(users.filter(item => item.id % 2 === 0))
/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/
console.log(users.sort((a, b) => a.id - b.id))
/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/
let clients = []
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

clients.push(new Client(`${clients.length + 1}`, 'petya', 'ivanov', '@gmail.com', '132556144', ['beef', 'eggs', 'coke']))
clients.push(new Client(`${clients.length + 1}`, 'vova', 'gat', '@gmail.com', '54454454', ['potato', 'apple', 'beef']))
clients.push(new Client(`${clients.length + 1}`, 'sasha', 'strel', '@gmail.com', '5545456144', ['apple', 'beef']))
clients.push(new Client(`${clients.length + 1}`, 'jenya', 'simpson', '@gmail.com', '1154545144', ['milk', 'potato', 'apple']))
clients.push(new Client(`${clients.length + 1}`, 'lesha', 'cart', '@gmail.com', '132444151556)144', ['potato', 'apple', 'beef',]))
clients.push(new Client(`${clients.length + 1}`, 'lena', 'ipsum', '@gmail.com', '5452556144', ['milk', 'potato', 'apple', 'beef', 'eggs', 'coke']))
clients.push(new Client(`${clients.length + 1}`, 'vanya', 'koval', '@gmail.com', '4545121144', ['beef', 'eggs', 'coke']))
clients.push(new Client(`${clients.length + 1}`, 'anna', 'sidorov', '@gmail.com', '454216644', ['eggs']))
clients.push(new Client(`${clients.length + 1}`, 'katya', 'lorem', '@gmail.com', '1948424', ['beef', 'eggs', 'coke']))
clients.push(new Client(`${clients.length + 1}`, 'sasha', 'petrov', '@gmail.com', '1325454824', ['milk', 'potato', 'apple', 'beef']))
console.log(clients)
/*- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/
clients.sort((a, b) => a.order.length - b.order.length)
/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/
function Car (model, manufacturer, year, mspeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.mspeed = mspeed;
    this.engine = engine;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.mspeed} на годину`)
    };
    this.info = function (){
        console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, year of manufacture - ${this.year}, maximum speed - ${this.mspeed}, engine capacity -${this.engine}`)
    };
    this.increaseMaxSpeed = function (newSpeed){
        this.mspeed = newSpeed
    };
    this.changeYear = function (newValue) {
      this.year = newValue
    };
    this.addDriver = function (driver){
        this.driver = driver
    }

}

let car = new Car('X7', 'BMW', 2020, 280, 'V8');
car.drive()
car.info()
car.increaseMaxSpeed(300)
console.log(car.mspeed)
car.changeYear(2022)
console.log(car.year)
car.addDriver({name: 'Vasya', age: 30, gender: 'male'})
console.log(car.driver)
/*- (Те саме, тільки через клас)*/
class Carr{
    constructor(model, manufacturer, year, mspeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.mspeed = mspeed;
        this.engine = engine;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.mspeed} на годину`)
    }
    info(){
        console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, year of manufacture - ${this.year}, maximum speed - ${this.mspeed}, engine capacity -${this.engine}`)
    }
    increaseMaxSpeed (newSpeed){
        this.mspeed = newSpeed
    };
    changeYear (newValue) {
        this.year = newValue
    };
    addDriver (driver){
        this.driver = driver
    }
}
let carr = new Carr('X7', 'BMW', 2020, 280, 'V8')
carr.drive()
carr.info()
carr.increaseMaxSpeed(300)
console.log(carr.mspeed)
carr.changeYear(2022)
console.log(carr.year)
carr.addDriver({name: 'Vasya', age: 30, gender: 'male'})
console.log(carr.driver)
/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
let pops = []
class Pop {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let pop1 = new Pop('sasha', 23, 35);
let pop2 = new Pop('alya', 22, 35);
let pop3 = new Pop('misha', 21, 39);
let pop4 = new Pop('lena', 20, 39);
let pop5 = new Pop('sveta', 29, 38);
let pop6 = new Pop('luda', 19, 38);
let pop7 = new Pop('srgey', 18, 37);
let pop8 = new Pop('vibe', 23, 37);
let pop9 = new Pop('lana', 24, 36);
let pop10 = new Pop('vitya', 25, 36);
pops.push(pop1, pop2, pop3, pop4, pop5, pop6, pop7, pop8, pop9, pop10)

class Prince {
    constructor(name, age, found) {
        this.name = name;
        this.age = age;
        this.found = found;
    }
    find(arr) {
        for (let item of arr) {
            if (item.size === this.found) {
                return item
            }
        }
    }
}
let pri = new Prince('Vasya', 25, 36)
console.log(pri.find(pops))
console.log(pops.find(value => value.size === 36))