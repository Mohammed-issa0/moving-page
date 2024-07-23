let stars = document.querySelector("#stars");
let moon = document.querySelector("#moon");
let mountains3 = document.querySelector("#mountains3");
let mountains4 = document.querySelector("#mountains4");
let river = document.querySelector("#river");
let boat = document.querySelector("#boat");
let nouvil = document.querySelector(".nouvil");

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    boat.style.top = value * 1.5 + 'px';
    boat.style.left = value * 3 + 'px';
    river.style.top = value * 1.5 + 'px';
    nouvil.style.fontSize = value + 'px';
    
    if(scrollY >=67){
    nouvil.style.fontSize = 67 + 'px';
    nouvil.style.position = 'fixed';
        if(scrollY >= 369){
            nouvil.style.display='none';
        }else{
            nouvil.style.display='block';
        }
        if(scrollY >= 104){
            document.querySelector('.main').style.background='linear-gradient(#376281, #10001f)'
        }else{
            document.querySelector('.main').style.background='linear-gradient(#200016, #10001f)'
        }
    }
}