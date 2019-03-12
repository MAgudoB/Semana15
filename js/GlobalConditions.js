function GlobalConditions() {
    //Canvas dimensions
    var CANVAS_WIDTH = 768;
    var CANVAS_HEIGHT = 576;

    // Contextos
    var MAP_CTX = undefined;
    var COLLISION_CTX = undefined;
    var INTERACTIVE_CTX = undefined;

    var timer;
    var Player = new Player2();

    //Image
    var doorImageV = undefined;
    var openDoorImageV = undefined;
    var switchButtonImage = undefined;

    //Switch
    var switchButton = undefined;
    var openDoor = undefined;
    var closeDoor = undefined;

    timer = setTimeout("inicio");
}