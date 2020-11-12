namespace Game {
    export class DialogComment extends cor.BaseScene {
        public readonly skinName = "DialogComment";

        public dialog_tx: eui.Label;
        public frame: eui.Image;

        constructor(dialog,pos) {
            super();

            this.init(dialog,pos);
            this.initEvent();
        }

        public init(dialog,pos) {
            // init
            this.width = 182;
            this.height = 118;
            this.dialog_tx.text = dialog;
            this.x = pos.x;
            this.y = pos.y;

            if (this.dialog_tx.height > 90) {
                this.height = this.dialog_tx.height + 48;
            }

            setTimeout(() => { 
                this.visible = false;
            }, 3000);
        }

        public setDialog(tx) {
            this.dialog_tx.text = tx;
            if (this.dialog_tx.height > 90) {
                this.height = this.dialog_tx.height + 48;
            }
        }

        public setPos(pos) {
            this.x = pos.x;
            this.y = pos.y;
        }

        public setImageScale(sx) {
            this.frame.scaleX = sx;
        }

        private initEvent() {
            let to = -1;
            this.addEvent(cor.EventManage.instance(), ShowDialog, this, () => { 
                this.visible = true;
                clearTimeout(to);
                to = setTimeout(() => { 
                    this.visible = false;
                }, 4000);
            })
        }
    }
}
