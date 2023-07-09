let showcase = document.getElementById("showcase");
let images = ["img/showcase.webp","img/msu.jpg", "img/musica.jpg", "img/musica3.jpg", "img/musica4.jpg"];
let i =0;

function slide(){
    showcase.style.backgroundImage = 'url('+images[i]+')';

    if(i<images.length - 1){
        i++;
    }else{
        i=0;
    }

    setTimeout(slide,2000);
}

slide();
