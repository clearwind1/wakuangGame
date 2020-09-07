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
    var DialogComment = (function (_super) {
        __extends(DialogComment, _super);
        function DialogComment(dialog, pos) {
            var _this = _super.call(this) || this;
            _this.skinName = "DialogComment";
            _this.init(dialog, pos);
            _this.initEvent();
            return _this;
        }
        DialogComment.prototype.init = function (dialog, pos) {
            // init
            this.width = 182;
            this.height = 118;
            this.dialog_tx.text = dialog;
            this.x = pos.x;
            this.y = pos.y;
            if (this.dialog_tx.height > 90) {
                this.height = this.dialog_tx.height + 48;
            }
        };
        DialogComment.prototype.setDialog = function (tx) {
            this.dialog_tx.text = tx;
            if (this.dialog_tx.height > 90) {
                this.height = this.dialog_tx.height + 48;
            }
        };
        DialogComment.prototype.setPos = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        DialogComment.prototype.initEvent = function () {
        };
        return DialogComment;
    }(cor.BaseScene));
    Game.DialogComment = DialogComment;
    __reflect(DialogComment.prototype, "Game.DialogComment");
})(Game || (Game = {}));
//# sourceMappingURL=DialogComment.js.map