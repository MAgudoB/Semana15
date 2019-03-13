function loop() {
    //mapContext.clearRect(0,0,768,576);
    //colisionsContext.clearRect(0,0,768,576);
    INTERACTIVE_CTX.clearRect(0, 0, 768, 576);
    //SCANNERS_CTX.clearRect(0, 0, 768, 576);

    MAP_CTX.drawImage(imgMap, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    COLLISION_CTX.drawImage(imgMapCollisions, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    Player.movementControl();

    switchButton.draw();
    door.draw();
    Player.draw();

    clearTimeout(timer);
    timer = setTimeout("loop()", 33);
}