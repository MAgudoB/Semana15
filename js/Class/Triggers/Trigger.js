function Trigger(x, y, imgOffSrc, imgOnSrc) {
    this.x = x;
    this.y = y;
    this.imgOffSrc = imgOffSrc;
    this.imgOnSrc = imgOnSrc;
    this.triggered = false;

    this.trigger = function () {
        this.triggered = !this.triggered;
        if (triggered) {
            this.draw(this.imgOnSrc);
        } else {
            this.draw(this.imgOffSrc);
        }
    }

    this.draw = function (src) {
        INTERACTIVE_CTX.drawImage(src, this.x, this.y);
    }
}