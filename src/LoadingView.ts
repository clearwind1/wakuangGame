namespace Game {
    export class LoadingView extends cor.BaseScene implements RES.PromiseTaskReporter {
        public readonly skinName = "LoadingView";

        public loadingBar: eui.Rect;
        public loadingTx: eui.Label;
        public tipTx: eui.Label;


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
            this.loadingBar.width = 0;
            this._index = 0;

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
            }, 1500);
        }

        private initEnent() {

        }

        public onProgress(current: number, total: number): void {
            this.loadingTx.text = `Loading...${Math.floor(current / total * 100)}%`;
            this.loadingBar.width = 600 * (current / total);
        }

        public dispose() {
            clearTimeout(this._tag);
            this.parent.removeChild(this);
        }
    }
}
