namespace Game {
    export class GetPrize extends cor.BaseScene {
        public readonly skinName = "GetPrize";

        public hideGroup: eui.Group;
        public prizeTip: eui.Label;
        public close_btn: eui.Image;
        public sure_btn: eui.Button;
        public prize_group: eui.Group;
        public prizeNum: eui.Label;

        private _type;
        constructor(num, type) {
            super();

            this.init(num, type);
            this.initEvent();
        }

        public init(num, type) {
            // init
            this.prize_group.x = this.width / 2;
            this.prizeNum.text = '+' + toThousands(num);
            let tips = ["矿区产出收益", "矿工产出收益", "打工获得"];
            this.prizeTip.text = tips[type - 1];
            this._type = type;
        }

        private initEvent() {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.showMove);
            this.addEvent(this.sure_btn, egret.TouchEvent.TOUCH_TAP, this, this.showMove);
        }

        private showMove() {
            this.hideGroup.visible = false;
            let w = this.hideGroup.width;
            egret.Tween.get(this.prize_group).to({ x: w - 263, y: 41, scaleX: 0.2, scaleY: 0.2 }, 500).call(() => {
                this.dispose();
                if (this._type == 1 && GameData.UserInfo.hold_area_work_reward > 0) {
                    cor.MainScene.instance().addChild(new GetPrize(GameData.UserInfo.hold_area_work_reward, 2));
                }
            });
        }
    }
}
