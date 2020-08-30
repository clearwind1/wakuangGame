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
    var MinerServerCenter = (function (_super) {
        __extends(MinerServerCenter, _super);
        function MinerServerCenter(info) {
            var _this = _super.call(this) || this;
            _this.skinName = "MinerServerCenter";
            _this.init(info);
            _this.initEvent();
            return _this;
        }
        MinerServerCenter.prototype.init = function (info) {
            // init
            this.addDB(this.role_group, 'Lv1');
            this.head_group.addChild(new Game.headComment(this, '矿工管理处', 'MINER'));
            this._minerserverInfo = info;
            this.ownerList.itemRenderer = OwnerItem;
            for (var k in info) {
                info[k].code = info[k].code + "矿区";
                info[k].user_nickname = "矿主：" + info[k].user_nickname;
                info[k].name = "矿区等级：" + info[k].name;
                info[k].miner_num = info[k].current_work_count + '/' + info[k].max_work_count;
                info[k].earnings = info[k].can_get_income;
                info[k].state = 1;
            }
            this.ownerList.dataProvider = new eui.ArrayCollection(info);
        };
        MinerServerCenter.prototype.initEvent = function () {
        };
        return MinerServerCenter;
    }(cor.BaseScene));
    Game.MinerServerCenter = MinerServerCenter;
    __reflect(MinerServerCenter.prototype, "Game.MinerServerCenter");
    var OwnerItem = (function (_super) {
        __extends(OwnerItem, _super);
        function OwnerItem() {
            var _this = _super.call(this) || this;
            _this.skinName = "OwnerItem";
            _this._leftTime = 4 * 60 * 60 * 1000;
            _this._time_inter = -1;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.removeFromStage, _this);
            return _this;
        }
        OwnerItem.prototype.addToStage = function () {
            if (GameData.UserInfo.identity == IDENTITY.Owner) {
                this.btn.visible = false;
            }
            this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_touch, this);
        };
        OwnerItem.prototype.btn_touch = function (e) {
            switch (this.data.state) {
                case 1:
                    Log("开始挖矿");
                    break;
                case 2:
                    Log("领取收益");
                    break;
                case 3:
                case 4:
                    break;
            }
        };
        OwnerItem.prototype.checkbtn = function () {
            var _this = this;
            this.time_group.visible = false;
            //颜色矩阵数组
            var colorMatrix = [
                0.3, 0.3, 0, 0, 0,
                0.3, 0.3, 0, 0, 0,
                0.3, 0.3, 0, 0, 0,
                0, 0, 0, 1, 0
            ];
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            this.btn.filters = [];
            switch (this.data.state) {
                case 1:
                    this.btn['wz'].text = "开始挖矿";
                    this.btn['wz'].textColor = 0xffffff;
                    this.btn['wz'].stroke = 2;
                    this.btn['wz'].strokeColor = 0x5276e9;
                    break;
                case 2:
                    this.btn['wz'].text = "领取收益";
                    this.btn['wz'].textColor = 0xffffff;
                    this.btn['wz'].stroke = 2;
                    this.btn['wz'].strokeColor = 0xe99652;
                    break;
                case 3:
                    this.btn.filters = [colorFlilter];
                    this.btn['wz'].text = "";
                    this.time_group.visible = true;
                    this.time.text = numberToTime(this._leftTime, 1);
                    this._time_inter = setInterval(function () {
                        _this._leftTime -= 1000;
                        _this.time.text = numberToTime(_this._leftTime, 1);
                    }, 1000);
                    break;
                case 4:
                    this.btn.filters = [colorFlilter];
                    this.btn['wz'].text = "已满";
                    break;
            }
        };
        OwnerItem.prototype.removeFromStage = function () {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFromStage, this);
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_touch, this);
            clearInterval(this._time_inter);
        };
        OwnerItem.prototype.dataChanged = function () {
            this.checkbtn();
        };
        return OwnerItem;
    }(eui.ItemRenderer));
    __reflect(OwnerItem.prototype, "OwnerItem");
})(Game || (Game = {}));
//# sourceMappingURL=MinerServerCenter.js.map