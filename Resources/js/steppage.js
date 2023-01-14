setTimeout(function(){
    let c1 = document.querySelector('.header-img');
    c1.style.display = 'block';

},700)

let c1 = document.querySelector('.step1-sideimg1');
setTimeout(function(){
    c1.style.display = 'block';

},800)
let c2 = document.querySelector('.step1-sideimg2');
setTimeout(function(){
    c2.style.display = 'block';

},900)
let c3 = document.querySelector('.step1-sideimg3');
setTimeout(function(){
    c3.style.display = 'block';

},1000)
setTimeout(function(){
    let c4 = document.querySelector('.line-container');
    c4.style.display = 'block';

},1100)

c1.addEventListener('click', function(){
    let dc1 = document.querySelector('.step1pagearrow1');
    let dc2 = document.querySelector('.step1-content1');

    dc1.style.display = 'block';
    dc2.style.display = 'block';
})
c2.addEventListener('click', function(){
    let dc1 = document.querySelector('.step1pagearrow2');
    let dc2 = document.querySelector('.step1-content2');

    dc1.style.display = 'block';
    dc2.style.display = 'block';
})
c3.addEventListener('click', function(){
    let dc1 = document.querySelector('.step1pagearrow3');
    let dc2 = document.querySelector('.step1-content3');

    dc1.style.display = 'block';
    dc2.style.display = 'block';
})

