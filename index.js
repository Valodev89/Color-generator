let body = document.querySelector('body');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let r = document.getElementById('r');
let g = document.getElementById('g');
let b = document.getElementById('b');
const slow = document.getElementById('slow');
const normal = document.getElementById('normal');
const fast = document.getElementById('fast');
const incredible = document.getElementById('incredible');
const pause = document.getElementById('pause');
let interval;


function Color() {
    let chiffreOne = Math.floor(Math.random() * 255);
    let chiffreTwo = Math.floor(Math.random() * 255);
    let chiffreThree = Math.floor(Math.random() * 255);
    body.style.backgroundColor = `rgb(${chiffreOne}, ${chiffreTwo}, ${chiffreThree})`;
    one.innerHTML = chiffreOne;
    two.innerHTML = chiffreTwo;
    three.innerHTML = chiffreThree;
    r.style.color = `rgb(${chiffreOne}, ${chiffreTwo}, ${chiffreThree})`;
    g.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    b.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
};


slow.addEventListener ('click', (e) => {
    e.defaultPrevented;
    clearInterval(interval);
    interval = setInterval(Color, 10000);
});

normal.addEventListener ('click', (e) => { 
    e.defaultPrevented;
    clearInterval(interval);
    interval = setInterval(Color,5000)
});

fast.addEventListener ('click', (e) => {  
    e.defaultPrevented;
    clearInterval(interval);
    interval = setInterval(Color, 1000);
}
);

incredible.addEventListener ('click', (e) => {
    e.defaultPrevented;
   clearInterval(interval);
   interval = setInterval(Color,500);
}
);

pause.addEventListener("click", (e) => {
    e.defaultPrevented;
    clearInterval(interval);
})
    
    
