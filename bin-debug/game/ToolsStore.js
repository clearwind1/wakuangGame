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
    var ToolsStore = (function (_super) {
        __extends(ToolsStore, _super);
        function ToolsStore(toolsData) {
            var _this = _super.call(this) || this;
            _this.skinName = "ToolsStore";
            _this._toolsdata = [];
            _this.init(toolsData);
            _this.initEnent();
            return _this;
        }
        ToolsStore.prototype.init = function (toolsData) {
            // init
            this.head_group.addChild(new Game.headComment(this, '工具商店', 'TOOL SHOP'));
            this.addDB(this.role_group, "Gongjushangdian");
            this.head_group.addChild(new Game.DialogComment('少量的金币就能够得到高级的设备，能够让你的矿加速生产，当然不要忘记给设备买燃油补给哦。', { x: 340, y: 120 }));
            this._toolsdata = [];
            for (var k in toolsData) {
                if (toolsData[k].buy_user_type == 0 || toolsData[k].buy_user_type == GameData.UserInfo.identity) {
                    this._toolsdata.push(toolsData[k]);
                    var index = this._toolsdata.length - 1;
                    this._toolsdata[index].price = toolsData[k].price.split('.')[0] + 'GST';
                }
            }
            this.toolsList.dataProvider = new eui.ArrayCollection(this._toolsdata);
        };
        ToolsStore.prototype.initEnent = function () {
            this.addEvent(this.toolsList, eui.ItemTapEvent.ITEM_TAP, this, this.toolsInfo, null, MANAGECENTERCLICK);
        };
        ToolsStore.prototype.toolsInfo = function (e) {
            this.addChild(new Game.ToolInfo(e.item));
        };
        return ToolsStore;
    }(cor.BaseScene));
    Game.ToolsStore = ToolsStore;
    __reflect(ToolsStore.prototype, "Game.ToolsStore");
})(Game || (Game = {}));
//# sourceMappingURL=ToolsStore.js.map