let imagenuno = 
document.querySelectorAll(".imagenuno");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < imagenuno.length; i++ ){
        let alturaAnimado = imagenuno[i].offsetTop;
        if(alturaAnimado - 200 < scrollTop) {
            imagenuno [i].style.opacity = 1;
            imagenuno.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);