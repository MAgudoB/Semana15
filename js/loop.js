function loop() {
    //mapContext.clearRect(0,0,768,576);
    //colisionsContext.clearRect(0,0,768,576);
    interactiveContext.clearRect(0, 0, 768, 576);

    mapContext.drawImage(imgMap, 0, 0);
    colisionsContext.drawImage(imgMapCollisions, 0, 0);

    Player.movementControl();

    Player.draw();

    clearTimeout(timer);
    timer = setTimeout("loop()", 33);
}