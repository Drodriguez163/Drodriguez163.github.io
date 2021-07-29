let galeria = 
document.querySelectorAll(".contenedor-galeria");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < galeria.length; i++ ){
        let alturaAnimado = galeria[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            galeria [i].style.opacity = 1;
            galeria.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);