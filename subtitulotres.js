let subtitulotres = 
document.querySelectorAll(".subtitulotres");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < subtitulotres.length; i++ ){
        let alturaAnimado = subtitulotres[i].offsetTop;
        if(alturaAnimado - 450 < scrollTop) {
            subtitulotres [i].style.opacity = 1;
            subtitulotres.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);    