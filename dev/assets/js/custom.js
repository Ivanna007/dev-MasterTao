$(document).ready(function(){
    $('#banner').slick({
        //setting-name: setting-value
        arrow: false,
        dots: true,
        fade: true
    });
   
});


const burger = document.querySelector('.btn-burger');
const navigation =  document.querySelector('.header__navigation');


console.log(burger);

/*function toggleMenu() {
    burger.classList.toggle('open');
    navigation.classList.toggle('show');
}*/

const toggleMenu = function() {
    burger.classList.toggle('open');
    navigation.classList.toggle('show');
}

burger.addEventListener('click', toggleMenu) 