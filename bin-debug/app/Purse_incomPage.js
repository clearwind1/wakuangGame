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
    var Purse_incomPage = (function (_super) {
        __extends(Purse_incomPage, _super);
        function Purse_incomPage(purseInfo) {
            var _this = _super.call(this) || this;
            _this.skinName = "Purse_incomPage";
            _this.init(purseInfo);
            _this.initEvent();
            return _this;
        }
        Purse_incomPage.prototype.init = function (purseInfo) {
            // init
            var _this = this;
            this.address.text = purseInfo.bind_address;
            egret.ExternalInterface.call("creatQRCode", purseInfo.bind_address);
            egret.ExternalInterface.addCallback("creatQRCode", function (message) {
                // alert("message from Native is = " + message);
                console.log(message);
                _this.address_qrcode.source = "data:image/png;base64," + message;
            });
        };
        Purse_incomPage.prototype.initEvent = function () {
            this.addEvent(this.back_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.address_group, egret.TouchEvent.TOUCH_TAP, this, this.copy);
        };
        Purse_incomPage.prototype.copy = function () {
            egret.ExternalInterface.call("sendToNative", "copyStr$" + this.address.text);
        };
        return Purse_incomPage;
    }(cor.BaseScene));
    Game.Purse_incomPage = Purse_incomPage;
    __reflect(Purse_incomPage.prototype, "Game.Purse_incomPage");
})(Game || (Game = {}));
