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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Game;
(function (Game) {
    var LoadingView = (function (_super) {
        __extends(LoadingView, _super);
        function LoadingView() {
            var _this = _super.call(this) || this;
            _this.skinName = "LoadingView";
            _this._index = 0;
            _this.init();
            _this.initEnent();
            return _this;
        }
        LoadingView.prototype.init = function () {
            // init
            this.loadingTx.text = "";
            this.tipTx.text = "";
            this._index = 0;
            this._shape = new egret.Shape();
            this.hideGroup.addChildAt(this._shape, 2);
            for (var i = 0; i < 8; i++) {
                var li = this.addDB(this.light_group, "light", { x: 100 + RandomUtils.limit(0, 50) + i * 150, y: 200 + RandomUtils.limit(0, 50) });
                li.animation.timeScale = RandomUtils.limit(0.5, 1.5);
            }
            this.showTip();
        };
        LoadingView.prototype.showTip = function () {
            var _this = this;
            var changeTx = ['欢迎来到Richman大矿场',
                '正在招聘专属矿区管家',
                '马上就要抵达目的地，请稍等',
                '越大的矿区，越能产出更多的矿石',
                '想要快速挖到矿石，试不试配置齐全设备',
                '矿石交易所的交易价格会不定时更新，请一定留意好每日的价格走势'];
            this.tipTx.text = changeTx[this._index];
            this._tag = setTimeout(function () {
                _this._index = (_this._index + 1) % changeTx.length;
                _this.showTip();
            }, 1800);
        };
        LoadingView.prototype.initEnent = function () {
        };
        LoadingView.prototype.onProgress = function (current, total) {
            this.loadingTx.text = Math.floor(current / total * 100) + "%";
            this.getSectorProgress(360 * (current / total) - 90);
            if (total == current) {
                // this.showMove();
                var role = this.addDB(this.lock_group, "dutiao", { x: this.lock_group.width / 2, y: 0 }, { x: 2, y: 2 });
                role.animation.reset();
                role.animation.play("newAnimation", 1);
                role.addEvent("complete", this.showMove, this);
            }
        };
        LoadingView.prototype.getSectorProgress = function (angle) {
            this._shape.graphics.clear();
            this._shape.graphics.beginFill(0x2C5091);
            this._shape.graphics.moveTo(667, 375);
            this._shape.graphics.lineTo(667, 308);
            this._shape.graphics.drawArc(667, 375, 67, -Math.PI / 2, angle * Math.PI / 180, false);
            this._shape.graphics.lineTo(667, 375);
            this._shape.graphics.endFill();
        };
        LoadingView.prototype.showMove = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                var index;
                return __generator(this, function (_a) {
                    index = cor.MainScene.instance().numChildren - 1;
                    cor.MainScene.instance().addChildAt(new Game.GameScene(), index);
                    // await wait(300);
                    egret.Tween.get(this.top_img).to({ y: -375 }, 500);
                    egret.Tween.get(this.bottom_img).to({ y: 750 }, 500);
                    egret.Tween.get(this.hideGroup).to({ alpha: 0 }, 500).call(function () {
                        _this.dispose();
                    });
                    return [2 /*return*/];
                });
            });
        };
        LoadingView.prototype.dispose = function () {
            clearTimeout(this._tag);
            this.parent.removeChild(this);
        };
        return LoadingView;
    }(cor.BaseScene));
    Game.LoadingView = LoadingView;
    __reflect(LoadingView.prototype, "Game.LoadingView", ["RES.PromiseTaskReporter"]);
})(Game || (Game = {}));
//# sourceMappingURL=LoadingView.js.map