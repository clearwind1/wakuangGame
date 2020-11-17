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
    var ExchangePage = (function (_super) {
        __extends(ExchangePage, _super);
        function ExchangePage(info) {
            var _this = _super.call(this) || this;
            _this.skinName = "ExchangePage";
            _this.init(info);
            _this.initEvent();
            return _this;
        }
        ExchangePage.prototype.init = function (info) {
            // init
            var lda = info;
            this.ex_scroller.height = this.height - this.ex_scroller.y - 100;
            this.ex_list.itemRenderer = AppExchangeItem;
            this.ex_list.dataProvider = new eui.ArrayCollection(lda);
        };
        ExchangePage.prototype.initEvent = function () {
            var _this = this;
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(cor.EventManage.instance(), UPDATE_EXCHANGE_RATE, this, function (evedata) {
                Log('evedata:', evedata.data);
                var sv = _this.ex_scroller.viewport.scrollV;
                cor.Socket.getIntance().sendmsg('EXCHANGES', {
                    "page": 1,
                    "page_size": 100
                }, function (rdata) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        Log(rdata);
                        this.ex_list.dataProvider = new eui.ArrayCollection(rdata);
                        setTimeout(function () {
                            _this.ex_scroller.viewport.scrollV = sv;
                        }, 200);
                        return [2 /*return*/];
                    });
                }); }, _this);
            });
            egret.ExternalInterface.addCallback("exchangeNoApp", function (message) {
                var askinfo = {
                    tip: "未安装交易所，是否立即下载？",
                    fun: function () { egret.ExternalInterface.call("sendToNative", "downExchange$" + message); },
                    obj: _this
                };
                cor.MainScene.instance().addChild(new Game.AppAskPage(askinfo));
            });
        };
        return ExchangePage;
    }(cor.BaseScene));
    Game.ExchangePage = ExchangePage;
    __reflect(ExchangePage.prototype, "Game.ExchangePage");
    var AppExchangeItem = (function (_super) {
        __extends(AppExchangeItem, _super);
        function AppExchangeItem() {
            var _this = _super.call(this) || this;
            _this.skinName = "AppExchangeItem";
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.removeFromStage, _this);
            return _this;
        }
        AppExchangeItem.prototype.addToStage = function () {
            this.gofor_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_touch, this);
        };
        AppExchangeItem.prototype.btn_touch = function (e) {
            var pc = this.data.package_name;
            var ac = this.data.home_name;
            var eurl = this.data.download_url;
            var askinfo = {
                tip: "将为你打开交易所，是否打开？",
                fun: function () { egret.ExternalInterface.call("sendToNative", "call_exchange$" + pc + "|" + ac + "|" + eurl); },
                obj: this
            };
            cor.MainScene.instance().addChild(new Game.AppAskPage(askinfo));
        };
        AppExchangeItem.prototype.removeFromStage = function () {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFromStage, this);
            this.gofor_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_touch, this);
        };
        AppExchangeItem.prototype.dataChanged = function () {
        };
        return AppExchangeItem;
    }(eui.ItemRenderer));
    __reflect(AppExchangeItem.prototype, "AppExchangeItem");
})(Game || (Game = {}));
