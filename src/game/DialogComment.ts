namespace Game {
    export class DialogComment extends cor.BaseScene {
        public readonly skinName = "DialogComment";

        public dialog_tx: eui.Label;

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

        private initEvent() {
            
        }
    }
}
