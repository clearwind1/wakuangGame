var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Game;
(function (Game) {
    var Warehouse = (function (_super) {
        __extends(Warehouse, _super);
        function Warehouse(warehouseData) {
            var _this = _super.call(this) || this;
            _this.skinName = "Warehouse";
            _this._warehousedata = [];
            _this.init(warehouseData);
            _this.initEnent();
            return _this;
        }
        Warehouse.prototype.init = function (warehouseData) {
            // init
            this.head_group.addChild(new Game.headComment(this, '仓库', 'WAREHOUSE'));
            this.addDB(this.role_group, "cangkunv");
            this.head_group.addChild(new Game.DialogComment('有我来帮你看管仓库，请你就放心吧！', { x: 280, y: 120 }));
            // this._warehousedata = warehouseData;
            for (var k in warehouseData) {
                if (warehouseData[k].good.type == 3) {
                    warehouseData[k].total = warehouseData[k].content.value + "吨";
                }
                else {
                    warehouseData[k].total = warehouseData[k].total + "个";
                }
                if (warehouseData[k].good.type == 7) {
                    warehouseData[k].lock = true;
                }
                else {
                    warehouseData[k].lock = false;
                }
            }
            this.warehouseList.dataProvider = new eui.ArrayCollection(warehouseData);
        };
        Warehouse.prototype.initEnent = function () {
            this.addEvent(this.warehouseList, eui.ItemTapEvent.ITEM_TAP, this, this.goodsInfo);
        };
        Warehouse.prototype.goodsInfo = function (e) {
            this.addChild(new Game.GoodsInfo(e.item.good));
        };
        return Warehouse;
    }(cor.BaseScene));
    Game.Warehouse = Warehouse;
    __reflect(Warehouse.prototype, "Game.Warehouse");
})(Game || (Game = {}));
//# sourceMappingURL=Warehouse.js.map