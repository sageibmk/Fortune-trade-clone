var navv = document.querySelector("ul");
var menuBtn = document.querySelector(".fa-bars");

menuBtn.addEventListener("click", () => {
    navv.classList.toggle("active");
    
    if (navv.classList.contains("active")){
        navv.style.transform = "translateY(0%)";
    }else{
        navv.style.transform = "translateY(-150%)";
    }
});

var up = document.querySelector(".up");
window.addEventListener("scroll", ()=>{
   if (window.scrollY > 100){
      up.style.display = "block";
   } else{
      up.style.display = "none";
   }
});

var loader = document.querySelector("#preloader");

window.addEventListener("load", ()=> {
   loader.style.display = "none";
})