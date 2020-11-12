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
    var ExchangeCenter = (function (_super) {
        __extends(ExchangeCenter, _super);
        function ExchangeCenter(exchangedata) {
            var _this = _super.call(this) || this;
            _this.skinName = "ExchangeCenter";
            _this.init(exchangedata);
            _this.initEvent();
            return _this;
        }
        ExchangeCenter.prototype.init = function (exchangedata) {
            var _this = this;
            // init
            this.exchange_num.restrict = "0-9";
            this._exchangedata = exchangedata;
            this.head_group.addChild(new Game.headComment(this, '礦石交易所', 'ORE EXCHANGE'));
            this.addDB(this.role_group, "Jiaoyisuo");
            var dc = new Game.DialogComment('今天的矿石价格很令人满意呢？让我看看你手里的宝贝吧。', { x: 320, y: 120 });
            this.head_group.addChild(dc);
            var len = exchangedata.length > 7 ? 7 : exchangedata.length;
            var sortexd = [];
            for (var i = 0; i < len; i++) {
                sortexd.push(exchangedata[i]);
            }
            sortexd.sort(compare('value', false));
            Log(sortexd);
            var lastSY = 0;
            for (var i = 0; i < len; i++) {
                var datelb = this.date_group.getChildAt(i);
                datelb.text = exchangedata[i].date.substr(5);
                datelb.visible = true;
                var exchangeratelb = this.rate_group.getChildAt(i);
                exchangeratelb.text = exchangedata[i].value + '';
                var sharp = this.sharp_group.getChildAt(i);
                sharp.scaleY = 0;
                var endSY = exchangedata[i].value / sortexd[0].value;
                var putY = 246 * (1 - endSY);
                if (i > 0 && i < 6) {
                    var point = this.point_group.getChildAt(i - 1);
                    point.y = putY;
                }
                exchangeratelb.y = putY;
                egret.Tween.get(sharp).wait(200).to({ scaleY: endSY }, 500, egret.Ease.backOut);
                if (i > 0) {
                    var sharp0 = this.sharp_group.getChildAt(i - 1);
                    var dis = egret.Point.distance(new egret.Point(sharp.x, putY), new egret.Point(sharp0.x, lastSY));
                    var line = this.line_group.getChildAt(i - 1);
                    line.y = lastSY + 10;
                    line.x = sharp0.x + 5;
                    line.width = dis;
                    var cod = Math.round(Math.atan((lastSY - putY) / (sharp0.x - sharp.x)) * 180 / Math.PI);
                    line.rotation = cod;
                }
                lastSY = putY;
            }
            //颜色矩阵数组
            var colorMatrix = [
                0.3, 0.3, 0, 0, 0,
                0.3, 0.3, 0, 0, 0,
                0.3, 0.3, 0, 0, 0,
                0, 0, 0, 1, 0
            ];
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            if (GameData.UserInfo.is_lock_exchange == 1) {
                this.exchange_btn.filters = [colorFlilter];
            }
            cor.Socket.getIntance().sendmsg('GET_EXCHANGE_CONFIG', {}, function (rdata) {
                Log(rdata);
                _this._today_rate = rdata;
                _this.rateTx.text = "\u4ECA\u65E5\u77FF\u77F3\u5151\u6362\u6BD4\u4F8B\uFF1A1GST=" + rdata + "\u77FF\u77F3";
            }, this);
        };
        ExchangeCenter.prototype.initEvent = function () {
            var _this = this;
            this.addEvent(this.recode_btn, egret.TouchEvent.TOUCH_TAP, this, this.showRecode, null, EXCHANGECLICK);
            this.addEvent(this.exchange_btn, egret.TouchEvent.TOUCH_TAP, this, this.exchange, null, EXCHANGECLICK);
            this.addEvent(this.exchange_num, eui.UIEvent.CHANGE, this, this.showExchangeRate, null, EXCHANGECLICK);
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, function () { _this.rdcode_group.visible = false; }, null, EXCHANGECLICK);
            this.addEvent(cor.EventManage.instance(), UPDATE_EXCHANGE_RATE, this, function (evedata) {
                Log('evedata:', evedata.data);
                cor.Socket.getIntance().sendmsg('GET_EXCHANGE_CONFIG', {}, function (rdata) {
                    Log('GET_EXCHANGE_CONFIG:', rdata);
                    _this._today_rate = rdata;
                    _this.rateTx.text = "\u4ECA\u65E5\u77FF\u77F3\u5151\u6362\u6BD4\u4F8B\uFF1A1GST=" + rdata + "\u77FF\u77F3";
                }, _this);
            });
        };
        ExchangeCenter.prototype.showExchangeRate = function (e) {
            this.exchangeRate.text = "GST=" + Number(e.target.text) * this._today_rate + "矿石";
        };
        ExchangeCenter.prototype.exchange = function () {
            var _this = this;
            if (GameData.UserInfo.is_lock_exchange == 1) {
                return;
            }
            cor.Socket.getIntance().sendmsg('EXCHANGE_GST', {
                "number": Number(this.exchange_num.text)
            }, function (rdata) {
                Log(rdata);
                GameData.UserInfo.gst += Number(_this.exchange_num.text);
                GameData.UserInfo.mineral -= (Number(_this.exchange_num.text) * _this._today_rate);
                cor.EventManage.instance().sendEvent(UpdataGameInfo);
                Game.TipsSkin.instance().show("兑换成功");
            }, this);
        };
        ExchangeCenter.prototype.showRecode = function () {
            var _this = this;
            this.rdcode_group.visible = true;
            cor.Socket.getIntance().sendmsg('EXCHANGE_RECORD', {}, function (rdata) {
                Log(rdata);
                for (var k in rdata) {
                    rdata[k].use_mine = "使用" + rdata[k].mineral_number + "矿石";
                    rdata[k].exchange_gst = "兑换" + rdata[k].gst_number + "GST";
                }
                _this.recode_list.dataProvider = new eui.ArrayCollection(rdata);
            }, this);
        };
        return ExchangeCenter;
    }(cor.BaseScene));
    Game.ExchangeCenter = ExchangeCenter;
    __reflect(ExchangeCenter.prototype, "Game.ExchangeCenter");
})(Game || (Game = {}));
