// *Через Array.prototype. створити власний foreach, filter
console.log(Array.prototype);

Array.prototype.myForEach = function (callback) {
    for (const item of this) {
        callback(item)
    }
}
const array = [1, 2, 3, 4, 5]
const foo = (item) => console.log(item * 2)
array.myForEach(foo)

Array.prototype.myFilter = function (value) {
    const newArr = []
    for (const item of this) {
        if (item !== value){
            newArr.push(item)
        }
    }
    return newArr
}
const newArr = array.myFilter(3)
console.log(newArr)
