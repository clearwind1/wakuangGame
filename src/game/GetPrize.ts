namespace Game {
    export class GetPrize extends cor.BaseScene {
        public readonly skinName = "GetPrize";

        public hideGroup: eui.Group;
        public prizeNum: eui.Label;
        public prize_group: eui.Group;


        constructor(num) {
            super();

            this.init(num);
            this.initEvent();
        }

        public init(num) {
            // init
            this.prize_group.x = this.width / 2;
            this.prizeNum.text = num + '';
        }

        private initEvent() {
            this.addEvent(this.hideGroup, egret.TouchEvent.TOUCH_TAP, this, this.showMove);
        }

        private showMove() {
            this.hideGroup.visible = false;
            egret.Tween.get(this.prize_group).to({ x: this.width - 263, y: 41, scaleX: 0.2, scaleY: 0.2 }, 500).call(() => { 
                this.dispose();
            });
        }
    }
}
