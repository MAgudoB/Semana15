Trigger.prototype = Object.create(Trigger.prototype);
function Door(x, y, imgOff, imgOn) {
    Trigger.call(this, x, y, imgOff, imgOn);

    this.draw = function () {
        if (this.triggered) {
            this.src = imgOn;
            COLLISION_CTX.fillStyle = "white"
        } else {
            this.src = imgOff;;
            COLLISION_CTX.fillStyle = "red"
        }
        COLLISION_CTX.fillRect(this.x, this.y, 64, 64);
        INTERACTIVE_CTX.drawImage(this.src, this.x, this.y);
    }
}