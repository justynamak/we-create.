var button = document.getElementsByClassName("nav__icon")[0];
var item = document.querySelectorAll(".nav__link");
var navList = document.querySelector(".nav__list");
var btnStyle = window.getComputedStyle(button, null);



button.addEventListener("click", function() {
    
    document.getElementsByClassName("nav__list")[0].classList.toggle("nav__list--show");
    
    return false;
});

for (var i = 0; i < item.length; i++) {
    
    var link = item[i];
    
    link.addEventListener("click", function() {
        
        if (btnStyle.getPropertyValue("display") == "block") {
        
           navList.classList.remove("nav__list--show");
        }
        
        return true;
    });
}
     
    window.addEventListener("resize", function() {
        
        if (btnStyle.getPropertyValue("display") === "none") {
            navList.classList.remove("nav__list--show");    
        }
});
const element = document.getElementById('#ideas');

if (element) {
    window.scroll({
        top: element.scrollTop,
        behavior: 'smooth',
    }) 
}