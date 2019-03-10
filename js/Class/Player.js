Movable.prototype = Object.create(Movable.prototype);
function Player(imgSrc, x, y, initialWeapon, initialAmmo, initialLife) {
    Movable.call(this, imgSrc, x, y);
    this.speed = 5;
    this.life = initialLife;
    this.actualLife = initialLife;
    this.weaponBag = new Array();
    this.weaponBag.push(initialWeapon);
    //Map de municiones - clave tipo, valor cantidad
    this.ammoBag = new Map();
    this.ammoBag.set(initialWeapon, initialAmmo);
    this.ammoBag.set(2, 0);
    this.ammoBag.set(3, 0);
    this.weaponSelected = 0;
    this.bullets = new Array();
    this.angle = 0;

    this.selectWeapon = function (typeSelected) {
        if (this.weaponBag.includes(typeSelected)) {
            this.weaponSelected = typeSelected;
            this.switchSprite();
        }
    }

    this.switchSprite = function () {
        //TODO Cambiar sprite acorde al arma.
        switch (this.weaponSelected) {
            case 1:
                this.sprite = playerSprite1;
                break;
            case 2:
                this.sprite = playerSprite2;
                break;
            case 3:
                this.sprite = playerSprite3;
                break;
            default:
                break;
        }
    }

    this.movementControl = function (position, value) {
        var collision = this.collision();
        if (collision == undefined) {
            this.movement(position, value);
        } else {
            var movement = value;
            switch (collision) {
                case "top":
                    if (position == 0 && movement == -1) { movement = 1; }
                    break;
                case "right":
                    if (position == 1 && movement == 1) { movement = -1; }
                    break;
                case "down":
                    if (position == 0 && movement == 1) { movement = -1; }
                    break;
                case "left":
                    if (position == 1 && movement == -1) { movement = 1; }
                    break;
                default:
                    break;
            }
            this.movement(position, movement);
        }
    }

    this.gap = function () {
        if (playableCanvasWidth > -dx) {
            if (this.posX + dx > 400) {
                dx -= this.speed;
            }
        }
        if (0 > dx) {
            if (this.posX + dx < 100) {
                dx += this.speed;
            }
        }
        if (playableCanvasHeight > -dy) {
            if (this.posY + dy > 400) {
                dy -= this.speed;
            }
        }
        if (0 > dy) {
            if (this.posY + dy < 100) {
                dy += this.speed;
            }
        }
    }

    this.movement = function (position, value) {
        if (position == 0) {
            this.posY += value * this.speed;
        }
        //Si nos movemos en horizontal
        if (position == 1) {
            this.posX += value * this.speed;
        }
        //Si giramos
        if (position == 2) {
            this.angle += value;
        }
        this.gap();
    }

    this.shoot = function () {
        var nBullets = this.ammoBag.get(this.weaponSelected);
        if (nBullets > 0) {
            this.bullets.push(new Bullet(ammoMap.get(this.weaponSelected),
                this.posX + this.sprite.width,
                this.posY + this.sprite.width - 20, 5,
                this.angle, ammoSound.get(this.weaponSelected)));
            nBullets -= 1;
            this.ammoBag.set(this.weaponSelected, nBullets);
            globalSound += ammoSound.get(this.weaponSelected);
        }
    }

    this.pickAmmo = function () {
        for (var x in arrAmmoInMap) {
            if (this.posX < arrAmmoInMap[x].posX &&
                this.posX + this.sprite.width > arrAmmoInMap[x].posX &&
                this.posY < arrAmmoInMap[x].posY &&
                this.posY + this.sprite.height > arrAmmoInMap[x].posY) {
                this.ammoBag.set(arrAmmoInMap[x].type, arrAmmoInMap[x].quantity + this.ammoBag.get(arrAmmoInMap[x].type));
                arrAmmoInMap.splice(x, 1);
            }
        }
    }

    this.pickWeapon = function () {
        for (var x in arrWeaponInMap) {
            if (this.posX < arrWeaponInMap[x].posX &&
                this.posX + this.sprite.width > arrWeaponInMap[x].posX &&
                this.posY < arrWeaponInMap[x].posY &&
                this.posY + this.sprite.height > arrWeaponInMap[x].posY) {
                this.weaponBag.push(arrWeaponInMap[x].type);
                arrWeaponInMap.splice(x, 1);
            }
        }
    }

}



