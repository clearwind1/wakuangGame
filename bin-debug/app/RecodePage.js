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
        function RecodePage(recodeInfo, type) {
            var _this = _super.call(this) || this;
            _this.skinName = "RecodePage";
            _this.init(recodeInfo, type);
            _this.initEvent();
            return _this;
        }
        RecodePage.prototype.init = function (recodeInfo, type) {
            // init
            this.recode_scroller.height = this.height - 164;
            if (type == "GST") {
                if (!this._gst_recodeInfo)
                    this._gst_recodeInfo = recodeInfo;
            }
            else {
                if (!this._usdt_recodeInfo)
                    this._usdt_recodeInfo = recodeInfo;
            }
            this._recodeInfo = recodeInfo;
            this.showInfo(type);
        };
        RecodePage.prototype.showInfo = function (type) {
            if (type == "GST") {
                this.gst_info_btn.currentState = "up";
                this.usdt_info_btn.currentState = "down";
            }
            else {
                this.gst_info_btn.currentState = "down";
                this.usdt_info_btn.currentState = "up";
            }
            var recodeinfo = this._recodeInfo;
            for (var k in recodeinfo) {
                var item = recodeinfo[k];
                var fh = Number(item.change_amount) >= 0 ? "+" : "-";
                item.cacolor = Number(item.change_amount) >= 0 ? 0x3dafff : 0x000000;
                item.change_amount = fh + Math.round(Number(item.change_amount));
                item.after_amount = item.after_amount ? (item.coin_name + "余额  " + item.after_amount) : "";
            }
            this.recode_list.dataProvider = new eui.ArrayCollection(this._recodeInfo);
        };
        RecodePage.prototype.initEvent = function () {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            // this.addEvent(this.gst_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.gst_info);
            // this.addEvent(this.usdt_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.usdt_info);
        };
        return RecodePage;
    }(cor.BaseScene));
    Game.RecodePage = RecodePage;
    __reflect(RecodePage.prototype, "Game.RecodePage");
})(Game || (Game = {}));
//# sourceMappingURL=RecodePage.js.map