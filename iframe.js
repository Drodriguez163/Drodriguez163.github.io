let iframe = 
document.querySelectorAll("iframe");

function mostrarScroll(){
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < iframe.length; i++ ){
        let alturaAnimado = iframe[i].offsetTop;
        if(alturaAnimado - 350 < scrollTop) {
            iframe [i].style.opacity = 1;
            iframe.FlipIny;

        }
    }
    }

    window.addEventListener('scroll',mostrarScroll);    