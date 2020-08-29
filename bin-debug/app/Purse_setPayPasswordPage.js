var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Game;
(function (Game) {
    var Purse_setPayPasswordPage = (function (_super) {
        __extends(Purse_setPayPasswordPage, _super);
        function Purse_setPayPasswordPage() {
            var _this = _super.call(this) || this;
            _this.skinName = "Purse_setPayPasswordPage";
            _this.init();
            _this.initEvent();
            return _this;
        }
        Purse_setPayPasswordPage.prototype.init = function () {
            // init
        };
        Purse_setPayPasswordPage.prototype.initEvent = function () {
            this.addEvent(this.send_code_btn, egret.TouchEvent.TOUCH_TAP, this, this.send_code);
            this.addEvent(this.cancel_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.sure_btn, egret.TouchEvent.TOUCH_TAP, this, this.send_set_password);
        };
        Purse_setPayPasswordPage.prototype.send_code = function () {
        };
        Purse_setPayPasswordPage.prototype.send_set_password = function () {
        };
        return Purse_setPayPasswordPage;
    }(cor.BaseScene));
    Game.Purse_setPayPasswordPage = Purse_setPayPasswordPage;
    __reflect(Purse_setPayPasswordPage.prototype, "Game.Purse_setPayPasswordPage");
})(Game || (Game = {}));
//# sourceMappingURL=Purse_setPayPasswordPage.js.map