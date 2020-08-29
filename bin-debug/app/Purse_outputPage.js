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
        function Purse_outputPage(address) {
            var _this = _super.call(this) || this;
            _this.skinName = "Purse_outputPage";
            _this.init(address);
            _this.initEvent();
            return _this;
        }
        Purse_outputPage.prototype.init = function (address) {
            // init
            if (address) {
                this.address_input.text = address;
            }
            this.money_input.restrict = "0-9";
            this._selectType = "GST";
            this.gst_select.selected = true;
            this._radioGroup = new eui.RadioButtonGroup();
            this.gst_select.group = this._radioGroup;
            this.usdt_select.group = this._radioGroup;
            if (!readLocalData(PursePassword)) {
                cor.MainScene.instance().addChild(new Game.Purse_setPayPasswordPage());
            }
        };
        Purse_outputPage.prototype.initEvent = function () {
            var _this = this;
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.output_btn, egret.TouchEvent.TOUCH_TAP, this, this.output);
            this.addEvent(this.scan_btn, egret.TouchEvent.TOUCH_TAP, this, this.scan);
            this.addEvent(this._radioGroup, eui.UIEvent.CHANGE, this, function (evt) {
                var radioGroup = evt.target;
                _this._selectType = radioGroup.selectedValue;
            });
            egret.ExternalInterface.addCallback("scanResult", function (message) {
                // TipsSkin.instance().show(message);
                _this.address_input.text = message;
            });
        };
        Purse_outputPage.prototype.scan = function () {
            egret.ExternalInterface.call("scanQRCode", "");
        };
        Purse_outputPage.prototype.output = function () {
            if (!readLocalData(PursePassword)) {
                cor.MainScene.instance().addChild(new Game.Purse_setPayPasswordPage());
                return;
            }
            cor.Socket.getIntance().sendmsg('TRANSFER_OUT', {
                "coin_name": this._selectType,
                "address": this.address_input.text,
                "number": Number(this.money_input.text),
                "pay_password": "123456"
            }, function (rdata) {
                Log(rdata);
                Game.TipsSkin.instance().show("已提交");
            }, this);
        };
        return Purse_outputPage;
    }(cor.BaseScene));
    Game.Purse_outputPage = Purse_outputPage;
    __reflect(Purse_outputPage.prototype, "Game.Purse_outputPage");
})(Game || (Game = {}));
//# sourceMappingURL=Purse_outputPage.js.map