/**
 * Created by 13103 on 2016/4/22.
 */
//¹Ü×Ó
var Pipe = function (x) {
    this.x = x;
    this.y = Math.random() * 150 + 50;
    this.speed = -0.1;
};
Pipe.prototype.update = function (dt) {
    if (this.x < -52) {
        this.x = this.x + 1000;
        this.y = Math.random() * 150 + 50;
    }
    this.x = this.x + this.speed * dt;
};
Pipe.prototype.draw = function () {
    ctx.drawImage(imgObjs[1], this.x, this.y - 420);
    ctx.drawImage(imgObjs[2], this.x, this.y + 150);
    ctx.rect(this.x, this.y - 420, 52, 420);
    ctx.rect(this.x, this.y + 150, 52, 420);
};