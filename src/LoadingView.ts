namespace Game {
    export class LoadingView extends cor.BaseScene implements RES.PromiseTaskReporter {
        public readonly skinName = "LoadingView";

        public loadingTx: eui.Label;
        public tipTx: eui.Label;
        public hideGroup: eui.Group;
        public top_img: eui.Image;
        public bottom_img: eui.Image;
        public light_group: eui.Group;
        public lock_group: eui.Group;

        constructor() {
            super();

            this.init();
            this.initEnent();
        }

        private _index = 0;
        private _tag;
        public init() {
            // init
            this.loadingTx.text = "";
            this.tipTx.text = "";
            this._index = 0;

            this._shape = new egret.Shape();
            this.hideGroup.addChildAt(this._shape, 2);
            for (let i = 0; i < 8; i++) {
               let li = this.addDB(this.light_group, "light", { x: 100 + RandomUtils.limit(0, 50) + i * 150, y: 200 + RandomUtils.limit(0, 50) });
               li.animation.timeScale = RandomUtils.limit(0.5, 1.5);
            }

            this.showTip();
        }

        private showTip() {

            let changeTx = ['欢迎来到Richman大矿场',
                '正在招聘专属矿区管家',
                '马上就要抵达目的地，请稍等',
                '越大的矿区，越能产出更多的矿石',
                '想要快速挖到矿石，试不试配置齐全设备',
                '矿石交易所的交易价格会不定时更新，请一定留意好每日的价格走势'];

            this.tipTx.text = changeTx[this._index];
            this._tag = setTimeout(() => {
                this._index = (this._index + 1) % changeTx.length;
                this.showTip();
            }, 1800);
        }

        private initEnent() {

        }

        public onProgress(current: number, total: number): void {
            this.loadingTx.text = `${Math.floor(current / total * 100)}%`;
            this.getSectorProgress(360 * (current / total) - 90);

            if (total == current) {
                // this.showMove();
                let role = this.addDB(this.lock_group, "dutiao", { x: this.lock_group.width / 2, y: 0 }, { x: 2, y: 2 });
                role.animation.reset();
                role.animation.play("newAnimation", 1);
                role.addEvent("complete", this.showMove, this);
            }
        }
        private _shape: egret.Shape;
        private getSectorProgress(angle) {
            this._shape.graphics.clear();
            this._shape.graphics.beginFill(0x2C5091);
            this._shape.graphics.moveTo(667, 375);
            this._shape.graphics.lineTo(667, 308);
            this._shape.graphics.drawArc(667, 375, 67, -Math.PI / 2, angle * Math.PI / 180, false);
            this._shape.graphics.lineTo(667, 375);
            this._shape.graphics.endFill();
        }

        private async showMove(event) {

            let index = cor.MainScene.instance().numChildren - 1;
            cor.MainScene.instance().addChildAt(new GameScene(), index);
            // await wait(300);
            egret.Tween.get(this.top_img).to({ y: -375 }, 500);
            egret.Tween.get(this.bottom_img).to({ y: 750 }, 500);
            egret.Tween.get(this.hideGroup).to({ alpha: 0 }, 500).call(() => {
                this.dispose();
            });
        }

        public dispose() {
            clearTimeout(this._tag);
            this.parent.removeChild(this);
        }
    }
}
