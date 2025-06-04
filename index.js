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
