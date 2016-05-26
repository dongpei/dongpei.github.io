/**
 * Created by 13103 on 2016/4/22.
 */
//Ð¡Äñ
var Bird = function (cvs) {
    var _this = this;
    cvs.addEventListener('click', function () {
        _this.speed = -0.3;
    });
    this.x = 200;
    this.y = 100;
    this.index = 0;
    this.waitTime = 0;
    this.speed = 0;
    this.a = 0.0005;

};
Bird.prototype.update = function (dt) {
    this.waitTime = this.waitTime + dt;
    if (this.waitTime > 100) {
        this.index = (this.index + 1) % 3;
        this.waitTime = this.waitTime - 100;
    }
    this.speed = this.speed + this.a * dt;
    this.y = this.y + this.speed * dt;
};
Bird.prototype.draw = function () {
    ctx.save();
    ctx.translate(this.x, this.y);
    var speed = this.speed > 0.3 ? 0.3 : this.speed;
    var angle = speed / 0.3 * 45;
    ctx.rotate(angle / 180 * Math.PI);
    ctx.drawImage(imgObjs[4], 52 * this.index, 0, 52, 45,
        -26, -22.5, 52, 45);
    ctx.restore();
};