let hobbie = 
document.querySelectorAll(".subtitulocinco");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < hobbie.length; i++ ){
        let alturaAnimado = hobbie[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            hobbie [i].style.opacity = 1;
            hobbie.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);