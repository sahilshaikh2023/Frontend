var main = document.querySelector("#main");
var cursor = document.querySelector("img");


main.addEventListener("mousemove" , (dets)=>{

   cursor.style.left = dets.x + "px";
   cursor.style.top = dets.y + "px" ;
    

    
    
})