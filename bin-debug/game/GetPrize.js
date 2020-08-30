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
        function GetPrize(num, type) {
            var _this = _super.call(this) || this;
            _this.skinName = "GetPrize";
            _this.init(num, type);
            _this.initEvent();
            return _this;
        }
        GetPrize.prototype.init = function (num, type) {
            // init
            this.prize_group.x = this.width / 2;
            this.prizeNum.text = '+' + toThousands(num);
            this.prizeTip.text = type == 1 ? "矿区产出收益" : "矿工产出收益";
            this._type = type;
        };
        GetPrize.prototype.initEvent = function () {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.showMove);
            this.addEvent(this.sure_btn, egret.TouchEvent.TOUCH_TAP, this, this.showMove);
        };
        GetPrize.prototype.showMove = function () {
            var _this = this;
            this.hideGroup.visible = false;
            var w = this.hideGroup.width;
            egret.Tween.get(this.prize_group).to({ x: w - 263, y: 41, scaleX: 0.2, scaleY: 0.2 }, 500).call(function () {
                _this.dispose();
                if (_this._type == 1 && GameData.UserInfo.hold_area_work_reward > 0) {
                    cor.MainScene.instance().addChild(new GetPrize(GameData.UserInfo.hold_area_work_reward, 2));
                }
            });
        };
        return GetPrize;
    }(cor.BaseScene));
    Game.GetPrize = GetPrize;
    __reflect(GetPrize.prototype, "Game.GetPrize");
})(Game || (Game = {}));
//# sourceMappingURL=GetPrize.js.map