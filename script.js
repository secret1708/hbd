const gambar = document.querySelector('.img')
const all = document.querySelector('html')

let i = 0;
var source = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/7.png",
    "img/8.png",
    "img/9.png",
    "img/10.png"
]

gambar.addEventListener('click', (event)=>{

    
    console.log(i);
    gambar.src= source[++i];
    if(i === 9){
        i  = 0
    }
})