function Player2() {
    this.id;
    this.x = 600;
    this.y = 400;
    this.acceleration = 0;
    this.rotation = 0;
    this.angle = 0;
    this.speed = 5;
    this.inButton = false;
    this.lastPositionPortal;
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
        this.playerIntoPortal();
    }



    this.movement = function (position, value) {
        this.x += Math.cos(this.angle - Math.PI / 2) * this.speed * this.acceleration;
        this.y += Math.sin(this.angle - Math.PI / 2) * this.speed * this.acceleration;
    }


    this.draw = function () {
        drawImageRot(INTERACTIVE_CTX, this.img, this.x - (this.img.width / 4), this.y - (this.img.width / 4), this.img.width, this.img.height, this.angle);

        //Draw portals
        if (this.portal0 != undefined) {
            this.portal0.draw();
        }
        if (this.portal1 != undefined) {
            this.portal1.draw();
        }
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
            this.x + (this.img.width / 4) + Math.cos(this.angle - Math.PI / 2) * this.speed * 4,
            this.y + (this.img.width / 4) + Math.sin(this.angle - Math.PI / 2) * this.speed * 4,
            1,
            1).data;

        var colisionCentralDatos = COLLISION_CTX.getImageData(
            this.x + (this.img.width / 4) + Math.cos(this.angle - Math.PI / 2) * this.speed,
            this.y + (this.img.width / 4) + Math.sin(this.angle - Math.PI / 2) * this.speed,
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
                this.x + (this.img.width / 4) + Math.cos(this.angle - Math.PI / 2) * this.speed * index,
                this.y + (this.img.width / 4) + Math.sin(this.angle - Math.PI / 2) * this.speed * index,
                1,
                1)
            var dataParedes = COLLISION_CTX.getImageData(
                this.x + (this.img.width / 4) + Math.cos(this.angle - Math.PI / 2) * this.speed * index,
                this.y + (this.img.width / 4) + Math.sin(this.angle - Math.PI / 2) * this.speed * index,
                1,
                1).data

            if (checkPixel(dataParedes, 255, 0, 0) || checkPixel(dataParedes, 0, 0, 255)) {
                var blue;
                if (checkPixel(dataParedes, 255, 0, 0)) {
                    blue = false;
                } else {
                    blue = true;
                }
                this.lastPositionPortal = {
                    "x": this.x + (this.img.width / 4) + Math.cos(this.angle - Math.PI / 2) * this.speed * index,
                    "y": this.y + (this.img.width / 4) + Math.sin(this.angle - Math.PI / 2) * this.speed * index,
                    "blue": blue
                }
                break;
                //index = 1000;
            }

        }
    }

    this.shootPortal = function (number) {
        //0 y 1
        var nearOfPortal = this.portalNearOfPortal(number);
        if (!nearOfPortal && this.lastPositionPortal.blue == true) {
            if (number == 0) {
                this.portal0 = new Portal(this.lastPositionPortal.x, this.lastPositionPortal.y, 0);
            } else {
                this.portal1 = new Portal(this.lastPositionPortal.x, this.lastPositionPortal.y, 1);
            }
        } else {
        }
    }

    //Logica que deberia esta en functions
    this.portalNearOfPortal = function (number) {
        var portalContrario = undefined
        if (number == 0) {
            portalContrario = this.portal1;
        } else {
            portalContrario = this.portal0;
        }
        if (portalContrario == undefined) {
            return false;
        } else {
            if (Math.sqrt(Math.pow((this.lastPositionPortal.x - portalContrario.x), 2) + Math.pow((this.lastPositionPortal.y - portalContrario.y), 2)) < 30) {
                return true;
            } else {
                return false;
            }
        }
    }

    this.playerIntoPortal = function () {
        if (this.portal0 != undefined && this.portal1 != undefined) {
            if (Math.sqrt(Math.pow((this.x - this.portal0.x), 2) + Math.pow((this.y - this.portal0.y), 2)) < 20 && this.portal0.active) {
                this.exitInTheOtherPortal(0);
            } else if (Math.sqrt(Math.pow((this.x - this.portal1.x), 2) + Math.pow((this.y - this.portal1.y), 2)) < 20 && this.portal1.active) {
                this.exitInTheOtherPortal(1);
            }

            //Si esta lejos el personaje de el portal lo volvemos a activar
            if (Math.sqrt(Math.pow((this.x - this.portal0.x), 2) + Math.pow((this.y - this.portal0.y), 2)) > 25) {
                this.portal0.active = true;
            } else if (Math.sqrt(Math.pow((this.x - this.portal1.x), 2) + Math.pow((this.y - this.portal1.y), 2)) > 25) {
                this.portal1.active = true;
            }
        }
    }

    this.exitInTheOtherPortal = function (number) {
        if (number == 0) {
            this.portal1.active = false;
            this.x = this.portal1.x;
            this.y = this.portal1.y;
        } else {
            this.portal0.active = false;
            this.x = this.portal0.x;
            this.y = this.portal0.y;
        }
    }
}