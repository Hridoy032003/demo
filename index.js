let image=document.getElementById("image");
let images = ["./public/pexels-apgpotr-683039.jpg", "./public/pexels-nastyasensei-66707-331107.jpg", "./public/pexels-rachel-claire-5864550.jpg", "./public/pexels-thngocbich-1658112.jpg"];
setInterval(() => {
    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex];
    
   
}, 1000);

// abouus slider
let imageAbout = document.getElementById("imageAbout");
let imagesAbout = ["./public/pexels-anntarazevich-6035331.jpg", "./public/pexels-cottonbro-4252783.jpg", "./public/pexels-cottonbro-3338535.jpg"];
setInterval(() => {
    let randomIndex = Math.floor(Math.random() * imagesAbout.length);
    imageAbout.src = imagesAbout[randomIndex];
    


}, 1000);

// menu


let iconMenu = document.querySelector(".sider-div ");     
let body = document.querySelector("body");
let closeMenu = document.getElementById("close");
iconMenu.addEventListener("click", () => {
    body.classList.toggle("showCart"); 
    
});
closeMenu.addEventListener("click", () => {
    body.classList.toggle("showCart");
   
});
function close() {
    body.classList.remove("showCart");
}
const addDataToHTML = (listFood)=>{
   
    
       listFood.forEach(element => {
        let newElement = document.createElement("div");
           newElement.classList.add("food-card");
        newElement.innerHTML = `
            <img src="${element.image}" alt="${element.name}">
            <h3>${element.name}</h3>
            <p>${element.description}</p>
            <span>$${element.price}</span>
             <button class="add-to-cart">Add to Cart</button>
        `;
           listFood.appendChild(newElement);
        
       });
    
}
addDataToHTML();
// DATA OF FOOD
const initApp = () => {
    fetch("./food.json")
        .then(response => response.json())  
        .then(data => {
            listFood=data;
            console.log(data);
            addDataToHTML();
        })}
initApp(listFood);

 