namespace Game {
    export class MinerServerCenter extends cor.BaseScene {
        public readonly skinName = "MinerServerCenter";

        public head_group: eui.Group;
        public ownerList: eui.List;
        public ownerScroller: eui.Scroller;
        public role_group: eui.Group;
        public seach_btn: eui.Button;
        public code: eui.EditableText;
        public searchTips: eui.Label;

        constructor(info) {
            super();

            this.init(info);
            this.initEvent();
        }

        public init(info) {
            // init

            this.head_group.addChild(new headComment(this, '礦工管理处', 'MINER'));
            this.addDB(this.role_group, 'Kuangquguangli');
            this.head_group.addChild(new DialogComment('勤劳矿工的基本修养就是按时来打工，也千万不要忘了按时来领取报酬。', { x: 380, y: 120 }));

            this.ownerList.itemRenderer = OwnerItem;
            // this.listInfoData = info;
            cor.Socket.getIntance().sendmsg('GET_HOLD_AREA_AND_WORK_CONFIG', {}, (rdata) => {
                Log(rdata);
                GameData.Mine_area_config = rdata;
                if (rdata.user_work_is_close) {
                    this.ownerList.dataProvider = new eui.ArrayCollection([]);
                    this.searchTips.text = "矿工管理处休息中,休息时间：\n" + rdata.hold_area_work_start_time + "~" + rdata.hold_area_work_end_time;
                } else {
                    let listData = this.listInfoData;

                    for (var k in info) {
                        if (info[k].current_work_count == info[k].max_work_count) {
                            continue;
                        }
                        info[k].code = info[k].code + "矿区";
                        info[k].user_nickname = "矿主：" + info[k].user_nickname;
                        info[k].name = "矿区等级：" + info[k].name;
                        info[k].miner_num = info[k].current_work_count + '/' + info[k].max_work_count;
                        info[k].earnings = info[k].can_get_income;
                        listData.push(info[k]);
                    }

                    this.ownerList.dataProvider = new eui.ArrayCollection(listData);
                }
            }, this)
        }

        private initEvent() {
            this.addEvent(this.seach_btn, egret.TouchEvent.TOUCH_TAP, this, this.seach, null, MANAGECENTERCLICK);
            this.addEvent(this.ownerScroller, eui.UIEvent.CHANGE_END, this, this.checkUpdata);
            this.addEvent(cor.EventManage.instance(), OwnerListUpdata, this, this.refresh);
        }

        private listPage = 1;
        private listInfoData = [];
        private checkUpdata(e) {
            let sc = this.ownerScroller;
            if ((sc.viewport.scrollV + sc.height) >= sc.viewport.contentHeight) {
                console.log("滚动到底部了:",sc.viewport.scrollV);
                this.listPage++;
                this.getHoldAreaList();
            }
        }

        private refresh() {
            this.listPage = 1;
            this.listInfoData = [];
            this.getHoldAreaList();
        }
        private getHoldAreaList() {
            let page = this.listPage;
            cor.Socket.getIntance().sendmsg('USER_HOLD_AREA_LIST', {
                "page": page,
                "page_size": 10
            }, (rdata) => {
                Log(rdata);
                if (rdata.length == 0) {
                    this.listPage--;
                } else {
                    let info = rdata;
                    let listData = this.listInfoData;
                    for (var k in info) {
                        if (info[k].current_work_count == info[k].max_work_count) {
                            continue;
                        }
                        info[k].code = info[k].code + "矿区";
                        info[k].user_nickname = "矿主：" + info[k].user_nickname;
                        info[k].name = "矿区等级：" + info[k].name;
                        info[k].miner_num = info[k].current_work_count + '/' + info[k].max_work_count;
                        info[k].earnings = info[k].can_get_income;
                        listData.push(info[k]);
                    }
                    this.ownerList.dataProvider = new eui.ArrayCollection(listData);
                    setTimeout(() => {
                        this.ownerScroller.viewport.scrollV = (page-1) * 1130;
                    }, 200)
                }
            }, this)
        }

