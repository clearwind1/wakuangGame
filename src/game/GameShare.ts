namespace Game {
    export class GameShare extends cor.BaseScene {
        public readonly skinName = "GameShare";

        public back_btn: eui.Button;
        public labelDisplay: eui.Label;
        public shareUrl_btn: eui.Button;
        public shareFriend_btn: eui.Button;
        public shareGroup_btn: eui.Button;
        public share_img: eui.Image;

        constructor() {
            super();

            this.init();
            this.initEvent();
        }

        public init() {
            // init
            if (GameData.Share_config.img != "") {
                try {
                    this.share_img.source = GameData.Share_config.img;
                } catch (error) {
                    Log(error);
                }
            }

        }

        private initEvent() {
            this.addEvent(this.back_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.shareFriend_btn, egret.TouchEvent.TOUCH_TAP, this, this.shareFriend);
            this.addEvent(this.shareGroup_btn, egret.TouchEvent.TOUCH_TAP, this, this.shareGroup);
            this.addEvent(this.shareUrl_btn, egret.TouchEvent.TOUCH_TAP, this, this.shareUrl);
        }

        private shareFriend() {
            egret.ExternalInterface.call("sendToNative", "shareFriend$" + GameData.UserInfo.invitation_code);
        }
        private shareGroup() {
            egret.ExternalInterface.call("sendToNative", "shareGroup$" + GameData.UserInfo.invitation_code);
        }
        private shareUrl() {
            egret.ExternalInterface.call("sendToNative", "copyStr$" + GameData.Share_config.game);
        }
    }
}
