namespace Game {
    export class Warehouse extends cor.BaseScene {
        public readonly skinName = "Warehouse";

        public warehouseList: eui.List;
        public head_group: eui.Group;
        public role_group: eui.Group;

        private _warehousedata = [];
        constructor(warehouseData) {
            super();

            this.init(warehouseData);
            this.initEnent();
        }

        public init(warehouseData) {
            // init
            this.head_group.addChild(new headComment(this, '仓库', 'WAREHOUSE'));
            this.addDB(this.role_group, "cangkunv");
            this.head_group.addChild(new DialogComment('有我来帮你看管仓库，请你就放心吧！', {x:280,y:120}));
            // this._warehousedata = warehouseData;
            
            for (var k in warehouseData) {
                if (warehouseData[k].good.type == 3) {
                    warehouseData[k].total = warehouseData[k].content.value + "吨";
                } else {
                    warehouseData[k].total = warehouseData[k].total + "个";
                }
                if (warehouseData[k].good.type == 7) {
                    warehouseData[k].lock = true;
                } else {
                    warehouseData[k].lock = false;
                }
            }
            this.warehouseList.dataProvider = new eui.ArrayCollection(warehouseData);
        }

        private initEnent() {
            this.addEvent(this.warehouseList, eui.ItemTapEvent.ITEM_TAP, this, this.goodsInfo);
        }

        private goodsInfo(e: eui.ItemTapEvent) {
            this.addChild(new GoodsInfo(e.item.good));
        }
    }
}
