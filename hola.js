let hola = 
document.querySelectorAll(".hola");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < hola.length; i++ ){
        let alturaAnimado = hola[i].offsetTop;
        if(alturaAnimado - 600 < scrollTop) {
            hola [i].style.opacity = 1;
            hola.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);