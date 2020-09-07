var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Game;
(function (Game) {
    var Purse_resetPassword = (function (_super) {
        __extends(Purse_resetPassword, _super);
        function Purse_resetPassword() {
            var _this = _super.call(this) || this;
            _this.skinName = "Purse_resetPassword";
            _this.regist_code_time = 0;
            _this.init();
            _this.initEvent();
            return _this;
        }
        Purse_resetPassword.prototype.init = function () {
            // init
        };
        Purse_resetPassword.prototype.initEvent = function () {
            this.addEvent(this.send_code_btn, egret.TouchEvent.TOUCH_TAP, this, this.send_code);
            this.addEvent(this.cancel_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.sure_btn, egret.TouchEvent.TOUCH_TAP, this, this.send_set_password);
        };
        Purse_resetPassword.prototype.send_code = function () {
            var _this = this;
            if (this.regist_code_time > 0) {
                return;
            }
            if (!checkPhone(this.input_phone.text)) {
                Game.TipsSkin.instance().show('手机格式不正确');
                return;
            }
            cor.Socket.getIntance().sendmsg('SEND_SMS_CODE', {
                "mobile": this.input_phone.text,
                "type": "reset_pay_password"
            }, function (rdata) {
                _this.code_key = rdata.key;
                _this.regist_code_time = 60;
                _this.send_code_btn.label = _this.regist_code_time + '秒后重新获取';
                _this.addInterval(function () {
                    _this.regist_code_time--;
                    _this.send_code_btn.label = _this.regist_code_time + '秒后重新获取';
                    if (_this.regist_code_time == 0) {
                        _this.removeInterval("code");
                        _this.send_code_btn.label = "获取验证码";
                    }
                }, 1000, "code");
            }, this);
        };
        Purse_resetPassword.prototype.send_set_password = function () {
            var _this = this;
            if (!checkPhone(this.input_phone.text)) {
                Game.TipsSkin.instance().show('手机格式不正确');
                return;
            }
            if (this.input_password.text != this.input_check_password.text) {
                Game.TipsSkin.instance().show("两次输入的密码不一致");
                return;
            }
            cor.Socket.getIntance().sendmsg('RESET_PAY_PASSWORD', {
                "mobile": this.input_phone.text,
                "code": this.input_code.text,
                "key": this.code_key,
                "password": this.input_password.text
            }, function (rdata) {
                Game.TipsSkin.instance().show("设置密码成功");
                _this.dispose();
            }, this);
        };
        return Purse_resetPassword;
    }(cor.BaseScene));
    Game.Purse_resetPassword = Purse_resetPassword;
    __reflect(Purse_resetPassword.prototype, "Game.Purse_resetPassword");
})(Game || (Game = {}));
