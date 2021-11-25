var menuMobile = document.querySelector('.menu__logo');
menuMobile.addEventListener('click',function(){
    document.getElementsByClassName('box__menu')[0].classList.toggle('move')
})