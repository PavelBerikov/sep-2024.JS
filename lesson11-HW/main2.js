/*взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.*/
fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(value => {
        for (const recipe of value.recipes) {
            const {ingredients, instructions, name, id, cuisine, difficulty} = recipe
            document.write(`<h1>${id} - ${name}</h1>`)
            document.write(`<h2>Cuisine - ${cuisine}</h2>`)
            document.write(`<h3>Difficulty - ${difficulty}</h3>`)
            document.write(`<div>ingredients :</div>`)
            document.write(`<ul>`)
            for (const ingredient of ingredients) {
                document.write(`<li>${ingredient}</li>`)
            }
            document.write(`</ul>`)
            document.write(`<div>instructions :</div>`)
            document.write(`<ol>`)
            for (const step of instructions) {
                document.write(`<li>${step}</li>`)
            }
            document.write(`</ol>`)
            document.write(`<hr>`)
        }

    });
