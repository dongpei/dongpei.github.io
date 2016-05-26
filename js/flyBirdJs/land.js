/**
 * Created by 13103 on 2016/4/22.
 */
//ด๓ตุ
var Land = function (x) {
    this.x = x;
    this.speed = -0.1;
};
Land.prototype.update = function (dt) {
    if (this.x < -336) {
        this.x = this.x + 336 * 4;
    }
    this.x = this.x + this.speed * dt;
};
Land.prototype.draw = function () {
    ctx.drawImage(imgObjs[3], this.x, 600 - 112);
};