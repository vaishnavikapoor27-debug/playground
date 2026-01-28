const imgs= document.querySelectorAll('.hero-section ul img');
const prevBtn= document.querySelector('.control_prev');
const nextBtn= document.querySelector('.control_next');

let n=0;

function changeslide(){
    for(let i=0 ; i<imgs.length ; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeslide();

prevBtn.addEventListener('click', (e)=>{
    if(n<=0){
        n= imgs.length -1;
    }else{
        n--;
    }
    changeslide();
});

nextBtn.addEventListener('click', (e)=>{
    if(n>= imgs.length -1){
        n=0;
    }else{
        n++;
    }
    changeslide();
});

const images = [
    "hero-image.jpg",
    "hero-image2.jpg",
    "hero-image3.jpg",
    "hero-image4.jpg",
    "hero-image5.jpg"

];

let index = 0;

setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slider").src = images[index];
}, 2000); // changes every 2 seconds
