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
    var Purse_PayPage = (function (_super) {
        __extends(Purse_PayPage, _super);
        function Purse_PayPage(info) {
            var _this = _super.call(this) || this;
            _this.skinName = "Purse_PayPage";
            _this.init(info);
            _this.initEvent();
            return _this;
        }
        Purse_PayPage.prototype.init = function (info) {
            // init
            this._info = info;
            this.coin_num.text = toThousands(info.coin_num);
            this.coin_type.text = info.coin_type;
            this.address.text = info.address;
            this.bg.height = this.address.height > 40 ? 485 + this.address.height : 533;
        };
        Purse_PayPage.prototype.initEvent = function () {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.sure_btn, egret.TouchEvent.TOUCH_TAP, this, this.pay);
            this.addEvent(this.reset_password_btn, egret.TouchEvent.TOUCH_TAP, this, this.reset_password);
        };
        Purse_PayPage.prototype.reset_password = function () {
            cor.MainScene.instance().addChild(new Game.Purse_resetPassword());
            this.dispose();
        };
        Purse_PayPage.prototype.pay = function () {
            var _this = this;
            var info = this._info;
            cor.Socket.getIntance().sendmsg('TRANSFER_OUT', {
                "coin_name": info.coin_type,
                "address": info.address,
                "number": info.coin_num,
                "pay_password": this.input_password.text
            }, function (rdata) {
                Log(rdata);
                Game.TipsSkin.instance().show("已提交");
                cor.EventManage.instance().sendEvent(PurseUpdataInfo);
                _this.dispose();
            }, this, false);
        };
        return Purse_PayPage;
    }(cor.BaseScene));
    Game.Purse_PayPage = Purse_PayPage;
    __reflect(Purse_PayPage.prototype, "Game.Purse_PayPage");
})(Game || (Game = {}));
//# sourceMappingURL=Purse_PayPage.js.map