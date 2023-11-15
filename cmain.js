let clickme=document.getElementById("click");
let cl=document.getElementById("main");
let back=document.getElementById("backgroundcolor");
clickme.addEventListener("click",(event)=>{
    let alpha='abcdef';
    let num=Math.floor(Math.random()*6);
    let numb=Math.floor(Math.random()*9);
    let numbe=Math.floor(Math.random()*9);
let number=Math.floor(Math.random()*9);
let op=[alpha[num],numb,alpha[num],numbe,alpha[num],number];
let a=op[Math.floor(Math.random()*6)]+op[Math.floor(Math.random()*6)]+op[Math.floor(Math.random()*6)]+op[Math.floor(Math.random()*6)]+op[Math.floor(Math.random()*6)]+op[Math.floor(Math.random()*6)];
console.log(a);

/*     event.target.style.backgroundColor="#"+a;
 */    back.innerHTML="h1:Background color :#"+a;
    cl.style.backgroundColor="#"+a;
},);