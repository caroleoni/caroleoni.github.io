/* Variables */ 
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus() {
    let desplazamiento_actual = window.pageYOffset; /*cuanta el largo de la pagina*/

    if(desplazamiento_actual <= 300) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';
    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}

function apertura() {
    if(cerrado) {
        menu.style.width = '70vw';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;

    }
}

/* para cuando actualice la pagina */
window.addEventListener('load', function(){
    /*hacemos con jquery, no se como con js*/
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});

/*para clickear en cualquier lado de la pantalla y que se cierre*/
window.addEventListener('click', function(e) {
    console.log(e.target);
    if(cerrado == false) {
        let span = this.document.querySelector('span');
        if(e.target !== span && e.target !== abrir) {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
})

window.addEventListener('scroll', function() {
    // console.log(window.pageYOffset);
    menus();
});

window.addEventListener('resize', function() {
    if(screen.width >= 700) {
        cerrado = true;
        menu.style.removeProperty('overflow'); /*le quita las claves que le agregamos a .enlaces en el styles.css*/
        menu.style.removeProperty('width');    /*en el responsive*/
    }
});

abrir.addEventListener('click', function() {
    apertura();
});

/* CUSTOMERS */
let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* MULTIDIOMAS */
let check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
    // console.log(check.checked);
    let id = check.checked;
    if(id == true) {
        location.href="es/index.html";
    } else {
        location.href="../index.html";
    }
    
}



