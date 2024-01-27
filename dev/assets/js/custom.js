$(document).ready(function(){
    $('#banner').slick({
        //setting-name: setting-value
        arrows: false,
        dots: true,
        fade: true,
        appendArrows: $('.banner-arrows'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
              }
            }
        ]
            
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




    const fileInput = document.querySelector('#fileInput');
    const fileName = document.querySelector('#file-name')

    fileInput.addEventListener('change', function() {
      //fileName.innerHTML = fileInput.value;  long name
      fileName.innerHTML = this.files[0].name; //short name
    })

    const inputColumn = document.querySelector['.input-column'];
    const inputLabel = document.querySelector('.input-box label');
    const typeTheckbox = document.querySelector('[type="checkbox"]');

    typeTheckbox.closest('.input-column').classList.add('column-checkbox')
});



