
const UserPhone = 'UserPhone';
const UserPassword = 'UserPassword';

const UpdataUserInfo = 'UpdataUserInfo';
const ChangeIdentity = 'ChangeIdentity';
const ExitGame = 'ExitGame';

const NEW_NOTICE = 'NEW_NOTICE';
const UPDATE_EXCHANGE_RATE = 'UPDATE_EXCHANGE_RATE';
const GameMusic = 'GameMusic';
const UpdataGameInfo = 'UpdataGameInfo';

const StartDigMine = 'StartDigMine';
const DigMineTime = 'DigMineTime';

const PursePassword = 'PursePassword';
const PurseUpdataInfo = 'PurseUpdataInfo';
const PurseShowInfo = 'PurseShowInfo';

const OwnerListUpdata = 'OwnerListUpdata';

const ShowDialog = 'ShowDialog';
/**
 * 音乐音效
 */
const MAINSCENEBGM = 'main_scene_wav';     //主界面背景音乐
const MINEAREABGM = 'mine_area_wav';     //矿区背景音乐
const EXCHANGEBGM = 'exchange_wav';     //交易中心背景音乐
const MANAGECENTERBGM = 'manage_center_wav';     //管理中心背景音乐
const MAINSCENECLICK = 'main_scene_click_mp3';     //主界面点击音效
const EXCHANGECLICK = 'exchange_click_mp3';     //交易中心点击音效
const MINEAREACLICK = 'mine_area_click_mp3';     //矿区点击音效
const MANAGECENTERCLICK = 'manage_center_click_mp3';     //管理中心点击音效
const GETPRIZEEFFECT = 'get_prize_effect_mp3';     //获得收益点击音效


/**
 * 性别：男：1，女：2
 */
enum SEX { Man = 1, Woman }
/**
 * 身份： 矿工：1，矿主：2
 */
enum IDENTITY { Miner = 1, Owner }
/**
 * 机器类型： 挖掘机：1，淘洗机器：2
 */
enum ENGINE_TYPE { EXCAVATE = 1, PANNING }