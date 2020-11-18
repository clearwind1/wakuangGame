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
    var Purse_exchangePage = (function (_super) {
        __extends(Purse_exchangePage, _super);
        function Purse_exchangePage(rateinfo, purseInfo) {
            var _this = _super.call(this) || this;
            _this.skinName = "Purse_exchangePage";
            _this.init(rateinfo, purseInfo);
            _this.initEvent();
            return _this;
        }
        Purse_exchangePage.prototype.init = function (rateinfo, purseInfo) {
            // init
            this._rateInfo = rateinfo;
            this._purseInfo = purseInfo;
            this._isGST = false;
            this.showInfo();
        };
        Purse_exchangePage.prototype.initEvent = function () {
            var _this = this;
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            // this.addEvent(this.change_btn, egret.TouchEvent.TOUCH_TAP, this, this.change);
            this.addEvent(this.exchange_btn, egret.TouchEvent.TOUCH_TAP, this, this.show_sure_group);
            this.addEvent(this.change_all_btn, egret.TouchEvent.TOUCH_TAP, this, this.change_all);
            this.addEvent(this.scan_btn, egret.TouchEvent.TOUCH_TAP, this, this.scan);
            this.addEvent(this.back_btn, egret.TouchEvent.TOUCH_TAP, this, function () { _this.sure_group.visible = false; });
            this.addEvent(this.sure_btn, egret.TouchEvent.TOUCH_TAP, this, this.exchange);
            this.addEvent(cor.EventManage.instance(), UPDATE_EXCHANGE_RATE, this, function (evedata) {
                Log('evedata:', evedata.data);
                cor.Socket.getIntance().sendmsg('GET_GST_USDT_RATE', {}, function (rdata) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this._rateInfo = rdata;
                        this.showInfo();
                        return [2 /*return*/];
                    });
                }); }, _this);
            });
        };
        Purse_exchangePage.prototype.scan = function () {
            egret.ExternalInterface.call("scanQRCode", "");
        };
        Purse_exchangePage.prototype.show_sure_group = function () {
            this.sure_group.visible = true;
            var r = 0;
            if (!this._isGST) {
                r = (Number(this.money_input.text) * this._rateInfo.usdt) / this._rateInfo.gst;
            }
            else {
                r = (Number(this.money_input.text) * this._rateInfo.gst) / this._rateInfo.usdt;
            }
            this.tips.text = "\u662F\u5426\u786E\u5B9A\u4F7F\u7528" + (r.toString().length > 4 ? r.toFixed(4) : r) + "\u679AUSDT\u5151\u6362" + Number(this.money_input.text) + "\u679AGST";
        };
        Purse_exchangePage.prototype.exchange = function () {
            var _this = this;
            cor.Socket.getIntance().sendmsg('INSIDE_TRANSFER', {
                "from_coin_name": this.coin_type1.text,
                "to_coin_name": this.coin_type2.text,
                "number": Number(this.money_input.text)
            }, function (rdata) {
                Log(rdata);
                Game.TipsSkin.instance().show("兑换成功");
                cor.EventManage.instance().sendEvent(PurseUpdataInfo);
                _this.dispose();
            }, this);
        };
        Purse_exchangePage.prototype.change = function () {
            this._isGST = !this._isGST;
            this.showInfo();
        };
        Purse_exchangePage.prototype.change_all = function () {
            var r = 0;
            if (this._isGST) {
                r = (this._money0 * this._rateInfo.usdt) / this._rateInfo.gst;
            }
            else {
                r = (this._money0 * this._rateInfo.gst) / this._rateInfo.usdt;
            }
            this.money_input.text = Math.floor(r) + "";
        };
        Purse_exchangePage.prototype.showInfo = function () {
            var rateinfo = this._rateInfo;
            var purseInfo = this._purseInfo;
            this.money_input.text = "";
            this.coin_type1.text = this._isGST ? "GST" : "USDT";
            this.coin_type2.text = this._isGST ? "USDT" : "GST";
            this.rate_type.text = "兑换" + this.coin_type2.text;
            this.money_type0.text = "您当前持有" + this.coin_type1.text + "：";
            this.money_type1.text = "您当前持有" + this.coin_type2.text + "：";
            this.rate.text = (this._isGST ? rateinfo.gst : rateinfo.usdt) + this.coin_type1.text + "≈" + (this._isGST ? rateinfo.usdt : rateinfo.gst) + this.coin_type2.text;
            for (var k in purseInfo) {
                if (purseInfo[k].coin_name == this.coin_type1.text) {
                    this.money0.text = toThousands(purseInfo[k].available_balance);
                    this._money0 = Number(purseInfo[k].available_balance);
                }
                else {
                    this.money1.text = toThousands(purseInfo[k].available_balance);
                }
            }
        };
        return Purse_exchangePage;
    }(cor.BaseScene));
    Game.Purse_exchangePage = Purse_exchangePage;
    __reflect(Purse_exchangePage.prototype, "Game.Purse_exchangePage");
})(Game || (Game = {}));
//# sourceMappingURL=Purse_exchangePage.js.map