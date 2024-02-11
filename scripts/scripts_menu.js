function openMenu(){
    document.getElementById("menu").style.cssText = 'margin-left: 0';
    hideContent();
}

function closeMenu(){
    document.getElementById("menu").style.cssText = 'margin-left: -100%';
    hideContent();
}

function hideContent(){
    var contenido = document.getElementById("contenedor");
    contenido.classList.toggle("hideContent");
}