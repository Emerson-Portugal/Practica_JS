// Ejemplo

const recetas = document.querySelector('.recetas');

const comida = async() => {

        const api = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        let data = await api.json();
        
        data.categories.forEach(category =>{


            let base = document.createElement("DIV");
            base.classList.add("element")
            let title = document.createElement("H2");
            let img = document.createElement("IMG");
            title.textContent = ` Receta: ${category.strCategory} `;

            img.src= ` ${category.strCategoryThumb}`;


            base.appendChild(title);
            base.appendChild(img);
            recetas.appendChild(base);

        })


}
comida();

/*
const randon = async() => {

    const api = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    let data = await api.json();
    console.log(data.meals);

}
randon();
*/