namespace Game {
    export class Purse_exchangePage extends cor.BaseScene {
        public readonly skinName = "Purse_exchangePage";

        public close_btn: eui.Group;
        public rate: eui.Label;
        public money0: eui.Label;
        public money1: eui.Label;
        public money_type0: eui.Label;
        public money_type1: eui.Label;
        public coin_type1: eui.Label;
        public coin_type2: eui.Label;
        public exchange_btn: eui.Button;
        public money_input: eui.EditableText;
        public change_btn: eui.Button;
        public rate_type: eui.Label;
        public change_all_btn: eui.Button;
        public scan_btn: eui.Button;
        public sure_group: eui.Group;
        public back_btn: eui.Button;
        public sure_btn: eui.Button;
        public tips: eui.Label;

        private _rateInfo;
        private _purseInfo;
        private _isGST: boolean;
        private _money0: number;
        constructor(rateinfo, purseInfo) {
            super();

            this.init(rateinfo, purseInfo);
            this.initEvent();
        }

        public init(rateinfo, purseInfo) {
            // init
            this._rateInfo = rateinfo;
            this._purseInfo = purseInfo;
            this._isGST = false;

            this.showInfo();
        }

        private initEvent() {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            // this.addEvent(this.change_btn, egret.TouchEvent.TOUCH_TAP, this, this.change);
            this.addEvent(this.exchange_btn, egret.TouchEvent.TOUCH_TAP, this, this.show_sure_group);
            this.addEvent(this.change_all_btn, egret.TouchEvent.TOUCH_TAP, this, this.change_all);
            this.addEvent(this.scan_btn, egret.TouchEvent.TOUCH_TAP, this, this.scan);
            this.addEvent(this.back_btn, egret.TouchEvent.TOUCH_TAP, this, () => { this.sure_group.visible = false; });
            this.addEvent(this.sure_btn, egret.TouchEvent.TOUCH_TAP, this, this.exchange);
            
            this.addEvent(cor.EventManage.instance(), UPDATE_EXCHANGE_RATE, this, (evedata) => {
                Log('evedata:', evedata.data);
                cor.Socket.getIntance().sendmsg('GET_GST_USDT_RATE', {
                }, async (rdata) => {
                    this._rateInfo = rdata;
                    this.showInfo();
                }, this)
            });
        }

        private scan() {
            egret.ExternalInterface.call("scanQRCode", "");
        }

        private show_sure_group() {
            this.sure_group.visible = true;
            let r = 0;
            if (!this._isGST) {
                r = (Number(this.money_input.text) * this._rateInfo.usdt) / this._rateInfo.gst;
            } else {
                r = (Number(this.money_input.text) * this._rateInfo.gst) / this._rateInfo.usdt;
            }

            this.tips.text = `是否确定使用${r.toString().length > 4 ? r.toFixed(4) : r}枚USDT兑换${Number(this.money_input.text)}枚GST`;
        }

        private exchange() {
            cor.Socket.getIntance().sendmsg('INSIDE_TRANSFER', {
                "from_coin_name": this.coin_type1.text,
                "to_coin_name": this.coin_type2.text,
                "number": Number(this.money_input.text)
            }, (rdata) => {
                Log(rdata);
                TipsSkin.instance().show("兑换成功");
                cor.EventManage.instance().sendEvent(PurseUpdataInfo);
                this.dispose();
            }, this)
        }

        private change() {
            this._isGST = !this._isGST;
            this.showInfo();
        }

        private change_all() {
            let r = 0;
            if (this._isGST) {
                r = (this._money0 * this._rateInfo.usdt) / this._rateInfo.gst;
            } else {
                r = (this._money0 * this._rateInfo.gst) / this._rateInfo.usdt;
            }
            this.money_input.text = Math.floor(r) + "";
        }

        private showInfo() {
            let rateinfo = this._rateInfo;
            let purseInfo = this._purseInfo;

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
                } else {
                    this.money1.text = toThousands(purseInfo[k].available_balance);
                }
            }
        }
    }
}
