let galeriados = 
document.querySelectorAll(".subtitulocuatro");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < galeriados.length; i++ ){
        let alturaAnimado = galeriados[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            galeriados [i].style.opacity = 1;
            galeriados.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);