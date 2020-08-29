namespace Game {
    export class Purse_incomPage extends cor.BaseScene {
        public readonly skinName = "Purse_incomPage";

        public back_btn: eui.Image;
        public headImg: eui.Image;
        public headMask: eui.Image;
        public nickname: eui.Label;
        public address: eui.Label;
        public address_qrcode: eui.Image;

        constructor(purseInfo) {
            super();

            this.init(purseInfo);
            this.initEvent();
        }

        public init(purseInfo) {
            // init

            this.headImg.mask = this.headMask;
            if (GameData.UserInfo.nickname == "") {
                cor.Socket.getIntance().sendmsg('GET_ME', {}, (rdata) => {
                    Log(rdata);
                    GameData.UserInfo = rdata;
                    this.headImg.source = GameData.UserInfo.picture;
                    this.nickname.text = GameData.UserInfo.nickname;
                }, this)
            } else {
                this.headImg.source = GameData.UserInfo.picture;
                this.nickname.text = GameData.UserInfo.nickname;
            }

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
        }
    }
}
