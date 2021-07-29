let servicio = 
document.querySelectorAll(".servicio");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < galeria.length; i++ ){
        let alturaAnimado = servicio[i].offsetTop;
        if(alturaAnimado - 400 < scrollTop) {
            servicio [i].style.opacity = 1;
            servicio.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);