namespace Game {
    export class Purse_outputPage extends cor.BaseScene {
        public readonly skinName = "Purse_outputPage";

        public close_btn: eui.Image;
        public scan_btn: eui.Image;
        public output_btn: eui.Button;
        public gst_select: eui.RadioButton;
        public usdt_select: eui.RadioButton;
        public address_input: eui.EditableText;
        public money_input: eui.EditableText;

        private _radioGroup: eui.RadioButtonGroup;
        private _selectType;
        constructor(address?) {
            super();

            this.init(address);
            this.initEvent();
        }

        public init(address) {
            // init
            if (address) {
                this.address_input.text = address;
            }
            this.money_input.restrict = "0-9";
            this._selectType = "GST";
            this.gst_select.selected = true;
            this._radioGroup = new eui.RadioButtonGroup();
            this.gst_select.group = this._radioGroup;
            this.usdt_select.group = this._radioGroup;

            cor.Socket.getIntance().sendmsg('CHECK_IS_SET_PAY_PASSWORD', {}, (rdata) => {
                Log(rdata);
                if (!rdata) {
                    cor.MainScene.instance().addChild(new Purse_setPayPasswordPage());
                }
            }, this, false)

            // setTimeout(() => {
            //     if (!readLocalData(PursePassword)) {
            //         cor.MainScene.instance().addChild(new Purse_setPayPasswordPage());
            //     }
            // }, 200);

        }

        private initEvent() {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.output_btn, egret.TouchEvent.TOUCH_TAP, this, this.pay);
            this.addEvent(this.scan_btn, egret.TouchEvent.TOUCH_TAP, this, this.scan);
            this.addEvent(this._radioGroup, eui.UIEvent.CHANGE, this, (evt: eui.UIEvent) => {
                var radioGroup: eui.RadioButtonGroup = evt.target;
                this._selectType = radioGroup.selectedValue;
            })

            egret.ExternalInterface.addCallback("scanResult", (message: string) => {
                // TipsSkin.instance().show(message);
                this.address_input.text = message;
            });

        }

        private scan() {
            egret.ExternalInterface.call("scanQRCode", "");
        }
        private pay() {
            cor.Socket.getIntance().sendmsg('CHECK_IS_SET_PAY_PASSWORD', {}, (rdata) => {
                Log(rdata);
                if (!rdata) {
                    cor.MainScene.instance().addChild(new Purse_setPayPasswordPage());
                } else {
                    let payInfo = {
                        coin_num: Number(this.money_input.text),
                        coin_type: this._selectType,
                        address: this.address_input.text
                    }
                    cor.MainScene.instance().addChild(new Purse_PayPage(payInfo));
                }
            }, this, false)
        }
    }
}
