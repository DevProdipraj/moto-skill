// this is for page 1
// ==============================
const mainConent = document.querySelector('.containers');


function showFunction(id){
     var arrow = document.querySelector('.step1pagearrow' + id);
     var main_box = document.querySelector('.step1-content'+id);

     arrow.style.display = "block";
     main_box.style.display = "block";
}


function textFun(id){
     var text = document.querySelector('.text_'+id);

     text.style.display = "block";
}



// this code for page 1 


const page3arrow1 = document.querySelector('.left-arrow');
setTimeout(function(){
     page3arrow1.style.display = 'block';
 
 },500)

 const page2Baby1 = document.querySelector('.baby1');
 const page2Babybg1 = document.querySelector('.babyimg-1');
 setTimeout(function(){
     page2Baby1.style.opacity = '1';
     page2Babybg1.style.opacity = '1';
 },600)

 const page2Baby4 = document.querySelector('.baby4');
 const page2Babybg2 = document.querySelector('.babyimg-2');
 setTimeout(function(){
    page2Baby4.style.opacity = '1';
    page2Babybg2.style.opacity = '1';
 },1100)

 const page2Baby2 = document.querySelector('.baby2');
 const page2Babybg3 = document.querySelector('.babyimg-3');
 setTimeout(function(){
    page2Baby2.style.opacity = '1';
    page2Babybg3.style.opacity = '1';
},1600)

const page2Baby3 = document.querySelector('.baby3');
const page2Babybg4 = document.querySelector('.babyimg-4');
setTimeout(function(){
    page2Baby3.style.opacity = '1';
    page2Babybg4.style.opacity = '1';
},2100)

 const page3arrow2 = document.querySelector('.right-arrow');
setTimeout(function(){
     page3arrow2.style.opacity = '1';
 },2600)



 