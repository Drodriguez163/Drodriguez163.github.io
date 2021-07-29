let imagentress = 
document.querySelectorAll(".imagentres");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < imagentress.length; i++ ){
        let alturaAnimado = imagentress[i].offsetTop;
        if(alturaAnimado - 350 < scrollTop) {
            imagentress [i].style.opacity = 1;
            imagentress.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);   