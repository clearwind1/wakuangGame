namespace Game {
    export class RecodePage extends cor.BaseScene {
        public readonly skinName = "RecodePage";

        public close_btn: eui.Image;
        public gst_info_btn: eui.Button;
        public usdt_info_btn: eui.Button;
        public recode_scroller: eui.Scroller;
        public recode_list: eui.List;

        private _gst_recodeInfo;
        private _usdt_recodeInfo;
        private _recodeInfo;
        constructor(recodeInfo, type) {
            super();

            this.init(recodeInfo, type);
            this.initEvent();
        }

        public init(recodeInfo, type) {
            // init
            this.recode_scroller.height = this.height - 164;
            if (type == "GST") {
                if (!this._gst_recodeInfo) this._gst_recodeInfo = recodeInfo;
            } else {
                if (!this._usdt_recodeInfo) this._usdt_recodeInfo = recodeInfo;
            }
            this._recodeInfo = recodeInfo;

            this.showInfo(type);
        }

        private showInfo(type) {
            if (type == "GST") {
                this.gst_info_btn.currentState = "up";
                this.usdt_info_btn.currentState = "down";
            } else {
                this.gst_info_btn.currentState = "down";
                this.usdt_info_btn.currentState = "up";
            }

            let recodeinfo = this._recodeInfo;
            for (var k in recodeinfo) {
                let item = recodeinfo[k];
                let fh = Number(item.change_amount) >= 0 ? "+" : "";
                item.cacolor = Number(item.change_amount) >= 0 ? 0x3dafff : 0x000000;
                item.change_amount = fh + Math.round(Number(item.change_amount));
                item.after_amount = item.after_amount ? (item.coin_name + "余额  " + Math.round(Number(item.after_amount))) : "";
            }
            this.recode_list.dataProvider = new eui.ArrayCollection(this._recodeInfo);
        }

        private initEvent() {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.gst_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.gst_info);
            this.addEvent(this.usdt_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.usdt_info);
        }

        private gst_info() {
            cor.Socket.getIntance().sendmsg('TRANSACTION_RECORDS', {
                "coin_name": "GST",
                "page": 1,
                "page_size": 100
            }, async (rdata) => {
                Log(rdata);
                this._recodeInfo = this._gst_recodeInfo = rdata;
                this.showInfo('GST');
            }, this)
        }
        private usdt_info() {
            cor.Socket.getIntance().sendmsg('TRANSACTION_RECORDS', {
                "coin_name": "USDT",
                "page": 1,
                "page_size": 100
            }, async (rdata) => {
                Log(rdata);
                this._recodeInfo = this._usdt_recodeInfo = rdata;
                this.showInfo('USDT');
            }, this)
        }
    }
}
