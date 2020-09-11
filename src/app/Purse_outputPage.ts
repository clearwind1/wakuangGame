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
        public rate_tips: eui.Label;

        private _radioGroup: eui.RadioButtonGroup;
        private _selectType;
        constructor(type?, address?) {
            super();

            this.init(type, address);
            this.initEvent();
        }

        public init(type, address) {
            // init
            if (address) {
                this.address_input.text = address;
            }
            this.money_input.restrict = "0-9";
            this._selectType = type;
            this.gst_select.selected = (type == "GST");
            this.usdt_select.selected = (type == "USDT");
            this._radioGroup = new eui.RadioButtonGroup();
            this.gst_select.group = this._radioGroup;
            this.usdt_select.group = this._radioGroup;

            this.rate_tips.text = "";

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
                this.money_input.text = "";
                this.rate_tips.text = "";
            })

            this.addEvent(this.money_input, eui.UIEvent.CHANGE, this, this.showExchangeRate);
        }

        private showExchangeRate(e: eui.UIEvent) {
            let rate = this._selectType == "GST" ? GameData.Puser_rate.transfer_out.gst : GameData.Puser_rate.transfer_out.usdt;
            this.rate_tips.text = `转出将产生${rate}%的手续费，你将实际得到${Number(e.target.text) * (1 - rate / 100)}的${this._selectType}`;
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
