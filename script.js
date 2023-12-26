document.addEventListener("DOMContentLoaded", function() {
    const mbtn = document.getElementById("mbl-btn");
    const menu = document.getElementById("menu");


    mbtn.addEventListener("click", function() {
        if (menu.style.display === "none"){
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    })
})