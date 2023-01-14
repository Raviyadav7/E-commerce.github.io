
"use strict"
// for countdown offer
const deadline = new Date("Sep 25, 2022 15:37:25").getTime();
const x = setInterval(function() {
const now = new Date().getTime();
const t = deadline - now;
const days = Math.floor(t / (1000 * 60 * 60 * 24));
const hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((t % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML= days
// hourS.innerHTML= hours
document.getElementById('hours').innerHTML = hours
document.getElementById('minutes').innerHTML= minutes
document.getElementById("seconds").innerHTML= seconds

}, 1000);
 
// to view all the products
const offerSec = document.getElementById("offerSec")
const allSec = document.getElementById("all-section")
const newSec = document.getElementById("newSec")
const viewAll = document.getElementById('view')
viewAll.addEventListener("click",function(e){
    console.log(e.target)
const hideView = document.getElementById("view-div")
hideView.classList.add("hideView")
offerSec.classList.remove("offer-section")
newSec.classList.remove("new-section")
})
/// different product
const newBtn = document.getElementById("new-btn")
const offerBtn = document.getElementById("offer-btn")
const allBtn = document.getElementById("all-btn")

// eventlister for new products
newBtn.addEventListener("click",function(){
    newBtn.style.color = "red"
    allBtn.style.color = "black"
    offerBtn.style.color = "black"
    allSec.classList.add("hideView")
    offerSec.classList.add("hide-offer")
    newSec.classList.remove("new-section")
    newSec.classList.remove("hideView")
})
///for offer products
offerBtn.addEventListener("click",function(){
    offerBtn.style.color = "red"
    allBtn.style.color = "black"
    newBtn.style.color = "black"
    allSec.classList.add("hideView")
    offerSec.classList.remove("offer-section")
    offerSec.classList.remove("hide-offer")
    newSec.classList.add("hideView")
})
//for all products
allBtn.addEventListener("click",function(){
    offerBtn.style.color = "black"
    newBtn.style.color = "black"
    allBtn.style.color="red"
    allSec.classList.remove("hideView")
    offerSec.classList.add("offer-section")
    newSec.classList.add("new-section")
})
const nav = document.querySelector('.nav-bar')
const header = document.querySelector("#home")
///sticky navigation 
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight)
const sticky = function(entries){
    const [entry] = entries;
    console.log(entry)
    if(!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky')
}
const headerObserver  = new IntersectionObserver(sticky,{
    root:null,
    threshold: 0,
    rootMargin:`${navHeight}px`
})
headerObserver.observe(header);
