namespace Game {
    export class Purse_resetPassword extends cor.BaseScene {
        public readonly skinName = "Purse_resetPassword";

        public reset_password_group: eui.Group;
        public input_phone: eui.EditableText;
        public input_code: eui.EditableText;
        public input_password: eui.EditableText;
        public send_code_btn: eui.Button;
        public cancel_btn: eui.Button;
        public sure_btn: eui.Button;

        private regist_code_time = 0;
        private code_key;
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
            if (this.regist_code_time > 0) {
                return;
            }
            if (!checkPhone(this.input_phone.text)) {
                TipsSkin.instance().show('手机格式不正确');
                return;
            }
            cor.Socket.getIntance().sendmsg('SEND_SMS_CODE', {
                "mobile": this.input_phone.text,
                "type": "reset_pay_password"
            }, (rdata) => {
                this.code_key = rdata.key;
                this.regist_code_time = 60;
                this.send_code_btn.label = this.regist_code_time + '秒后重新获取';
                this.addInterval(() => {
                    this.regist_code_time--;
                    this.send_code_btn.label = this.regist_code_time + '秒后重新获取';
                    if (this.regist_code_time == 0) {
                        this.removeInterval("code");
                        this.send_code_btn.label = "获取验证码";
                    }
                }, 1000, "code");
            }, this);

        }
        private send_set_password() {
            if (!checkPhone(this.input_phone.text)) {
                TipsSkin.instance().show('手机格式不正确');
                return;
            }
            cor.Socket.getIntance().sendmsg('RESET_PAY_PASSWORD', {
                "mobile": this.input_phone.text,
                "code": this.input_code.text,
                "key": this.code_key,
                "password": this.input_password.text
            }, (rdata) => {
                TipsSkin.instance().show("设置密码成功");
                this.dispose();
            }, this);

        }
    }
}
