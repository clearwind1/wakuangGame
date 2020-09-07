var UserPhone = 'UserPhone';
var UserPassword = 'UserPassword';
var UpdataUserInfo = 'UpdataUserInfo';
var ChangeIdentity = 'ChangeIdentity';
var ExitGame = 'ExitGame';
var NEW_NOTICE = 'NEW_NOTICE';
var GameMusic = 'GameMusic';
var UpdataGameInfo = 'UpdataGameInfo';
var StartDigMine = 'StartDigMine';
var DigMineTime = 'DigMineTime';
var PursePassword = 'PursePassword';
var PurseUpdataInfo = 'PurseUpdataInfo';
var PurseShowInfo = 'PurseShowInfo';
var OwnerListUpdata = 'OwnerListUpdata';
/**
 * 音乐音效
 */
var MAINSCENEBGM = 'main_scene_wav'; //主界面背景音乐
var MINEAREABGM = 'mine_area_wav'; //矿区背景音乐
var EXCHANGEBGM = 'exchange_wav'; //交易中心背景音乐
var MANAGECENTERBGM = 'manage_center_wav'; //管理中心背景音乐
var MAINSCENECLICK = 'main_scene_click_mp3'; //主界面点击音效
var EXCHANGECLICK = 'exchange_click_mp3'; //交易中心点击音效
var MINEAREACLICK = 'mine_area_click_mp3'; //矿区点击音效
var MANAGECENTERCLICK = 'manage_center_click_mp3'; //管理中心点击音效
var GETPRIZEEFFECT = 'get_prize_effect_mp3'; //获得收益点击音效
/**
 * 性别：男：1，女：2
 */
var SEX;
(function (SEX) {
    SEX[SEX["Man"] = 1] = "Man";
    SEX[SEX["Woman"] = 2] = "Woman";
})(SEX || (SEX = {}));
/**
 * 身份： 矿工：1，矿主：2
 */
var IDENTITY;
(function (IDENTITY) {
    IDENTITY[IDENTITY["Miner"] = 1] = "Miner";
    IDENTITY[IDENTITY["Owner"] = 2] = "Owner";
})(IDENTITY || (IDENTITY = {}));
/**
 * 机器类型： 挖掘机：1，淘洗机器：2
 */
var ENGINE_TYPE;
(function (ENGINE_TYPE) {
    ENGINE_TYPE[ENGINE_TYPE["EXCAVATE"] = 1] = "EXCAVATE";
    ENGINE_TYPE[ENGINE_TYPE["PANNING"] = 2] = "PANNING";
})(ENGINE_TYPE || (ENGINE_TYPE = {}));
