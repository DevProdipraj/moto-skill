

 const p3arrow1 = document.querySelector('.page3-left-arrow');
 setTimeout(function(){
     p3arrow1.style.opacity = '1';
 
 },500)

 let p3c1 = document.querySelector('.page3img1');
 let p3b1 = document.querySelector('.page3-bg-img1');
 setTimeout(function(){
     p3c1.style.opacity = '1';
     p3b1.style.opacity = '1';
 
 },700)



 let p3c3 = document.querySelector('.page3img3');
 let p3b33 = document.querySelector('.page3-bg-img33');
 setTimeout(function(){
     p3c3.style.opacity = '1';
     p3b33.style.opacity = '1';
 
 },1300)

let p3c2 = document.querySelector('.page3img2');
let p3b2 = document.querySelector('.page3-bg-img2');
setTimeout(function(){
    p3c2.style.opacity = '1';
    p3b2.style.opacity = '1';

},1700)



 const p3arrow2 = document.querySelector('.page3right-arrow');
 setTimeout(function(){
    p3arrow2.style.opacity = '1';
 
 },1800)

 p3c1.addEventListener('click', function(){
    var text01 = document.querySelector('.page3text1');
    text01.style.display = 'block';
 })



 p3c2.addEventListener('click', function(){
    var text02 = document.querySelector('.page3text3');
    text02.style.display = 'block';
 })

 p3c3.addEventListener('click', function(){
    var text03 = document.querySelector('.page3text2');
    text03.style.display = 'block';
 })