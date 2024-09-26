document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burgers").addEventListener("click", function(){
        document.querySelector("nav").classList.toggle("open")
    })
})