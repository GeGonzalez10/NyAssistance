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
