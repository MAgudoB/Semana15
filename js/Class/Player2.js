function Player2() {
    this.id;
    this.x = 100;
    this.y = 400;
    this.acceleration = 0;
    this.rotation=0;
    this.angle = 0;
    this.speed = 5;


    this.img = new Image();
    this.img.src = "img/players/player1.png";

    this.rotate = function (value) {
        this.angle+=value;
    }

    this.movementControl = function () {
        var collision = this.collision();
        if (collision == false) {
            this.movement();
        }
    }



    this.movement = function (position, value) {                   
            this.x += Math.cos(this.angle - Math.PI / 2) * this.speed * this.acceleration;
            this.y += Math.sin(this.angle - Math.PI / 2) * this.speed * this.acceleration;        
        
            this.angle+=this.rotation;

    }


    this.draw = function () {
        drawImageRot(interactiveContext, this.img, this.x, this.y, this.img.width, this.img.height, this.angle);
    }

    this.collision = function () {
        interactiveContext.fillRect(
            this.x + 8 + Math.cos(this.angle - Math.PI / 2) * this.speed * 3,
            this.y + 8 + Math.sin(this.angle - Math.PI / 2) * this.speed * 3,
            10,
            10)
        var colisionDatos = colisionsContext.getImageData(
            this.x + 8 + Math.cos(this.angle - Math.PI / 2) * this.speed * 3,
            this.y + 8 + Math.sin(this.angle - Math.PI / 2) * this.speed * 3,
            1,
            1).data;

        if (checkPixel(colisionDatos, 255, 0, 0) || checkPixel(colisionDatos, 0, 0, 255)) {
            console.log("colision");
            return true;
        } else {
            return false;
        }

        // //TODO Colisiones
        // var topImage = colisionsContext.getImageData(this.x, this.y - 5, 1, 1).data;
        // var rightImage = colisionsContext.getImageData(this.x + this.sprite.width + 5, this.y, 1, 1).data;
        // var downImage = colisionsContext.getImageData(this.x, this.y + this.sprite.height + 5, 1, 1).data;
        // var leftImage = colisionsContext.getImageData(this.x - 5, this.y, 1, 1).data;
        // if (checkPixel(topImage,255,0,0) && checkPixel(topImage,0,0,255)) {
        //     return "top";
        // }
        // else if (rightImage.data[0] >= 250) {
        //     return "right";
        // }
        // else if (downImage.data[0] >= 250) {
        //     return "down";
        // }
        // else if (leftImage.data[0] >= 250) {
        //     return "left";
        // }
        // else {
        //     return undefined;
        // }
    }

}