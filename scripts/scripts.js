function toggleMenu() {
    var mainMenu = document.getElementById('main-menu');
    if(mainMenu.style.display === "none"){
        mainMenu.style.display = "block";
        mainMenu.style.animationName = "slideRight";
        mainMenu.style.animationDuration = "3s";
    }
    else{
        mainMenu.style.display = "none";
    }
 }

 function toggleNavMenu() {
    var mainMenu = document.getElementById('nav-menu');
    if(mainMenu.style.display === "none"){
        mainMenu.style.display = "block";
    }
    else{
        mainMenu.style.display = "none";
    }
 }