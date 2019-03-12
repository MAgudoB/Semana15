function loop(){
    mapContext.clearRect(0,0,768,576);
    colisionsContext.clearRect(0,0,768,576);
    interactiveContext.clearRect(0,0,768,576);

    mapContext.drawImage(map,0,0);

    Player.move();



    Player.paint();

    clearTimeout(timer);
    timer=setTimeout("loop",33);
}