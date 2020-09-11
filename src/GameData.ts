
/***
 * GameData:  游戏基础数据
 */

class GameData {

	/**游戏名称 */
	public static GAMENAME: string = "RichManGame";
	/**游戏设计宽度 */
	public static GameDesignWidth: number = 750;
	/**游戏设计高度 */
	public static GameDesignHeigth: number = 1334;
	/**屏幕宽度 */
	public static GameWidth: number = 750;
	/**屏幕高度 */
	public static GameHeigth: number = 1334;
	/**主场景宽度偏移量 */
	public static WidthOFFX: number = 0;
	/**主场景高度偏移量 */
	public static HeigthOFFY: number = 0;
	/**服务器连接地址 */
	public static ServerUrl: string = "http://148.70.80.204:8082/";
	public static ServerSocketUrl: string = "ws://148.70.80.204:9001/app";
	///
	/**游戏界面 */
	public static BGame: boolean = false;

	//用户手机号
	public static UserPhone: string = '';
	//用户密码
	public static UserPassword: string = '';

	//用户信息
	public static UserInfo = {
		"nickname": "",
		"picture": "",
		"identity": 1,		//身份：1.矿工，2.矿主
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
		"total_distribution_income": 0
	}

	public static Puser_rate = {
		"gst": 1,
		"usdt": 0.7,
		"transfer_out": {
			"gst": 30.15,
			"usdt": 20.18
		}
	};

	public static Share_config = {
		"link": "http://hardymonkey.cn:8081/download/app?code=178f3735",
		"app": "我正在有矿APP测试，快来和我一起玩耍吧，点击下方链接注册：\r\n\r\nhttp://hardymonkey.cn:8081/download/app?code=178f3735\r\n\r\n输入邀请码立即获取矿区，邀请码：178f3735",
		"game": "我正在有矿APP里玩挖矿游戏，快来和我一起挖矿吧，点击下方链接注册：\r\n\r\nhttp://hardymonkey.cn:8081/download/app?code=178f3735\r\n\r\n输入邀请码立即获取矿区，邀请码：178f3735"
	}

	public static Mine_area_config = {
		"hold_area_start_time": "00:00:00",
		"hold_area_end_time": "08:00:00",
		"hold_area_work_start_time": "00:00:00",
		"hold_area_work_end_time": "08:00:00",
		"user_work_hour": "4",
		"hold_area_is_close": true,
		"user_work_is_close": true
	}

}