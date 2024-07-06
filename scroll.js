const mv = document.querySelector('.mv')

window.addEventListener("scroll" , function(){
    let scroll = window.scrollY
    mv.style.width = 100 + scroll / 10 + '%';
});
