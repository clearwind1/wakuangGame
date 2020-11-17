namespace Game {
    export class GameFriend extends cor.BaseScene {
        public readonly skinName = "GameFriend";

        public back_btn: eui.Button;
        public friendList: eui.List;


        constructor(rdata) {
            super();

            this.init(rdata);
            this.initEvent();
        }

        public init(rdata) {
            // init
            let friendData = rdata;
            for (var k in friendData) {
                friendData[k].curLevel = rdata[k].identity == IDENTITY.Miner ? "" : 'v' + rdata[k].current_hold_area_grade;
                if (rdata[k].identity == IDENTITY.Miner && rdata[k].is_plus != 0) {
                    friendData[k].curLevel = "PLUS";
                }
                friendData[k].icon = rdata[k].identity == IDENTITY.Miner ? "icon_kg_jpeg" : "gameRes_json.Icon_level01_png";
                friendData[k].isower = (rdata[k].identity == IDENTITY.Owner);
            }
            this.friendList.dataProvider = new eui.ArrayCollection(friendData);
        }

        private initEvent() {
            this.addEvent(this.back_btn, egret.TouchEvent.TOUCH_TAP, this, this.dispose);
        }
    }
}
