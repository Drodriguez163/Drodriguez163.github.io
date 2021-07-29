let service = 
document.querySelectorAll(".service");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < service.length; i++ ){
        let alturaAnimado = service[i].offsetTop;
        if(alturaAnimado - 350 < scrollTop) {
            service [i].style.opacity = 1;
            service.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);