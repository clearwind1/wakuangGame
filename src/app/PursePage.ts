namespace Game {
    export class PursePage extends cor.BaseScene {
        public readonly skinName = "PursePage";

        public close_btn: eui.Image;
        public scan_btn: eui.Image;
        public gst_info_btn: eui.Button;
        public usdt_info_btn: eui.Button;
        public income_btn: eui.Button;
        public output_btn: eui.Button;

        private _purseInfo;
        constructor(purseInfo) {
            super();

            this.init(purseInfo);
            this.initEvent();
        }

        public init(purseInfo) {
            // init
            this._purseInfo = purseInfo;
            for (var k in purseInfo) {
                if (purseInfo[k].coin_name == "GST") {
                    this.gst_info_btn['num'].text = toThousands(Math.round(purseInfo[k].available_balance));
                } else {
                    this.usdt_info_btn['num'].text = toThousands(Math.round(purseInfo[k].available_balance));
                }
            }
        }

        private initEvent() {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.scan_btn, egret.TouchEvent.TOUCH_TAP, this, this.scan);
            this.addEvent(this.gst_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.gst_info);
            this.addEvent(this.usdt_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.usdt_info);
            this.addEvent(this.income_btn, egret.TouchEvent.TOUCH_TAP, this, this.income);
            this.addEvent(this.output_btn, egret.TouchEvent.TOUCH_TAP, this, this.output);

            egret.ExternalInterface.addCallback("scanResult", (message: string) => {
                // TipsSkin.instance().show(message);
            });
        }

        private scan() {
            egret.ExternalInterface.call("scanQRCode", "");
        }
        private gst_info() {
            cor.Socket.getIntance().sendmsg('TRANSACTION_RECORDS', {
                "coin_name": "GST",
                "page": 1,
                "page_size": 100
            }, async (rdata) => {
                Log(rdata);
                cor.MainScene.instance().addChild(new RecodePage(rdata, "GST"));
            }, this)
        }
        private usdt_info() {
            cor.Socket.getIntance().sendmsg('TRANSACTION_RECORDS', {
                "coin_name": "USDT",
                "page": 1,
                "page_size": 100
            }, async (rdata) => {
                Log(rdata);
                cor.MainScene.instance().addChild(new RecodePage(rdata, "USDT"));
            }, this)
        }
        private income() {

        }
        private output() {

        }
    }
}
