document.addEventListener("DOMContentLoaded", function() {
    var menuSelected = false;
    var menuButton = document.getElementById("menu_bar");
    var header = document.getElementById("header");
    var linkDiv = document.getElementById("link_div");

    if (window.matchMedia("(max-width: 540px)").matches) {
        // 작은 화면일 때 초기 상태로 설정
        linkDiv.style.display = "none";
    }
    else if(window.matchMedia("(min-width: 540px)").matches){
        linkDiv.style.display = "flex";      
    }

    function toggleMenu() {
        if (menuSelected) {
            header.style.height = "70px";
            header.style.transition = "0.2s ease-in-out";
            linkDiv.style.display = "none";
            menuSelected = false;
        } else {
            header.style.height = "100px";
            header.style.transition = "0.2s ease-in-out";
            linkDiv.style.display = "flex";
            menuSelected = true;
        }
        console.log(menuSelected);
    }

    menuButton.addEventListener("click", toggleMenu);

    window.addEventListener("resize", function() {
        if (window.matchMedia("(max-width: 540px)").matches) {
            // 작은 화면일 때 초기 상태로 설정
            header.style.height = "70px";
            linkDiv.style.display = "none";
            menuSelected = false;
        }
        else if(window.matchMedia("(min-width: 540px)").matches){
            header.style.height = "70px";
            linkDiv.style.display = "flex";
            menuSelected = false;
        }
    });
});