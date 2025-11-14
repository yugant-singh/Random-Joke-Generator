let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")
let h1 = document.querySelector("h1");


let count = 0;
increase.addEventListener("click" , function(){
    count++;
    h1.textContent = count;
   
})


decrease.addEventListener("click" , function(){
 count--
 h1.textContent = count;
})