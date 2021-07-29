let imagenseis = 
document.querySelectorAll(".imagenseis");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < imagenseis.length; i++ ){
        let alturaAnimado = imagenseis[i].offsetTop;
        if(alturaAnimado - 650 < scrollTop) {
            imagenseis [i].style.opacity = 1;
            imagenseis.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);    