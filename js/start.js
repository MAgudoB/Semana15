$(document).ready(function () {
    initCollisionCanvas();
    initMapCanvas();
    initInteractiveCanvas();
    loadImages();
    initButtonsAndDoors();
    loadScenary(1);
});

function loadScenary(scenaryId) {
    //TODO Cargar el mapa desde fichero.
    start();
}

function start() {
    loop();
}