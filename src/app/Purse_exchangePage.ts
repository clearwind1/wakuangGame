namespace Game {
    export class Purse_exchangePage extends cor.BaseScene {
        public readonly skinName = "Purse_exchangePage";

        public close_btn: eui.Group;
        public rate: eui.Label;
        public money: eui.Label;
        public coin_type1: eui.Label;
        public coin_type2: eui.Label;
        public exchange_btn: eui.Button;
        public money_input: eui.EditableText;
        public change_btn: eui.Button;

        private _rateInfo;
        private _purseInfo;
        private _isGST: boolean;
        constructor(rateinfo, purseInfo) {
            super();

            this.init(rateinfo, purseInfo);
            this.initEvent();
        }

        public init(rateinfo, purseInfo) {
            // init
            this._rateInfo = rateinfo;
            this._purseInfo = purseInfo;
            this._isGST = true;

            this.showInfo();
        }

        private initEvent() {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.change_btn, egret.TouchEvent.TOUCH_TAP, this, this.change);
            this.addEvent(this.exchange_btn, egret.TouchEvent.TOUCH_TAP, this, this.exchange);
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

        private showInfo() {
            let rateinfo = this._rateInfo;
            let purseInfo = this._purseInfo;

            this.coin_type1.text = this._isGST ? "GST" : "USDT";
            this.coin_type2.text = this._isGST ? "USDT" : "GST";
            this.rate.text = (this._isGST ? rateinfo.gst : rateinfo.usdt) + ":" + (this._isGST ? rateinfo.usdt : rateinfo.gst);
            for (var k in purseInfo) {
                if (purseInfo[k].coin_name == this.coin_type1.text) {
                    this.money.text = "余额：" + toThousands(purseInfo[k].available_balance);
                    break;
                }
            }
        }
    }
}
