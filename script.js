    const input = document.querySelector("input");  
    const createRewardBtn = document.querySelector(".add-reward");    
    const rewardBtn = document.querySelector(".try");
    const ul = document.querySelector("ul");
    const arrow = document.querySelector(".top");
    const removeBtn = document.querySelectorAll(".remove");
    const randomResult = document.querySelector("h3");
    const jerry = document.querySelector(".jerry");
    
rewardBtn.addEventListener("click", () =>{


let img1 = 0;
let img2 = 1;

let random = [img1, img2][Math.floor(Math.random() * 2)]

let list = document.querySelector("ul")
let lists = list.querySelectorAll("li")
let randomLi = Math.floor(Math.random() * lists.length)

if(random === 0 ){

randomResult.innerText = "Sorry, no reward now"
randomResult.style.backgroundColor = "grey"
randomResult.style.marginTop = "5px"
randomResult.style.color = "red"
jerry.src="./img/loss.png"
jerry.style.width = '280px'
}else{
randomResult.innerText = "🎊 " + lists[randomLi].textContent
randomResult.style.color = "white"
randomResult.style.backgroundColor = "green"
randomResult.style.marginTop = "5px"
randomResult.style.height = "50px"
jerry.src="./img/win.png"
jerry.style.width = '280px'
}
setTimeout(() =>{
    alert("time to clear it")
window.location.reload();
},5000)
})









createRewardBtn.addEventListener("click", () =>{
if(input.value === ""){
alert("nothing to create")
}else{
addReward()
}
})



function addReward(){
ul.insertAdjacentHTML("beforeend",
`<li>${input.value}
<button class="remove">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 
         01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 
         0a2 2 0 01-2-2H9a2 2 0 01-2 2h10z" />
  </svg>
</button>

</li>
`
)
input.value = ""
input.focus();
}

ul.addEventListener("click", (e) =>{   
if(e.target.closest(".remove")){
e.target.closest("li").remove();
}
})

  arrow.addEventListener("click", () =>{
   window.scrollTo({
   top: 0,
   behavior: "smooth"
  })
  })


 
