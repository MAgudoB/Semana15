Trigger.prototype = Object.create(Trigger.prototype);
function Switch(target) {
    Trigger.call(this, x, y, imgOff, imgOn);
    this.target = target;

    this.trigger = function () {
        Trigger.call()
        this.targe.trigger(this.triggered);
    }
}