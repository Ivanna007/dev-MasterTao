const burger = document.querySelector('.btn-burger');
const navigation =  document.querySelector('.header__navigation');


console.log(burger);

function x() {
    console.log('click');
    navigation.classList.add('show')
}

burger.addEventListener('click', x)