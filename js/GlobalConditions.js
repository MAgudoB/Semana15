
    //Canvas dimensions
    var CANVAS_WIDTH = 768;
    var CANVAS_HEIGHT = 576;

    // Contextos
    var MAP_CTX = undefined;
    var COLLISION_CTX = undefined;
    var INTERACTIVE_CTX = undefined;

    var timer;
    var Player = new Player2();



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


