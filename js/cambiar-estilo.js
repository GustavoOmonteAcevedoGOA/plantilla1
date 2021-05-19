function cambiarEstilos() {
    const cambiarcolor = document.getElementById('cambiarEstilo');
    const colorSitio = document.getElementById('colorSitio');
    cambiarcolor.classList.toggle('btn-clr-clicked');
    colorSitio.classList.toggle('mostrar-lateral');
    colorSitio.classList.toggle('esconder-lateral');
}
document.getElementById('cambiarEstilo').addEventListener("click", cambiarEstilos);



const cuadros = document.querySelectorAll("ul.colores.c-s-btns > li");

for (unCuadro of cuadros) {
    unCuadro.addEventListener("click", function(evt) {
        const cuadro = evt.target;
        const ruta = cuadro.attributes[0].value;
        const ruta1 = '"' + ruta + '"';
        document.getElementById('ui-theme-color').href = ruta

        /*     const rutaCss = document.getElementById('ui-theme-color');
            console.log(rutaCss.attributes[1]);
            rutaCss.setAttributes[1]('href', ruta1); */



        /*    const ruta = cuadro.data('path');
           rutaCss.attr('href', ruta);
           const url = cuadro.data('url'); */

    });
}