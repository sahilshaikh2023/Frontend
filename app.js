var aud  = new Audio("./faaah.mp3");


var h1 = document.querySelector("h1");

h1.addEventListener("click", ()=>{

    console.log("hi");
    aud.play();
})