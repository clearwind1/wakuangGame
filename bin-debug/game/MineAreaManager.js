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
            this._dialogPage = new Game.DialogComment('', { x: 380, y: -638 });
            this.role_group.addChild(this._dialogPage);
            if (GameData.UserInfo.identity == IDENTITY.Owner) {
                // cor.Socket.getIntance().sendmsg('GET_USER_HOLD_AREA_CONFIG', {}, (rdata) => {
                //     Log(rdata);
                //     this._areaConfig = rdata;
                // }, this)
                this.showOwnerCard();
                // if(areainfo.)
            }
        };
        MineAreaManager.prototype.initEvent = function () {
            var _this = this;
            this.addEvent(this.back_btn, egret.TouchEvent.TOUCH_TAP, this, function () {
                _this.dispose();
                cor.MainScene.instance().playbgm(MAINSCENEBGM);
            }, null, MINEAREACLICK);
            this.addEvent(this.mine_area_1_btn, egret.TouchEvent.TOUCH_TAP, this, this.checkOwner, [1], MINEAREACLICK);
            this.addEvent(this.mine_area_2_btn, egret.TouchEvent.TOUCH_TAP, this, this.checkOwner, [2], MINEAREACLICK);
            this.addEvent(this.mine_area_3_btn, egret.TouchEvent.TOUCH_TAP, this, this.checkOwner, [3], MINEAREACLICK);
            this.addEvent(this.mine_area_4_btn, egret.TouchEvent.TOUCH_TAP, this, this.checkOwner, [4], MINEAREACLICK);
            this.addEvent(this.mine_area_5_btn, egret.TouchEvent.TOUCH_TAP, this, this.checkOwner, [5], MINEAREACLICK);
            this.addEvent(this.mine_area_6_btn, egret.TouchEvent.TOUCH_TAP, this, this.checkOwner, [6], MINEAREACLICK);
            this.addEvent(this.touch_group, egret.TouchEvent.TOUCH_TAP, this, this.hideAreaInfo, null, MINEAREACLICK);
            this.addEvent(this.buy_now_btn, egret.TouchEvent.TOUCH_TAP, this, this.buyMine, null, MINEAREACLICK);
            this.addEvent(this.add_machine_btn, egret.TouchEvent.TOUCH_TAP, this, this.showMachine, null, MINEAREACLICK);
            this.addEvent(this.close_machine_btn, egret.TouchEvent.TOUCH_TAP, this, function () { _this.warehouse_group.visible = false; }, null, MINEAREACLICK);
            this.addEvent(this.deposit_switch_btn, eui.UIEvent.CHANGE, this, this.set_deposit, null, MINEAREACLICK);
            this.addEvent(this.tips_btn, egret.TouchEvent.TOUCH_TAP, this, this.showTips, null, MINEAREACLICK);
            this.addEvent(this.deposit_tips_btn, egret.TouchEvent.TOUCH_TAP, this, function () {
                _this.deposit_tips_btn.visible = false;
            }, null, MINEAREACLICK);
            this.addEvent(this.machine_list, eui.ItemTapEvent.ITEM_TAP, this, this.addMachine);
            this.addEvent(this.close_sure_btn, egret.TouchEvent.TOUCH_TAP, this, function () { _this.sure_group.visible = false; }, null, MINEAREACLICK);
            this.addEvent(this.cancel_sure_btn, egret.TouchEvent.TOUCH_TAP, this, function () { _this.sure_group.visible = false; }, null, MINEAREACLICK);
            this.addEvent(this.sure_buy_btn, egret.TouchEvent.TOUCH_TAP, this, this.Sure_buy, null, MINEAREACLICK);
            this.addEvent(this.delete_machine_btn, egret.TouchEvent.TOUCH_TAP, this, this.delect_machine, null, MINEAREACLICK);
        };
        MineAreaManager.prototype.delect_machine = function () {
            var _this = this;
            cor.Socket.getIntance().sendmsg("DELETE_ALL_EXCAVATE_ENGINE", {}, function (rdata) {
                Game.TipsSkin.instance().show("已成功卸下机器");
                _this.warehouse_group.visible = false;
                _this.refresh();
            }, this);
        };
        MineAreaManager.prototype.set_deposit = function (e) {
            Log(e.target.selected);
            if (e.target.selected) {
                cor.Socket.getIntance().sendmsg("OPEN_USER_HOLD_AREA_DEPOSIT", {}, function (rdata) {
                    Game.TipsSkin.instance().show("已成功开启托管");
                }, this);
            }
            else {
                cor.Socket.getIntance().sendmsg("CLOSE_USER_HOLD_AREA_DEPOSIT", {}, function (rdata) {
                    Game.TipsSkin.instance().show("已成功关闭托管");
                }, this);
            }
        };
        MineAreaManager.prototype.showTips = function () {
            var _this = this;
            this.deposit_tips_btn.visible = true;
            setTimeout(function () {
                _this.deposit_tips_btn.visible = false;
            }, 3000);
        };
        MineAreaManager.prototype.addMachine = function (e) {
            var _this = this;
            Log(e);
            var config_goodsID = e.item.id;
            if (this._areaConfig.goods.length == 5) {
                var goodsID = this._areaConfig.goods[4].id;
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
                        can_use_day: "(\u53EF\u4F7F\u7528" + config[k].good_content.rent_day + "\u5929)",
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
                            can_use_day: "(\u53EF\u4F7F\u7528" + rdata[k].content.rent_day + "\u5929)",
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
            this.sure_group.visible = true;
            this.sure_price.text = "立即开采需要" + Number(mineData.price.split('.')[0]);
            this.setParmByTarget(this.sure_buy_btn, [mineData]);
        };
        MineAreaManager.prototype.Sure_buy = function (mineData) {
            var _this = this;
            var id = mineData.id;
            var grade = mineData.grade;
            var price = Number(mineData.price.split('.')[0]);
            cor.Socket.getIntance().sendmsg('BUY_HOLD_AREA', {
                "hold_area_id": id
            }, function (rdata) {
                Game.TipsSkin.instance().show('购买成功');
                _this.sure_group.visible = false;
                GameData.UserInfo.gst -= price;
                GameData.UserInfo.current_hold_area_grade = grade;
                GameData.UserInfo.identity = IDENTITY.Owner;
                cor.EventManage.instance().sendEvent(ChangeIdentity);
                cor.EventManage.instance().sendEvent(UpdataGameInfo);
                _this.showOwnerCard(true);
                _this.hideAreaInfo();
            }, this);
        };
        MineAreaManager.prototype.showOwnerCard = function (is_buy) {
            if (is_buy === void 0) { is_buy = false; }
            var pos = [{ x: 1104, y: 582 }, { x: 262, y: 452 }, { x: 1097, y: 426 }, { x: 1115, y: 79 }, { x: 182, y: 105 }, { x: 644, y: 163 }];
            this.owner_card.visible = true;
            this.owner_card.x = pos[GameData.UserInfo.current_hold_area_grade - 1].x;
            this.owner_card.y = pos[GameData.UserInfo.current_hold_area_grade - 1].y;
            var self = this;
            if (is_buy) {
                var effect = this.addDB(this.panning_group, "machine_effect", pos[GameData.UserInfo.current_hold_area_grade - 1]);
                effect.animation.reset();
                effect.animation.play("animation", 1);
                setTimeout(function () {
                    self.removeDB("machine_effect");
                    self.showPanning();
                }, 1000);
            }
            else {
                this.showPanning();
            }
        };
        MineAreaManager.prototype.showPanning = function () {
            var pos = [{ x: 1140, y: 590 }, { x: 322, y: 402 }, { x: 1190, y: 416 }, { x: 1088, y: 159 }, { x: 212, y: 145 }, { x: 600, y: 190 }];
            var panning = createMC("planningMC_json", "planningMC_png", "planning");
            this.panning_group.addChild(panning);
            panning.x = pos[GameData.UserInfo.current_hold_area_grade - 1].x;
            panning.y = pos[GameData.UserInfo.current_hold_area_grade - 1].y;
            panning.gotoAndPlay("work", -1);
        };
        MineAreaManager.prototype.checkOwner = function (level) {
            // GameData.UserInfo.current_hold_area_grade = level;
            // this.showOwnerCard(true);
            // return;
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
            this.daily_output.text = mineData.day_income + '矿石';
            this.addDB(this.role_group, "Lv" + mineData.grade);
            this.role_group.setChildIndex(this._dialogPage, 1);
            cor.EventManage.instance().sendEvent(ShowDialog);
            if (level == 4) {
                this._dialogPage.setPos({ x: 200, y: -638 });
            }
            else {
                this._dialogPage.setPos({ x: 380, y: -638 });
            }
            if (GameData.UserInfo.identity == IDENTITY.Owner) {
                var dialogtx = ['欢迎回来，我就知道你想我了', '你......回来啦，今天要做些什么？', '欢迎回来，主人！',
                    '嗨，你回来了！Emmmmm，都叫你别老这么盯着我了！', '你果然喜欢我和我的矿区对不，我就知道你肯定喜欢的！', '你来了，今天希望我做些什么呢？嘿嘿！'];
                this._dialogPage.setDialog(dialogtx[level - 1]);
                this.detai_group.visible = false;
                this.owner_detai_group.visible = true;
                egret.Tween.get(this.owner_detai_group).to({ x: this.width - 470 }, 350);
                this.area_code.text = '矿区编号' + GameData.UserInfo.current_hold_area_code;
                var config = this._areaConfig.goods;
                var excavateData = [];
                for (var k in config) {
                    excavateData.push({
                        id_card: config[k].good.id_card,
                        can_use_day: "(\u53EF\u4F7F\u7528" + config[k].good_content.rent_day + "\u5929)",
                        name: config[k].good.name
                    });
                }
                this.deposit_group.visible = (this._areaConfig.is_can_open_deposit != 0);
                this.deposit_switch_btn.selected = (this._areaConfig.is_open_deposit != 0);
                this.dig_output.text = this._areaConfig.output + "矿石";
                this.machine_datagroup.dataProvider = new eui.ArrayCollection(excavateData);
                this.worker_datagroup.dataProvider = new eui.ArrayCollection(this._areaConfig.user_works);
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
                var dialogtx = ['我的矿区和我一样可爱哦，选我吧', '嗯，我应该可以帮到你的！', '你就是我的主人吗？请让我来服侍你吧！',
                    '别盯我看太久啦，我会害羞的！', '你看上我了么？我可真有眼光哦！', '我能为你了做些什么呢？当然，可以做很多事情哦！'];
                this._dialogPage.setDialog(dialogtx[level - 1]);
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
