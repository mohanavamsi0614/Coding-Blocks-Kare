// document.getElementById('event-registration-form').addEventListener('submit', function(e) {
//     e.preventDefault(); 
// })
const head = document.querySelector("#head");
const title = "Build-a-Bot 2024";
let i=0

const type=setInterval(() => {
    if(i<title.length){
    head.textContent+=title[i]
    i++
    }
    else{
        clearInterval(type)
    }
}, 100);