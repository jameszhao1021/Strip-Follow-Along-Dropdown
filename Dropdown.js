const triggers= document.querySelectorAll(".cool>li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter(){

this.classList.add("trigger-enter");
setTimeout(()=>this.classList.add("trigger-enter-active"), 150);
background.classList.add("open");
const dropdownClient = this.lastElementChild.getBoundingClientRect();
console.log(dropdownClient);
background.style.width = dropdownClient.width + "px";
background.style.height = dropdownClient.height + "px";

background.style.transform = `translate(${dropdownClient.left}px, ${dropdownClient.top}px)`;
}

function handleLeave(){
this.classList.remove("trigger-enter", "trigger-enter-active");
background.classList.remove("open");
}

triggers.forEach(trigger=>trigger.addEventListener("mouseenter", handleEnter));
triggers.forEach(trigger=>trigger.addEventListener("mouseleave", handleLeave))