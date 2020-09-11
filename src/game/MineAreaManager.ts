namespace Game {
    export class MineAreaManager extends cor.BaseScene {
        public readonly skinName = "MineAreaManager";

        public mine_area_1_btn: eui.Button;
        public mine_area_2_btn: eui.Button;
        public mine_area_3_btn: eui.Button;
        public mine_area_4_btn: eui.Button;
        public mine_area_5_btn: eui.Button;
        public mine_area_6_btn: eui.Button;
        public buy_now_btn: eui.Button;
        public back_btn: eui.Button;
        public info_group: eui.Group;
        public role_group: eui.Group;
        public detai_group: eui.Group;
        public mine_level: eui.Label;
        public total_output: eui.Label;
        public daily_output: eui.Label;
        public need_gst: eui.Label;
        public touch_group: eui.Group;
        public lv1_card: eui.Button;
        public owner_card: eui.Button;
        public owner_detai_group: eui.Group;
        public dig_output: eui.Label;
        public add_machine_btn: eui.Image;
        public machine_datagroup: eui.DataGroup;
        public worker_datagroup: eui.DataGroup;
        public is_work: eui.Label;
        public warehouse_group: eui.Group;
        public machine_list: eui.List;
        public close_machine_btn: eui.Button;
        public panning_group: eui.Group;
        public deposit_group: eui.Group;
        public deposit_switch_btn: eui.ToggleSwitch;
        public tips_btn: eui.Image;
        public deposit_tips_btn: eui.Button;
        public sure_group: eui.Group;
        public close_sure_btn: eui.Group;
        public sure_price: eui.Label;
        public cancel_sure_btn: eui.Button;
        public sure_buy_btn: eui.Button;

        private _areaInfo;
        private _areaConfig;
        private _currentIndex;
        private _dialogPage: DialogComment;
        constructor(areainfo) {
            super();

            this.init(areainfo);
            this.initEvent();
        }

        public init(areainfo) {
            // init
            for (let i = 1; i <= 6; i++) {
                this['mine_area_' + i + '_btn']['img'].alpha = 0;
            }
            if (this.width < 1334) {
                this.lv1_card.x = this.width - 100;
            }
            this.detai_group.x = this.width + 10;
            this.owner_detai_group.x = this.width + 10;
            this.warehouse_group.x = this.width - 470;
            this._areaInfo = areainfo;
            this._dialogPage = new DialogComment('', { x: 380, y: -638 });
            this.role_group.addChild(this._dialogPage);
            if (GameData.UserInfo.identity == IDENTITY.Owner) {
                // cor.Socket.getIntance().sendmsg('GET_USER_HOLD_AREA_CONFIG', {}, (rdata) => {
                //     Log(rdata);
                //     this._areaConfig = rdata;
                // }, this)
                this.showOwnerCard();
                // if(areainfo.)
            }

        }

        private initEvent() {
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
            this.addEvent(this.close_machine_btn, egret.TouchEvent.TOUCH_TAP, this, () => { this.warehouse_group.visible = false; });
            this.addEvent(this.deposit_switch_btn, eui.UIEvent.CHANGE, this, this.set_deposit);
            this.addEvent(this.tips_btn, egret.TouchEvent.TOUCH_TAP, this, this.showTips);
            this.addEvent(this.deposit_tips_btn, egret.TouchEvent.TOUCH_TAP, this, () => {
                this.deposit_tips_btn.visible = false;
            });
            this.addEvent(this.machine_list, eui.ItemTapEvent.ITEM_TAP, this, this.addMachine);
            this.addEvent(this.close_sure_btn, egret.TouchEvent.TOUCH_TAP, this, () => { this.sure_group.visible = false; });
            this.addEvent(this.cancel_sure_btn, egret.TouchEvent.TOUCH_TAP, this, () => { this.sure_group.visible = false; });
            this.addEvent(this.sure_buy_btn, egret.TouchEvent.TOUCH_TAP, this, this.Sure_buy);
        }

        private set_deposit(e: eui.UIEvent) {
            Log(e.target.selected);
            if (e.target.selected) {
                cor.Socket.getIntance().sendmsg("OPEN_USER_HOLD_AREA_DEPOSIT", {
                }, (rdata) => {
                    TipsSkin.instance().show("已成功开启托管");
                }, this)
            } else {
                cor.Socket.getIntance().sendmsg("CLOSE_USER_HOLD_AREA_DEPOSIT", {
                }, (rdata) => {
                    TipsSkin.instance().show("已成功关闭托管");
                }, this)
            }
        }
        private showTips() {
            this.deposit_tips_btn.visible = true;
            setTimeout(() => {
                this.deposit_tips_btn.visible = false;
            }, 3000);
        }

        private addMachine(e: eui.ItemTapEvent) {
            Log(e);
            let config_goodsID = e.item.id;
            if (this._areaConfig.goods.length == 5) {
                let goodsID = this._areaConfig.goods[0].id;
                cor.Socket.getIntance().sendmsg("DELETE_EXCAVATE_ENGINE", {
                    "user_hold_area_good_id": goodsID
                }, (rdata) => {
                    cor.Socket.getIntance().sendmsg("CONFIG_EXCAVATE_ENGINE", {
                        "user_good_id": config_goodsID
                    }, (rdata) => {
                        this.warehouse_group.visible = false;
                        Log(rdata);
                        this.refresh();
                    }, this)
                }, this)
            } else {
                cor.Socket.getIntance().sendmsg("CONFIG_EXCAVATE_ENGINE", {
                    "user_good_id": config_goodsID
                }, (rdata) => {
                    this.warehouse_group.visible = false;
                    Log(rdata);
                    this.refresh();
                }, this)
            }
        }

        private refresh() {
            cor.Socket.getIntance().sendmsg('GET_USER_HOLD_AREA_CONFIG', {}, (rdata) => {
                Log(rdata);
                this._areaConfig = rdata;
                let config = rdata.goods;
                let excavateData = [];
                for (let k in config) {
                    excavateData.push({
                        id_card: config[k].good.id_card,
                        can_use_day: `(可使用${config[k].good_content.rent_day}天)`,
                        name: config[k].good.name
                    });
                }
                this.machine_datagroup.dataProvider = new eui.ArrayCollection(excavateData);
            }, this)
        }

        private showMachine() {
            cor.Socket.getIntance().sendmsg('USER_GOOD_LIST', {}, (rdata) => {
                Log(rdata);
                let excavateData = [];
                for (var k in rdata) {
                    if (rdata[k].good.type == ENGINE_TYPE.EXCAVATE) {
                        excavateData.push({
                            id: rdata[k].id,
                            id_card: rdata[k].good.id_card,
                            can_use_day: `(可使用${rdata[k].content.rent_day}天)`,
                            name: rdata[k].good.name
                        });
                    }
                }
                this.machine_list.dataProvider = new eui.ArrayCollection(excavateData);
                this.warehouse_group.visible = true;
            }, this)

        }

        //购买矿区
        private buyMine() {
            let mineData;
            for (let k in this._areaInfo) {
                if (this._areaInfo[k].grade == this._currentIndex) {
                    mineData = this._areaInfo[k];
                    break;
                }
            }
            if (!mineData.is_can_buy) {
                TipsSkin.instance().show('已售罄');
                return;
            }

            this.sure_group.visible = true;
            this.sure_price.text = "立即开采需要" + Number(mineData.price.split('.')[0]);
            this.setParmByTarget(this.sure_buy_btn, [mineData]);

        }

        private Sure_buy(mineData) {
            let id = mineData.id;
            let grade = mineData.grade;
            let price = Number(mineData.price.split('.')[0]);
            cor.Socket.getIntance().sendmsg('BUY_HOLD_AREA', {
                "hold_area_id": id
            }, (rdata) => {
                TipsSkin.instance().show('购买成功');
                this.sure_group.visible = false;
                GameData.UserInfo.gst -= price;
                GameData.UserInfo.current_hold_area_grade = grade;
                GameData.UserInfo.identity = IDENTITY.Owner;
                cor.EventManage.instance().sendEvent(ChangeIdentity);
                cor.EventManage.instance().sendEvent(UpdataGameInfo);
                this.showOwnerCard(true);
                this.hideAreaInfo();
            }, this)
        }

        private showOwnerCard(is_buy = false) {
            let pos = [{ x: 1104, y: 582 }, { x: 262, y: 452 }, { x: 1097, y: 426 }, { x: 1115, y: 79 }, { x: 182, y: 105 }, { x: 644, y: 163 }];
            this.owner_card.visible = true;
            this.owner_card.x = pos[GameData.UserInfo.current_hold_area_grade - 1].x;
            this.owner_card.y = pos[GameData.UserInfo.current_hold_area_grade - 1].y;
            let self = this;
            if (is_buy) {
                let effect = this.addDB(this.panning_group, "machine_effect", pos[GameData.UserInfo.current_hold_area_grade - 1]);
                effect.animation.reset();
                effect.animation.play("animation", 1);
                setTimeout(() => {
                    self.removeDB("machine_effect");
                    self.showPanning(pos);
                }, 1000);

            } else {
                this.showPanning(pos);
            }

        }
        private showPanning(pos) {

            let panning = createMC("panninMC_json", "panninMC_png", "panning");
            this.panning_group.addChild(panning);
            panning.x = pos[GameData.UserInfo.current_hold_area_grade - 1].x;
            panning.y = pos[GameData.UserInfo.current_hold_area_grade - 1].y;
            panning.gotoAndPlay("work", -1);
        }

        private checkOwner(level) {
            // GameData.UserInfo.current_hold_area_grade = level;
            // this.showOwnerCard(true);
            // return;

            if (GameData.UserInfo.identity == IDENTITY.Owner && level != GameData.UserInfo.current_hold_area_grade) {
                return;
            }

            if (GameData.UserInfo.identity == IDENTITY.Owner) {
                cor.Socket.getIntance().sendmsg('GET_USER_HOLD_AREA_CONFIG', {}, (rdata) => {
                    Log(rdata);
                    this._areaConfig = rdata;
                    this.showAreaInfo(level);
                }, this)
            } else {
                this.showAreaInfo(level);
            }
        }
        private showAreaInfo(level) {

            this._currentIndex = level;
            this.info_group.visible = true;
            let mineData;
            for (let k in this._areaInfo) {
                if (this._areaInfo[k].grade == level) {
                    mineData = this._areaInfo[k];
                    break;
                }
            }
            this.mine_level.text = mineData.name;
            this.total_output.text = mineData.total_output + '矿石';
            this.daily_output.text = mineData.day_income + '矿石';

            this.addDB(this.role_group, `Lv${mineData.grade}`);
            this.role_group.setChildIndex(this._dialogPage, 1);
            if (level == 4) {
                this._dialogPage.setPos({ x: 200, y: -638 });
            } else {
                this._dialogPage.setPos({ x: 380, y: -638 });
            }
            if (GameData.UserInfo.identity == IDENTITY.Owner) {
                let dialogtx = ['欢迎回来，我就知道你想我了', '你......回来啦，今天要做些什么？', '欢迎回来，主人！',
                    '嗨，你回来了！Emmmmm，都叫你别老这么盯着我了！', '你果然喜欢我和我的矿区对不，我就知道你肯定喜欢的！', '你来了，今天希望我做些什么呢？嘿嘿！'];

                this._dialogPage.setDialog(dialogtx[level - 1]);

                this.detai_group.visible = false;
                this.owner_detai_group.visible = true;
                egret.Tween.get(this.owner_detai_group).to({ x: this.width - 470 }, 350);

                let config = this._areaConfig.goods;
                let excavateData = [];
                for (let k in config) {
                    excavateData.push({
                        id_card: config[k].good.id_card,
                        can_use_day: `(可使用${config[k].good_content.rent_day}天)`,
                        name: config[k].good.name
                    });
                }
                this.deposit_group.visible = (this._areaConfig.is_can_open_deposit != 0);
                this.deposit_switch_btn.selected = (this._areaConfig.is_open_deposit != 0);
                this.dig_output.text = this._areaConfig.output + "矿石";
                this.machine_datagroup.dataProvider = new eui.ArrayCollection(excavateData);
                this.worker_datagroup.dataProvider = new eui.ArrayCollection(this._areaConfig.user_works);
                cor.Socket.getIntance().sendmsg('GET_HOLD_AREA_AND_WORK_CONFIG', {}, (rdata) => {
                    Log(rdata);
                    GameData.Mine_area_config = rdata;
                    if (rdata.hold_area_is_close) {
                        this.is_work.text = "休息中";
                    } else {
                        this.is_work.text = "开采中";
                    }
                }, this)
            } else {
                let dialogtx = ['我的矿区和我一样可爱哦，选我吧', '嗯，我应该可以帮到你的！', '你就是我的主人吗？请让我来服侍你吧！',
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
        }
        private setbuyBtnGray(b) {
            //颜色矩阵数组
            var colorMatrix = [
                0.3, 0.3, 0, 0, 0,
                0.3, 0.3, 0, 0, 0,
                0.3, 0.3, 0, 0, 0,
                0, 0, 0, 1, 0
            ];

            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            this.buy_now_btn.filters = b ? [] : [colorFlilter];
        }
        private hideAreaInfo() {
            egret.Tween.get(this.role_group).to({ x: -700 }, 350);
            egret.Tween.get(this.owner_detai_group).to({ x: this.width + 10 }, 350);
            egret.Tween.get(this.detai_group).to({ x: this.width + 10 }, 350).call(() => {
                this.removeDB();
                this.info_group.visible = false;
            });
        }
    }
}
