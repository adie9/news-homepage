let open_menu_btn = document.querySelector("#icon-menu");
let close_menu_btn = document.querySelector("#close-icon");
let body = document.querySelector("body");

let popup = document.querySelector(".menu-popup");
let background = document.querySelector(".background-darken");

// Open menu on button click
open_menu_btn.addEventListener("click", function() {
    popup.style.display = "block";
    body.classList.add("background-dim");
})

// Close menu on button click
close_menu_btn.addEventListener("click", function() {
    popup.style.display = "none";
    body.classList.remove("background-dim");
})
