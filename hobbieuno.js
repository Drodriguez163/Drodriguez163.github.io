let hobbieuno = 
document.querySelectorAll(".hobbie");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < hobbieuno.length; i++ ){
        let alturaAnimado = hobbieuno[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            hobbieuno [i].style.opacity = 1;
            hobbieuno.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);