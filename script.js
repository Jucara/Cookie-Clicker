
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

import cookimg from './PerfectCookie.png';
let counter=0;
let multi=50;
let imulti=1;
let auto=100;
let i=0;

document.querySelector(".cookie").addEventListener("click",()=>{
  counter=counter+(1*imulti);
  document.querySelector(".counter").innerText= Math.floor(counter);
});
document.querySelector("#multib").addEventListener("click",()=>{
  if (counter>=multi){
    counter=counter-multi;
      document.querySelector(".counter").innerText= Math.floor(counter);
    imulti=imulti*2;
    multi=multi*1.5;
    document.querySelector("#multib").innerText = "Multiplicateur (" + Math.floor(multi) +")";

  }

});
document.querySelector("#autoclick").addEventListener("click",()=>{
  if (counter>=auto){
    i++;
    counter -= auto;
    document.querySelector(".counter").innerText= Math.floor(counter);
    auto *= 1.5;
    setInterval(()=>increment(),100);
    document.querySelector("#autoclick").innerText="Autoclicker ("+ Math.floor(auto) +")";
  }
});
function increment(){
  counter+=1;
  document.querySelector(".counter").innerText=Math.floor(counter);
}
