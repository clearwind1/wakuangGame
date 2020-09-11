namespace Game {
    export class RecodePage extends cor.BaseScene {
        public readonly skinName = "RecodePage";

        public close_btn: eui.Group;
        public all_info_btn: eui.Button;
        public in_info_btn: eui.Button;
        public out_info_btn: eui.Button;
        public recode_scroller: eui.Scroller;
        public recode_list: eui.List;
        public exchange_btn: eui.Button;
        public output_btn: eui.Button;
        public money: eui.Label;

        private _recodeInfo;
        private _currentSelect;
        private _rateInfo;
        constructor(money, recodeInfo, type) {
            super();

            this.init(money, recodeInfo, type);
            this.initEvent();
        }

        public init(money, recodeInfo, type) {
            // init
            this.recode_scroller.height = this.height - this.recode_scroller.y;
            this._recodeInfo = recodeInfo;
            this.exchange_btn.label = type;
            this.money.text = money;
            this._currentSelect = 0;
            this.showInfo(0);
        }

        private showInfo(type) {
            let sl = type;
            if (sl == 0) {
                this.all_info_btn.currentState = "up";
                this.in_info_btn.currentState = "down";
                this.out_info_btn.currentState = "down";
            } else if (sl == 1) {
                this.all_info_btn.currentState = "down";
                this.in_info_btn.currentState = "up";
                this.out_info_btn.currentState = "down";
            } else {
                this.all_info_btn.currentState = "down";
                this.in_info_btn.currentState = "down";
                this.out_info_btn.currentState = "up";
            }

            let recodeinfo = this._recodeInfo;
            let selData = [];
            for (var k in recodeinfo) {
                let item = recodeinfo[k];
                let fh = Number(item.change_amount) >= 0 ? "+" : "";
                item.cacolor = Number(item.change_amount) >= 0 ? 0x3dafff : 0x000000;
                item.change_amount = fh + (Number(item.change_amount));
                // item.after_amount = item.after_amount ? (item.coin_name + "余额  " + (Number(item.after_amount))) : "";
                if (sl == 0) {
                    selData.push(item);
                } else if (sl == 1) {
                    if (Number(item.change_amount) >= 0) {
                        selData.push(item);
                    }
                } else {
                    if (Number(item.change_amount) < 0) {
                        selData.push(item);
                    }
                }
            }
            this.recode_list.dataProvider = new eui.ArrayCollection(selData);
        }

        private initEvent() {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.output_btn, egret.TouchEvent.TOUCH_TAP, this, this.out_put);
            this.addEvent(this.all_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.showInfo, [0]);
            this.addEvent(this.in_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.showInfo, [1]);
            this.addEvent(this.out_info_btn, egret.TouchEvent.TOUCH_TAP, this, this.showInfo, [2]);
        }

        private out_put() {
            cor.MainScene.instance().addChild(new Purse_outputPage(this.exchange_btn.label));
        }
    }
}
