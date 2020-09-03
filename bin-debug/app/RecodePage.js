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
    var RecodePage = (function (_super) {
        __extends(RecodePage, _super);
        function RecodePage(money, recodeInfo, type) {
            var _this = _super.call(this) || this;
            _this.skinName = "RecodePage";
            _this.init(money, recodeInfo, type);
            _this.initEvent();
            return _this;
        }
        RecodePage.prototype.init = function (money, recodeInfo, type) {
            // init
            this.recode_scroller.height = this.height - this.recode_scroller.y;
            this._recodeInfo = recodeInfo;
            this.exchange_btn.label = type;
            this.money.text = money;
            this._currentSelect = 0;
            this.showInfo(0);
        };
        RecodePage.prototype.showInfo = function (type) {
            var sl = type;
            if (sl == 0) {
                this.all_info_btn.currentState = "up";
                this.in_info_btn.currentState = "down";
                this.out_info_btn.currentState = "down";
            }
            else if (sl == 1) {
                this.all_info_btn.currentState = "down";
                this.in_info_btn.currentState = "up";
                this.out_info_btn.currentState = "down";
            }
            else {
                this.all_info_btn.currentState = "down";
                this.in_info_btn.currentState = "down";
                this.out_info_btn.currentState = "up";
            }
            var recodeinfo = this._recodeInfo;
            var selData = [];
            for (var k in recodeinfo) {
                var item = recodeinfo[k];
                var fh = Number(item.change_amount) >= 0 ? "+" : "";
                item.cacolor = Number(item.change_amount) >= 0 ? 0x3dafff : 0x000000;
                item.change_amount = fh + (Number(item.change_amount));
                // item.after_amount = item.after_amount ? (item.coin_name + "余额  " + (Number(item.after_amount))) : "";
                if (sl == 0) {
                    selData.push(item);
                }
                else if (sl == 1) {
                    if (Number(item.change_amount) >= 0) {
                        selData.push(item);
                    }
                }
                else {
                    if (Number(item.change_amount) < 0) {
                        selData.push(item);
                    }
                }
            }
            this.recode_list.dataProvider = new eui.ArrayCollection(selData);
        };
        RecodePage.prototype.initEvent = function () {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.output_btn, egret.TouchEvent.TOUCH_TAP, this, this.out_put);
            this.addEvent(this.all_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.showInfo, [0]);
            this.addEvent(this.in_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.showInfo, [1]);
            this.addEvent(this.out_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.showInfo, [2]);
        };
        RecodePage.prototype.out_put = function () {
            cor.MainScene.instance().addChild(new Game.Purse_outputPage(this.exchange_btn.label));
        };
        return RecodePage;
    }(cor.BaseScene));
    Game.RecodePage = RecodePage;
    __reflect(RecodePage.prototype, "Game.RecodePage");
})(Game || (Game = {}));
//# sourceMappingURL=RecodePage.js.map