function Trigger(x, y, imgOffSrc, imgOnSrc) {
    this.x = x;
    this.y = y;
    this.imgOffSrc = imgOffSrc;
    this.imgOnSrc = imgOnSrc;
    this.triggered = false;

    this.trigger = function () {
        if (triggered) {
            this.draw(this.imgOnSrc);
        } else {
            this.draw(this.imgOffSrc);
        }
    }

    this.draw = function (src) {
        interactiveContext.drawImage(src, this.x, this.y);
    }
}