        private seach() {

            if (GameData.Mine_area_config.user_work_is_close) {
                TipsSkin.instance().show("矿工管理处休息中");
                return;
            }

            if (this.code.text == "") {
                TipsSkin.instance().show("请输入要搜索的矿区编号");
                return;
            }

            cor.Socket.getIntance().sendmsg('USER_HOLD_AREA_LIST', {
                "keyword": this.code.text,
                "page": 1,
                "page_size": 100
            }, (rdata) => {
                Log(rdata);
                let info = rdata;
                for (var k in info) {
                    info[k].code = info[k].code + "矿区";
                    info[k].user_nickname = "矿主：" + info[k].user_nickname;
                    info[k].name = "矿区等级：" + info[k].name;
                    info[k].miner_num = info[k].current_work_count + '/' + info[k].max_work_count;
                    info[k].earnings = info[k].can_get_income;
                }
                if (info.length == 0) {
                    TipsSkin.instance().show("没有找到该矿区");
                } else {
                    this.ownerList.dataProvider = new eui.ArrayCollection(info);
                }

                this.code.text = "";
                // if (info.length == 0) {
                //     this.searchTips.text = "没有找到该矿区";
                // } else {
                //     this.searchTips.text = "";
                // }
            }, this)
        }
    }

    class OwnerItem extends eui.ItemRenderer {
        public readonly skinName = "OwnerItem";

        public btn: eui.Button;
        public time_group: eui.Group;
        public time: eui.Label;

        private _leftTime = 4 * 60 * 60 * 1000;
        private _time_inter = -1;

        constructor() {
            super();

            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFromStage, this);
        }

        private addToStage() {
            if (GameData.UserInfo.identity == IDENTITY.Owner) {
                this.btn.visible = false;
            }
            this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_touch, this);
        }

        private btn_touch(e: egret.TouchEvent) {
            switch (this.data.status) {
                case 0:
                    cor.Socket.getIntance().sendmsg("START_MINING", {
                        "user_hold_area_id": this.data.id
                    }, (rdata) => {
                        Log(rdata);
                        // this.data.status = 3;
                        // this.data.time = rdata;
                        // this.dataChanged();

                        cor.EventManage.instance().sendEvent(OwnerListUpdata);
                    }, this)
                    Log("开始挖矿");
                    break;
                case 2:
                    cor.Socket.getIntance().sendmsg("RECEIVE_REWARD_MINING", {
                        "user_hold_area_id": this.data.id
                    }, (rdata) => {
                        Log(rdata);
                        if (rdata.income > 0) {
                            GameData.UserInfo.mineral += Number(rdata.income);
                            cor.MainScene.instance().addChild(new GetPrize(rdata.income, 3));
                            cor.EventManage.instance().sendEvent(UpdataGameInfo);
                        }
                        // this.data.status = 0;
                        // this.dataChanged();
                        cor.EventManage.instance().sendEvent(OwnerListUpdata);
                    }, this)
                    Log("领取收益");
                    break;
                case 3:
                    cor.Socket.getIntance().sendmsg("CANCEL_MINING", {
                        "user_hold_area_id": this.data.id
                    }, (rdata) => {
                        Log(rdata);
                        // if (rdata.income > 0) {
                        //     this.data.status = 2;
                        // } else {
                        //     this.data.status = 0;
                        // }

                        // this.dataChanged();
                        cor.EventManage.instance().sendEvent(OwnerListUpdata);
                    }, this)
                    Log("放弃打工")
                    break;
                case 4:
                case 1:
                    break;
            }
        }

        public checkbtn() {
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
                    this._time_inter = setInterval(() => {
                        this._leftTime -= 1000;
                        if (this._leftTime <= 0) {
                            this._leftTime = 0;
                            clearInterval(this._time_inter);
                            cor.EventManage.instance().sendEvent(OwnerListUpdata);
                        }

                        this.time.text = numberToTime(this._leftTime, 1);
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
        }

        private removeFromStage() {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFromStage, this);
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_touch, this);
            clearInterval(this._time_inter);
        }

        protected dataChanged() {
            if (this.data.status == 3)
                this._leftTime = TimeTonumber(this.data.time) * 1000;
            if (GameData.UserInfo.identity != IDENTITY.Owner) {
                this.checkbtn();
            }
        }

    }
}
