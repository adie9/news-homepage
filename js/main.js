let open_menu_btn = document.querySelector("#icon-menu");
let close_menu_btn = document.querySelector("#close-icon");

let popup = document.querySelector(".menu-popup");
let background = document.querySelector(".background-darken");

// Open menu on button click
open_menu_btn.addEventListener("click", function() {
    popup.style.display = "block";
    background.style.opacity = "20%";
})

// Close menu on button click
close_menu_btn.addEventListener("click", function() {
    popup.style.display = "none";
    background.style.display = "0%";
})
