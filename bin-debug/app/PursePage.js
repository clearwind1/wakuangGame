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
    var PursePage = (function (_super) {
        __extends(PursePage, _super);
        function PursePage(purseInfo) {
            var _this = _super.call(this) || this;
            _this.skinName = "PursePage";
            _this.init(purseInfo);
            _this.initEvent();
            return _this;
        }
        PursePage.prototype.init = function (purseInfo) {
            var _this = this;
            // init
            this._purseInfo = purseInfo;
            for (var k in purseInfo) {
                if (purseInfo[k].coin_name == "GST") {
                    this.gst_info_btn['money'].text = toThousands(purseInfo[k].available_balance);
                    this.address.text = purseInfo[k].bind_address;
                    this.money.text = toThousands(purseInfo[k].available_balance);
                    GameData.Puser_Money.gst = purseInfo[k].available_balance;
                }
                else {
                    this.usdt_info_btn['money'].text = toThousands(purseInfo[k].available_balance);
                    GameData.Puser_Money.usdt = purseInfo[k].available_balance;
                }
            }
            // this.exchange_btn['num'].text = "";
            cor.Socket.getIntance().sendmsg('GET_GST_USDT_RATE', {}, function (rdata) {
                Log(rdata);
                _this._rateInfo = rdata;
                GameData.Puser_rate = rdata;
                // this.exchange_btn['num'].text = rdata.usdt + "USDT:" + rdata.gst + "GST";
                // cor.MainScene.instance().addChild(new RecodePage(rdata, "USDT"));
            }, this);
            var is_show = readLocalData(PurseShowInfo);
            if (is_show == "0") {
                this.money.text = "******";
                this.address.text = "******";
                this.gst_info_btn['money'].text = "******";
                this.usdt_info_btn['money'].text = "******";
            }
        };
        PursePage.prototype.updataInfo = function () {
            var _this = this;
            cor.Socket.getIntance().sendmsg('WALLET_LIST', {}, function (rdata) { return __awaiter(_this, void 0, void 0, function () {
                var k;
                return __generator(this, function (_a) {
                    Log(rdata);
                    this._purseInfo = rdata;
                    for (k in rdata) {
                        if (rdata[k].coin_name == "GST") {
                            this.gst_info_btn['money'].text = toThousands(rdata[k].available_balance);
                            this.address.text = rdata[k].address;
                            this.money.text = toThousands(rdata[k].available_balance);
                            GameData.Puser_Money.gst = rdata[k].available_balance;
                        }
                        else {
                            this.usdt_info_btn['money'].text = toThousands(rdata[k].available_balance);
                            GameData.Puser_Money.usdt = rdata[k].available_balance;
                        }
                    }
                    return [2 /*return*/];
                });
            }); }, this);
        };
        PursePage.prototype.initEvent = function () {
            var _this = this;
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.scan_btn, egret.TouchEvent.TOUCH_TAP, this, this.scan);
            this.addEvent(this.gst_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.gst_info);
            this.addEvent(this.usdt_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.usdt_info);
            this.addEvent(this.exchange_btn, egret.TouchEvent.TOUCH_TAP, this, this.exchange);
            this.addEvent(this.income_btn, egret.TouchEvent.TOUCH_TAP, this, this.income);
            this.addEvent(this.address, egret.TouchEvent.TOUCH_TAP, this, this.income);
            this.addEvent(this.output_btn, egret.TouchEvent.TOUCH_TAP, this, this.output);
            this.addEvent(this.money, egret.TouchEvent.TOUCH_TAP, this, this.showHide);
            this.addEvent(cor.EventManage.instance(), PurseUpdataInfo, this, this.updataInfo);
            egret.ExternalInterface.addCallback("scanResult", function (message) {
                // TipsSkin.instance().show(message);
                if (cor.MainScene.instance().getChildIndex(_this) != cor.MainScene.instance().numChildren - 1) {
                    var lastpage = cor.MainScene.instance().getChildAt(cor.MainScene.instance().numChildren - 1);
                    lastpage.dispose();
                }
                cor.MainScene.instance().addChild(new Game.Purse_outputPage("GST", message));
            });
        };
        PursePage.prototype.showHide = function () {
            var is_show = readLocalData(PurseShowInfo);
            if (is_show == "0") {
                var purseInfo = this._purseInfo;
                for (var k in purseInfo) {
                    if (purseInfo[k].coin_name == "GST") {
                        this.gst_info_btn['money'].text = toThousands(purseInfo[k].available_balance);
                        this.address.text = purseInfo[k].bind_address;
                        this.money.text = toThousands(purseInfo[k].available_balance);
                    }
                    else {
                        this.usdt_info_btn['money'].text = toThousands(purseInfo[k].available_balance);
                    }
                }
                saveLocalData(PurseShowInfo, "1");
            }
            else {
                this.money.text = "******";
                this.address.text = "******";
                this.gst_info_btn['money'].text = "******";
                this.usdt_info_btn['money'].text = "******";
                saveLocalData(PurseShowInfo, "0");
            }
        };
        PursePage.prototype.scan = function () {
            egret.ExternalInterface.call("scanQRCode", "");
        };
        PursePage.prototype.gst_info = function () {
            var _this = this;
            cor.Socket.getIntance().sendmsg('TRANSACTION_RECORDS', {
                "coin_name": "GST",
                "page": 1,
                "page_size": 100
            }, function (rdata) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    Log(rdata);
                    cor.MainScene.instance().addChild(new Game.RecodePage(this.gst_info_btn['money'].text, rdata, "GST"));
                    return [2 /*return*/];
                });
            }); }, this);
        };
        PursePage.prototype.usdt_info = function () {
            var _this = this;
            cor.Socket.getIntance().sendmsg('TRANSACTION_RECORDS', {
                "coin_name": "USDT",
                "page": 1,
                "page_size": 100
            }, function (rdata) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    Log(rdata);
                    cor.MainScene.instance().addChild(new Game.RecodePage(this.usdt_info_btn['money'].text, rdata, "USDT"));
                    return [2 /*return*/];
                });
            }); }, this);
        };
        PursePage.prototype.income = function () {
            var purseInfo = this._purseInfo;
            for (var k in purseInfo) {
                if (purseInfo[k].coin_name == "GST") {
                    cor.MainScene.instance().addChild(new Game.Purse_incomPage(purseInfo[k]));
                    break;
                }
            }
        };
        PursePage.prototype.output = function () {
            // cor.MainScene.instance().addChild(new Purse_outputPage());
        };
        PursePage.prototype.exchange = function () {
            cor.MainScene.instance().addChild(new Game.Purse_exchangePage(this._rateInfo, this._purseInfo));
        };
        return PursePage;
    }(cor.BaseScene));
    Game.PursePage = PursePage;
    __reflect(PursePage.prototype, "Game.PursePage");
})(Game || (Game = {}));
