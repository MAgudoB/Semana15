function GlobalConditions(){

    var timer;
    var canvasWidth=768;
    var canvasHeight=576;
    
    var Player=new Player2();
    

    // Contextos
    var mapContext=document.getElementById("map").getContext("2d");
    var colisionsContext =document.getElementById("colisions").getContext("2d");
    var interactiveContext=document.getElementById("interactive").getContext("2d");



    timer=setTimeout("inicio");
}