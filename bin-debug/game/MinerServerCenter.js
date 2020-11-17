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
            _this.listPage = 1;
            _this.listInfoData = [];
            _this.init(info);
            _this.initEvent();
            return _this;
        }
        MinerServerCenter.prototype.init = function (info) {
            // init
            var _this = this;
            this.head_group.addChild(new Game.headComment(this, '礦工管理处', 'MINER'));
            this.addDB(this.role_group, 'Kuangquguangli');
            this.head_group.addChild(new Game.DialogComment('勤劳矿工的基本修养就是按时来打工，也千万不要忘了按时来领取报酬。', { x: 380, y: 120 }));
            this.ownerList.itemRenderer = OwnerItem;
            // this.listInfoData = info;
            cor.Socket.getIntance().sendmsg('GET_HOLD_AREA_AND_WORK_CONFIG', {}, function (rdata) {
                Log(rdata);
                GameData.Mine_area_config = rdata;
                if (rdata.user_work_is_close) {
                    _this.ownerList.dataProvider = new eui.ArrayCollection([]);
                    _this.searchTips.text = "矿工管理处休息中,休息时间：\n" + rdata.hold_area_work_start_time + "~" + rdata.hold_area_work_end_time;
                }
                else {
                    var listData = _this.listInfoData;
                    for (var k in info) {
                        // if (info[k].current_work_count == info[k].max_work_count) {
                        //     continue;
                        // }
                        info[k].code = info[k].code + "矿区";
                        info[k].user_nickname = "矿主：" + info[k].user_nickname;
                        info[k].name = "矿区等级：" + info[k].name;
                        info[k].miner_num = info[k].current_work_count + '/' + info[k].max_work_count;
                        info[k].earnings = info[k].can_get_income;
                        listData.push(info[k]);
                    }
                    _this.ownerList.dataProvider = new eui.ArrayCollection(listData);
                }
            }, this);
        };
        MinerServerCenter.prototype.initEvent = function () {
            this.addEvent(this.seach_btn, egret.TouchEvent.TOUCH_TAP, this, this.seach, null, MANAGECENTERCLICK);
            this.addEvent(this.ownerScroller, eui.UIEvent.CHANGE_END, this, this.checkUpdata);
            this.addEvent(cor.EventManage.instance(), OwnerListUpdata, this, this.refresh);
        };
        MinerServerCenter.prototype.checkUpdata = function (e) {
            var sc = this.ownerScroller;
            if ((sc.viewport.scrollV + sc.height) >= sc.viewport.contentHeight) {
                console.log("滚动到底部了:", sc.viewport.scrollV);
                this.listPage++;
                this.getHoldAreaList();
            }
        };
        MinerServerCenter.prototype.refresh = function () {
            this.listPage = 1;
            this.listInfoData = [];
            this.getHoldAreaList();
        };
        MinerServerCenter.prototype.getHoldAreaList = function () {
            var _this = this;
            var page = this.listPage;
            cor.Socket.getIntance().sendmsg('USER_HOLD_AREA_LIST', {
                "page": page,
                "page_size": 10
            }, function (rdata) {
                Log(rdata);
                if (rdata.length == 0) {
                    _this.listPage--;
                }
                else {
                    var info = rdata;
                    var listData = _this.listInfoData;
                    for (var k in info) {
                        // if (info[k].current_work_count == info[k].max_work_count) {
                        //     continue;
                        // }
                        info[k].code = info[k].code + "矿区";
                        info[k].user_nickname = "矿主：" + info[k].user_nickname;
                        info[k].name = "矿区等级：" + info[k].name;
                        info[k].miner_num = info[k].current_work_count + '/' + info[k].max_work_count;
                        info[k].earnings = info[k].can_get_income;
                        listData.push(info[k]);
                    }
                    _this.ownerList.dataProvider = new eui.ArrayCollection(listData);
                    setTimeout(function () {
                        _this.ownerScroller.viewport.scrollV = (page - 1) * 1130;
                    }, 200);
                }
            }, this);
        };
        MinerServerCenter.prototype.seach = function () {
            var _this = this;
            if (GameData.Mine_area_config.user_work_is_close) {
                Game.TipsSkin.instance().show("矿工管理处休息中");
                return;
            }
            if (this.code.text == "") {
                Game.TipsSkin.instance().show("请输入要搜索的矿区编号");
                return;
            }
            cor.Socket.getIntance().sendmsg('USER_HOLD_AREA_LIST', {
                "keyword": this.code.text,
                "page": 1,
                "page_size": 100
            }, function (rdata) {
                Log(rdata);
                var info = rdata;
                for (var k in info) {
                    info[k].code = info[k].code + "矿区";
                    info[k].user_nickname = "矿主：" + info[k].user_nickname;
                    info[k].name = "矿区等级：" + info[k].name;
                    info[k].miner_num = info[k].current_work_count + '/' + info[k].max_work_count;
                    info[k].earnings = info[k].can_get_income;
                }
                if (info.length == 0) {
                    Game.TipsSkin.instance().show("没有找到该矿区");
                }
                else {
                    _this.ownerList.dataProvider = new eui.ArrayCollection(info);
                }
                _this.code.text = "";
                // if (info.length == 0) {
                //     this.searchTips.text = "没有找到该矿区";
                // } else {
                //     this.searchTips.text = "";
                // }
            }, this);
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
            switch (this.data.status) {
                case 0:
                    cor.Socket.getIntance().sendmsg("START_MINING", {
                        "user_hold_area_id": this.data.id
                    }, function (rdata) {
                        Log(rdata);
                        // this.data.status = 3;
                        // this.data.time = rdata;
                        // this.dataChanged();
                        cor.EventManage.instance().sendEvent(OwnerListUpdata);
                    }, this);
                    Log("开始挖矿");
                    break;
                case 2:
                    cor.Socket.getIntance().sendmsg("RECEIVE_REWARD_MINING", {
                        "user_hold_area_id": this.data.id
                    }, function (rdata) {
                        Log(rdata);
                        if (rdata.income > 0) {
                            GameData.UserInfo.mineral += Number(rdata.income);
                            cor.MainScene.instance().addChild(new Game.GetPrize(rdata.income, 3));
                            cor.EventManage.instance().sendEvent(UpdataGameInfo);
                        }
                        // this.data.status = 0;
                        // this.dataChanged();
                        cor.EventManage.instance().sendEvent(OwnerListUpdata);
                    }, this);
                    Log("领取收益");
                    break;
                case 3:
                    cor.Socket.getIntance().sendmsg("CANCEL_MINING", {
                        "user_hold_area_id": this.data.id
                    }, function (rdata) {
                        Log(rdata);
                        // if (rdata.income > 0) {
                        //     this.data.status = 2;
                        // } else {
                        //     this.data.status = 0;
                        // }
                        // this.dataChanged();
                        cor.EventManage.instance().sendEvent(OwnerListUpdata);
                    }, this);
                    Log("放弃打工");
                    break;
                case 4:
                case 1:
                    break;
            }
        };
        OwnerItem.prototype.checkbtn = function () {
            var _this = this;
            this.time_group.visible = false;
            this.btn.visible = true;
            //颜色矩阵数组
            var colorMatrix = [
                0.3, 0.3, 0, 0, 0,
                0.3, 0.3, 0, 0, 0,
                0.3, 0.3, 0, 0, 0,
                0, 0, 0, 1, 0
            ];
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            this.btn.filters = [];
            switch (this.data.status) {
                case 0:
                    this.btn['img'].source = "btn_green_png";
                    this.btn['wz'].text = "开始挖矿";
                    this.btn['wz'].textColor = 0xffffff;
                    this.btn['wz'].stroke = 2;
                    this.btn['wz'].strokeColor = 0x3dc1b0;
                    break;
                case 2:
                    this.btn['img'].source = "Btn_Yellow_01_png";
                    this.btn['wz'].text = "领取收益";
                    this.btn['wz'].textColor = 0xffffff;
                    this.btn['wz'].stroke = 2;
                    this.btn['wz'].strokeColor = 0xe99652;
                    break;
                case 3:
                    this.btn['img'].source = "Btn_Blue_01_png";
                    this.btn['wz'].text = "";
                    this.time_group.visible = true;
                    this.time.text = numberToTime(this._leftTime, 1);
                    this._time_inter = setInterval(function () {
                        _this._leftTime -= 1000;
                        if (_this._leftTime <= 0) {
                            _this._leftTime = 0;
                            clearInterval(_this._time_inter);
                            cor.EventManage.instance().sendEvent(OwnerListUpdata);
                        }
                        _this.time.text = numberToTime(_this._leftTime, 1);
                    }, 1000);
                    break;
                case 1:
                    this.btn.filters = [colorFlilter];
                    this.btn['wz'].text = "已满";
                    break;
                case 4:
                    this.btn.visible = false;
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
            if (this.data.status == 3)
                this._leftTime = TimeTonumber(this.data.time) * 1000;
            if (GameData.UserInfo.identity != IDENTITY.Owner) {
                this.checkbtn();
            }
        };
        return OwnerItem;
    }(eui.ItemRenderer));
    __reflect(OwnerItem.prototype, "OwnerItem");
})(Game || (Game = {}));
