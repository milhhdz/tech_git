//La salida del contador es un console log que puede verse al inspeccionar en la consola

var contador = 0;

function contador_clicks() {
    console.log("Clicks: ", contador);
    contador++;
}

document.addEventListener('click', contador_clicks);