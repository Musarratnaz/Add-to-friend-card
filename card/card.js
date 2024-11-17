let estatus = document.querySelector("h5")
let btn = document.querySelector("#add")
// let removefriend = document.querySelector("#remove")
let check=0

btn.addEventListener("click" ,function(){
    if(check==0){
          estatus.innerHTML = "Friends" 
         estatus.style.color ="green"
         btn.innerHTML= "Remove Friend"
     check=1
    }else{
          estatus.innerHTML = "Stranger" 
         estatus.style.color ="red"
         btn. innerHTML= "Add Friend"
         check=0
    }  
})
// removefriend.addEventListener("click",function(){
//     estatus.innerHTML = "Stranger" 
//     estatus.style.color ="red"
