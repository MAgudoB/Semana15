function MainClass(imgSrc, x, y) {
    this.posX = x;
    this.posY = y;
    this.sprite = imgSrc;

    this.draw = function () {
        //playableContext.drawImage(this.sprite, this.posX + dx, this.posY + dy);
        drawImageRot(playableContext, this.sprite, this.posX + dx, this.posY + dy, this.sprite.width, this.sprite.height, this.angle);
    }
}




