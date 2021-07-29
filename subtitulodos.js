let subtitulodos = 
document.querySelectorAll(".subtitulodos");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < galeria.length; i++ ){
        let alturaAnimado = subtitulodos[i].offsetTop;
        if(alturaAnimado - 600 < scrollTop) {
            subtitulodos [i].style.opacity = 1;
            subtitulodos.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);