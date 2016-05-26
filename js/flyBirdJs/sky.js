/**
 * Created by 13103 on 2016/4/22.
 */
//Ìì¿Õ
var Sky = function (x) {
    this.x = x;
    this.speed = -0.03;
};
Sky.prototype.update = function (dt) {
    if (this.x < -800) {
        this.x = this.x + 1600;
    }
    this.x = this.x + this.speed * dt;
};
Sky.prototype.draw = function () {
    ctx.drawImage(imgObjs[0], this.x, 0);
};