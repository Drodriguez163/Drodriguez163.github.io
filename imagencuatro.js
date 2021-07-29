let imagencuatro = 
document.querySelectorAll(".imagencuatro");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < imagencuatro.length; i++ ){
        let alturaAnimado = imagencuatro[i].offsetTop;
        if(alturaAnimado - 700 < scrollTop) {
            imagencuatro [i].style.opacity = 1;
            imagencuatro.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);   