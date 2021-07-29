let subtituloseis = 
document.querySelectorAll(".subtituloseis");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < subtituloseis.length; i++ ){
        let alturaAnimado = subtituloseis[i].offsetTop;
        if(alturaAnimado - 650 < scrollTop) {
            subtituloseis [i].style.opacity = 1;
            subtituloseis.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);    