namespace Game {
    export class ExchangeCenter extends cor.BaseScene {
        public readonly skinName = "ExchangeCenter";

        public head_group: eui.Group;
        public exchange_btn: eui.Button;
        public recode_btn: eui.Button;
        public rateTx: eui.Label;
        public exchangeRate: eui.Label;
        public exchange_num: eui.EditableText;
        public date_group: eui.Group;
        public rate_group: eui.Group;
        public sharp_group: eui.Group;
        public point_group: eui.Group;
        public line_group: eui.Group;
        public rdcode_group: eui.Group;
        public recode_list: eui.List;
        public close_btn: eui.Image;
        public role_group: eui.Group;

        private _exchangedata;
        private _today_rate;
        constructor(exchangedata) {
            super();

            this.init(exchangedata);
            this.initEvent();
        }

        public init(exchangedata) {
            // init
            this.exchange_num.restrict = "0-9";
            this._exchangedata = exchangedata;
            this.head_group.addChild(new headComment(this, '礦石交易所', 'ORE EXCHANGE'));

            this.addDB(this.role_group, "Jiaoyisuo");
            let dc = new DialogComment('今天的矿石价格很令人满意呢？让我看看你手里的宝贝吧。', { x: 320, y: 120 });
            this.head_group.addChild(dc);

            let len = exchangedata.length > 7 ? 7 : exchangedata.length;
            let sortexd = [];
            for (let i = 0; i < len; i++) {
                sortexd.push(exchangedata[i]);
            }
            sortexd.sort(compare('value', false));
            Log(sortexd);

            let lastSY = 0;
            for (let i = 0; i < len; i++) {
                let datelb = this.date_group.getChildAt(i) as eui.Label;
                datelb.text = exchangedata[i].date.substr(5);
                datelb.visible = true;
                let exchangeratelb = this.rate_group.getChildAt(i) as eui.Label;
                exchangeratelb.text = exchangedata[i].value + '';
                let sharp = this.sharp_group.getChildAt(i) as eui.Image;
                sharp.scaleY = 0;
                let endSY = exchangedata[i].value / sortexd[0].value;
                let putY = 246 * (1 - endSY);
                if (i > 0 && i < 6) {
                    let point = this.point_group.getChildAt(i - 1) as eui.Image;
                    point.y = putY;
                }
                exchangeratelb.y = putY;

                egret.Tween.get(sharp).wait(200).to({ scaleY: endSY }, 500, egret.Ease.backOut);

                if (i > 0) {
                    let sharp0 = this.sharp_group.getChildAt(i - 1) as eui.Image;
                    let dis = egret.Point.distance(new egret.Point(sharp.x, putY), new egret.Point(sharp0.x, lastSY));
                    let line = this.line_group.getChildAt(i - 1);
                    line.y = lastSY + 10;
                    line.x = sharp0.x + 5;
                    line.width = dis;
                    let cod = Math.round(Math.atan((lastSY - putY) / (sharp0.x - sharp.x)) * 180 / Math.PI);
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


            cor.Socket.getIntance().sendmsg('GET_EXCHANGE_CONFIG', {}, (rdata) => {
                Log(rdata);
                this._today_rate = rdata;
                this.rateTx.text = `今日矿石兑换比例：1GST=${rdata}矿石`;
            }, this)
        }

        private initEvent() {
            this.addEvent(this.recode_btn, egret.TouchEvent.TOUCH_TAP, this, this.showRecode, null, EXCHANGECLICK);
            this.addEvent(this.exchange_btn, egret.TouchEvent.TOUCH_TAP, this, this.exchange, null, EXCHANGECLICK);
            this.addEvent(this.exchange_num, eui.UIEvent.CHANGE, this, this.showExchangeRate, null, EXCHANGECLICK);
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, () => { this.rdcode_group.visible = false; }, null, EXCHANGECLICK);
            this.addEvent(cor.EventManage.instance(), UPDATE_EXCHANGE_RATE, this, (evedata) => {
                Log('evedata:', evedata.data);
                cor.Socket.getIntance().sendmsg('GET_EXCHANGE_CONFIG', {}, (rdata) => {
                    Log('GET_EXCHANGE_CONFIG:',rdata);
                    this._today_rate = rdata;
                    this.rateTx.text = `今日矿石兑换比例：1GST=${rdata}矿石`;
                }, this)
            });
        }

        private showExchangeRate(e: eui.UIEvent) {
            this.exchangeRate.text = "GST=" + Number(e.target.text) * this._today_rate + "矿石";
        }

        private exchange() {
            if (GameData.UserInfo.is_lock_exchange == 1) {
                return;
            }

            cor.Socket.getIntance().sendmsg('EXCHANGE_GST', {
                "number": Number(this.exchange_num.text)
            }, (rdata) => {
                Log(rdata);
                GameData.UserInfo.gst += Number(this.exchange_num.text);
                GameData.UserInfo.mineral -= (Number(this.exchange_num.text) * this._today_rate);
                cor.EventManage.instance().sendEvent(UpdataGameInfo);
                TipsSkin.instance().show("兑换成功");
            }, this)
        }

        private showRecode() {
            this.rdcode_group.visible = true;
            cor.Socket.getIntance().sendmsg('EXCHANGE_RECORD', {}, (rdata) => {
                Log(rdata);
                for (var k in rdata) {
                    rdata[k].use_mine = "使用" + rdata[k].mineral_number + "矿石";
                    rdata[k].exchange_gst = "兑换" + rdata[k].gst_number + "GST";
                }
                this.recode_list.dataProvider = new eui.ArrayCollection(rdata);
            }, this)
        }
    }
}
