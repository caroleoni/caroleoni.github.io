(function() {

    const sliders = [...document.querySelectorAll('.socio__body')];
    // console.log(sliders);
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', function() {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', function() {
        changePosition(-1);
    });

    const changePosition = (add) => {
        // console.log(add)
        const currentSocio = document.querySelector('.socio__body--show').dataset.id;
        // console.log(currentSocio)
        value = Number(currentSocio);
        value+= add;
        // console.log(value)
        sliders[Number(currentSocio)-1].classList.remove('socio__body--show');//le quito la clase al elemento actual
        if(value === sliders.length+1 || value === 0) {
            value = value === 0 ? sliders.length : 1; //1 proque estaria en el ultimo slider, osea en este caso el 6
        }
        sliders[value-1].classList.add('socio__body--show') //-1 proque en programacion contamos desde 0
        console.log(sliders)
    }


})();
