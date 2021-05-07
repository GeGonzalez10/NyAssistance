//navbar
addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu');
    if(btn_menu){
        btn_menu.addEventListener('click' , () => {
            const menu_items = document.querySelector('.menu_items');
            menu_items.classList.toogle('show');
        });
    }
});

//carousel
document.addEventListener('DOMContentLoaded', () => { 
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration:300,
        dist:-80,
        shift:5,
        padding: 5,
        indicators: true
    });
});

//animations
window.addEventListener('scroll', function(){ 
    let animacion = document.getElementById('animado');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/4;

    if(posicionObj1 < tamañoDePantalla1){

        animacion.style.animation = "fade.In 1s";
    }
})
    