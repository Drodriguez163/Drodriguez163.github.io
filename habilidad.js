let habilidad = 
document.querySelectorAll(".habilidad");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < imagentress.length; i++ ){
        let alturaAnimado = habilidad[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            habilidad [i].style.opacity = 1;
            habilidad.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);   