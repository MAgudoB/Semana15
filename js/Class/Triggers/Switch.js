Trigger.prototype = Object.create(Trigger.prototype);
function Switch(x, y, imgOff, imgOn, target) {
    Trigger.call(this, x, y, imgOff, imgOn);
    this.target = target;

    this.trigger = function () {
        this.triggered = !this.triggered;
        if (triggered) {
            this.draw(this.imgOnSrc);
        } else {
            this.draw(this.imgOffSrc);
        }
        this.target.trigger(this.triggered);
    }
}