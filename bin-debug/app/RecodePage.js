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
                var fh = Number(item.change_amount) >= 0 ? "+" : "";
                item.cacolor = Number(item.change_amount) >= 0 ? 0x3dafff : 0x000000;
                item.change_amount = fh + Math.round(Number(item.change_amount));
                item.after_amount = item.after_amount ? (item.coin_name + "余额  " + Math.round(Number(item.after_amount))) : "";
            }
            this.recode_list.dataProvider = new eui.ArrayCollection(this._recodeInfo);
        };
        RecodePage.prototype.initEvent = function () {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.gst_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.gst_info);
            this.addEvent(this.usdt_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.usdt_info);
        };
        RecodePage.prototype.gst_info = function () {
            var _this = this;
            cor.Socket.getIntance().sendmsg('TRANSACTION_RECORDS', {
                "coin_name": "GST",
                "page": 1,
                "page_size": 100
            }, function (rdata) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    Log(rdata);
                    this._recodeInfo = this._gst_recodeInfo = rdata;
                    this.showInfo('GST');
                    return [2 /*return*/];
                });
            }); }, this);
        };
        RecodePage.prototype.usdt_info = function () {
            var _this = this;
            cor.Socket.getIntance().sendmsg('TRANSACTION_RECORDS', {
                "coin_name": "USDT",
                "page": 1,
                "page_size": 100
            }, function (rdata) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    Log(rdata);
                    this._recodeInfo = this._usdt_recodeInfo = rdata;
                    this.showInfo('USDT');
                    return [2 /*return*/];
                });
            }); }, this);
        };
        return RecodePage;
    }(cor.BaseScene));
    Game.RecodePage = RecodePage;
    __reflect(RecodePage.prototype, "Game.RecodePage");
})(Game || (Game = {}));
