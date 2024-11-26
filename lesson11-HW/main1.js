/*- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.*/
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(value => {
        const {carts} = value
        console.log(carts)
        for (const {id, products, total, discountedTotal, userId} of carts) {
            document.write(`<div>`)
            document.write(`<div>ID - ${id}</div>`)
            document.write(`<div>PRODUCTS:</div>`)
            document.write(`<ol>`)
            for (const product of products) {
                document.write(`<li>${product.title} - ${product.price}</li>`)
            }
            document.write(`</ol>`)
            document.write(`<div>TOTAL - ${total}</div>`)
            document.write(`<div>${'discountedTotal'.toUpperCase()} - ${discountedTotal}</div>`)
            document.write(`<div>USER_ID - ${userId}</div>`)
            document.write(`</div>`)
            document.write(`<hr>`)
        }
    })

