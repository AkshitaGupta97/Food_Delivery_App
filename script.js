
const menuOpen = document.querySelector("#menu-open-btn");
const menuClose = document.querySelector("#menu-close-btn");

const foodInput = document.getElementById("food");
const foodSearchBtn = document.querySelector(".menu-btn-search")
const menuLists = document.querySelector(".menu-list")



// open menu when open button is clicked
menuOpen.addEventListener('click', () => {
    document.body.classList.toggle('show-mobile-menu'); // toggle is used to add or remove the class, if class is present it will remove it, if not present it will add it
})
menuClose.addEventListener('click', ()=>{
    menuOpen.click();
})

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.hero-section').classList.add('show');
})

menuLists.innerHTML = "";
const fetchFood = async() => {
    const response = await fetch(`https://dummyjson.com/recipes`);
    const data = await response.json();
    console.log(data);
    
    menuLists.innerHTML = "";
    data.recipes.forEach(elem => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        const price = elem.id + 530

        itemDiv.innerHTML = `
            <img src="${elem.image}" alt="" class="menu-img">
            <h3 class="menu-name">${elem.name}</h3>
            <p class="menu-ancestry">Ancestry : ${elem.cuisine}</p>
            <h4 class="menu-price">Pay : <span class="menu-amount">₹ ${price}</span> <h4>
        `
        /* <p class="menu-text">${elem.instructions[4]}</p> */

        const AddToCart = document.createElement('button');
        AddToCart.classList.add('add-to-cart');
        AddToCart.textContent = "Add to Cart";

        itemDiv.appendChild(AddToCart);
        menuLists.appendChild(itemDiv)


    })
    
}


foodSearchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const foodItem = foodInput.value.trim();

    fetchFood(foodItem);
})







  /*fetch("https://dummyjson.com/recipes")
  .then(res => res.json())
  .then(data => {
    data.recipes.forEach(food => {
      console.log({
        name: food.name,
        image: food.image,
        description: food.instructions, // small description
        price: food.id + 4.99           // mock price (you can adjust)
      });
    });
  });

*/

/*  const shortDescription = meal.strInstructions
  .split(" ")
  .slice(0, 15)
  .join(" ") + "...";

  const shortDescription = meal.strInstructions.split(".")[0] + ".";
  */