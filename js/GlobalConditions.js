
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
    imgMap.src="img/map_1.png";

    var imgMapCollisions = new Image();
    imgMapCollisions.src="img/map_color_1.png";



    mapContext.drawImage(imgMap,0,0);
    colisionsContext.drawImage(imgMapCollisions,0,0);
