namespace Game {
    export class AppAskPage extends cor.BaseScene {
        public readonly skinName = "AppAskPage";

        public cancel_btn: eui.Button;
        public sure_btn: eui.Button;
        public tips: eui.Label;

        private callbackFun: Function;
        private callbackObj: any;
        
        constructor(askinfo) {
            super();

            this.init(askinfo);
            this.initEvent();
        }

        public init(askinfo) {
            // init
            this.tips.text = askinfo.tip;
            this.callbackFun = askinfo.fun;
            this.callbackObj = askinfo.obj;
        }

        private initEvent() {
            this.addEvent(this.cancel_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.sure_btn, egret.TouchEvent.TOUCH_TAP, this, this.sure);           
        }

        private sure() {
            this.callbackFun.apply(this.callbackObj);
            this.dispose();
        }
    }
}
