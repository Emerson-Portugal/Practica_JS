/* // Ejemplo
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
comida(); */

const info_parte = document.querySelector(".info_parte");

const randon = async() => {

    const api = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    let data = await api.json();

    data.meals.forEach(category => {
        let title = document.createElement("H2")
        let img = document.createElement("IMG")

        title.textContent = `${category.strMeal}`
        img.src = `${category.strMealThumb}`

        info_parte.appendChild(title)
        info_parte.appendChild(img)
    })

}
randon();

const btn = document.querySelector(".btn")



const almacen = document.querySelector(".almacen")
btn.addEventListener("click", () => {
    let parte_almacen = document.createElement("DIV")
    parte_almacen.classList.add("parte_almacen")
    parte_almacen.innerHTML =    info_parte.innerHTML ;
    almacen.appendChild(parte_almacen)
    
})
