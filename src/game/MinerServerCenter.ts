namespace Game {
    export class MinerServerCenter extends cor.BaseScene {
        public readonly skinName = "MinerServerCenter";

        public head_group: eui.Group;
        public ownerList: eui.List;
        public role_group: eui.Group;
        public seach_btn: eui.Button;
        public code: eui.EditableText;

        constructor(info) {
            super();

            this.init(info);
            this.initEvent();
        }

        public init(info) {
            // init
            this.addDB(this.role_group, 'Lv1');

            this.head_group.addChild(new headComment(this, '矿工管理处', 'MINER'));
            this.ownerList.itemRenderer = OwnerItem;
            for (var k in info) {
                info[k].code = info[k].code + "矿区";
                info[k].user_nickname = "矿主：" + info[k].user_nickname;
                info[k].name = "矿区等级：" + info[k].name;
                info[k].miner_num = info[k].current_work_count + '/' + info[k].max_work_count;
                info[k].earnings = info[k].can_get_income;
            }
            this.ownerList.dataProvider = new eui.ArrayCollection(info);
        }

        private initEvent() {
            this.addEvent(this.seach_btn, egret.TouchEvent.TOUCH_TAP, this, this.seach);
        }

        private seach() {
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
                this.ownerList.dataProvider = new eui.ArrayCollection(info);
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
                        this.data.status = 3;
                        this.data.time = "4:00:00";
                    }, this)
                    Log("开始挖矿");
                    break;
                case 2:
                    cor.Socket.getIntance().sendmsg("RECEIVE_REWARD_MINING", {
                        "user_hold_area_id": this.data.id
                    }, (rdata) => {
                        Log(rdata);
                    }, this)
                    Log("领取收益");
                    break;
                case 3:
                    cor.Socket.getIntance().sendmsg("CANCEL_MINING", {
                        "user_hold_area_id": this.data.id
                    }, (rdata) => {
                        Log(rdata);
                        this.data.status = 2;
                        this.dataChanged();
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
                    this.btn['wz'].strokeColor = 0x5276e9;
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
