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
    var MineAreaManager = (function (_super) {
        __extends(MineAreaManager, _super);
        function MineAreaManager(areainfo) {
            var _this = _super.call(this) || this;
            _this.skinName = "MineAreaManager";
            _this.init(areainfo);
            _this.initEvent();
            return _this;
        }
        MineAreaManager.prototype.init = function (areainfo) {
            // init
            for (var i = 1; i <= 6; i++) {
                this['mine_area_' + i + '_btn']['img'].alpha = 0;
            }
            if (this.width < 1334) {
                this.lv1_card.x = this.width - 100;
            }
            this.detai_group.x = this.width + 10;
            this.owner_detai_group.x = this.width + 10;
            this.warehouse_group.x = this.width - 470;
            this._areaInfo = areainfo;
            if (GameData.UserInfo.identity == IDENTITY.Owner) {
                // cor.Socket.getIntance().sendmsg('GET_USER_HOLD_AREA_CONFIG', {}, (rdata) => {
                //     Log(rdata);
                //     this._areaConfig = rdata;
                // }, this)
                this.showOwnerCard();
            }
        };
        MineAreaManager.prototype.initEvent = function () {
            var _this = this;
            this.addEvent(this.back_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
            this.addEvent(this.mine_area_1_btn, egret.TouchEvent.TOUCH_TAP, this, this.checkOwner, [1]);
            this.addEvent(this.mine_area_2_btn, egret.TouchEvent.TOUCH_TAP, this, this.checkOwner, [2]);
            this.addEvent(this.mine_area_3_btn, egret.TouchEvent.TOUCH_TAP, this, this.checkOwner, [3]);
            this.addEvent(this.mine_area_4_btn, egret.TouchEvent.TOUCH_TAP, this, this.checkOwner, [4]);
            this.addEvent(this.mine_area_5_btn, egret.TouchEvent.TOUCH_TAP, this, this.checkOwner, [5]);
            this.addEvent(this.mine_area_6_btn, egret.TouchEvent.TOUCH_TAP, this, this.checkOwner, [6]);
            this.addEvent(this.touch_group, egret.TouchEvent.TOUCH_TAP, this, this.hideAreaInfo);
            this.addEvent(this.buy_now_btn, egret.TouchEvent.TOUCH_TAP, this, this.buyMine);
            this.addEvent(this.add_machine_btn, egret.TouchEvent.TOUCH_TAP, this, this.showMachine);
            this.addEvent(this.close_machine_btn, egret.TouchEvent.TOUCH_TAP, this, function () { _this.warehouse_group.visible = false; });
            this.addEvent(this.machine_list, eui.ItemTapEvent.ITEM_TAP, this, this.addMachine);
        };
        MineAreaManager.prototype.addMachine = function (e) {
            var _this = this;
            Log(e);
            var config_goodsID = e.item.id;
            if (this._areaConfig.goods.length == 5) {
                var goodsID = this._areaConfig.goods[0].id;
                cor.Socket.getIntance().sendmsg("DELETE_EXCAVATE_ENGINE", {
                    "user_hold_area_good_id": goodsID
                }, function (rdata) {
                    cor.Socket.getIntance().sendmsg("CONFIG_EXCAVATE_ENGINE", {
                        "user_good_id": config_goodsID
                    }, function (rdata) {
                        _this.warehouse_group.visible = false;
                        Log(rdata);
                        _this.refresh();
                    }, _this);
                }, this);
            }
            else {
                cor.Socket.getIntance().sendmsg("CONFIG_EXCAVATE_ENGINE", {
                    "user_good_id": config_goodsID
                }, function (rdata) {
                    _this.warehouse_group.visible = false;
                    Log(rdata);
                    _this.refresh();
                }, this);
            }
        };
        MineAreaManager.prototype.refresh = function () {
            var _this = this;
            cor.Socket.getIntance().sendmsg('GET_USER_HOLD_AREA_CONFIG', {}, function (rdata) {
                Log(rdata);
                _this._areaConfig = rdata;
                var config = rdata.goods;
                var excavateData = [];
                for (var k in config) {
                    excavateData.push({
                        id_card: config[k].good.id_card,
                        can_use_day: "(\u53EF\u4F7F\u7528" + config[k].good.content.rent_day + "\u5929)",
                        name: config[k].good.name
                    });
                }
                _this.machine_datagroup.dataProvider = new eui.ArrayCollection(excavateData);
            }, this);
        };
        MineAreaManager.prototype.showMachine = function () {
            var _this = this;
            cor.Socket.getIntance().sendmsg('USER_GOOD_LIST', {}, function (rdata) {
                Log(rdata);
                var excavateData = [];
                for (var k in rdata) {
                    if (rdata[k].good.type == ENGINE_TYPE.EXCAVATE) {
                        excavateData.push({
                            id: rdata[k].id,
                            id_card: rdata[k].good.id_card,
                            can_use_day: "(\u53EF\u4F7F\u7528" + rdata[k].good.content.rent_day + "\u5929)",
                            name: rdata[k].good.name
                        });
                    }
                }
                _this.machine_list.dataProvider = new eui.ArrayCollection(excavateData);
                _this.warehouse_group.visible = true;
            }, this);
        };
        //购买矿区
        MineAreaManager.prototype.buyMine = function () {
            var _this = this;
            var mineData;
            for (var k in this._areaInfo) {
                if (this._areaInfo[k].grade == this._currentIndex) {
                    mineData = this._areaInfo[k];
                    break;
                }
            }
            if (!mineData.is_can_buy) {
                Game.TipsSkin.instance().show('已售罄');
                return;
            }
            var id = mineData.id;
            var grade = mineData.grade;
            var price = Number(mineData.price.split('.')[0]);
            cor.Socket.getIntance().sendmsg('BUY_HOLD_AREA', {
                "hold_area_id": id
            }, function (rdata) {
                Game.TipsSkin.instance().show('购买成功');
                GameData.UserInfo.gst -= price;
                GameData.UserInfo.current_hold_area_grade = grade;
                GameData.UserInfo.identity = IDENTITY.Owner;
                cor.EventManage.instance().sendEvent(ChangeIdentity);
                cor.EventManage.instance().sendEvent(UpdataGameInfo);
                _this.showOwnerCard();
                _this.hideAreaInfo();
            }, this);
        };
        MineAreaManager.prototype.showOwnerCard = function () {
            var pos = [{ x: 1104, y: 582 }, { x: 262, y: 452 }, { x: 1097, y: 426 }, { x: 1115, y: 79 }, { x: 182, y: 105 }, { x: 644, y: 163 }];
            this.owner_card.visible = true;
            this.owner_card.x = pos[GameData.UserInfo.current_hold_area_grade - 1].x;
            this.owner_card.y = pos[GameData.UserInfo.current_hold_area_grade - 1].y;
        };
        MineAreaManager.prototype.checkOwner = function (level) {
            var _this = this;
            if (GameData.UserInfo.identity == IDENTITY.Owner && level != GameData.UserInfo.current_hold_area_grade) {
                return;
            }
            if (GameData.UserInfo.identity == IDENTITY.Owner) {
                cor.Socket.getIntance().sendmsg('GET_USER_HOLD_AREA_CONFIG', {}, function (rdata) {
                    Log(rdata);
                    _this._areaConfig = rdata;
                    _this.showAreaInfo(level);
                }, this);
            }
            else {
                this.showAreaInfo(level);
            }
        };
        MineAreaManager.prototype.showAreaInfo = function (level) {
            var _this = this;
            this._currentIndex = level;
            this.info_group.visible = true;
            var mineData;
            for (var k in this._areaInfo) {
                if (this._areaInfo[k].grade == level) {
                    mineData = this._areaInfo[k];
                    break;
                }
            }
            this.mine_level.text = mineData.name;
            this.total_output.text = mineData.total_output + '矿石';
            this.daily_output.text = mineData.total_output + '矿石';
            this.addDB(this.role_group, "Lv" + mineData.grade);
            if (GameData.UserInfo.identity == IDENTITY.Owner) {
                this.detai_group.visible = false;
                this.owner_detai_group.visible = true;
                egret.Tween.get(this.owner_detai_group).to({ x: this.width - 470 }, 350);
                var config = this._areaConfig.goods;
                var excavateData = [];
                for (var k in config) {
                    excavateData.push({
                        id_card: config[k].good.id_card,
                        can_use_day: "(\u53EF\u4F7F\u7528" + config[k].good.content.rent_day + "\u5929)",
                        name: config[k].good.name
                    });
                }
                this.machine_datagroup.dataProvider = new eui.ArrayCollection(excavateData);
                this.worker_datagroup.dataProvider = new eui.ArrayCollection([]);
                cor.Socket.getIntance().sendmsg('GET_HOLD_AREA_AND_WORK_CONFIG', {}, function (rdata) {
                    Log(rdata);
                    GameData.Mine_area_config = rdata;
                    if (rdata.hold_area_is_close) {
                        _this.is_work.text = "休息中";
                    }
                    else {
                        _this.is_work.text = "开采中";
                    }
                }, this);
            }
            else {
                this.detai_group.visible = true;
                this.owner_detai_group.visible = false;
                egret.Tween.get(this.detai_group).to({ x: this.width - 470 }, 350);
            }
            egret.Tween.get(this.role_group).to({ x: 20 }, 350);
            // this.is_can_buy.text = '矿区管理处：' + (mineData.is_can_buy ? '可购买矿区' : '已售罄矿区');
            this.need_gst.text = mineData.price.split('.')[0] + '';
            this.buy_now_btn['tx'].text = (mineData.is_can_buy ? '立即开采' : '已售罄');
            this.setbuyBtnGray(mineData.is_can_buy);
        };
        MineAreaManager.prototype.setbuyBtnGray = function (b) {
            //颜色矩阵数组
            var colorMatrix = [
                0.3, 0.3, 0, 0, 0,
                0.3, 0.3, 0, 0, 0,
                0.3, 0.3, 0, 0, 0,
                0, 0, 0, 1, 0
            ];
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            this.buy_now_btn.filters = b ? [] : [colorFlilter];
        };
        MineAreaManager.prototype.hideAreaInfo = function () {
            var _this = this;
            egret.Tween.get(this.role_group).to({ x: -700 }, 350);
            egret.Tween.get(this.owner_detai_group).to({ x: this.width + 10 }, 350);
            egret.Tween.get(this.detai_group).to({ x: this.width + 10 }, 350).call(function () {
                _this.removeDB();
                _this.info_group.visible = false;
            });
        };
        return MineAreaManager;
    }(cor.BaseScene));
    Game.MineAreaManager = MineAreaManager;
    __reflect(MineAreaManager.prototype, "Game.MineAreaManager");
})(Game || (Game = {}));
