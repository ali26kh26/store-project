//profile start
const user = document.getElementById("user");
const proinfo = document.getElementById("proinfo");
const profilelabel = document.getElementById("profile-label");
user.addEventListener("click", openprofile);
profilelabel.addEventListener("click", openprofile);

function openprofile() {
  proinfo.classList.toggle("hidden");
}
//profile end

//slider start
var slideIndex = 0;
        ShowSlides();
        function ShowSlides() {
            var i;
            var slides = document.getElementsByClassName("slider-card");
            var dots = document.getElementsByClassName("dot");

            for(i=0;i< slides.length;i++)
            {
                slides[i].style.display="none";
            }

            slideIndex++;
            if(slideIndex > slides.length)
            {
                slideIndex = 1;
            }

            for(i=0;i<dots.length;i++)
            {
                dots[i].className = dots[i].className.replace(" active","");
            }

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex -1].className +=" active";

            setTimeout(ShowSlides,3000);
        }
//slider end

//start cart
const addbtn=document.getElementsByClassName("add-btn");
const buyalert=document.getElementById("buy-alert");
const closebtn=document.getElementById("close-btn");
const cartsubmit=document.getElementById("cart-submit");
const showbtn=document.getElementById("show-btn");
const xbtn=document.getElementById("x-btn");
const count=document.getElementById("count");
const price=document.getElementById("price");
const totalstate=document.getElementById("total-state");
const state=document.getElementById("state");
const cart =document.getElementById("cart");
const cartlabel=document.getElementById("cart-label");
const spanin=document.getElementById("span-in");
var total=0;
var items=0;

totalstate.innerHTML= "State : "+"California";
count.innerHTML= "Item(s) : "+0;
    price.innerHTML="Total : "+0+"$";

for(let i=0;i<addbtn.length;i++){
    addbtn[i].addEventListener("click",function(){
        buyalert.classList.remove("hidden");
        items++;
        switch(i){
            case 0: total+=150; break;
            case 1: total+=60;   break;
            case 2: total+=120;  break;
            case 3: total+=50;  break;
            case 4: total+=140;  break;
            case 5: total+=100;  break;
        } 
        spanin.innerHTML=items+" ";
    })
}

closebtn.addEventListener("click",function(){
    buyalert.classList.add("hidden");
})


showbtn.addEventListener("click",show);
cart.addEventListener("click",show);
cartlabel.addEventListener("click",show);

function show(){
    cartsubmit.classList.remove("hidden");
    count.innerHTML= "Item(s) : "+items;
    price.innerHTML="Total : "+total+"$";
}
state.addEventListener("change",function(){
    let x="";
    switch(state.selectedIndex){
      case 0: x="California"; break;
      case 1: x="Loa Angeles"; break;
      case 2: x="New York"; break;
  }
    totalstate.innerHTML= "State : "+x;
})

xbtn.addEventListener("click",function(){
    cartsubmit.classList.add("hidden");
})