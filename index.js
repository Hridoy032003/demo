let image=document.getElementById("image");
let images = ["./public/pexels-apgpotr-683039.jpg", "./public/pexels-nastyasensei-66707-331107.jpg", "./public/pexels-rachel-claire-5864550.jpg", "./public/pexels-thngocbich-1658112.jpg"];
setInterval(() => {
    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex];
    
   
}, 1000);