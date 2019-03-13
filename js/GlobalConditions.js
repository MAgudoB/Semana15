
//Canvas dimensions
var CANVAS_WIDTH = 768;
var CANVAS_HEIGHT = 576;

// Contextos
var MAP_CTX = undefined;
var COLLISION_CTX = undefined;
var INTERACTIVE_CTX = undefined;
var SCANNERS_CTX = undefined;

var timer;
var Player = new Player2();

//Image
var doorImageV = undefined;
var openDoorImageV = undefined;
var switchOffImage = undefined;
var switchOnImage = undefined;

//Switch
var switchButton = undefined;
var door = undefined;


//Images

var imgMap = new Image();
imgMap.src = "img/map_1.png";

var imgMapCollisions = new Image();
imgMapCollisions.src = "img/map_color_1.png";

