namespace Game {
    export class Purse_incomPage extends cor.BaseScene {
        public readonly skinName = "Purse_incomPage";

        public back_btn: eui.Image;
        public address: eui.Label;
        public address_qrcode: eui.Image;
        public address_group: eui.Group;

        constructor(purseInfo) {
            super();

            this.init(purseInfo);
            this.initEvent();
        }

        public init(purseInfo) {
            // init

            this.address.text = purseInfo.bind_address;

            egret.ExternalInterface.call("creatQRCode", purseInfo.bind_address);
            egret.ExternalInterface.addCallback("creatQRCode", (message: string) => {
                // alert("message from Native is = " + message);
                console.log(message);
                this.address_qrcode.source = "data:image/png;base64," + message;
            });
        }

        private initEvent() {
            this.addEvent(this.back_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.address_group, egret.TouchEvent.TOUCH_TAP, this, this.copy);
        }

        private copy() {
            egret.ExternalInterface.call("sendToNative", "copyStr$" + this.address.text);
        }
    }
}
