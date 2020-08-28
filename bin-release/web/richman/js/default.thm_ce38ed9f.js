window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i(),this._Rect1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "myFont";
		t.left = 8;
		t.right = 8;
		t.size = 28;
		t.text = "修改";
		t.textAlign = "center";
		t.textColor = 0x3caaff;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x3caaff;
		t.height = 2;
		t.horizontalCenter = 0;
		t.width = 56;
		t.y = 37;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "gameRes_json.Bg_Shop03_png";
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/app/AllNewsItem.exml'] = window.AllNewsItem = (function (_super) {
	__extends(AllNewsItem, _super);
	function AllNewsItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 386;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.thumb"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.title"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.publish_at"],[0],this._Label2,"text");
	}
	var _proto = AllNewsItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.scale9Grid = new egret.Rectangle(7,0,8,3);
		t.source = "appIcon_json.Line_Main01_png";
		t.width = 690;
		t.x = 30;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 248;
		t.width = 702;
		t.x = 30;
		t.y = 76;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "myFont";
		t.size = 28;
		t.textColor = 0xebf0ff;
		t.x = 30;
		t.y = 32;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "myFont";
		t.size = 22;
		t.textColor = 0x535b70;
		t.x = 30;
		t.y = 334;
		return t;
	};
	return AllNewsItem;
})(eui.Skin);generateEUI.paths['resource/game_skins/app/BirthItem.exml'] = window.BirthItem = (function (_super) {
	__extends(BirthItem, _super);
	function BirthItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 42;
		this.width = 107;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.num"],[0],this._Label1,"text");
	}
	var _proto = BirthItem.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 2;
		t.source = "appIcon_json.Line_Information01_png";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.textColor = 0x353535;
		t.y = 6;
		return t;
	};
	return BirthItem;
})(eui.Skin);generateEUI.paths['resource/game_skins/app/HomePage.exml'] = window.HomePage = (function (_super) {
	__extends(HomePage, _super);
	var HomePage$Skin1 = 	(function (_super) {
		__extends(HomePage$Skin1, _super);
		function HomePage$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 120;
			this.width = 114;
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","appIcon_json.Bg_Main03_xz_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "appIcon_json.Bg_Main03_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "appIcon_json.Icon_Youxi_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 20;
			t.text = "游戏";
			t.y = 132;
			return t;
		};
		return HomePage$Skin1;
	})(eui.Skin);

	var HomePage$Skin2 = 	(function (_super) {
		__extends(HomePage$Skin2, _super);
		function HomePage$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 120;
			this.width = 114;
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","appIcon_json.Bg_Main03_xz_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "appIcon_json.Bg_Main03_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "appIcon_json.Icon_Qianbao_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 20;
			t.text = "游戏";
			t.y = 132;
			return t;
		};
		return HomePage$Skin2;
	})(eui.Skin);

	var HomePage$Skin3 = 	(function (_super) {
		__extends(HomePage$Skin3, _super);
		function HomePage$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 120;
			this.width = 114;
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","appIcon_json.Bg_Main03_xz_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "appIcon_json.Bg_Main03_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "appIcon_json.Icon_Kabao_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 20;
			t.text = "游戏";
			t.y = 132;
			return t;
		};
		return HomePage$Skin3;
	})(eui.Skin);

	var HomePage$Skin4 = 	(function (_super) {
		__extends(HomePage$Skin4, _super);
		function HomePage$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "appIcon_json.Banner_Personal_Back02_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomePage$Skin4;
	})(eui.Skin);

	var HomePage$Skin5 = 	(function (_super) {
		__extends(HomePage$Skin5, _super);
		function HomePage$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "appIcon_json.Banner_Personal_Back02_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomePage$Skin5;
	})(eui.Skin);

	var HomePage$Skin6 = 	(function (_super) {
		__extends(HomePage$Skin6, _super);
		function HomePage$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "appIcon_json.Banner_Personal_Back02_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomePage$Skin6;
	})(eui.Skin);

	var HomePage$Skin7 = 	(function (_super) {
		__extends(HomePage$Skin7, _super);
		function HomePage$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "appIcon_json.Banner_Personal_Back02_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomePage$Skin7;
	})(eui.Skin);

	var HomePage$Skin8 = 	(function (_super) {
		__extends(HomePage$Skin8, _super);
		function HomePage$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 60;
			this.width = 645;
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.right = 0;
			t.source = "appIcon_json.Banner_Personal_Back02_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomePage$Skin8;
	})(eui.Skin);

	var HomePage$Skin9 = 	(function (_super) {
		__extends(HomePage$Skin9, _super);
		function HomePage$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 81;
			this.width = 78;
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","appIcon_json.Icon_Shouye_xz_png"),
						new eui.SetProperty("labelDisplay","textColor",0x33f2c1)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "appIcon_json.Icon_Shouye_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 20;
			t.text = "首页";
			t.textColor = 0x6d7079;
			t.y = 53.92;
			return t;
		};
		return HomePage$Skin9;
	})(eui.Skin);

	var HomePage$Skin10 = 	(function (_super) {
		__extends(HomePage$Skin10, _super);
		function HomePage$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","appIcon_json.Icon_Zixun_xz_png"),
						new eui.SetProperty("labelDisplay","textColor",0x33f2c1)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "appIcon_json.Icon_Zixun_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 20;
			t.text = "首页";
			t.textColor = 0x6d7079;
			t.y = 53.92;
			return t;
		};
		return HomePage$Skin10;
	})(eui.Skin);

	var HomePage$Skin11 = 	(function (_super) {
		__extends(HomePage$Skin11, _super);
		function HomePage$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","appIcon_json.Icon_Jiaoyihang_xz_png"),
						new eui.SetProperty("labelDisplay","textColor",0x33f2c1)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "appIcon_json.Icon_Jiaoyihang_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 20;
			t.text = "首页";
			t.textColor = 0x6d7079;
			t.y = 53.92;
			return t;
		};
		return HomePage$Skin11;
	})(eui.Skin);

	var HomePage$Skin12 = 	(function (_super) {
		__extends(HomePage$Skin12, _super);
		function HomePage$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","appIcon_json.Icon_Gerenzhongxin_xz_png"),
						new eui.SetProperty("labelDisplay","textColor",0x33f2c1)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "appIcon_json.Icon_Gerenzhongxin_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 20;
			t.text = "首页";
			t.textColor = 0x6d7079;
			t.y = 53.92;
			return t;
		};
		return HomePage$Skin12;
	})(eui.Skin);

	function HomePage() {
		_super.call(this);
		this.skinParts = ["banner_group","bannerIndex_group","game_btn","purse_btn","card_btn","news_list","news_scroller","home_group","news_list0","news_scroller0","news_group","headImg","headMask","purseManage_btn","cardManage_btn","my_invite_code","invite_code_btn","about_btn","setting_btn","nickName","telNum","personal_group","home_btn","news_btn","exchange_btn","personal_btn","bottom_nav"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.home_group_i(),this.news_group_i(),this.personal_group_i(),this.bottom_nav_i()];
	}
	var _proto = HomePage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(15,37,7,4);
		t.source = "appIcon_json.Bg_Main01_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.home_group_i = function () {
		var t = new eui.Group();
		this.home_group = t;
		t.height = 1234;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.banner_group_i(),this.bannerIndex_group_i(),this._Group1_i(),this.news_scroller_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Logo_Main_png";
		t.x = 313;
		t.y = 26;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Main02_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.banner_group_i = function () {
		var t = new eui.Group();
		this.banner_group = t;
		t.height = 390;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 96;
		return t;
	};
	_proto.bannerIndex_group_i = function () {
		var t = new eui.Group();
		this.bannerIndex_group = t;
		t.height = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 472;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 170;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 1;
		t.y = 488;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.game_btn_i(),this.purse_btn_i(),this.card_btn_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 125;
		t.horizontalAlign = "center";
		t.paddingLeft = 0;
		t.verticalAlign = "top";
		return t;
	};
	_proto.game_btn_i = function () {
		var t = new eui.Button();
		this.game_btn = t;
		t.label = "游戏";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 31;
		t.y = 23;
		t.skinName = HomePage$Skin1;
		return t;
	};
	_proto.purse_btn_i = function () {
		var t = new eui.Button();
		this.purse_btn = t;
		t.label = "我的钱包";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 41;
		t.y = 33;
		t.skinName = HomePage$Skin2;
		return t;
	};
	_proto.card_btn_i = function () {
		var t = new eui.Button();
		this.card_btn = t;
		t.label = "卡管理";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 51;
		t.y = 43;
		t.skinName = HomePage$Skin3;
		return t;
	};
	_proto.news_scroller_i = function () {
		var t = new eui.Scroller();
		this.news_scroller = t;
		t.anchorOffsetY = 0;
		t.height = 572;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 660;
		t.viewport = this.news_list_i();
		return t;
	};
	_proto.news_list_i = function () {
		var t = new eui.List();
		this.news_list = t;
		t.itemRendererSkinName = NewsItem;
		return t;
	};
	_proto.news_group_i = function () {
		var t = new eui.Group();
		this.news_group = t;
		t.height = 1234;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Label1_i(),this.news_scroller0_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Main02_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Line_Information01_png";
		t.width = 690;
		t.y = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "资讯";
		t.y = 34;
		return t;
	};
	_proto.news_scroller0_i = function () {
		var t = new eui.Scroller();
		this.news_scroller0 = t;
		t.anchorOffsetY = 0;
		t.height = 1134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 100;
		t.viewport = this.news_list0_i();
		return t;
	};
	_proto.news_list0_i = function () {
		var t = new eui.List();
		this.news_list0 = t;
		t.itemRendererSkinName = AllNewsItem;
		return t;
	};
	_proto.personal_group_i = function () {
		var t = new eui.Group();
		this.personal_group = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this.headImg_i(),this.headMask_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this.nickName_i(),this.telNum_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "appIcon_json.Bg_Personal01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 1028;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(31,39,23,18);
		t.source = "appIcon_json.Bg_Personal02_png";
		t.percentWidth = 100;
		t.y = 378;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 12;
		t.scale9Grid = new egret.Rectangle(6,2,41,12);
		t.source = "appIcon_json.Bg_Personal03_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 594;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 1000;
		t.scale9Grid = new egret.Rectangle(6,2,41,12);
		t.source = "appIcon_json.Bg_Personal03_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 930;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(15,37,7,4);
		t.source = "appIcon_json.Bg_Main01_png";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 142;
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Bg_Personal04_png";
		t.width = 142;
		t.y = 72;
		return t;
	};
	_proto.headMask_i = function () {
		var t = new eui.Image();
		this.headMask = t;
		t.height = 142;
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Bg_Personal04_png";
		t.width = 142;
		t.y = 72;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Line_Personal02_png";
		t.width = 690;
		t.y = 486;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Line_Personal02_png";
		t.width = 690;
		t.y = 714;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Line_Personal02_png";
		t.width = 690;
		t.y = 822;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 108;
		t.width = 645;
		t.x = 54;
		t.y = 378;
		t.elementsContent = [this._Image14_i(),this._Label2_i(),this.purseManage_btn_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "appIcon_json.Icon_GRQianbao_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "钱包管理";
		t.textColor = 0x353535;
		t.verticalCenter = 0;
		t.x = 90;
		return t;
	};
	_proto.purseManage_btn_i = function () {
		var t = new eui.Button();
		this.purseManage_btn = t;
		t.height = 42;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 32;
		t.x = 622;
		t.skinName = HomePage$Skin4;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 108;
		t.width = 645;
		t.x = 54;
		t.y = 486;
		t.elementsContent = [this._Image15_i(),this._Label3_i(),this.cardManage_btn_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "appIcon_json.Icon_GRKabao_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "卡管理";
		t.textColor = 0x353535;
		t.verticalCenter = 0;
		t.x = 90;
		return t;
	};
	_proto.cardManage_btn_i = function () {
		var t = new eui.Button();
		this.cardManage_btn = t;
		t.height = 42;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 32;
		t.x = 622;
		t.skinName = HomePage$Skin5;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 108;
		t.width = 645;
		t.x = 54;
		t.y = 607;
		t.elementsContent = [this._Image16_i(),this._Label4_i(),this.my_invite_code_i(),this.invite_code_btn_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "appIcon_json.Icon_GRYaoqingma_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "我的邀请码";
		t.textColor = 0x353535;
		t.verticalCenter = -22;
		t.x = 90;
		return t;
	};
	_proto.my_invite_code_i = function () {
		var t = new eui.Label();
		this.my_invite_code = t;
		t.fontFamily = "myFont";
		t.size = 24;
		t.text = "我的邀请码";
		t.textColor = 0x9b9b9b;
		t.verticalCenter = 19;
		t.x = 90;
		return t;
	};
	_proto.invite_code_btn_i = function () {
		var t = new eui.Button();
		this.invite_code_btn = t;
		t.height = 42;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 32;
		t.x = 622;
		t.skinName = HomePage$Skin6;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 108;
		t.width = 645;
		t.x = 54;
		t.y = 715;
		t.elementsContent = [this._Image17_i(),this._Label5_i(),this.about_btn_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "appIcon_json.Icon_GRXiangqing_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "关于有矿";
		t.textColor = 0x353535;
		t.verticalCenter = 0;
		t.x = 90;
		return t;
	};
	_proto.about_btn_i = function () {
		var t = new eui.Button();
		this.about_btn = t;
		t.height = 42;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 32;
		t.x = 622;
		t.skinName = HomePage$Skin7;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 108;
		t.width = 645;
		t.x = 54;
		t.y = 823;
		t.elementsContent = [this._Image18_i(),this._Label6_i(),this.setting_btn_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "appIcon_json.Icon_GRShezhi_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "设置";
		t.textColor = 0x353535;
		t.verticalCenter = 0;
		t.x = 90;
		return t;
	};
	_proto.setting_btn_i = function () {
		var t = new eui.Button();
		this.setting_btn = t;
		t.height = 60;
		t.label = "";
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 645;
		t.skinName = HomePage$Skin8;
		return t;
	};
	_proto.nickName_i = function () {
		var t = new eui.Label();
		this.nickName = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "Label";
		t.y = 258;
		return t;
	};
	_proto.telNum_i = function () {
		var t = new eui.Label();
		this.telNum = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "Label";
		t.textColor = 0x7a83a4;
		t.visible = false;
		t.y = 312;
		return t;
	};
	_proto.bottom_nav_i = function () {
		var t = new eui.Group();
		this.bottom_nav = t;
		t.bottom = 0;
		t.height = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Group7_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this.home_btn_i(),this.news_btn_i(),this.exchange_btn_i(),this.personal_btn_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 114;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.home_btn_i = function () {
		var t = new eui.Button();
		this.home_btn = t;
		t.label = "首页";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 31;
		t.y = 23;
		t.skinName = HomePage$Skin9;
		return t;
	};
	_proto.news_btn_i = function () {
		var t = new eui.Button();
		this.news_btn = t;
		t.label = "资讯";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 41;
		t.y = 33;
		t.skinName = HomePage$Skin10;
		return t;
	};
	_proto.exchange_btn_i = function () {
		var t = new eui.Button();
		this.exchange_btn = t;
		t.label = "交易所";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 51;
		t.y = 43;
		t.skinName = HomePage$Skin11;
		return t;
	};
	_proto.personal_btn_i = function () {
		var t = new eui.Button();
		this.personal_btn = t;
		t.label = "个人中心";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 61;
		t.y = 53;
		t.skinName = HomePage$Skin12;
		return t;
	};
	return HomePage;
})(eui.Skin);generateEUI.paths['resource/game_skins/app/InfoSettingPage.exml'] = window.InfoSettingPage = (function (_super) {
	__extends(InfoSettingPage, _super);
	var InfoSettingPage$Skin13 = 	(function (_super) {
		__extends(InfoSettingPage$Skin13, _super);
		function InfoSettingPage$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoSettingPage$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.right = 0;
			t.source = "appIcon_json.Banner_Personal_Back02_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoSettingPage$Skin13;
	})(eui.Skin);

	var InfoSettingPage$Skin14 = 	(function (_super) {
		__extends(InfoSettingPage$Skin14, _super);
		function InfoSettingPage$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoSettingPage$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.right = 0;
			t.source = "appIcon_json.Banner_Personal_Back02_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoSettingPage$Skin14;
	})(eui.Skin);

	var InfoSettingPage$Skin15 = 	(function (_super) {
		__extends(InfoSettingPage$Skin15, _super);
		function InfoSettingPage$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoSettingPage$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.right = 0;
			t.source = "appIcon_json.Banner_Personal_Back02_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoSettingPage$Skin15;
	})(eui.Skin);

	var InfoSettingPage$Skin16 = 	(function (_super) {
		__extends(InfoSettingPage$Skin16, _super);
		function InfoSettingPage$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoSettingPage$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.right = 0;
			t.source = "appIcon_json.Banner_Personal_Back02_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoSettingPage$Skin16;
	})(eui.Skin);

	var InfoSettingPage$Skin17 = 	(function (_super) {
		__extends(InfoSettingPage$Skin17, _super);
		function InfoSettingPage$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoSettingPage$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_Logon_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoSettingPage$Skin17;
	})(eui.Skin);

	var InfoSettingPage$Skin18 = 	(function (_super) {
		__extends(InfoSettingPage$Skin18, _super);
		function InfoSettingPage$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoSettingPage$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_Logon_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoSettingPage$Skin18;
	})(eui.Skin);

	var InfoSettingPage$Skin19 = 	(function (_super) {
		__extends(InfoSettingPage$Skin19, _super);
		function InfoSettingPage$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoSettingPage$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_Logon_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoSettingPage$Skin19;
	})(eui.Skin);

	var InfoSettingPage$Skin20 = 	(function (_super) {
		__extends(InfoSettingPage$Skin20, _super);
		function InfoSettingPage$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoSettingPage$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_Logon_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoSettingPage$Skin20;
	})(eui.Skin);

	var InfoSettingPage$Skin21 = 	(function (_super) {
		__extends(InfoSettingPage$Skin21, _super);
		function InfoSettingPage$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoSettingPage$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_Logon_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoSettingPage$Skin21;
	})(eui.Skin);

	var InfoSettingPage$Skin22 = 	(function (_super) {
		__extends(InfoSettingPage$Skin22, _super);
		function InfoSettingPage$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoSettingPage$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_Logon_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoSettingPage$Skin22;
	})(eui.Skin);

	function InfoSettingPage() {
		_super.call(this);
		this.skinParts = ["back_btn","headImg","headMask","nickname","sex","birth","reset_head_btn","reset_nickname_btn","reset_sex_btn","reset_birth_btn","nickname_input","changeNickname_btn","nickname_cancel_btn","change_nickname_group","changeSex_btn","changeSex_cancel_btn","rdb_man","rdb_woman","change_sex_group","changeBirth_btn","changeBirth_cancel_btn","year_select","month_select","day_select","birth_list","birth_scroller","change_birth_group"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Scroller1_i(),this.back_btn_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.headImg_i(),this.headMask_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this.nickname_i(),this.sex_i(),this.birth_i(),this.reset_head_btn_i(),this.reset_nickname_btn_i(),this.reset_sex_btn_i(),this.reset_birth_btn_i(),this.change_nickname_group_i(),this.change_sex_group_i(),this.change_birth_group_i()];
	}
	var _proto = InfoSettingPage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 100;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(6,2,41,12);
		t.source = "appIcon_json.Bg_Personal03_png";
		t.width = 750;
		t.x = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 522;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scrollEnabled = false;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(11,11,66,66);
		t.source = "appIcon_json.Bg_Personal02_png";
		t.width = 785;
		t.y = 0;
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new eui.Image();
		this.back_btn = t;
		t.source = "appIcon_json.Banner_Personal_Back01_png";
		t.x = 30;
		t.y = 28;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Line_Personal01_png";
		t.width = 690;
		t.y = 90;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Line_Personal02_png";
		t.width = 690;
		t.y = 198;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Line_Personal02_png";
		t.width = 690;
		t.y = 306;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Line_Personal02_png";
		t.width = 690;
		t.y = 414;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 88;
		t.source = "appIcon_json.Bg_Personal04_png";
		t.width = 88;
		t.x = 585;
		t.y = 101;
		return t;
	};
	_proto.headMask_i = function () {
		var t = new eui.Image();
		this.headMask = t;
		t.height = 88;
		t.source = "appIcon_json.Bg_Personal04_png";
		t.width = 88;
		t.x = 585;
		t.y = 101;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "账号设置";
		t.textColor = 0x353535;
		t.y = 28;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "头像";
		t.textColor = 0x353535;
		t.x = 36;
		t.y = 129;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "用户名";
		t.textColor = 0x353535;
		t.x = 36;
		t.y = 237;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "性别";
		t.textColor = 0x353535;
		t.x = 36;
		t.y = 345;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "生日";
		t.textColor = 0x353535;
		t.x = 36;
		t.y = 453;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "myFont";
		t.right = 78;
		t.size = 28;
		t.text = "男";
		t.textColor = 0x9b9b9b;
		t.y = 237;
		return t;
	};
	_proto.sex_i = function () {
		var t = new eui.Label();
		this.sex = t;
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "男";
		t.textColor = 0x9B9B9B;
		t.x = 644;
		t.y = 345;
		return t;
	};
	_proto.birth_i = function () {
		var t = new eui.Label();
		this.birth = t;
		t.fontFamily = "myFont";
		t.right = 78;
		t.size = 28;
		t.text = "1900-01-01";
		t.textColor = 0x9B9B9B;
		t.y = 453;
		return t;
	};
	_proto.reset_head_btn_i = function () {
		var t = new eui.Button();
		this.reset_head_btn = t;
		t.anchorOffsetX = 0;
		t.height = 73;
		t.label = "";
		t.width = 664;
		t.x = 35;
		t.y = 107;
		t.skinName = InfoSettingPage$Skin13;
		return t;
	};
	_proto.reset_nickname_btn_i = function () {
		var t = new eui.Button();
		this.reset_nickname_btn = t;
		t.anchorOffsetX = 0;
		t.height = 73;
		t.label = "";
		t.width = 664;
		t.x = 35;
		t.y = 215;
		t.skinName = InfoSettingPage$Skin14;
		return t;
	};
	_proto.reset_sex_btn_i = function () {
		var t = new eui.Button();
		this.reset_sex_btn = t;
		t.anchorOffsetX = 0;
		t.height = 73;
		t.label = "";
		t.width = 664;
		t.x = 35;
		t.y = 323;
		t.skinName = InfoSettingPage$Skin15;
		return t;
	};
	_proto.reset_birth_btn_i = function () {
		var t = new eui.Button();
		this.reset_birth_btn = t;
		t.anchorOffsetX = 0;
		t.height = 73;
		t.label = "";
		t.width = 664;
		t.x = 35;
		t.y = 431;
		t.skinName = InfoSettingPage$Skin16;
		return t;
	};
	_proto.change_nickname_group_i = function () {
		var t = new eui.Group();
		this.change_nickname_group = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image7_i(),this.nickname_input_i(),this.changeNickname_btn_i(),this.nickname_cancel_btn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(24,9,26,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Personal02_png";
		t.width = 465;
		t.x = 1;
		t.y = 321;
		return t;
	};
	_proto.nickname_input_i = function () {
		var t = new eui.EditableText();
		this.nickname_input = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "myFont";
		t.height = 50;
		t.maxChars = 10;
		t.prompt = "请输入手机号";
		t.promptColor = 0x3E4A6B;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x8CA6D8;
		t.verticalAlign = "middle";
		t.width = 393;
		t.x = 177;
		t.y = 339.98;
		return t;
	};
	_proto.changeNickname_btn_i = function () {
		var t = new eui.Button();
		this.changeNickname_btn = t;
		t.horizontalCenter = 0;
		t.label = "确认修改";
		t.y = 531;
		t.skinName = InfoSettingPage$Skin17;
		return t;
	};
	_proto.nickname_cancel_btn_i = function () {
		var t = new eui.Button();
		this.nickname_cancel_btn = t;
		t.horizontalCenter = 0;
		t.label = "取消";
		t.y = 661;
		t.skinName = InfoSettingPage$Skin18;
		return t;
	};
	_proto.change_sex_group_i = function () {
		var t = new eui.Group();
		this.change_sex_group = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Image8_i(),this.changeSex_btn_i(),this.changeSex_cancel_btn_i(),this.rdb_man_i(),this.rdb_woman_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(24,9,26,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Personal02_png";
		t.width = 465;
		t.x = 1;
		t.y = 321;
		return t;
	};
	_proto.changeSex_btn_i = function () {
		var t = new eui.Button();
		this.changeSex_btn = t;
		t.horizontalCenter = 0;
		t.label = "确认修改";
		t.y = 531;
		t.skinName = InfoSettingPage$Skin19;
		return t;
	};
	_proto.changeSex_cancel_btn_i = function () {
		var t = new eui.Button();
		this.changeSex_cancel_btn = t;
		t.horizontalCenter = 0;
		t.label = "取消";
		t.y = 661;
		t.skinName = InfoSettingPage$Skin20;
		return t;
	};
	_proto.rdb_man_i = function () {
		var t = new eui.RadioButton();
		this.rdb_man = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "男";
		t.value = "1";
		t.width = 70;
		t.x = 261;
		t.y = 338;
		return t;
	};
	_proto.rdb_woman_i = function () {
		var t = new eui.RadioButton();
		this.rdb_woman = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "女";
		t.value = "2";
		t.width = 70;
		t.x = 406;
		t.y = 338;
		return t;
	};
	_proto.change_birth_group_i = function () {
		var t = new eui.Group();
		this.change_birth_group = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect3_i(),this._Image9_i(),this.changeBirth_btn_i(),this.changeBirth_cancel_btn_i(),this._Image10_i(),this._Image11_i(),this.year_select_i(),this.month_select_i(),this.day_select_i(),this.birth_scroller_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(24,9,26,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Personal02_png";
		t.width = 465;
		t.x = 1;
		t.y = 321;
		return t;
	};
	_proto.changeBirth_btn_i = function () {
		var t = new eui.Button();
		this.changeBirth_btn = t;
		t.horizontalCenter = 0;
		t.label = "确认修改";
		t.y = 531;
		t.skinName = InfoSettingPage$Skin21;
		return t;
	};
	_proto.changeBirth_cancel_btn_i = function () {
		var t = new eui.Button();
		this.changeBirth_cancel_btn = t;
		t.horizontalCenter = 0;
		t.label = "取消";
		t.y = 661;
		t.skinName = InfoSettingPage$Skin22;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "appIcon_json.Bg_Logon_05_png";
		t.x = 304;
		t.y = 334;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "appIcon_json.Bg_Logon_05_png";
		t.x = 459;
		t.y = 334;
		return t;
	};
	_proto.year_select_i = function () {
		var t = new eui.Label();
		this.year_select = t;
		t.size = 40;
		t.text = "2020";
		t.textColor = 0x353535;
		t.x = 187;
		t.y = 344;
		return t;
	};
	_proto.month_select_i = function () {
		var t = new eui.Label();
		this.month_select = t;
		t.size = 40;
		t.text = "01";
		t.textColor = 0x353535;
		t.x = 360;
		t.y = 344;
		return t;
	};
	_proto.day_select_i = function () {
		var t = new eui.Label();
		this.day_select = t;
		t.size = 40;
		t.text = "01";
		t.textColor = 0x353535;
		t.x = 506;
		t.y = 344;
		return t;
	};
	_proto.birth_scroller_i = function () {
		var t = new eui.Scroller();
		this.birth_scroller = t;
		t.height = 200;
		t.width = 107;
		t.x = 176;
		t.y = 412;
		t.viewport = this.birth_list_i();
		return t;
	};
	_proto.birth_list_i = function () {
		var t = new eui.List();
		this.birth_list = t;
		t.itemRendererSkinName = BirthItem;
		return t;
	};
	return InfoSettingPage;
})(eui.Skin);generateEUI.paths['resource/game_skins/app/LoginSkin.exml'] = window.LoginSkin = (function (_super) {
	__extends(LoginSkin, _super);
	var LoginSkin$Skin23 = 	(function (_super) {
		__extends(LoginSkin$Skin23, _super);
		function LoginSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay","wz"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i(),this.wz_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_Logon_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "appIcon_json.Icon_Weixin_png";
			t.x = 209;
			t.y = 24;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto.wz_i = function () {
			var t = new eui.Label();
			this.wz = t;
			t.fontFamily = "myFont";
			t.size = 34;
			t.text = "微信登录";
			t.x = 272;
			t.y = 30;
			return t;
		};
		return LoginSkin$Skin23;
	})(eui.Skin);

	var LoginSkin$Skin24 = 	(function (_super) {
		__extends(LoginSkin$Skin24, _super);
		function LoginSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay","wz"];
			
			this.height = 110;
			this.width = 110;
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i(),this.wz_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "appIcon_json.Bg_Logon_02_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 24;
			t.text = "手机号码";
			t.textColor = 0x4c5e89;
			t.y = 115;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "appIcon_json.Icon_Shouji01_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.wz_i = function () {
			var t = new eui.Label();
			this.wz = t;
			t.horizontalCenter = 0;
			t.size = 22;
			t.text = "手机号码登录";
			t.textColor = 0x4c5e89;
			t.visible = false;
			t.y = 121;
			return t;
		};
		return LoginSkin$Skin24;
	})(eui.Skin);

	var LoginSkin$Skin25 = 	(function (_super) {
		__extends(LoginSkin$Skin25, _super);
		function LoginSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Bg_Logon_03_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginSkin$Skin25;
	})(eui.Skin);

	var LoginSkin$Skin26 = 	(function (_super) {
		__extends(LoginSkin$Skin26, _super);
		function LoginSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay","wz"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.wz_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_Logon_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto.wz_i = function () {
			var t = new eui.Label();
			this.wz = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 34;
			t.text = "下一步";
			t.y = 30;
			return t;
		};
		return LoginSkin$Skin26;
	})(eui.Skin);

	var LoginSkin$Skin27 = 	(function (_super) {
		__extends(LoginSkin$Skin27, _super);
		function LoginSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay","wz"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.wz_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_Logon_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto.wz_i = function () {
			var t = new eui.Label();
			this.wz = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 34;
			t.text = "登录";
			t.y = 30;
			return t;
		};
		return LoginSkin$Skin27;
	})(eui.Skin);

	var LoginSkin$Skin28 = 	(function (_super) {
		__extends(LoginSkin$Skin28, _super);
		function LoginSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay","wz"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Rect1_i(),this.wz_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 0;
			t.source = "appIcon_json.Bg_Logon_04_png";
			t.width = 120;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			t.fillColor = 0x39a4fa;
			t.height = 2;
			t.width = 120;
			t.x = 0;
			t.y = 25;
			return t;
		};
		_proto.wz_i = function () {
			var t = new eui.Label();
			this.wz = t;
			t.fontFamily = "myFont";
			t.size = 24;
			t.text = "忘记密码？";
			t.textColor = 0x39a4fa;
			t.x = 0;
			t.y = 0;
			return t;
		};
		return LoginSkin$Skin28;
	})(eui.Skin);

	var LoginSkin$Skin29 = 	(function (_super) {
		__extends(LoginSkin$Skin29, _super);
		function LoginSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay","wz"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.wz_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_Logon_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto.wz_i = function () {
			var t = new eui.Label();
			this.wz = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 34;
			t.text = "注册";
			t.y = 30;
			return t;
		};
		return LoginSkin$Skin29;
	})(eui.Skin);

	var LoginSkin$Skin30 = 	(function (_super) {
		__extends(LoginSkin$Skin30, _super);
		function LoginSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay","wz"];
			
			this.width = 142;
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.wz_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(21,4,8,26);
			t.source = "appIcon_json.Bg_Logon_06_png";
			t.width = 142;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto.wz_i = function () {
			var t = new eui.Label();
			this.wz = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 20;
			t.text = "获取验证码";
			t.textColor = 0x39a4fa;
			t.verticalCenter = 0;
			return t;
		};
		return LoginSkin$Skin30;
	})(eui.Skin);

	var LoginSkin$Skin31 = 	(function (_super) {
		__extends(LoginSkin$Skin31, _super);
		function LoginSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay","wz"];
			
			this.width = 142;
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.wz_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(21,4,8,26);
			t.source = "appIcon_json.Bg_Logon_06_png";
			t.width = 142;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto.wz_i = function () {
			var t = new eui.Label();
			this.wz = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 20;
			t.text = "获取验证码";
			t.textColor = 0x39a4fa;
			t.verticalCenter = 0;
			return t;
		};
		return LoginSkin$Skin31;
	})(eui.Skin);

	function LoginSkin() {
		_super.call(this);
		this.skinParts = ["bg","wz_wk","wx_lg_btn","lg_btn","wz_more","lg_group","back_btn","phone_input","nextstep_btn","phone_group","paswd_input","sure_login_btn","lost_password_btn","password_group","code_input","invite_input","invite_group","regist_psw_input","regist_btn","code_btn","reset_code_btn","wz_pawtip","regist_group","login_group"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this._Group1_i(),this.lg_group_i(),this.login_group_i()];
	}
	var _proto = LoginSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1077,935,72,44);
		t.source = "Bg_Logon_01_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 179;
		t.elementsContent = [this.wz_wk_i(),this._Image1_i()];
		return t;
	};
	_proto.wz_wk_i = function () {
		var t = new eui.Label();
		this.wz_wk = t;
		t.text = "xxxx挖矿";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 3;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Logo_Main_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lg_group_i = function () {
		var t = new eui.Group();
		this.lg_group = t;
		t.bottom = 62;
		t.height = 375;
		t.horizontalCenter = 0;
		t.width = 537;
		t.elementsContent = [this.wx_lg_btn_i(),this.lg_btn_i(),this._Image2_i(),this._Image3_i(),this.wz_more_i()];
		return t;
	};
	_proto.wx_lg_btn_i = function () {
		var t = new eui.Button();
		this.wx_lg_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = LoginSkin$Skin23;
		return t;
	};
	_proto.lg_btn_i = function () {
		var t = new eui.Button();
		this.lg_btn = t;
		t.horizontalCenter = 0.5;
		t.label = "手机号码登录";
		t.y = 254.34;
		t.skinName = LoginSkin$Skin24;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "appIcon_json.Bg_Logon_04_png";
		t.x = -46;
		t.y = 209;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "appIcon_json.Bg_Logon_04_png";
		t.x = 354;
		t.y = 209;
		return t;
	};
	_proto.wz_more_i = function () {
		var t = new eui.Label();
		this.wz_more = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "更多登录方式";
		t.textColor = 0x4c5e89;
		t.y = 198;
		return t;
	};
	_proto.login_group_i = function () {
		var t = new eui.Group();
		this.login_group = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.back_btn_i(),this._Group2_i()];
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new eui.Button();
		this.back_btn = t;
		t.label = "返回";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 20;
		t.y = 27;
		t.skinName = LoginSkin$Skin25;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 619;
		t.width = 750;
		t.x = 0;
		t.elementsContent = [this.phone_group_i(),this.password_group_i(),this.regist_group_i()];
		return t;
	};
	_proto.phone_group_i = function () {
		var t = new eui.Group();
		this.phone_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.67;
		t.visible = false;
		t.width = 421.33;
		t.x = 172;
		t.y = 38;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this.phone_input_i(),this.nextstep_btn_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(63,9,38,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Logon_03_png";
		t.width = 465;
		t.x = 1;
		t.y = 15;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Logon_05_png";
		t.x = 73.32999999999998;
		t.y = 20.329999999999927;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Icon_Shouji02_png";
		t.x = 2.31;
		t.y = 27.980000000000018;
		return t;
	};
	_proto.phone_input_i = function () {
		var t = new eui.EditableText();
		this.phone_input = t;
		t.fontFamily = "myFont";
		t.height = 50;
		t.prompt = "请输入手机号";
		t.promptColor = 0x3e4a6b;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x8ca6d8;
		t.verticalAlign = "middle";
		t.width = 281;
		t.x = 91;
		t.y = 27.980000000000018;
		return t;
	};
	_proto.nextstep_btn_i = function () {
		var t = new eui.Button();
		this.nextstep_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 225;
		t.skinName = LoginSkin$Skin26;
		return t;
	};
	_proto.password_group_i = function () {
		var t = new eui.Group();
		this.password_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.67;
		t.visible = false;
		t.width = 421.33;
		t.x = 172;
		t.y = 38;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this.paswd_input_i(),this.sure_login_btn_i(),this.lost_password_btn_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(63,9,38,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Logon_03_png";
		t.width = 465;
		t.x = 1;
		t.y = 15;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Logon_05_png";
		t.x = 73.32999999999998;
		t.y = 20.329999999999927;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Icon_Mima_png";
		t.x = 2.31;
		t.y = 27.980000000000018;
		return t;
	};
	_proto.paswd_input_i = function () {
		var t = new eui.EditableText();
		this.paswd_input = t;
		t.fontFamily = "myFont";
		t.height = 50;
		t.prompt = "输入密码";
		t.promptColor = 0x3e4a6b;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x8ca6d8;
		t.verticalAlign = "middle";
		t.width = 281;
		t.x = 91;
		t.y = 27.980000000000018;
		return t;
	};
	_proto.sure_login_btn_i = function () {
		var t = new eui.Button();
		this.sure_login_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 225;
		t.skinName = LoginSkin$Skin27;
		return t;
	};
	_proto.lost_password_btn_i = function () {
		var t = new eui.Button();
		this.lost_password_btn = t;
		t.label = "";
		t.x = 288;
		t.y = 108;
		t.skinName = LoginSkin$Skin28;
		return t;
	};
	_proto.regist_group_i = function () {
		var t = new eui.Group();
		this.regist_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.67;
		t.visible = false;
		t.width = 421.33;
		t.x = 172;
		t.y = 134;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Image12_i(),this.code_input_i(),this.invite_group_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this.regist_psw_input_i(),this.regist_btn_i(),this.code_btn_i(),this.reset_code_btn_i(),this.wz_pawtip_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(63,9,38,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Logon_03_png";
		t.width = 465;
		t.x = 1;
		t.y = 15;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Logon_05_png";
		t.x = 73.32999999999998;
		t.y = 20.329999999999927;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Icon_Yanzhengma_png";
		t.x = 2.31;
		t.y = 27.980000000000018;
		return t;
	};
	_proto.code_input_i = function () {
		var t = new eui.EditableText();
		this.code_input = t;
		t.fontFamily = "myFont";
		t.height = 50;
		t.prompt = "输入验证码";
		t.promptColor = 0x3e4a6b;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x8ca6d8;
		t.verticalAlign = "middle";
		t.width = 281;
		t.x = 91;
		t.y = 27.980000000000018;
		return t;
	};
	_proto.invite_group_i = function () {
		var t = new eui.Group();
		this.invite_group = t;
		t.x = -41;
		t.y = -91;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Image15_i(),this.invite_input_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(63,9,38,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Logon_03_png";
		t.width = 465;
		t.x = 19;
		t.y = 7;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Logon_05_png";
		t.x = 114.32999999999998;
		t.y = 12.330000000000041;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Icon_Yaoqingma_png";
		t.x = 43.31;
		t.y = 19.980000000000018;
		return t;
	};
	_proto.invite_input_i = function () {
		var t = new eui.EditableText();
		this.invite_input = t;
		t.fontFamily = "myFont";
		t.height = 50;
		t.prompt = "输入邀请码";
		t.promptColor = 0x3E4A6B;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x8CA6D8;
		t.verticalAlign = "middle";
		t.width = 281;
		t.x = 132;
		t.y = 19.980000000000018;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -0.16499999999999204;
		t.scale9Grid = new egret.Rectangle(63,9,38,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Logon_03_png";
		t.width = 465;
		t.x = 1;
		t.y = 121;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Logon_05_png";
		t.x = 73.32999999999998;
		t.y = 126.33;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Icon_Mima_png";
		t.x = 2.31;
		t.y = 133.98;
		return t;
	};
	_proto.regist_psw_input_i = function () {
		var t = new eui.EditableText();
		this.regist_psw_input = t;
		t.fontFamily = "myFont";
		t.height = 50;
		t.prompt = "输入密码";
		t.promptColor = 0x3e4a6b;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x8ca6d8;
		t.verticalAlign = "middle";
		t.width = 281;
		t.x = 91;
		t.y = 133.98;
		return t;
	};
	_proto.regist_btn_i = function () {
		var t = new eui.Button();
		this.regist_btn = t;
		t.horizontalCenter = 0.33500000000000796;
		t.label = "";
		t.y = 264;
		t.skinName = LoginSkin$Skin29;
		return t;
	};
	_proto.code_btn_i = function () {
		var t = new eui.Button();
		this.code_btn = t;
		t.label = "";
		t.x = 297;
		t.y = 36;
		t.skinName = LoginSkin$Skin30;
		return t;
	};
	_proto.reset_code_btn_i = function () {
		var t = new eui.Button();
		this.reset_code_btn = t;
		t.label = "";
		t.visible = false;
		t.x = 297;
		t.y = 36;
		t.skinName = LoginSkin$Skin31;
		return t;
	};
	_proto.wz_pawtip_i = function () {
		var t = new eui.Label();
		this.wz_pawtip = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "密码为6~8位的数字，英文大小写，符号组成";
		t.textColor = 0x36415e;
		t.y = 204;
		return t;
	};
	return LoginSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/app/NewsContant.exml'] = window.NewsContant = (function (_super) {
	__extends(NewsContant, _super);
	var NewsContant$Skin32 = 	(function (_super) {
		__extends(NewsContant$Skin32, _super);
		function NewsContant$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewsContant$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "appIcon_json.Banner_Information_Back01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewsContant$Skin32;
	})(eui.Skin);

	function NewsContant() {
		_super.call(this);
		this.skinParts = ["img","title","time","back","contants","contentScroller"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = NewsContant.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.img_i(),this.title_i(),this.time_i(),this.back_i(),this.contentScroller_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(15,37,7,4);
		t.source = "appIcon_json.Bg_Main01_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Main02_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(6,0,10,3);
		t.source = "appIcon_json.Line_Main01_png";
		t.width = 690;
		t.y = 202;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 248;
		t.width = 702;
		t.x = 30;
		t.y = 218;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.fontFamily = "myFont";
		t.size = 36;
		t.text = "Label";
		t.textColor = 0xebf0ff;
		t.x = 30;
		t.y = 96;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "myFont";
		t.size = 22;
		t.text = "time";
		t.textColor = 0x535B70;
		t.x = 30;
		t.y = 164;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Button();
		this.back = t;
		t.label = "";
		t.x = 30;
		t.y = 17;
		t.skinName = NewsContant$Skin32;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.height = 200;
		t.width = 703;
		t.x = 28;
		t.y = 488;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.contants_i()];
		return t;
	};
	_proto.contants_i = function () {
		var t = new eui.Label();
		this.contants = t;
		t.fontFamily = "myFont";
		t.lineSpacing = 8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "中文中文中文中文中文中文中文中文中文中文中文中文中文";
		t.textAlign = "left";
		t.textColor = 0xaab0c7;
		t.width = 688;
		t.x = 8;
		t.y = 0;
		return t;
	};
	return NewsContant;
})(eui.Skin);generateEUI.paths['resource/game_skins/app/NewsItem.exml'] = window.NewsItem = (function (_super) {
	__extends(NewsItem, _super);
	function NewsItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 245;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.thumb"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.title"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.description"],[0],this._Label2,"text");
	}
	var _proto = NewsItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(8,0,8,1);
		t.source = "appIcon_json.Line_Main01_png";
		t.width = 680;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 178;
		t.verticalCenter = 0;
		t.width = 292;
		t.x = 23;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "myFont";
		t.size = 28;
		t.textColor = 0xdfe8ff;
		t.width = 373;
		t.x = 340.5;
		t.y = 52;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "myFont";
		t.size = 22;
		t.textColor = 0x535b70;
		t.width = 372;
		t.x = 340.5;
		t.y = 156;
		return t;
	};
	return NewsItem;
})(eui.Skin);generateEUI.paths['resource/game_skins/app/ResetPassword.exml'] = window.ResetPassword = (function (_super) {
	__extends(ResetPassword, _super);
	var ResetPassword$Skin33 = 	(function (_super) {
		__extends(ResetPassword$Skin33, _super);
		function ResetPassword$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ResetPassword$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_Logon_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ResetPassword$Skin33;
	})(eui.Skin);

	var ResetPassword$Skin34 = 	(function (_super) {
		__extends(ResetPassword$Skin34, _super);
		function ResetPassword$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ResetPassword$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_Logon_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ResetPassword$Skin34;
	})(eui.Skin);

	function ResetPassword() {
		_super.call(this);
		this.skinParts = ["old_password_input","new_password_input","changePassword_btn","changepassword_cancel_btn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ResetPassword.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this.old_password_input_i(),this._Image2_i(),this.new_password_input_i(),this.changePassword_btn_i(),this.changepassword_cancel_btn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.8;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(24,9,26,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Personal02_png";
		t.width = 465;
		t.x = 1;
		t.y = 282;
		return t;
	};
	_proto.old_password_input_i = function () {
		var t = new eui.EditableText();
		this.old_password_input = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "myFont";
		t.height = 50;
		t.maxChars = 10;
		t.prompt = "原密码";
		t.promptColor = 0x3E4A6B;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x8CA6D8;
		t.verticalAlign = "middle";
		t.width = 393;
		t.x = 177;
		t.y = 300.98;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(24,9,26,56);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Bg_Personal02_png";
		t.width = 465;
		t.x = 11;
		t.y = 399;
		return t;
	};
	_proto.new_password_input_i = function () {
		var t = new eui.EditableText();
		this.new_password_input = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "myFont";
		t.height = 50;
		t.maxChars = 10;
		t.prompt = "新密码";
		t.promptColor = 0x3E4A6B;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x8CA6D8;
		t.verticalAlign = "middle";
		t.width = 393;
		t.x = 177;
		t.y = 417.98;
		return t;
	};
	_proto.changePassword_btn_i = function () {
		var t = new eui.Button();
		this.changePassword_btn = t;
		t.horizontalCenter = 0;
		t.label = "确认修改";
		t.y = 576;
		t.skinName = ResetPassword$Skin33;
		return t;
	};
	_proto.changepassword_cancel_btn_i = function () {
		var t = new eui.Button();
		this.changepassword_cancel_btn = t;
		t.horizontalCenter = 0;
		t.label = "取消";
		t.y = 706;
		t.skinName = ResetPassword$Skin34;
		return t;
	};
	return ResetPassword;
})(eui.Skin);generateEUI.paths['resource/game_skins/app/SettingPage.exml'] = window.SettingPage = (function (_super) {
	__extends(SettingPage, _super);
	var SettingPage$Skin35 = 	(function (_super) {
		__extends(SettingPage$Skin35, _super);
		function SettingPage$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 73;
			this.width = 664;
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SettingPage$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.right = 0;
			t.source = "appIcon_json.Banner_Personal_Back02_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SettingPage$Skin35;
	})(eui.Skin);

	var SettingPage$Skin36 = 	(function (_super) {
		__extends(SettingPage$Skin36, _super);
		function SettingPage$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SettingPage$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.right = 0;
			t.source = "appIcon_json.Banner_Personal_Back02_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SettingPage$Skin36;
	})(eui.Skin);

	var SettingPage$Skin37 = 	(function (_super) {
		__extends(SettingPage$Skin37, _super);
		function SettingPage$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SettingPage$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.right = 0;
			t.source = "appIcon_json.Banner_Personal_Back02_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SettingPage$Skin37;
	})(eui.Skin);

	var SettingPage$Skin38 = 	(function (_super) {
		__extends(SettingPage$Skin38, _super);
		function SettingPage$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SettingPage$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_Logon_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 34;
			t.text = "退出登录";
			t.verticalCenter = -7;
			return t;
		};
		return SettingPage$Skin38;
	})(eui.Skin);

	function SettingPage() {
		_super.call(this);
		this.skinParts = ["back_btn","message_tip","reset_password_btn","info_setting_btn","message_tip_btn","exit_login_btn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Scroller1_i(),this.back_btn_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.message_tip_i(),this.reset_password_btn_i(),this.info_setting_btn_i(),this.message_tip_btn_i(),this.exit_login_btn_i()];
	}
	var _proto = SettingPage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 100;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(6,2,41,12);
		t.source = "appIcon_json.Bg_Personal03_png";
		t.width = 750;
		t.x = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 414;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scrollEnabled = false;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 414;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(11,11,66,66);
		t.source = "appIcon_json.Bg_Personal02_png";
		t.width = 785;
		t.y = 0;
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new eui.Image();
		this.back_btn = t;
		t.source = "appIcon_json.Banner_Personal_Back01_png";
		t.x = 30;
		t.y = 28;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Line_Personal01_png";
		t.width = 690;
		t.y = 90;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Line_Personal02_png";
		t.width = 690;
		t.y = 198;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Line_Personal02_png";
		t.width = 690;
		t.y = 306;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "设置";
		t.textColor = 0x353535;
		t.y = 28;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "修改密码";
		t.textColor = 0x353535;
		t.x = 36;
		t.y = 129;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "账号设置";
		t.textColor = 0x353535;
		t.x = 36;
		t.y = 237;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "消息通知";
		t.textColor = 0x353535;
		t.x = 36;
		t.y = 345;
		return t;
	};
	_proto.message_tip_i = function () {
		var t = new eui.Label();
		this.message_tip = t;
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "开";
		t.textColor = 0x9b9b9b;
		t.x = 644;
		t.y = 345;
		return t;
	};
	_proto.reset_password_btn_i = function () {
		var t = new eui.Button();
		this.reset_password_btn = t;
		t.anchorOffsetX = 0;
		t.height = 73;
		t.label = "";
		t.width = 664;
		t.x = 35;
		t.y = 107;
		t.skinName = SettingPage$Skin35;
		return t;
	};
	_proto.info_setting_btn_i = function () {
		var t = new eui.Button();
		this.info_setting_btn = t;
		t.anchorOffsetX = 0;
		t.height = 73;
		t.label = "";
		t.width = 664;
		t.x = 35;
		t.y = 215;
		t.skinName = SettingPage$Skin36;
		return t;
	};
	_proto.message_tip_btn_i = function () {
		var t = new eui.Button();
		this.message_tip_btn = t;
		t.anchorOffsetX = 0;
		t.height = 73;
		t.label = "";
		t.width = 664;
		t.x = 35;
		t.y = 323;
		t.skinName = SettingPage$Skin37;
		return t;
	};
	_proto.exit_login_btn_i = function () {
		var t = new eui.Button();
		this.exit_login_btn = t;
		t.horizontalCenter = 0;
		t.label = "退出登录";
		t.y = 525;
		t.skinName = SettingPage$Skin38;
		return t;
	};
	return SettingPage;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/ExchangeCenter.exml'] = window.ExchangeCenter = (function (_super) {
	__extends(ExchangeCenter, _super);
	var ExchangeCenter$Skin39 = 	(function (_super) {
		__extends(ExchangeCenter$Skin39, _super);
		function ExchangeCenter$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ExchangeCenter$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Yellow_02_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 32;
			t.stroke = 2;
			t.strokeColor = 0xE99652;
			t.verticalCenter = 0;
			return t;
		};
		return ExchangeCenter$Skin39;
	})(eui.Skin);

	var ExchangeCenter$Skin40 = 	(function (_super) {
		__extends(ExchangeCenter$Skin40, _super);
		function ExchangeCenter$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ExchangeCenter$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Blue_02_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 32;
			t.stroke = 2;
			t.strokeColor = 0x5276E9;
			t.verticalCenter = 0;
			return t;
		};
		return ExchangeCenter$Skin40;
	})(eui.Skin);

	function ExchangeCenter() {
		_super.call(this);
		this.skinParts = ["head_group","exchange_btn","recode_btn","rateTx","exchangeRate","exchange_num","date_group","sharp_group","line_group","point_group","rate_group","role","recode_list","close_btn","rdcode_group"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.head_group_i(),this._Group1_i(),this.role_i(),this.rdcode_group_i()];
	}
	var _proto = ExchangeCenter.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Bg_Shop01_jpg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.bottom = 29;
		t.height = 632;
		t.scale9Grid = new egret.Rectangle(7,7,42,42);
		t.source = "gameRes_json.Frame_02_png";
		t.width = 406;
		t.x = 15;
		return t;
	};
	_proto.head_group_i = function () {
		var t = new eui.Group();
		this.head_group = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 645;
		t.right = 13;
		t.width = 887;
		t.y = 88;
		t.elementsContent = [this._Image3_i(),this.exchange_btn_i(),this.recode_btn_i(),this.rateTx_i(),this._Label1_i(),this.exchangeRate_i(),this._Rect1_i(),this.exchange_num_i(),this.date_group_i(),this.sharp_group_i(),this.line_group_i(),this.point_group_i(),this.rate_group_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 29;
		t.scale9Grid = new egret.Rectangle(7,7,42,42);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Bg_Jiaoyisuo01_png";
		t.x = 2;
		t.y = 1;
		return t;
	};
	_proto.exchange_btn_i = function () {
		var t = new eui.Button();
		this.exchange_btn = t;
		t.anchorOffsetX = 0;
		t.label = "确认兑换";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 153;
		t.y = 509;
		t.skinName = ExchangeCenter$Skin39;
		return t;
	};
	_proto.recode_btn_i = function () {
		var t = new eui.Button();
		this.recode_btn = t;
		t.anchorOffsetX = 0;
		t.label = "交易记录";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 493;
		t.y = 509;
		t.skinName = ExchangeCenter$Skin40;
		return t;
	};
	_proto.rateTx_i = function () {
		var t = new eui.Label();
		this.rateTx = t;
		t.fontFamily = "myFont";
		t.size = 24;
		t.text = "今日矿石兑换比例：1GST=@num矿石";
		t.x = 36;
		t.y = 401;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 24;
		t.text = "输入需要兑换的GST数量：";
		t.x = 36;
		t.y = 444;
		return t;
	};
	_proto.exchangeRate_i = function () {
		var t = new eui.Label();
		this.exchangeRate = t;
		t.fontFamily = "myFont";
		t.size = 24;
		t.text = "GST";
		t.x = 440;
		t.y = 444;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 1;
		t.width = 127;
		t.x = 311;
		t.y = 467;
		return t;
	};
	_proto.exchange_num_i = function () {
		var t = new eui.EditableText();
		this.exchange_num = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "myFont";
		t.height = 25;
		t.size = 24;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x50e0ff;
		t.width = 121;
		t.x = 313;
		t.y = 444;
		return t;
	};
	_proto.date_group_i = function () {
		var t = new eui.Group();
		this.date_group = t;
		t.width = 824;
		t.x = 30;
		t.y = 341;
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 20;
		t.text = "07-26";
		t.textAlign = "center";
		t.textColor = 0x4777b5;
		t.width = 70;
		t.x = 43;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 20;
		t.text = "07-26";
		t.textAlign = "center";
		t.textColor = 0x4777B5;
		t.verticalAlign = "justify";
		t.width = 70;
		t.x = 153;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 20;
		t.text = "07-26";
		t.textAlign = "center";
		t.textColor = 0x4777B5;
		t.width = 70;
		t.x = 262;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 20;
		t.text = "07-26";
		t.textAlign = "center";
		t.textColor = 0x4777B5;
		t.width = 70;
		t.x = 372;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 20;
		t.text = "07-26";
		t.textAlign = "center";
		t.textColor = 0x4777B5;
		t.width = 70;
		t.x = 481;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 20;
		t.text = "07-26";
		t.textAlign = "center";
		t.textColor = 0x4777B5;
		t.width = 70;
		t.x = 591;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 20;
		t.text = "07-26";
		t.textAlign = "center";
		t.textColor = 0x4777B5;
		t.width = 70;
		t.x = 700;
		t.y = 0;
		return t;
	};
	_proto.sharp_group_i = function () {
		var t = new eui.Group();
		this.sharp_group = t;
		t.width = 750;
		t.x = 63;
		t.y = 87;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 246;
		t.scaleY = 0.5;
		t.source = "gameRes_json.Bg_Jiaoyisuo02_png";
		t.x = 36;
		t.y = 246;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 246;
		t.source = "gameRes_json.Bg_Jiaoyisuo02_png";
		t.x = 146;
		t.y = 246;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 246;
		t.source = "gameRes_json.Bg_Jiaoyisuo02_png";
		t.x = 256;
		t.y = 246;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 246;
		t.source = "gameRes_json.Bg_Jiaoyisuo02_png";
		t.x = 365;
		t.y = 246;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 246;
		t.source = "gameRes_json.Bg_Jiaoyisuo02_png";
		t.x = 475;
		t.y = 246;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 246;
		t.source = "gameRes_json.Bg_Jiaoyisuo02_png";
		t.x = 585;
		t.y = 246;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 246;
		t.source = "gameRes_json.Bg_Jiaoyisuo02_png";
		t.x = 695;
		t.y = 246;
		return t;
	};
	_proto.line_group_i = function () {
		var t = new eui.Group();
		this.line_group = t;
		t.width = 750;
		t.x = 63;
		t.y = 47;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Line01_png";
		t.x = 40;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Line02_png";
		t.x = 153;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Line03_png";
		t.x = 263;
		t.y = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Line04_png";
		t.x = 373;
		t.y = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Line05_png";
		t.x = 483;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Line06_png";
		t.x = 594;
		t.y = 0;
		return t;
	};
	_proto.point_group_i = function () {
		var t = new eui.Group();
		this.point_group = t;
		t.width = 750;
		t.x = 63;
		t.y = 47;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Bg_Jiaoyisuo03_png";
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Bg_Jiaoyisuo03_png";
		t.x = 249;
		t.y = 0;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Bg_Jiaoyisuo03_png";
		t.x = 359;
		t.y = 0;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Bg_Jiaoyisuo03_png";
		t.x = 469;
		t.y = 0;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Bg_Jiaoyisuo03_png";
		t.x = 579;
		t.y = 0;
		return t;
	};
	_proto.rate_group_i = function () {
		var t = new eui.Group();
		this.rate_group = t;
		t.width = 751;
		t.x = 67;
		t.y = 20;
		t.elementsContent = [this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i()];
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 20;
		t.text = "07-26";
		t.textColor = 0xffffff;
		t.width = 56;
		t.x = 17;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 20;
		t.text = "07-26";
		t.textColor = 0xffffff;
		t.width = 56;
		t.x = 127;
		t.y = 0;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 20;
		t.text = "07-26";
		t.textColor = 0xffffff;
		t.width = 56;
		t.x = 237;
		t.y = 0;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 20;
		t.text = "07-26";
		t.textColor = 0xffffff;
		t.width = 56;
		t.x = 347;
		t.y = 0;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 20;
		t.text = "07-26";
		t.textColor = 0xffffff;
		t.width = 56;
		t.x = 457;
		t.y = 0;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 20;
		t.text = "07-26";
		t.textColor = 0xffffff;
		t.width = 56;
		t.x = 567;
		t.y = 0;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 20;
		t.text = "07-26";
		t.textColor = 0xffffff;
		t.width = 56;
		t.x = 677;
		t.y = 0;
		return t;
	};
	_proto.role_i = function () {
		var t = new eui.Image();
		this.role = t;
		t.bottom = 0;
		t.source = "Jiaoyisuo_png";
		t.x = 0;
		return t;
	};
	_proto.rdcode_group_i = function () {
		var t = new eui.Group();
		this.rdcode_group = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Image22_i(),this._Label16_i(),this._Scroller1_i(),this.close_btn_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 619;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(348,181,27,67);
		t.source = "gameRes_json.Frame_01_png";
		t.verticalCenter = 0;
		t.width = 813;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.text = "矿石兑换记录";
		t.textColor = 0x92b5f0;
		t.y = 90;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 524;
		t.horizontalCenter = 0;
		t.width = 754;
		t.y = 150;
		t.viewport = this.recode_list_i();
		return t;
	};
	_proto.recode_list_i = function () {
		var t = new eui.List();
		this.recode_list = t;
		t.itemRendererSkinName = ExchangeItem;
		t.y = -1;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Image();
		this.close_btn = t;
		t.horizontalCenter = 353;
		t.source = "gameRes_json.close_png";
		t.y = 81;
		return t;
	};
	return ExchangeCenter;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/ExchangeItem.exml'] = window.ExchangeItem = (function (_super) {
	__extends(ExchangeItem, _super);
	function ExchangeItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 44;
		this.width = 754;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.use_mine"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.exchange_gst"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.time"],[0],this._Label3,"text");
	}
	var _proto = ExchangeItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Bg_Jiaoyisuo04_png";
		t.x = 15;
		t.y = 42;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "myFont";
		t.size = 22;
		t.textColor = 0xb4dfea;
		t.x = 17;
		t.y = 11;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "myFont";
		t.size = 22;
		t.textColor = 0xB4DFEA;
		t.x = 275;
		t.y = 11;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "myFont";
		t.size = 22;
		t.textColor = 0xB4DFEA;
		t.x = 551;
		t.y = 11;
		return t;
	};
	return ExchangeItem;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/FriendItem.exml'] = window.FriendItem = (function (_super) {
	__extends(FriendItem, _super);
	function FriendItem() {
		_super.call(this);
		this.skinParts = ["headMask","headImg","owner_icon"];
		
		this.height = 105;
		this.width = 703;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Label1_i(),this._Label2_i(),this.owner_icon_i()];
		
		eui.Binding.$bindProperties(this, ["headMask"],[0],this.headImg,"mask");
		eui.Binding.$bindProperties(this, ["hostComponent.data.picture"],[0],this.headImg,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.nickname"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.curLevel"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.isower"],[0],this.owner_icon,"visible");
	}
	var _proto = FriendItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Item_Haoyou01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 111;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.width = 111;
		t.x = 30;
		t.y = 6;
		t.elementsContent = [this._Image2_i(),this.headMask_i(),this.headImg_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Head_Main_02_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headMask_i = function () {
		var t = new eui.Image();
		this.headMask = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Head_Main_01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 111;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 111;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.fontFamily = "myFont";
		t.size = 26;
		t.x = 172;
		t.y = 42;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.fontFamily = "myFont";
		t.right = 163;
		t.size = 26;
		t.y = 42;
		return t;
	};
	_proto.owner_icon_i = function () {
		var t = new eui.Image();
		this.owner_icon = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "gameRes_json.Icon_level01_png";
		t.x = 554;
		t.y = 43;
		return t;
	};
	return FriendItem;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/GameFriend.exml'] = window.GameFriend = (function (_super) {
	__extends(GameFriend, _super);
	var GameFriend$Skin41 = 	(function (_super) {
		__extends(GameFriend$Skin41, _super);
		function GameFriend$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFriend$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameFriend$Skin41;
	})(eui.Skin);

	function GameFriend() {
		_super.call(this);
		this.skinParts = ["back_btn","friendList"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameFriend.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.back_btn_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 630;
		t.scale9Grid = new egret.Rectangle(352,200,14,34);
		t.source = "gameRes_json.Frame_01_png";
		t.width = 813;
		t.x = 261;
		t.y = 60;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.text = "好友列表";
		t.textColor = 0x92b5f0;
		t.y = 83;
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new eui.Button();
		this.back_btn = t;
		t.label = "";
		t.x = 987;
		t.y = 78;
		t.skinName = GameFriend$Skin41;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 515;
		t.width = 759;
		t.x = 285;
		t.y = 146;
		t.viewport = this.friendList_i();
		return t;
	};
	_proto.friendList_i = function () {
		var t = new eui.List();
		this.friendList = t;
		t.itemRendererSkinName = FriendItem;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 19;
		t.horizontalAlign = "center";
		return t;
	};
	return GameFriend;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/GameScene.exml'] = window.GameScene = (function (_super) {
	__extends(GameScene, _super);
	var GameScene$Skin42 = 	(function (_super) {
		__extends(GameScene$Skin42, _super);
		function GameScene$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Frame_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin42;
	})(eui.Skin);

	var GameScene$Skin43 = 	(function (_super) {
		__extends(GameScene$Skin43, _super);
		function GameScene$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Main_Kuangqu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin43;
	})(eui.Skin);

	var GameScene$Skin44 = 	(function (_super) {
		__extends(GameScene$Skin44, _super);
		function GameScene$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Main_Gongju_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin44;
	})(eui.Skin);

	var GameScene$Skin45 = 	(function (_super) {
		__extends(GameScene$Skin45, _super);
		function GameScene$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Main_Jiaoyisuo_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin45;
	})(eui.Skin);

	var GameScene$Skin46 = 	(function (_super) {
		__extends(GameScene$Skin46, _super);
		function GameScene$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Main_Kuangquguangli_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin46;
	})(eui.Skin);

	var GameScene$Skin47 = 	(function (_super) {
		__extends(GameScene$Skin47, _super);
		function GameScene$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Main_Cangku_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin47;
	})(eui.Skin);

	var GameScene$Skin48 = 	(function (_super) {
		__extends(GameScene$Skin48, _super);
		function GameScene$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Main_Kuanggong_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin48;
	})(eui.Skin);

	var GameScene$Skin49 = 	(function (_super) {
		__extends(GameScene$Skin49, _super);
		function GameScene$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Fenxiang_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin49;
	})(eui.Skin);

	var GameScene$Skin50 = 	(function (_super) {
		__extends(GameScene$Skin50, _super);
		function GameScene$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Haoyou_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin50;
	})(eui.Skin);

	var GameScene$Skin51 = 	(function (_super) {
		__extends(GameScene$Skin51, _super);
		function GameScene$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Shezhi_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin51;
	})(eui.Skin);

	var GameScene$Skin52 = 	(function (_super) {
		__extends(GameScene$Skin52, _super);
		function GameScene$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Gonggao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin52;
	})(eui.Skin);

	function GameScene() {
		_super.call(this);
		this.skinParts = ["bg","role","headMask","headImg","expbar","mine_group","owner_icon","gst_num","mine_num","level","nickname","exitbtn","mine_btn","tools_store_btn","exchange_center_btn","manager_btn","warehouse_btn","server_center_btn","share_btn","friend_btn","setting_btn","email_btn","notice_info","notic_tip_img","notice_group"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.bg_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.role_i(),this.headMask_i(),this.headImg_i(),this._Image5_i(),this.mine_group_i(),this.owner_icon_i(),this._Group1_i(),this.level_i(),this.nickname_i(),this.exitbtn_i(),this._Group2_i(),this.notice_group_i()];
		
		eui.Binding.$bindProperties(this, ["headMask"],[0],this.headImg,"mask");
	}
	var _proto = GameScene.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.fillMode = "scale";
		t.source = "Bg_Main_01_jpg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.right = 0;
		t.source = "gameRes_json.Bg_down_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Bg_up_png";
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Head_Main_01_png";
		t.x = 6.32;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Head_Main_02_png";
		t.x = 6.32;
		t.y = 0;
		return t;
	};
	_proto.role_i = function () {
		var t = new eui.Image();
		this.role = t;
		t.bottom = 0;
		t.horizontalCenter = -333;
		t.source = "role_01_png";
		return t;
	};
	_proto.headMask_i = function () {
		var t = new eui.Image();
		this.headMask = t;
		t.source = "gameRes_json.Head_Main_01_png";
		t.x = 6.32;
		t.y = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 111;
		t.source = "gameRes_json.Head_Main_01_png";
		t.width = 111;
		t.x = 6.32;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Bg_Main_02_png";
		t.x = 90;
		t.y = 1.33;
		return t;
	};
	_proto.mine_group_i = function () {
		var t = new eui.Group();
		this.mine_group = t;
		t.x = 132;
		t.y = 41;
		t.elementsContent = [this._Image6_i(),this.expbar_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Bar_Main_01_png";
		t.x = -3;
		t.y = 7;
		return t;
	};
	_proto.expbar_i = function () {
		var t = new eui.Image();
		this.expbar = t;
		t.fillMode = "clip";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Bar_Main_02_png";
		t.width = 208;
		t.x = -3;
		t.y = 7;
		return t;
	};
	_proto.owner_icon_i = function () {
		var t = new eui.Image();
		this.owner_icon = t;
		t.source = "gameRes_json.Icon_level01_png";
		t.x = 310;
		t.y = 9;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.right = 5;
		t.width = 546;
		t.y = 6;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this.gst_num_i(),this.mine_num_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(62,5,39,33);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Bg_Main_03_png";
		t.width = 264;
		t.x = 246;
		t.y = 4;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(62,5,39,33);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Bg_Main_03_png";
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Icon_G_png";
		t.x = -26;
		t.y = -7;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Icon_Kuangshi_png";
		t.x = 240;
		t.y = -8;
		return t;
	};
	_proto.gst_num_i = function () {
		var t = new eui.Label();
		this.gst_num = t;
		t.fontFamily = "myFont";
		t.right = 376;
		t.size = 22;
		t.text = "9000";
		t.textColor = 0xe5eeff;
		t.y = 16;
		return t;
	};
	_proto.mine_num_i = function () {
		var t = new eui.Label();
		this.mine_num = t;
		t.fontFamily = "myFont";
		t.right = 66;
		t.size = 22;
		t.text = "9000000000";
		t.textColor = 0xe5eeff;
		t.y = 15;
		return t;
	};
	_proto.level_i = function () {
		var t = new eui.Label();
		this.level = t;
		t.fontFamily = "myFont";
		t.size = 22;
		t.text = "99级";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 66;
		t.x = 82;
		t.y = 15;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.fontFamily = "myFont";
		t.size = 22;
		t.text = "名字";
		t.textColor = 0xfefeff;
		t.x = 167;
		t.y = 15;
		return t;
	};
	_proto.exitbtn_i = function () {
		var t = new eui.Button();
		this.exitbtn = t;
		t.height = 78;
		t.label = "退出";
		t.width = 152;
		t.x = 1.5;
		t.y = 665.88;
		t.skinName = GameScene$Skin42;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = -1;
		t.height = 666;
		t.right = 1;
		t.width = 640;
		t.elementsContent = [this.mine_btn_i(),this.tools_store_btn_i(),this.exchange_center_btn_i(),this.manager_btn_i(),this.warehouse_btn_i(),this.server_center_btn_i(),this.share_btn_i(),this.friend_btn_i(),this.setting_btn_i()];
		return t;
	};
	_proto.mine_btn_i = function () {
		var t = new eui.Button();
		this.mine_btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 18;
		t.y = 27;
		t.skinName = GameScene$Skin43;
		return t;
	};
	_proto.tools_store_btn_i = function () {
		var t = new eui.Button();
		this.tools_store_btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 316;
		t.y = 347;
		t.skinName = GameScene$Skin44;
		return t;
	};
	_proto.exchange_center_btn_i = function () {
		var t = new eui.Button();
		this.exchange_center_btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 316;
		t.y = 187;
		t.skinName = GameScene$Skin45;
		return t;
	};
	_proto.manager_btn_i = function () {
		var t = new eui.Button();
		this.manager_btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 18;
		t.y = 187;
		t.skinName = GameScene$Skin46;
		return t;
	};
	_proto.warehouse_btn_i = function () {
		var t = new eui.Button();
		this.warehouse_btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 316;
		t.y = 27;
		t.skinName = GameScene$Skin47;
		return t;
	};
	_proto.server_center_btn_i = function () {
		var t = new eui.Button();
		this.server_center_btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 18;
		t.y = 347;
		t.skinName = GameScene$Skin48;
		return t;
	};
	_proto.share_btn_i = function () {
		var t = new eui.Button();
		this.share_btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 182.80999999999995;
		t.y = 572.8799999999999;
		t.skinName = GameScene$Skin49;
		return t;
	};
	_proto.friend_btn_i = function () {
		var t = new eui.Button();
		this.friend_btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -47.190000000000055;
		t.y = 572.8799999999999;
		t.skinName = GameScene$Skin50;
		return t;
	};
	_proto.setting_btn_i = function () {
		var t = new eui.Button();
		this.setting_btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 412.80999999999995;
		t.y = 572.8799999999999;
		t.skinName = GameScene$Skin51;
		return t;
	};
	_proto.notice_group_i = function () {
		var t = new eui.Group();
		this.notice_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 453;
		t.width = 333.33;
		t.x = -311;
		t.y = 207;
		t.elementsContent = [this.email_btn_i(),this._Image11_i(),this._Scroller1_i(),this.notic_tip_img_i()];
		return t;
	};
	_proto.email_btn_i = function () {
		var t = new eui.Button();
		this.email_btn = t;
		t.label = "";
		t.x = 310.84;
		t.y = 86;
		t.skinName = GameScene$Skin52;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Bg_Main_04_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 402.67;
		t.width = 291;
		t.x = 11;
		t.y = 22.02;
		t.viewport = this.notice_info_i();
		return t;
	};
	_proto.notice_info_i = function () {
		var t = new eui.Label();
		this.notice_info = t;
		t.fontFamily = "myFont";
		t.size = 24;
		t.text = "";
		t.textColor = 0xc6c8f0;
		return t;
	};
	_proto.notic_tip_img_i = function () {
		var t = new eui.Image();
		this.notic_tip_img = t;
		t.source = "gameRes_json.Point_png";
		t.visible = false;
		t.x = 375;
		t.y = 133;
		return t;
	};
	return GameScene;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/GameSetting.exml'] = window.GameSetting = (function (_super) {
	__extends(GameSetting, _super);
	var GameSetting$Skin53 = 	(function (_super) {
		__extends(GameSetting$Skin53, _super);
		function GameSetting$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSetting$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSetting$Skin53;
	})(eui.Skin);

	var GameSetting$Skin54 = 	(function (_super) {
		__extends(GameSetting$Skin54, _super);
		function GameSetting$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSetting$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Blue_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 2;
			t.strokeColor = 0x5276e9;
			t.verticalCenter = -5;
			return t;
		};
		return GameSetting$Skin54;
	})(eui.Skin);

	var GameSetting$Skin55 = 	(function (_super) {
		__extends(GameSetting$Skin55, _super);
		function GameSetting$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSetting$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Yellow_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 2;
			t.strokeColor = 0xe99652;
			t.verticalCenter = -5;
			return t;
		};
		return GameSetting$Skin55;
	})(eui.Skin);

	var GameSetting$Skin56 = 	(function (_super) {
		__extends(GameSetting$Skin56, _super);
		function GameSetting$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gameRes_json.Btn_open_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSetting$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSetting$Skin56;
	})(eui.Skin);

	function GameSetting() {
		_super.call(this);
		this.skinParts = ["change_nickname_btn","back_btn","exit_game_btn","return_game_btn","nickname_edt","music_switch"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameSetting.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.change_nickname_btn_i(),this.back_btn_i(),this.exit_game_btn_i(),this.return_game_btn_i(),this.nickname_edt_i(),this.music_switch_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 439;
		t.scale9Grid = new egret.Rectangle(361,203,20,25);
		t.source = "gameRes_json.Frame_01_png";
		t.width = 813;
		t.x = 261;
		t.y = 156;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(7,7,42,42);
		t.source = "gameRes_json.Frame_02_png";
		t.width = 374;
		t.x = 480;
		t.y = 290;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "myFont";
		t.text = "设置";
		t.textColor = 0x92b5f0;
		t.x = 637;
		t.y = 183;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "用户名称:";
		t.textColor = 0x6c82a8;
		t.x = 349;
		t.y = 303;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 28;
		t.text = "音乐:";
		t.textColor = 0x6C82A8;
		t.x = 405;
		t.y = 384;
		return t;
	};
	_proto.change_nickname_btn_i = function () {
		var t = new eui.Button();
		this.change_nickname_btn = t;
		t.label = "修改";
		t.x = 863;
		t.y = 291;
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new eui.Button();
		this.back_btn = t;
		t.label = "";
		t.x = 987;
		t.y = 172;
		t.skinName = GameSetting$Skin53;
		return t;
	};
	_proto.exit_game_btn_i = function () {
		var t = new eui.Button();
		this.exit_game_btn = t;
		t.label = "退出游戏";
		t.x = 386;
		t.y = 461;
		t.skinName = GameSetting$Skin54;
		return t;
	};
	_proto.return_game_btn_i = function () {
		var t = new eui.Button();
		this.return_game_btn = t;
		t.label = "返回游戏";
		t.x = 746;
		t.y = 461;
		t.skinName = GameSetting$Skin55;
		return t;
	};
	_proto.nickname_edt_i = function () {
		var t = new eui.EditableText();
		this.nickname_edt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "myFont";
		t.height = 48;
		t.size = 28;
		t.text = "";
		t.verticalAlign = "middle";
		t.width = 354;
		t.x = 490;
		t.y = 294;
		return t;
	};
	_proto.music_switch_i = function () {
		var t = new eui.ToggleSwitch();
		this.music_switch = t;
		t.label = "";
		t.x = 483;
		t.y = 371;
		t.skinName = GameSetting$Skin56;
		return t;
	};
	return GameSetting;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/GameShare.exml'] = window.GameShare = (function (_super) {
	__extends(GameShare, _super);
	var GameShare$Skin57 = 	(function (_super) {
		__extends(GameShare$Skin57, _super);
		function GameShare$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShare$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameShare$Skin57;
	})(eui.Skin);

	var GameShare$Skin58 = 	(function (_super) {
		__extends(GameShare$Skin58, _super);
		function GameShare$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 123;
			this.width = 123;
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShare$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Fenxiang_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "gameRes_json.Icon_Lianjie_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 24;
			t.text = "复制链接";
			t.y = 136;
			return t;
		};
		return GameShare$Skin58;
	})(eui.Skin);

	var GameShare$Skin59 = 	(function (_super) {
		__extends(GameShare$Skin59, _super);
		function GameShare$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 123;
			this.width = 123;
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShare$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Fenxiang_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "gameRes_json.Icon_Weixin2_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 24;
			t.text = "复制链接";
			t.y = 136;
			return t;
		};
		return GameShare$Skin59;
	})(eui.Skin);

	var GameShare$Skin60 = 	(function (_super) {
		__extends(GameShare$Skin60, _super);
		function GameShare$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.height = 123;
			this.width = 123;
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShare$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Fenxiang_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "gameRes_json.Icon_Pengyouquan_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 24;
			t.text = "复制链接";
			t.y = 136;
			return t;
		};
		return GameShare$Skin60;
	})(eui.Skin);

	function GameShare() {
		_super.call(this);
		this.skinParts = ["back_btn","shareUrl_btn","shareFriend_btn","shareGroup_btn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameShare.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.back_btn_i(),this.shareUrl_btn_i(),this.shareFriend_btn_i(),this.shareGroup_btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 566;
		t.scale9Grid = new egret.Rectangle(77,40,464,240);
		t.source = "gameRes_json.Frame_03_png";
		t.width = 618;
		t.x = 358;
		t.y = 92;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.banner_png";
		t.x = 391;
		t.y = 130;
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new eui.Button();
		this.back_btn = t;
		t.label = "";
		t.x = 949;
		t.y = 74;
		t.skinName = GameShare$Skin57;
		return t;
	};
	_proto.shareUrl_btn_i = function () {
		var t = new eui.Button();
		this.shareUrl_btn = t;
		t.label = "复制链接";
		t.x = 798;
		t.y = 462;
		t.skinName = GameShare$Skin58;
		return t;
	};
	_proto.shareFriend_btn_i = function () {
		var t = new eui.Button();
		this.shareFriend_btn = t;
		t.label = "微信消息";
		t.x = 408;
		t.y = 462;
		t.skinName = GameShare$Skin59;
		return t;
	};
	_proto.shareGroup_btn_i = function () {
		var t = new eui.Button();
		this.shareGroup_btn = t;
		t.label = "微信朋友圈";
		t.x = 604;
		t.y = 462;
		t.skinName = GameShare$Skin60;
		return t;
	};
	return GameShare;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/GoodsInfo.exml'] = window.GoodsInfo = (function (_super) {
	__extends(GoodsInfo, _super);
	var GoodsInfo$Skin61 = 	(function (_super) {
		__extends(GoodsInfo$Skin61, _super);
		function GoodsInfo$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GoodsInfo$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GoodsInfo$Skin61;
	})(eui.Skin);

	function GoodsInfo() {
		_super.call(this);
		this.skinParts = ["goods_img","goods_name","goods_desc","back_btn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GoodsInfo.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this.goods_img_i(),this.goods_name_i(),this.goods_desc_i(),this.back_btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 570;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(352,213,45,84);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Frame_01_png";
		t.width = 571;
		t.x = 382;
		t.y = 98;
		return t;
	};
	_proto.goods_img_i = function () {
		var t = new eui.Image();
		this.goods_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -110;
		t.x = 667;
		return t;
	};
	_proto.goods_name_i = function () {
		var t = new eui.Label();
		this.goods_name = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.x = 667;
		t.y = 120;
		return t;
	};
	_proto.goods_desc_i = function () {
		var t = new eui.Label();
		this.goods_desc = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x6C82A8;
		t.width = 414;
		t.x = 481;
		t.y = 370;
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new eui.Button();
		this.back_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 877;
		t.y = 112;
		t.skinName = GoodsInfo$Skin61;
		return t;
	};
	return GoodsInfo;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/GoodsItem.exml'] = window.GoodsItem = (function (_super) {
	__extends(GoodsItem, _super);
	function GoodsItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 293;
		this.width = 288;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this._Label2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.good.id_card"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.good.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.total"],[0],this._Label2,"text");
	}
	var _proto = GoodsItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Bg_Shop02_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0.5;
		t.verticalCenter = -26;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Btn_Shop02_png";
		t.x = 7;
		t.y = 214;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.size = 22;
		t.textColor = 0xB1D0E8;
		t.y = 19;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x9541C0;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 103.5;
		return t;
	};
	return GoodsItem;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/headComment.exml'] = window.headComment = (function (_super) {
	__extends(headComment, _super);
	var headComment$Skin62 = 	(function (_super) {
		__extends(headComment$Skin62, _super);
		function headComment$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = headComment$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Shop01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return headComment$Skin62;
	})(eui.Skin);

	function headComment() {
		_super.call(this);
		this.skinParts = ["gst_num","mine_num","title","title_en","back_btn"];
		
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.title_i(),this.title_en_i(),this.back_btn_i()];
	}
	var _proto = headComment.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Bg_up_png";
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.right = 5;
		t.width = 546;
		t.y = 6;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.gst_num_i(),this.mine_num_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(62,5,39,33);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Bg_Main_03_png";
		t.width = 264;
		t.x = 246;
		t.y = 4;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(62,5,39,33);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Bg_Main_03_png";
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Icon_G_png";
		t.x = -26;
		t.y = -7;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Icon_Kuangshi_png";
		t.x = 240;
		t.y = -8;
		return t;
	};
	_proto.gst_num_i = function () {
		var t = new eui.Label();
		this.gst_num = t;
		t.fontFamily = "myFont";
		t.right = 376;
		t.size = 22;
		t.text = "9000";
		t.textColor = 0xE5EEFF;
		t.y = 16;
		return t;
	};
	_proto.mine_num_i = function () {
		var t = new eui.Label();
		this.mine_num = t;
		t.fontFamily = "myFont";
		t.right = 66;
		t.size = 22;
		t.text = "9000000000";
		t.textColor = 0xE5EEFF;
		t.y = 15;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.bold = true;
		t.fontFamily = "myFont";
		t.text = "工具商店处";
		t.x = 126;
		t.y = 20.66;
		return t;
	};
	_proto.title_en_i = function () {
		var t = new eui.Label();
		this.title_en = t;
		t.bold = true;
		t.fontFamily = "myFont";
		t.size = 15;
		t.text = "TOOL SHOP";
		t.textColor = 0x618eb4;
		t.x = 303.68;
		t.y = 36.65;
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new eui.Button();
		this.back_btn = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = headComment$Skin62;
		return t;
	};
	return headComment;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/MineArea.exml'] = window.MineArea = (function (_super) {
	__extends(MineArea, _super);
	var MineArea$Skin63 = 	(function (_super) {
		__extends(MineArea$Skin63, _super);
		function MineArea$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MineArea$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_MiningArea01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 2;
			t.strokeColor = 0x41b5ff;
			t.verticalCenter = -5;
			return t;
		};
		return MineArea$Skin63;
	})(eui.Skin);

	var MineArea$Skin64 = 	(function (_super) {
		__extends(MineArea$Skin64, _super);
		function MineArea$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MineArea$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_MiningArea01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 2;
			t.strokeColor = 0x41b5ff;
			t.verticalCenter = -5;
			return t;
		};
		return MineArea$Skin64;
	})(eui.Skin);

	var MineArea$Skin65 = 	(function (_super) {
		__extends(MineArea$Skin65, _super);
		function MineArea$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay","tx"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.tx_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MineArea$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Btn_MiningArea02_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 28;
			t.verticalCenter = -5;
			return t;
		};
		_proto.tx_i = function () {
			var t = new eui.Label();
			this.tx = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.size = 28;
			t.stroke = 2;
			t.strokeColor = 0xf6ca52;
			t.text = "Label";
			t.textAlign = "center";
			t.verticalCenter = -5;
			t.width = 218;
			return t;
		};
		return MineArea$Skin65;
	})(eui.Skin);

	function MineArea() {
		_super.call(this);
		this.skinParts = ["bg","head_group","config_excavate_engine_btn","config_panning_engine_btn","start_dig_btn","panning_engine","excavate_engine0","excavate_engine1","excavate_engine2","excavate_engine3","excavate_engine4","area_grade","warehouseList","select_close_btn","select_group"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.bg_i(),this.head_group_i(),this._Image1_i(),this.config_excavate_engine_btn_i(),this.config_panning_engine_btn_i(),this.start_dig_btn_i(),this.panning_engine_i(),this.excavate_engine0_i(),this.excavate_engine1_i(),this.excavate_engine2_i(),this.excavate_engine3_i(),this.excavate_engine4_i(),this.area_grade_i(),this.select_group_i()];
	}
	var _proto = MineArea.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "Bg_Shop01_jpg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.head_group_i = function () {
		var t = new eui.Group();
		this.head_group = t;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Frame_MiningArea_01_png";
		t.x = 123.67;
		t.y = 93.5;
		return t;
	};
	_proto.config_excavate_engine_btn_i = function () {
		var t = new eui.Button();
		this.config_excavate_engine_btn = t;
		t.horizontalCenter = 0;
		t.label = "配置挖掘机";
		t.y = 258;
		t.skinName = MineArea$Skin63;
		return t;
	};
	_proto.config_panning_engine_btn_i = function () {
		var t = new eui.Button();
		this.config_panning_engine_btn = t;
		t.horizontalCenter = 0;
		t.label = "配置淘洗机器";
		t.y = 258;
		t.skinName = MineArea$Skin64;
		return t;
	};
	_proto.start_dig_btn_i = function () {
		var t = new eui.Button();
		this.start_dig_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 611.33;
		t.skinName = MineArea$Skin65;
		return t;
	};
	_proto.panning_engine_i = function () {
		var t = new eui.Image();
		this.panning_engine = t;
		t.source = "Icon_Taoxiji_png";
		t.visible = false;
		t.x = 94;
		t.y = 376;
		return t;
	};
	_proto.excavate_engine0_i = function () {
		var t = new eui.Image();
		this.excavate_engine0 = t;
		t.source = "Icon_Taoxiji_png";
		t.visible = false;
		t.x = 338.67;
		t.y = 360;
		return t;
	};
	_proto.excavate_engine1_i = function () {
		var t = new eui.Image();
		this.excavate_engine1 = t;
		t.source = "Icon_Taoxiji_png";
		t.visible = false;
		t.x = 546;
		t.y = 427;
		return t;
	};
	_proto.excavate_engine2_i = function () {
		var t = new eui.Image();
		this.excavate_engine2 = t;
		t.source = "Icon_Taoxiji_png";
		t.visible = false;
		t.x = 749;
		t.y = 375;
		return t;
	};
	_proto.excavate_engine3_i = function () {
		var t = new eui.Image();
		this.excavate_engine3 = t;
		t.source = "Icon_Taoxiji_png";
		t.visible = false;
		t.x = 916.5;
		t.y = 482;
		return t;
	};
	_proto.excavate_engine4_i = function () {
		var t = new eui.Image();
		this.excavate_engine4 = t;
		t.source = "Icon_Taoxiji_png";
		t.visible = false;
		t.x = 1074;
		t.y = 360;
		return t;
	};
	_proto.area_grade_i = function () {
		var t = new eui.Label();
		this.area_grade = t;
		t.anchorOffsetX = 126.5;
		t.fontFamily = "myFont";
		t.size = 24;
		t.text = "";
		t.textAlign = "center";
		t.width = 253;
		t.x = 281;
		t.y = 104;
		return t;
	};
	_proto.select_group_i = function () {
		var t = new eui.Group();
		this.select_group = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Scroller1_i(),this.select_close_btn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 592.58;
		t.horizontalCenter = 0;
		t.width = 886;
		t.y = 95;
		t.viewport = this.warehouseList_i();
		return t;
	};
	_proto.warehouseList_i = function () {
		var t = new eui.List();
		this.warehouseList = t;
		t.itemRendererSkinName = GoodsItem;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 7;
		t.paddingLeft = 0;
		t.verticalGap = 16;
		return t;
	};
	_proto.select_close_btn_i = function () {
		var t = new eui.Image();
		this.select_close_btn = t;
		t.source = "gameRes_json.close_png";
		t.x = 1270;
		t.y = 18;
		return t;
	};
	return MineArea;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/MineManager.exml'] = window.MineManager = (function (_super) {
	__extends(MineManager, _super);
	var MineManager$Skin66 = 	(function (_super) {
		__extends(MineManager$Skin66, _super);
		function MineManager$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MineManager$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Bg_Kuangquguanli03_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MineManager$Skin66;
	})(eui.Skin);

	var MineManager$Skin67 = 	(function (_super) {
		__extends(MineManager$Skin67, _super);
		function MineManager$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MineManager$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Bg_Kuangquguanli03_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MineManager$Skin67;
	})(eui.Skin);

	var MineManager$Skin68 = 	(function (_super) {
		__extends(MineManager$Skin68, _super);
		function MineManager$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MineManager$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Yellow_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "myFont";
			t.horizontalCenter = 0;
			t.stroke = 2;
			t.strokeColor = 0xE99652;
			t.verticalCenter = 0;
			return t;
		};
		return MineManager$Skin68;
	})(eui.Skin);

	function MineManager() {
		_super.call(this);
		this.skinParts = ["head_group","role","mine_area_bg","mine_name","description","price","total_output","surplus","last_btn","next_btn","buy_btn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.head_group_i(),this.role_i(),this._Group1_i()];
	}
	var _proto = MineManager.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Bg_Shop01_jpg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.bottom = 29;
		t.height = 632;
		t.scale9Grid = new egret.Rectangle(7,7,42,42);
		t.source = "gameRes_json.Frame_02_png";
		t.width = 406;
		t.x = 15;
		return t;
	};
	_proto.head_group_i = function () {
		var t = new eui.Group();
		this.head_group = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.role_i = function () {
		var t = new eui.Image();
		this.role = t;
		t.bottom = 0;
		t.source = "Lv.6_png";
		t.x = -89;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 645;
		t.right = 13;
		t.width = 887;
		t.y = 88;
		t.elementsContent = [this._Image3_i(),this.mine_area_bg_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.mine_name_i(),this._Label1_i(),this._Label2_i(),this.description_i(),this.price_i(),this.total_output_i(),this.surplus_i(),this.last_btn_i(),this.next_btn_i(),this.buy_btn_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.bottom = 29;
		t.height = 632;
		t.scale9Grid = new egret.Rectangle(7,7,42,42);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Frame_02_png";
		t.width = 884;
		t.x = 2;
		t.y = 1;
		return t;
	};
	_proto.mine_area_bg_i = function () {
		var t = new eui.Image();
		this.mine_area_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Banner_Kuangquguanli_lv.1_png";
		t.x = 13;
		t.y = 8;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Bg_Kuangquguanli01_png";
		t.x = 193.5;
		t.y = 275.17;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Bg_Kuangquguanli01_png";
		t.x = 193.5;
		t.y = 354.17;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Bg_Kuangquguanli02_png";
		t.x = 17;
		t.y = 438;
		return t;
	};
	_proto.mine_name_i = function () {
		var t = new eui.Label();
		this.mine_name = t;
		t.fontFamily = "myFont";
		t.right = 54;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x45a4e1;
		t.text = "矿区";
		t.x = 794;
		t.y = 31.67;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "myFont";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "矿区产量:";
		t.textColor = 0x89f3ff;
		t.x = 287;
		t.y = 372.67;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "myFont";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "售价:";
		t.textColor = 0x89F3FF;
		t.x = 320;
		t.y = 294.67;
		return t;
	};
	_proto.description_i = function () {
		var t = new eui.Label();
		this.description = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.text = "";
		t.visible = false;
		t.y = 200;
		return t;
	};
	_proto.price_i = function () {
		var t = new eui.Label();
		this.price = t;
		t.bold = true;
		t.fontFamily = "myFont";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0x45A4E1;
		t.text = "3333";
		t.x = 387;
		t.y = 292;
		return t;
	};
	_proto.total_output_i = function () {
		var t = new eui.Label();
		this.total_output = t;
		t.bold = true;
		t.fontFamily = "myFont";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0x45a4e1;
		t.text = "3333";
		t.x = 408;
		t.y = 370;
		return t;
	};
	_proto.surplus_i = function () {
		var t = new eui.Label();
		this.surplus = t;
		t.bold = true;
		t.fontFamily = "myFont";
		t.horizontalCenter = -6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.stroke = 0;
		t.strokeColor = 0x45A4E1;
		t.text = "3333";
		t.textColor = 0xc4e9fb;
		t.x = 411;
		t.y = 471.66999999999996;
		return t;
	};
	_proto.last_btn_i = function () {
		var t = new eui.Button();
		this.last_btn = t;
		t.anchorOffsetX = 0;
		t.label = "";
		t.scaleX = -1;
		t.scaleY = 1;
		t.width = 56;
		t.x = 47;
		t.y = 217;
		t.skinName = MineManager$Skin66;
		return t;
	};
	_proto.next_btn_i = function () {
		var t = new eui.Button();
		this.next_btn = t;
		t.anchorOffsetX = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 835;
		t.y = 217;
		t.skinName = MineManager$Skin67;
		return t;
	};
	_proto.buy_btn_i = function () {
		var t = new eui.Button();
		this.buy_btn = t;
		t.anchorOffsetX = 0;
		t.label = "购买";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 336;
		t.y = 509;
		t.skinName = MineManager$Skin68;
		return t;
	};
	return MineManager;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/MinerServerCenter.exml'] = window.MinerServerCenter = (function (_super) {
	__extends(MinerServerCenter, _super);
	function MinerServerCenter() {
		_super.call(this);
		this.skinParts = ["head_group","role_group","ownerList"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.head_group_i(),this.role_group_i(),this._Image2_i(),this._Scroller1_i()];
	}
	var _proto = MinerServerCenter.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Bg_Shop01_jpg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.head_group_i = function () {
		var t = new eui.Group();
		this.head_group = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.role_group_i = function () {
		var t = new eui.Group();
		this.role_group = t;
		t.bottom = 0;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 650;
		t.right = 19;
		t.scale9Grid = new egret.Rectangle(12,13,72,81);
		t.source = "gameRes_json.Bg_Shop04_png";
		t.width = 940;
		t.y = 80;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 625.58;
		t.right = 19;
		t.width = 936;
		t.y = 93;
		t.viewport = this.ownerList_i();
		return t;
	};
	_proto.ownerList_i = function () {
		var t = new eui.List();
		this.ownerList = t;
		t.itemRendererSkinName = OwnerItem;
		t.useVirtualLayout = false;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		return t;
	};
	return MinerServerCenter;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/OwnerItem.exml'] = window.OwnerItem = (function (_super) {
	__extends(OwnerItem, _super);
	var OwnerItem$Skin69 = 	(function (_super) {
		__extends(OwnerItem$Skin69, _super);
		function OwnerItem$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay","wz"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.wz_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OwnerItem$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Blue_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto.wz_i = function () {
			var t = new eui.Label();
			this.wz = t;
			t.fontFamily = "myFont";
			t.height = 71;
			t.horizontalCenter = 0;
			t.size = 32;
			t.stroke = 2;
			t.strokeColor = 0x5276e9;
			t.text = "";
			t.textAlign = "center";
			t.textColor = 0xffffff;
			t.verticalAlign = "middle";
			t.verticalCenter = -2;
			t.width = 199;
			return t;
		};
		return OwnerItem$Skin69;
	})(eui.Skin);

	function OwnerItem() {
		_super.call(this);
		this.skinParts = ["btn","time","time_group"];
		
		this.width = 914;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Group1_i(),this.btn_i(),this.time_group_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.code"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.user_nickname"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.miner_num"],[0],this._Label6,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.earnings"],[0],this._Label7,"text");
	}
	var _proto = OwnerItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Bg_Miner01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "myFont";
		t.size = 26;
		t.textColor = 0xcbf9ff;
		t.x = 35;
		t.y = 19;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.size = 26;
		t.textColor = 0xCBF9FF;
		t.y = 19;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "myFont";
		t.size = 26;
		t.textColor = 0xCBF9FF;
		t.x = 672;
		t.y = 19;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 24;
		t.text = "可获得收益：";
		t.textColor = 0x52a9ca;
		t.x = 35;
		t.y = 94;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.size = 24;
		t.text = "当前已有矿工：";
		t.textColor = 0x52A9CA;
		t.x = 419;
		t.y = 94;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.bold = true;
		t.fontFamily = "myFont";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.textColor = 0xFFFFFF;
		t.x = 575;
		t.y = 92;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 173;
		t.y = 81;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label7_i(),this._Image2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		this._Label7 = t;
		t.bold = true;
		t.fontFamily = "myFont";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.textColor = 0xffffff;
		t.x = 5;
		t.y = 9;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.68;
		t.scaleY = 0.68;
		t.source = "gameRes_json.Icon_Kuangshi_png";
		t.x = 117;
		t.y = 1;
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.label = "";
		t.x = 683;
		t.y = 68;
		t.skinName = OwnerItem$Skin69;
		return t;
	};
	_proto.time_group_i = function () {
		var t = new eui.Group();
		this.time_group = t;
		t.height = 69;
		t.visible = false;
		t.width = 197;
		t.x = 687;
		t.y = 69;
		t.elementsContent = [this._Label8_i(),this.time_i()];
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x505153;
		t.text = "收益倒计时";
		t.textColor = 0xe0e0e0;
		t.y = 9;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.size = 24;
		t.stroke = 0;
		t.strokeColor = 0x505153;
		t.text = "03:25:36";
		t.textColor = 0xa1ffb7;
		t.y = 38;
		return t;
	};
	return OwnerItem;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/ToolInfo.exml'] = window.ToolInfo = (function (_super) {
	__extends(ToolInfo, _super);
	var ToolInfo$Skin70 = 	(function (_super) {
		__extends(ToolInfo$Skin70, _super);
		function ToolInfo$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ToolInfo$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ToolInfo$Skin70;
	})(eui.Skin);

	var ToolInfo$Skin71 = 	(function (_super) {
		__extends(ToolInfo$Skin71, _super);
		function ToolInfo$Skin71() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ToolInfo$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Shop02_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ToolInfo$Skin71;
	})(eui.Skin);

	var ToolInfo$Skin72 = 	(function (_super) {
		__extends(ToolInfo$Skin72, _super);
		function ToolInfo$Skin72() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ToolInfo$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Shop03_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ToolInfo$Skin72;
	})(eui.Skin);

	var ToolInfo$Skin73 = 	(function (_super) {
		__extends(ToolInfo$Skin73, _super);
		function ToolInfo$Skin73() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ToolInfo$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameRes_json.Btn_Shop04_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ToolInfo$Skin73;
	})(eui.Skin);

	function ToolInfo() {
		_super.call(this);
		this.skinParts = ["goods_img","goods_name","goods_num","goods_desc","back_btn","buy_one_btn","sub_btn","add_btn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = ToolInfo.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.goods_img_i(),this.goods_name_i(),this.goods_num_i(),this.goods_desc_i(),this.back_btn_i(),this.buy_one_btn_i(),this.sub_btn_i(),this.add_btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 570;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(352,213,45,84);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Frame_01_png";
		t.width = 571;
		t.x = 382;
		t.y = 98;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 47;
		t.scale9Grid = new egret.Rectangle(4,4,30,30);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gameRes_json.Bg_Shop05_png";
		t.width = 272;
		t.x = 531;
		t.y = 459;
		return t;
	};
	_proto.goods_img_i = function () {
		var t = new eui.Image();
		this.goods_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -110;
		t.x = 667;
		return t;
	};
	_proto.goods_name_i = function () {
		var t = new eui.Label();
		this.goods_name = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.x = 667;
		t.y = 120;
		return t;
	};
	_proto.goods_num_i = function () {
		var t = new eui.Label();
		this.goods_num = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "1";
		t.x = 661;
		t.y = 471;
		return t;
	};
	_proto.goods_desc_i = function () {
		var t = new eui.Label();
		this.goods_desc = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x6c82a8;
		t.width = 373;
		t.x = 481;
		t.y = 370;
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new eui.Button();
		this.back_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 877;
		t.y = 112;
		t.skinName = ToolInfo$Skin70;
		return t;
	};
	_proto.buy_one_btn_i = function () {
		var t = new eui.Button();
		this.buy_one_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "租用一台";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 530;
		t.y = 540;
		t.skinName = ToolInfo$Skin71;
		return t;
	};
	_proto.sub_btn_i = function () {
		var t = new eui.Button();
		this.sub_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 507.5;
		t.y = 460.5;
		t.skinName = ToolInfo$Skin72;
		return t;
	};
	_proto.add_btn_i = function () {
		var t = new eui.Button();
		this.add_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 782.5;
		t.y = 460.5;
		t.skinName = ToolInfo$Skin73;
		return t;
	};
	return ToolInfo;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/ToolsItem.exml'] = window.ToolsItem = (function (_super) {
	__extends(ToolsItem, _super);
	function ToolsItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 293;
		this.width = 288;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this._Label2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.id_card"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.price"],[0],this._Label2,"text");
	}
	var _proto = ToolsItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Bg_Shop02_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -24;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "gameRes_json.Btn_Shop02_png";
		t.x = 7;
		t.y = 214;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.size = 22;
		t.textColor = 0xb1d0e8;
		t.y = 19;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x9541c0;
		t.textColor = 0xffffff;
		t.verticalCenter = 103.5;
		return t;
	};
	return ToolsItem;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/ToolsStore.exml'] = window.ToolsStore = (function (_super) {
	__extends(ToolsStore, _super);
	function ToolsStore() {
		_super.call(this);
		this.skinParts = ["head_group","toolsList"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.head_group_i(),this._Image2_i(),this._Image3_i(),this._Scroller1_i()];
	}
	var _proto = ToolsStore.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Bg_Shop01_jpg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.head_group_i = function () {
		var t = new eui.Group();
		this.head_group = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 624;
		t.right = 19;
		t.scale9Grid = new egret.Rectangle(12,13,72,81);
		t.source = "gameRes_json.Bg_Shop04_png";
		t.width = 922;
		t.y = 80;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "Gongjushangdian_png";
		t.x = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 593.58;
		t.right = 19;
		t.width = 922;
		t.y = 93;
		t.viewport = this.toolsList_i();
		return t;
	};
	_proto.toolsList_i = function () {
		var t = new eui.List();
		this.toolsList = t;
		t.itemRendererSkinName = ToolsItem;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 15;
		t.paddingLeft = 10;
		t.verticalGap = 6;
		return t;
	};
	return ToolsStore;
})(eui.Skin);generateEUI.paths['resource/game_skins/game/Warehouse.exml'] = window.Warehouse = (function (_super) {
	__extends(Warehouse, _super);
	function Warehouse() {
		_super.call(this);
		this.skinParts = ["head_group","warehouseList"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.head_group_i(),this._Image2_i(),this._Image3_i(),this._Scroller1_i()];
	}
	var _proto = Warehouse.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Bg_Shop01_jpg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.head_group_i = function () {
		var t = new eui.Group();
		this.head_group = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 624;
		t.right = 19;
		t.scale9Grid = new egret.Rectangle(12,13,72,81);
		t.source = "gameRes_json.Bg_Shop04_png";
		t.width = 922;
		t.y = 80;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "Role_02_png";
		t.x = -58;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 592.58;
		t.right = 30;
		t.width = 886;
		t.y = 95;
		t.viewport = this.warehouseList_i();
		return t;
	};
	_proto.warehouseList_i = function () {
		var t = new eui.List();
		this.warehouseList = t;
		t.itemRendererSkinName = GoodsItem;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 7;
		t.paddingLeft = 0;
		t.verticalGap = 16;
		return t;
	};
	return Warehouse;
})(eui.Skin);generateEUI.paths['resource/game_skins/LoadingLogo.exml'] = window.LoadingLogo = (function (_super) {
	__extends(LoadingLogo, _super);
	function LoadingLogo() {
		_super.call(this);
		this.skinParts = ["logo"];
		
		this.height = 1134;
		this.width = 750;
		this.elementsContent = [this.logo_i()];
	}
	var _proto = LoadingLogo.prototype;

	_proto.logo_i = function () {
		var t = new eui.Image();
		this.logo = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "appIcon_json.Logo_Main_png";
		t.verticalCenter = 0;
		return t;
	};
	return LoadingLogo;
})(eui.Skin);generateEUI.paths['resource/game_skins/LoadingView.exml'] = window.LoadingView = (function (_super) {
	__extends(LoadingView, _super);
	function LoadingView() {
		_super.call(this);
		this.skinParts = ["loadingBar","loadingTx","tipTx"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i()];
	}
	var _proto = LoadingView.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(5,20,30,21);
		t.source = "appIcon_json.Bg_Main01_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "appIcon_json.Bg_Main02_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1334;
		t.elementsContent = [this._Image3_i(),this.loadingBar_i(),this._Rect1_i(),this.loadingTx_i(),this.tipTx_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "appIcon_json.Logo_Main_png";
		t.x = 605;
		t.y = 197;
		return t;
	};
	_proto.loadingBar_i = function () {
		var t = new eui.Rect();
		this.loadingBar = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 1;
		t.fillColor = 0x4780c1;
		t.height = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 600;
		t.x = 367;
		t.y = 375;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeWeight = 2;
		t.width = 600;
		t.x = 367;
		t.y = 375;
		return t;
	};
	_proto.loadingTx_i = function () {
		var t = new eui.Label();
		this.loadingTx = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "Label";
		t.x = 636;
		t.y = 380;
		return t;
	};
	_proto.tipTx_i = function () {
		var t = new eui.Label();
		this.tipTx = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "Label";
		t.x = 636;
		t.y = 419;
		return t;
	};
	return LoadingView;
})(eui.Skin);generateEUI.paths['resource/game_skins/TipsSkin.exml'] = window.TipsSkin = (function (_super) {
	__extends(TipsSkin, _super);
	function TipsSkin() {
		_super.call(this);
		this.skinParts = ["logoBg","tipsLabel"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TipsSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.logoBg_i(),this.tipsLabel_i()];
		return t;
	};
	_proto.logoBg_i = function () {
		var t = new eui.Image();
		this.logoBg = t;
		t.fillMode = "scale";
		t.height = 98;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "logo_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tipsLabel_i = function () {
		var t = new eui.Label();
		this.tipsLabel = t;
		t.bold = true;
		t.fontFamily = "myFont";
		t.horizontalCenter = 0;
		t.text = "test";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 499;
		return t;
	};
	return TipsSkin;
})(eui.Skin);