function Player2() {
    this.id;
    this.x = 100;
    this.y = 400;
    this.acceleration = 0;
    this.rotation = 0;
    this.angle = 0;
    this.speed = 5;
    this.inButton = false;
    this.portal0 = undefined;
    this.portal1 = undefined;

    this.img = new Image();
    this.img.src = "img/players/player1.png";

    this.rotate = function (value) {
        this.angle += value;
    }

    this.movementControl = function () {
        var collision = this.collision();
        this.checkButtonCollision();
        if (collision == false) {
            this.movement();
        }
        this.angle += this.rotation;
        this.scope();
    }



    this.movement = function (position, value) {
        this.x += Math.cos(this.angle - Math.PI / 2) * this.speed * this.acceleration;
        this.y += Math.sin(this.angle - Math.PI / 2) * this.speed * this.acceleration;
    }


    this.draw = function () {
        drawImageRot(INTERACTIVE_CTX, this.img, this.x - (this.img.width / 4), this.y - (this.img.width / 4), this.img.width, this.img.height, this.angle);
    }

    this.collision = function () {
        //Scaners 4 posiciones personaje
        //Con uno solo funciona bien
        // INTERACTIVE_CTX.fillStyle = "purple";
        // INTERACTIVE_CTX.fillRect(
        //     this.x + (this.img.width/4) + Math.cos(this.angle - Math.PI / 2) * this.speed * 4,
        //     this.y + (this.img.width/4) + Math.sin(this.angle - Math.PI / 2) * this.speed * 4,
        //     2,
        //     2)
        // INTERACTIVE_CTX.fillRect(
        //     this.x + (this.img.width/4) + Math.cos(this.angle - Math.PI) * this.speed * 4,
        //     this.y + (this.img.width/4) + Math.sin(this.angle - Math.PI) * this.speed * 4,
        //     2,
        //     2)
        // INTERACTIVE_CTX.fillRect(
        //     this.x + (this.img.width/4)+ Math.cos(this.angle) * this.speed * 4,
        //     this.y + (this.img.width/4) + Math.sin(this.angle) * this.speed * 4,
        //     2,
        //     2)
        // INTERACTIVE_CTX.fillRect(
        //     this.x + (this.img.width/4) + Math.cos(this.angle + Math.PI /2) * this.speed * 4,
        //     this.y + (this.img.width/4) + Math.sin(this.angle + Math.PI /2) * this.speed * 4,
        //     2,
        //     2)

        var colisionDatos = COLLISION_CTX.getImageData(
            this.x + (this.img.width/4) + Math.cos(this.angle - Math.PI / 2) * this.speed * 4,
            this.y + (this.img.width/4) + Math.sin(this.angle - Math.PI / 2) * this.speed * 4,
            1,
            1).data;

        var colisionCentralDatos = COLLISION_CTX.getImageData(
            this.x + (this.img.width/4) + Math.cos(this.angle - Math.PI / 2) * this.speed ,
            this.y + (this.img.width/4) + Math.sin(this.angle - Math.PI / 2) * this.speed ,
            1,
            1).data;

        if (checkPixel(colisionDatos, 255, 0, 0) || checkPixel(colisionDatos, 0, 0, 255)) {
            console.log("colision");
            return true;
        } else if (checkPixel(colisionCentralDatos, 0, 0, 0)) {
            this.die();
        }
        else {
            return false;
        }
    }

    //TODO 
    this.die = function () {
        console.log("mueres");
    }

    this.checkButtonCollision = function () {
        if (squareCollision(this.x, this.y, this.img.width, this.img.height,
            switchButton.x, switchButton.y, switchButton.src.width, switchButton.src.height)) {
            if (!this.inButton) {
                switchButton.trigger();
                this.inButton = true;
            }
        } else {
            this.inButton = false;
        }
    }

    this.scope = function () {
        INTERACTIVE_CTX.fillStyle = "red";
        for (let index = 3; index < 1000; index++) {
            INTERACTIVE_CTX.fillRect(
                this.x + (this.img.width/4) + Math.cos(this.angle - Math.PI / 2) * this.speed * index,
                this.y + (this.img.width/4) + Math.sin(this.angle - Math.PI / 2) * this.speed * index,
                1,
                1)
            var dataParedes = COLLISION_CTX.getImageData(
                this.x + (this.img.width/4) + Math.cos(this.angle - Math.PI / 2) * this.speed * index,
                this.y + (this.img.width/4) + Math.sin(this.angle - Math.PI / 2) * this.speed * index,
                1,
                1).data   

            if (checkPixel(dataParedes, 255, 0, 0) || checkPixel(dataParedes, 0, 0, 255)) {                
                break;
                //index = 1000;
            }

        }
    }

    this.shootPortal=function(number) {

    }


    this.nearOfPortal=function() {

    }
}