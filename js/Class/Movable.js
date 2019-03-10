MainClass.prototype = Object.create(MainClass.prototype);
function Movable(imgSrc, x, y) {
    MainClass.call(this, imgSrc, x, y);
    this.initialX = x;
    this.initialY = y;


    this.collision = function () {
        //TODO Colisiones
        var topImage = colorBackgroundContext.getImageData(this.posX, this.posY - 5, 1, 1);
        var rightImage = colorBackgroundContext.getImageData(this.posX + this.sprite.width + 5, this.posY, 1, 1);
        var downImage = colorBackgroundContext.getImageData(this.posX, this.posY + this.sprite.height + 5, 1, 1);
        var leftImage = colorBackgroundContext.getImageData(this.posX - 5, this.posY, 1, 1);
        if (topImage.data[0] >= 250) {
            return "top";
        }
        else if (rightImage.data[0] >= 250) {
            return "right";
        }
        else if (downImage.data[0] >= 250) {
            return "down";
        }
        else if (leftImage.data[0] >= 250) {
            return "left";
        }
        else {
            return undefined;
        }
    }
}