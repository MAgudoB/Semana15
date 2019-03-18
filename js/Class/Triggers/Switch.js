Trigger.prototype = Object.create(Trigger.prototype);
function Switch(x, y, imgOff, imgOn, target) {
    Trigger.call(this, x, y, imgOff, imgOn);
    this.target = target;

    this.trigger = function () {
        this.triggered = !this.triggered;
        if (this.triggered) {
            this.src = this.imgOnSrc;
        } else {
            this.src = this.imgOffSrc;
        }
        this.draw(this.src);
        this.target.trigger(this.triggered);
    }
}