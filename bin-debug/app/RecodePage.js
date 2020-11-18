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
            this.addEvent(cor.EventManage.instance(), PurseUpdataInfo, this, this.updataInfo);
        };
        RecodePage.prototype.updataInfo = function () {
            var _this = this;
            cor.Socket.getIntance().sendmsg('TRANSACTION_RECORDS', {
                "coin_name": this.exchange_btn.label,
                "page": 1,
                "page_size": 100
            }, function (rdata) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    Log(rdata);
                    this._recodeInfo = rdata;
                    this.showInfo(0);
                    this.money.text = this.exchange_btn.label == "GST" ? toThousands(GameData.Puser_Money.gst) : toThousands(GameData.Puser_Money.usdt);
                    return [2 /*return*/];
                });
            }); }, this);
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