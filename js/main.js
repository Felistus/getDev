function showMenu(){
    let toggle = document.getElementById("mobileMenu");
    let line = document.getElementById("hr");
    if ( toggle.style.height == "0px" ) {
        toggle.style.height = "200px";
        line.style.display = "none";
    } else {
        toggle.style.height = "0px";
        line.style.display = "";
    }
}