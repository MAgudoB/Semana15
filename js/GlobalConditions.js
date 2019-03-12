function GlobalConditions(){

    var timer;
    var canvasWidth=768;
    var canvasHeight=576;
    
    var Player=new Player2();
    

    // Contextos
    var mapContext=document.getElementById("map").getContext("2d");
    var colisionsContext =document.getElementById("colisions").getContext("2d");
    var interactiveContext=document.getElementById("interactive").getContext("2d");

    //Ponemos el tamaño a los canvas

    //He probado esto pero no funciona
    // $("#map").width(canvasWidth).height(canvasHeight);        
    // $("#colisions").attr("width",canvasWidth,"height",canvasHeight);
    // $("#interactive").css("width",canvasWidth).css("height",canvasHeight);


    //Images
    
    var imgMap=new Image();
    imgMap.src="map_1.png";
}