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
    var Purse_exchangePage = (function (_super) {
        __extends(Purse_exchangePage, _super);
        function Purse_exchangePage(rateinfo, purseInfo) {
            var _this = _super.call(this) || this;
            _this.skinName = "Purse_exchangePage";
            _this.init(rateinfo, purseInfo);
            _this.initEvent();
            return _this;
        }
        Purse_exchangePage.prototype.init = function (rateinfo, purseInfo) {
            // init
            this._rateInfo = rateinfo;
            this._purseInfo = purseInfo;
            this._isGST = true;
            this.showInfo();
        };
        Purse_exchangePage.prototype.initEvent = function () {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.change_btn, egret.TouchEvent.TOUCH_TAP, this, this.change);
            this.addEvent(this.exchange_btn, egret.TouchEvent.TOUCH_TAP, this, this.exchange);
        };
        Purse_exchangePage.prototype.exchange = function () {
            var _this = this;
            cor.Socket.getIntance().sendmsg('INSIDE_TRANSFER', {
                "from_coin_name": this.coin_type1.text,
                "to_coin_name": this.coin_type2.text,
                "number": Number(this.money_input.text)
            }, function (rdata) {
                Log(rdata);
                Game.TipsSkin.instance().show("兑换成功");
                cor.EventManage.instance().sendEvent(PurseUpdataInfo);
                _this.dispose();
            }, this);
        };
        Purse_exchangePage.prototype.change = function () {
            this._isGST = !this._isGST;
            this.showInfo();
        };
        Purse_exchangePage.prototype.showInfo = function () {
            var rateinfo = this._rateInfo;
            var purseInfo = this._purseInfo;
            this.coin_type1.text = this._isGST ? "GST" : "USDT";
            this.coin_type2.text = this._isGST ? "USDT" : "GST";
            this.rate.text = (this._isGST ? rateinfo.gst : rateinfo.usdt) + ":" + (this._isGST ? rateinfo.usdt : rateinfo.gst);
            for (var k in purseInfo) {
                if (purseInfo[k].coin_name == this.coin_type1.text) {
                    this.money.text = "余额：" + toThousands(purseInfo[k].available_balance);
                    break;
                }
            }
        };
        return Purse_exchangePage;
    }(cor.BaseScene));
    Game.Purse_exchangePage = Purse_exchangePage;
    __reflect(Purse_exchangePage.prototype, "Game.Purse_exchangePage");
})(Game || (Game = {}));
