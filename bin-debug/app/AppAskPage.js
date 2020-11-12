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
    var AppAskPage = (function (_super) {
        __extends(AppAskPage, _super);
        function AppAskPage(askinfo) {
            var _this = _super.call(this) || this;
            _this.skinName = "AppAskPage";
            _this.init(askinfo);
            _this.initEvent();
            return _this;
        }
        AppAskPage.prototype.init = function (askinfo) {
            // init
            this.tips.text = askinfo.tip;
            this.callbackFun = askinfo.fun;
            this.callbackObj = askinfo.obj;
        };
        AppAskPage.prototype.initEvent = function () {
            this.addEvent(this.cancel_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.sure_btn, egret.TouchEvent.TOUCH_TAP, this, this.sure);
        };
        AppAskPage.prototype.sure = function () {
            this.callbackFun.apply(this.callbackObj);
            this.dispose();
        };
        return AppAskPage;
    }(cor.BaseScene));
    Game.AppAskPage = AppAskPage;
    __reflect(AppAskPage.prototype, "Game.AppAskPage");
})(Game || (Game = {}));
//# sourceMappingURL=AppAskPage.js.map