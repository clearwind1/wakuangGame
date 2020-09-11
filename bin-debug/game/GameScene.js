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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Game;
(function (Game) {
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene() {
            var _this = _super.call(this) || this;
            _this.skinName = "GameScene";
            _this._dig_time_int = -1;
            _this._notice_timeTag = null;
            _this._notice_move = false;
            _this.init();
            _this.initEnent();
            _this.getNotice();
            return _this;
        }
        GameScene.prototype.init = function () {
            // init
            cor.MainScene.instance().playbgm(MAINSCENEBGM);
            if (GameData.UserInfo.identity == IDENTITY.Miner) {
                this.owner_icon.visible = false;
                this.level.text = "";
                // this.bg.source = `Bg_MiningArea_Lv1_png`
                this.addDB(this.role_group, "Kuangquguangli");
            }
            else {
                this.mine_group.visible = false;
                this.level.text = 'v' + GameData.UserInfo.current_hold_area_grade;
                // this.bg.source = `Bg_MiningArea_Lv${GameData.UserInfo.current_hold_area_grade}_png`;
                this.addDB(this.role_group, "Lv" + GameData.UserInfo.current_hold_area_grade);
            }
            this.headImg.source = GameData.UserInfo.picture;
            this.nickname.text = GameData.UserInfo.nickname;
            this.gst_num.text = GameData.UserInfo.gst + '';
            this.mine_num.text = GameData.UserInfo.mineral + '';
            this.setExpbar();
            //颜色矩阵数组
            var colorMatrix = [
                0.3, 0.3, 0, 0, 0,
                0.3, 0.3, 0, 0, 0,
                0.3, 0.3, 0, 0, 0,
                0, 0, 0, 1, 0
            ];
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            // this.friend_btn.filters = [colorFlilter];
            // this.share_btn.filters = [colorFlilter];
            // this.exchange_center_btn.filters = [colorFlilter];
            // this.server_center_btn.filters = [colorFlilter];
            // this.mine_btn.filters = [colorFlilter];
            // this.tools_store_btn.filters = [colorFlilter];
            // this.warehouse_btn.filters = [colorFlilter];
            if (GameData.UserInfo.identity == IDENTITY.Miner) {
                this.tools_store_btn.filters = [colorFlilter];
                this.mine_btn.filters = [colorFlilter];
            }
            // if (typeof (GameData.UserInfo.dig_time) === 'string') {
            //     GameData.UserInfo.dig_time = TimeTonumber(GameData.UserInfo.dig_time);
            // }
            // if (GameData.UserInfo.dig_time > 0) {
            //     this.startDigMine();
            // }
            //收益弹窗
            if (GameData.UserInfo.hold_area_reward > 0) {
                cor.MainScene.instance().addTopPage(new Game.GetPrize(GameData.UserInfo.hold_area_reward, 1));
            }
            if (GameData.UserInfo.hold_area_work_reward > 0) {
                cor.MainScene.instance().addTopPage(new Game.GetPrize(GameData.UserInfo.hold_area_work_reward, 2));
            }
            if (GameData.UserInfo.total_distribution_income > 0) {
                cor.MainScene.instance().addTopPage(new Game.GetPrize(GameData.UserInfo.total_distribution_income, 5));
            }
            if (GameData.UserInfo.yesterday_distribution_income > 0) {
                cor.MainScene.instance().addTopPage(new Game.GetPrize(GameData.UserInfo.yesterday_distribution_income, 4));
            }
            setTimeout(function () {
                cor.MainScene.instance().showTopPage();
            }, 600);
        };
        GameScene.prototype.initEnent = function () {
            this.addEvent(this.exitbtn, egret.TouchEvent.TOUCH_TAP, this, this.exitGame, null, MAINSCENECLICK);
            this.addEvent(this.manager_btn, egret.TouchEvent.TOUCH_TAP, this, this.showManager, null, MAINSCENECLICK);
            this.addEvent(this.manageCenter_btn, egret.TouchEvent.TOUCH_TAP, this, this.showManageCenter, null, MAINSCENECLICK);
            this.addEvent(this.mine_btn, egret.TouchEvent.TOUCH_TAP, this, this.showMine, null, MAINSCENECLICK);
            this.addEvent(this.exchange_center_btn, egret.TouchEvent.TOUCH_TAP, this, this.showExchange_center, null, MAINSCENECLICK);
            this.addEvent(this.server_center_btn, egret.TouchEvent.TOUCH_TAP, this, this.showServer_center, null, MAINSCENECLICK);
            this.addEvent(this.tools_store_btn, egret.TouchEvent.TOUCH_TAP, this, this.showToolsStore, null, MAINSCENECLICK);
            this.addEvent(this.warehouse_btn, egret.TouchEvent.TOUCH_TAP, this, this.showWarehouse, null, MAINSCENECLICK);
            this.addEvent(this.email_btn, egret.TouchEvent.TOUCH_TAP, this, this.tapNotice, null, MAINSCENECLICK);
            // this.addEvent(this.setting_btn, egret.TouchEvent.TOUCH_TAP, this, this.showSetting, null, MAINSCENECLICK);
            this.addEvent(this.share_btn, egret.TouchEvent.TOUCH_TAP, this, this.showShare);
            this.addEvent(this.friend_btn, egret.TouchEvent.TOUCH_TAP, this, this.showFriend, null, MAINSCENECLICK);
            this.addEvent(this.headImg, egret.TouchEvent.TOUCH_TAP, this, this.showSetting, null, MAINSCENECLICK);
            this.addEvent(this.mine_manageCenter_btn, egret.TouchEvent.TOUCH_TAP, this, this.mine_manageCenter, null, MAINSCENECLICK);
            this.addEvent(cor.EventManage.instance(), ChangeIdentity, this, this.changeIdentity);
            this.addEvent(cor.EventManage.instance(), ExitGame, this, this.exitGame);
            this.addEvent(cor.EventManage.instance(), UpdataUserInfo, this, this.updata_info);
            this.addEvent(cor.EventManage.instance(), UpdataGameInfo, this, this.updata_gameinfo);
            this.addEvent(cor.EventManage.instance(), NEW_NOTICE, this, this.noticTip);
            this.addEvent(cor.EventManage.instance(), StartDigMine, this, this.startDigMine);
        };
        GameScene.prototype.setExpbar = function () {
            this.expbar.width = (GameData.UserInfo.experience / GameData.UserInfo.current_grade_max_experience) * 248;
        };
        /**
         * 公告
         */
        GameScene.prototype.getNotice = function () {
            var _this = this;
            cor.Socket.getIntance().sendmsg('GET_NOTICE', {}, function (rdata) {
                Log(rdata);
                _this.notice_info.text = '暂无公告';
                _this.showNotice();
                if (rdata != null) {
                    _this.notice_info.text = rdata.content;
                }
                _this._notice_timeTag = setTimeout(function () {
                    _this._notice_timeTag = null;
                    _this.hideNotice();
                }, 2000);
            }, this);
        };
        GameScene.prototype.showNotice = function () {
            var _this = this;
            this._notice_move = true;
            egret.Tween.get(this.notice_group).to({ x: 0 }, 300).call(function () { _this._notice_move = false; });
        };
        GameScene.prototype.hideNotice = function () {
            var _this = this;
            this._notice_move = true;
            egret.Tween.get(this.notice_group).to({ x: -311 }, 300).call(function () { _this._notice_move = false; });
        };
        GameScene.prototype.tapNotice = function () {
            if (this._notice_move) {
                return;
            }
            if (this.notice_group.x == 0) {
                if (this._notice_timeTag != null) {
                    clearTimeout(this._notice_timeTag);
                    this._notice_timeTag = null;
                }
                this.hideNotice();
            }
            else {
                if (this.notic_tip_img.visible) {
                    this.notic_tip_img.visible = false;
                }
                this.showNotice();
            }
        };
        GameScene.prototype.noticTip = function (rdata) {
            this.notic_tip_img.visible = true;
            this.notice_info.text = rdata.data;
            egret.Tween.get(this.notic_tip_img).wait(400).to({ alpha: 0 }).wait(100).to({ alpha: 1 }).wait(400).to({ alpha: 0 }).wait(100).to({ alpha: 1 });
        };
        /**
         * 新的管理中心：商店，打工
         */
        GameScene.prototype.showManageCenter = function () {
            cor.MainScene.instance().playbgm(MANAGECENTERBGM);
            if (GameData.UserInfo.identity == IDENTITY.Miner) {
                this.showServer_center();
            }
            else {
                this.showToolsStore();
            }
        };
        /**
         * 新的矿区
         */
        GameScene.prototype.mine_manageCenter = function () {
            cor.Socket.getIntance().sendmsg('HOLD_AREA_LIST', {}, function (rdata) {
                Log(rdata);
                cor.MainScene.instance().playbgm(MINEAREABGM);
                cor.MainScene.instance().addChild(new Game.MineAreaManager(rdata));
            }, this);
        };
        /**
         * 矿区管理处
         */
        GameScene.prototype.showManager = function () {
            cor.Socket.getIntance().sendmsg('HOLD_AREA_LIST', {}, function (rdata) {
                Log(rdata);
                cor.MainScene.instance().addChild(new Game.MineManager(rdata));
            }, this);
        };
        /**
         * 矿区
         */
        GameScene.prototype.showMine = function () {
            if (GameData.UserInfo.identity == IDENTITY.Miner) {
                Game.TipsSkin.instance().show("您还没有矿区，请前往购买");
                return;
            }
            cor.Socket.getIntance().sendmsg('GET_USER_HOLD_AREA_CONFIG', {}, function (rdata) {
                Log(rdata);
                cor.MainScene.instance().addChild(new Game.MineArea(rdata));
            }, this);
        };
        /**
         * 工具商店
         */
        GameScene.prototype.showToolsStore = function () {
            // if (GameData.UserInfo.identity == IDENTITY.Miner) {
            //     TipsSkin.instance().show("暂时不对矿工开放");
            //     return;
            // }
            cor.Socket.getIntance().sendmsg('STORE_GOOD_LIST', {}, function (rdata) {
                Log(rdata);
                cor.MainScene.instance().addChild(new Game.ToolsStore(rdata));
            }, this);
        };
        /**
         * 仓库
         */
        GameScene.prototype.showWarehouse = function () {
            cor.Socket.getIntance().sendmsg('USER_GOOD_LIST', {}, function (rdata) {
                Log(rdata);
                cor.MainScene.instance().addChild(new Game.Warehouse(rdata));
            }, this);
        };
        /**
         * 服务中心
         */
        GameScene.prototype.showServer_center = function () {
            cor.Socket.getIntance().sendmsg('USER_HOLD_AREA_LIST', {}, function (rdata) {
                Log(rdata);
                cor.MainScene.instance().addChild(new Game.MinerServerCenter(rdata));
            }, this);
        };
        /**
         * 交易中心
         */
        GameScene.prototype.showExchange_center = function () {
            cor.Socket.getIntance().sendmsg('EVERY_CONVERT_RECORD', {}, function (rdata) {
                Log(rdata);
                cor.MainScene.instance().playbgm(EXCHANGEBGM);
                cor.MainScene.instance().addChild(new Game.ExchangeCenter(rdata));
            }, this);
        };
        /**
         * 设置
         */
        GameScene.prototype.showSetting = function () {
            this.addChild(new Game.GameSetting);
        };
        /**
         * 分享
         */
        GameScene.prototype.showShare = function () {
            // GameData.UserInfo.current_hold_area_grade = 1;
            // GameData.UserInfo.identity = IDENTITY.Owner;
            // cor.EventManage.instance().sendEvent(ChangeIdentity);
            // cor.EventManage.instance().sendEvent(UpdataGameInfo);
            // TipsSkin.instance().show("暂未开放");
            // return;
            this.addChild(new Game.GameShare);
        };
        /**
         * 好友
         */
        GameScene.prototype.showFriend = function () {
            var _this = this;
            cor.Socket.getIntance().sendmsg('FRIEND_LIST', {}, function (rdata) {
                Log(rdata);
                _this.addChild(new Game.GameFriend(rdata));
            }, this);
        };
        /**
         * 退出游戏
         */
        GameScene.prototype.exitGame = function () {
            egret.MainContext.instance.stage.setContentSize(750, 1334);
            egret.MainContext.instance.stage.orientation = egret.OrientationMode.PORTRAIT;
            egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
            GameData.GameWidth = egret.MainContext.instance.stage.stageWidth;
            GameData.GameHeigth = egret.MainContext.instance.stage.stageHeight;
            if (this._dig_time_int != -1) {
                clearInterval(this._dig_time_int);
            }
            cor.MainScene.instance().stopbgm();
            this.dispose();
        };
        /**
         * 改变身份事件
         */
        GameScene.prototype.changeIdentity = function (e) {
            var _this = this;
            cor.Socket.getIntance().sendmsg('GET_USER_BASE_INFO', {}, function (rdata) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    Log(rdata);
                    GameData.UserInfo = rdata;
                    return [2 /*return*/];
                });
            }); }, this);
            if (GameData.UserInfo.identity == IDENTITY.Owner) {
                this.mine_group.visible = false;
                this.owner_icon.visible = true;
                this.level.text = 'v' + GameData.UserInfo.current_hold_area_grade;
                this.tools_store_btn.filters = [];
                this.mine_btn.filters = [];
                this.removeDB();
                this.addDB(this.role_group, "Lv" + GameData.UserInfo.current_hold_area_grade);
            }
            else {
                this.mine_group.visible = true;
                this.owner_icon.visible = false;
                this.level.text = GameData.UserInfo.grade;
                this.removeDB();
                this.addDB(this.role_group, "Kuangquguangli");
                //颜色矩阵数组
                var colorMatrix = [
                    0.3, 0.3, 0, 0, 0,
                    0.3, 0.3, 0, 0, 0,
                    0.3, 0.3, 0, 0, 0,
                    0, 0, 0, 1, 0
                ];
                var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
                this.tools_store_btn.filters = [colorFlilter];
                this.mine_btn.filters = [colorFlilter];
            }
        };
        /**
         * 更新用户信息
         */
        GameScene.prototype.updata_info = function () {
            this.nickname.text = GameData.UserInfo.nickname;
        };
        /**
         * 更新游戏信息
         */
        GameScene.prototype.updata_gameinfo = function () {
            this.gst_num.text = GameData.UserInfo.gst + '';
            this.mine_num.text = GameData.UserInfo.mineral + '';
        };
        /**
         * 开始挖矿
         */
        GameScene.prototype.startDigMine = function () {
            var _this = this;
            this._dig_time_int = setInterval(function () {
                GameData.UserInfo.dig_time--;
                if (GameData.UserInfo.dig_time <= 0) {
                    GameData.UserInfo.dig_time = 0;
                    clearInterval(_this._dig_time_int);
                    _this._dig_time_int = -1;
                }
                cor.EventManage.instance().sendEvent(DigMineTime);
            }, 1000);
        };
        return GameScene;
    }(cor.BaseScene));
    Game.GameScene = GameScene;
    __reflect(GameScene.prototype, "Game.GameScene");
})(Game || (Game = {}));
