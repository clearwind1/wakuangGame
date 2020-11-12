namespace Game {
    export class ExchangePage extends cor.BaseScene {
        public readonly skinName = "ExchangePage";

        public close_btn: eui.Group;
        public ex_scroller: eui.Scroller;
        public ex_list: eui.List;


        constructor(info) {
            super();

            this.init(info);
            this.initEvent();
        }

        public init(info) {
            // init
            let lda: any[] = info;
            this.ex_scroller.height = this.height - this.ex_scroller.y - 100;
            this.ex_list.itemRenderer = AppExchangeItem;
            this.ex_list.dataProvider = new eui.ArrayCollection(lda);
        }

        private initEvent() {
            this.addEvent(this.close_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(cor.EventManage.instance(), UPDATE_EXCHANGE_RATE, this, (evedata) => {
                Log('evedata:', evedata.data);
                let sv = this.ex_scroller.viewport.scrollV;
                cor.Socket.getIntance().sendmsg('EXCHANGES', {
                    "page": 1,
                    "page_size": 100
                }, async (rdata) => {
                    Log(rdata);
                    this.ex_list.dataProvider = new eui.ArrayCollection(rdata);
                    setTimeout(() => {
                        this.ex_scroller.viewport.scrollV = sv;
                    }, 200);
                }, this)
            });
            egret.ExternalInterface.addCallback("exchangeNoApp", (message: string) => {

                let askinfo = {
                    tip: "未安装交易所，是否立即下载？",
                    fun: () => { egret.ExternalInterface.call("sendToNative", "downExchange$" + message); },
                    obj: this
                }
                cor.MainScene.instance().addChild(new AppAskPage(askinfo));
            });

        }
    }

    class AppExchangeItem extends eui.ItemRenderer {
        public readonly skinName = "AppExchangeItem";

        public gofor_btn: eui.Button;

        constructor() {
            super();

            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFromStage, this);
        }

        private addToStage() {
            this.gofor_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_touch, this);
        }

        private btn_touch(e: egret.TouchEvent) {
            let pc = this.data.package_name;
            let ac = this.data.home_name;
            let eurl = this.data.download_url;
            let askinfo = {
                tip: "将为你打开交易所，是否打开？",
                fun: () => { egret.ExternalInterface.call("sendToNative", "call_exchange$" + pc + "|" + ac + "|" + eurl); },
                obj: this
            }
            cor.MainScene.instance().addChild(new AppAskPage(askinfo));
        }

        private removeFromStage() {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFromStage, this);
            this.gofor_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_touch, this);
        }

        protected dataChanged() {

        }

    }
}
