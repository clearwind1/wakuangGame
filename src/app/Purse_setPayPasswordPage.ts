namespace Game {
    export class Purse_setPayPasswordPage extends cor.BaseScene {
        public readonly skinName = "Purse_setPayPasswordPage";

        public set_password_group: eui.Group;
        public input_phone: eui.EditableText;
        public input_code: eui.EditableText;
        public input_password: eui.EditableText;
        public send_code_btn: eui.Button;
        public cancel_btn: eui.Button;
        public sure_btn: eui.Button;


        constructor() {
            super();

            this.init();
            this.initEvent();
        }

        public init() {
            // init
        }

        private initEvent() {
            this.addEvent(this.send_code_btn, egret.TouchEvent.TOUCH_TAP, this, this.send_code);
            this.addEvent(this.cancel_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.sure_btn, egret.TouchEvent.TOUCH_TAP, this, this.send_set_password);
        }

        private send_code() {
            
        }
        private send_set_password() {
            
        }
    }
}
