/***
 * GameData:  游戏基础数据
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    /**游戏名称 */
    GameData.GAMENAME = "RichManGame";
    /**版本号 */
    GameData.GAMEVERSION = '1.0.0';
    GameData.SERVERVERSION = '1.0.1';
    GameData.DOWNLOADURL = '';
    /**下载 */
    GameData.Force_Update = 0; //强制更新：1.是，0.否
    /**游戏设计宽度 */
    GameData.GameDesignWidth = 750;
    /**游戏设计高度 */
    GameData.GameDesignHeigth = 1334;
    /**屏幕宽度 */
    GameData.GameWidth = 750;
    /**屏幕高度 */
    GameData.GameHeigth = 1334;
    /**主场景宽度偏移量 */
    GameData.WidthOFFX = 0;
    /**主场景高度偏移量 */
    GameData.HeigthOFFY = 0;
    /**服务器连接地址 */
    GameData.ServerUrl = "http://148.70.80.204:8082/";
    // public static ServerSocketUrl: string = "ws://47.106.15.227:9001/app";
    GameData.ServerSocketUrl = "ws://148.70.80.204:9001/app";
    ///
    /**游戏界面 */
    GameData.BGame = false;
    //用户手机号
    GameData.UserPhone = '';
    //用户密码
    GameData.UserPassword = '';
    //用户信息
    GameData.UserInfo = {
        "nickname": "",
        "picture": "",
        "identity": 1,
        "invitation_code": "",
        "is_bind_mobile": true,
        "mobile": "",
        "is_bind_wx": false,
        "experience": 0,
        "grade": "1级",
        "designation": "初级学徒",
        "sex": 1,
        "birthday": "",
        "gst": 0,
        "mineral": 0,
        "current_grade_max_experience": 2427,
        "current_hold_area_grade": 1,
        "dig_time": -1,
        "current_hold_area_code": "",
        "hold_area_reward": 10000,
        "hold_area_work_reward": 1000,
        "yesterday_distribution_income": 0,
        "total_distribution_income": 0,
        "is_lock_exchange": 0,
        "is_plus": 0
    };
    GameData.Puser_rate = {
        "gst": 1,
        "usdt": 0.7,
        "transfer_out": {
            "gst": 30.15,
            "usdt": 20.18
        }
    };
    GameData.Puser_Money = {
        gst: 0,
        usdt: 0
    };
    GameData.Share_config = {
        "link": "http://hardymonkey.cn:8081/download/app?code=178f3735",
        "app": "我正在有矿APP测试，快来和我一起玩耍吧，点击下方链接注册：\r\n\r\nhttp://hardymonkey.cn:8081/download/app?code=178f3735\r\n\r\n输入邀请码立即获取矿区，邀请码：178f3735",
        "game": "我正在有矿APP里玩挖矿游戏，快来和我一起挖矿吧，点击下方链接注册：\r\n\r\nhttp://hardymonkey.cn:8081/download/app?code=178f3735\r\n\r\n输入邀请码立即获取矿区，邀请码：178f3735",
        "img": ""
    };
    GameData.Mine_area_config = {
        "hold_area_start_time": "00:00:00",
        "hold_area_end_time": "08:00:00",
        "hold_area_work_start_time": "00:00:00",
        "hold_area_work_end_time": "08:00:00",
        "user_work_hour": "4",
        "hold_area_is_close": true,
        "user_work_is_close": true
    };
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map