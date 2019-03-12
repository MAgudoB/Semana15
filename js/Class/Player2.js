function Player2() {
    this.id;
    this.x = 100;
    this.y = 400;
    this.acceleration = 0;
    this.rotation = 0;
    this.angle = 0;
    this.speed = 5;


    this.img = new Image();
    this.img.src = "img/players/player1.png";

    this.rotate = function (value) {
        this.angle += value;
    }

    this.movementControl = function () {
        var collision = this.collision();
        if (collision == false) {
            this.movement();
        }

        this.angle += this.rotation;
    }



    this.movement = function (position, value) {
        this.x += Math.cos(this.angle - Math.PI / 2) * this.speed * this.acceleration;
        this.y += Math.sin(this.angle - Math.PI / 2) * this.speed * this.acceleration;       
    }


    this.draw = function () {
        drawImageRot(INTERACTIVE_CTX, this.img, this.x, this.y, this.img.width, this.img.height, this.angle);
    }

    this.collision = function () {
        // INTERACTIVE_CTX.fillRect(
        //     this.x + 8 + Math.cos(this.angle - Math.PI / 2) * this.speed * 3,
        //     this.y + 8 + Math.sin(this.angle - Math.PI / 2) * this.speed * 3,
        //     10,
        //     10)
        var colisionDatos = COLLISION_CTX.getImageData(
            this.x + 16,
            this.y + 16,
            1,
            1).data;

        if (checkPixel(colisionDatos, 255, 0, 0) || checkPixel(colisionDatos, 0, 0, 255)) {
            console.log("colision");
            return true;
        } else if (checkPixel(colisionDatos, 0, 0, 0)) {
            this.die();
        }
        else {
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

    //TODO 
    this.die = function () {
        console.log("mueres");
    }

}