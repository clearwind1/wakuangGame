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
    var GetPrize = (function (_super) {
        __extends(GetPrize, _super);
        function GetPrize(num) {
            var _this = _super.call(this) || this;
            _this.skinName = "GetPrize";
            _this.init(num);
            _this.initEvent();
            return _this;
        }
        GetPrize.prototype.init = function (num) {
            // init
            this.prize_group.x = this.width / 2;
            this.prizeNum.text = num + '';
        };
        GetPrize.prototype.initEvent = function () {
            this.addEvent(this.hideGroup, egret.TouchEvent.TOUCH_TAP, this, this.showMove);
        };
        GetPrize.prototype.showMove = function () {
            var _this = this;
            this.hideGroup.visible = false;
            egret.Tween.get(this.prize_group).to({ x: this.width - 263, y: 41, scaleX: 0.2, scaleY: 0.2 }, 500).call(function () {
                _this.dispose();
            });
        };
        return GetPrize;
    }(cor.BaseScene));
    Game.GetPrize = GetPrize;
    __reflect(GetPrize.prototype, "Game.GetPrize");
})(Game || (Game = {}));
//# sourceMappingURL=GetPrize.js.map