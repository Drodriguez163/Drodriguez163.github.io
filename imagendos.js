let imagendos = 
document.querySelectorAll(".imagendos");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < galeria.length; i++ ){
        let alturaAnimado = imagendos[i].offsetTop;
        if(alturaAnimado - 300 < scrollTop) {
            imagendos [i].style.opacity = 1;
            imagendos.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);