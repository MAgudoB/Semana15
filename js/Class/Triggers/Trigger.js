function Trigger(x, y, imgOffSrc, imgOnSrc) {
    this.x = x;
    this.y = y;
    this.imgOffSrc = imgOffSrc;
    this.imgOnSrc = imgOnSrc;
    this.triggered = false;
    this.src = imgOffSrc;

    this.trigger = function () {
        this.triggered = !this.triggered;
        if (this.triggered) {
            this.src = this.imgOnSrc;
        } else {
            this.src = this.imgOffSrc;
        }
    }

    this.draw = function () {
        INTERACTIVE_CTX.drawImage(this.src, this.x, this.y);
    }
}