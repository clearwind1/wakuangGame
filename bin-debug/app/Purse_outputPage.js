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
    var Purse_outputPage = (function (_super) {
        __extends(Purse_outputPage, _super);
        function Purse_outputPage(type, address) {
            var _this = _super.call(this) || this;
            _this.skinName = "Purse_outputPage";
            _this.init(type, address);
            _this.initEvent();
            return _this;
        }
        Purse_outputPage.prototype.init = function (type, address) {
            // init
            if (address) {
                this.address_input.text = address;
            }
            this.money_input.restrict = "0-9";
            this._selectType = type;
            this.gst_select.selected = (type == "GST");
            this.usdt_select.selected = (type == "USDT");
            this._radioGroup = new eui.RadioButtonGroup();
            this.gst_select.group = this._radioGroup;
            this.usdt_select.group = this._radioGroup;
            this.rate_tips.text = "";
            cor.Socket.getIntance().sendmsg('CHECK_IS_SET_PAY_PASSWORD', {}, function (rdata) {
                Log(rdata);
                if (!rdata) {
                    cor.MainScene.instance().addChild(new Game.Purse_setPayPasswordPage());
                }
            }, this, false);
            // setTimeout(() => {
            //     if (!readLocalData(PursePassword)) {
            //         cor.MainScene.instance().addChild(new Purse_setPayPasswordPage());
            //     }
            // }, 200);
        };
        Purse_outputPage.prototype.initEvent = function () {
            var _this = this;
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.output_btn, egret.TouchEvent.TOUCH_TAP, this, this.pay);
            this.addEvent(this.scan_btn, egret.TouchEvent.TOUCH_TAP, this, this.scan);
            this.addEvent(this._radioGroup, eui.UIEvent.CHANGE, this, function (evt) {
                var radioGroup = evt.target;
                _this._selectType = radioGroup.selectedValue;
                _this.money_input.text = "";
                _this.rate_tips.text = "";
            });
            this.addEvent(this.money_input, eui.UIEvent.CHANGE, this, this.showExchangeRate);
        };
        Purse_outputPage.prototype.showExchangeRate = function (e) {
            var rate = this._selectType == "GST" ? GameData.Puser_rate.transfer_out.gst : GameData.Puser_rate.transfer_out.usdt;
            this.rate_tips.text = "\u8F6C\u51FA\u5C06\u4EA7\u751F" + rate + "%\u7684\u624B\u7EED\u8D39\uFF0C\u4F60\u5C06\u5B9E\u9645\u5F97\u5230" + Number(e.target.text) * (1 - rate / 100) + "\u7684" + this._selectType;
        };
        Purse_outputPage.prototype.scan = function () {
            egret.ExternalInterface.call("scanQRCode", "");
        };
        Purse_outputPage.prototype.pay = function () {
            var _this = this;
            if (this.address_input.text == "") {
                Game.TipsSkin.instance().show("请填写地址");
                return;
            }
            if (this.money_input.text == "") {
                Game.TipsSkin.instance().show("请输入额度");
                return;
            }
            var money = Number(this.money_input.text);
            if (money > (this._selectType == "GST" ? GameData.Puser_Money.gst : GameData.Puser_Money.usdt)) {
                Game.TipsSkin.instance().show("输入额度大于现有" + this._selectType);
                return;
            }
            cor.Socket.getIntance().sendmsg('CHECK_IS_SET_PAY_PASSWORD', {}, function (rdata) {
                Log(rdata);
                if (!rdata) {
                    cor.MainScene.instance().addChild(new Game.Purse_setPayPasswordPage());
                }
                else {
                    var payInfo = {
                        coin_num: Number(_this.money_input.text),
                        coin_type: _this._selectType,
                        address: _this.address_input.text
                    };
                    cor.MainScene.instance().addChild(new Game.Purse_PayPage(payInfo));
                }
            }, this, false);
        };
        return Purse_outputPage;
    }(cor.BaseScene));
    Game.Purse_outputPage = Purse_outputPage;
    __reflect(Purse_outputPage.prototype, "Game.Purse_outputPage");
})(Game || (Game = {}));
//# sourceMappingURL=Purse_outputPage.js.map