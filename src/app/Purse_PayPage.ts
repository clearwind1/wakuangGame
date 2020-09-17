namespace Game {
    export class Purse_PayPage extends cor.BaseScene {
        public readonly skinName = "Purse_PayPage";

        public coin_num: eui.Label;
        public coin_type: eui.Label;
        public address: eui.Label;
        public reset_password_btn: eui.Label;
        public input_password: eui.EditableText;
        public sure_btn: eui.Button;
        public close_btn: eui.Image;
        public bg: eui.Image;

        private _info;
        constructor(info) {
            super();

            this.init(info);
            this.initEvent();
        }

        public init(info) {
            // init
            this._info = info;
            this.coin_num.text = toThousands(info.coin_num);
            this.coin_type.text = info.coin_type;
            this.address.text = info.address;
            this.bg.height = this.address.height > 40 ? 485 + this.address.height : 533;
        }

        private initEvent() {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.sure_btn, egret.TouchEvent.TOUCH_TAP, this, this.pay);
            this.addEvent(this.reset_password_btn, egret.TouchEvent.TOUCH_TAP, this, this.reset_password);            
        }

        private reset_password() {
            cor.MainScene.instance().addChild(new Purse_resetPassword());
            this.dispose();
        }
        private pay() {
            let info = this._info;
            cor.Socket.getIntance().sendmsg('TRANSFER_OUT', {
                "coin_name": info.coin_type,
                "address": info.address,
                "number": info.coin_num,
                "pay_password": this.input_password.text
            }, (rdata) => {
                Log(rdata);
                TipsSkin.instance().show("已提交");
                cor.EventManage.instance().sendEvent(PurseUpdataInfo);
                this.dispose();
            }, this, false);
        }
    }
}
