module cor {
	/**
	 * 基础页面
	 */
	export class BaseScene extends eui.Component {

		private eventList: any[] = [];
		private tweenList: any[] = [];
		public dbList: any[] = [];
		public IntervalList: any[] = [];

		public constructor() {
			super();
			// this.visible = false;
			this.touchEnabled = false;
			this.width = GameData.GameWidth;
			this.height = GameData.GameHeigth;
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFromStage, this);
		}

		protected addToStage() {
			// Added to the on stage display list.
			// Log("add");

			// this.setFontFamily([]);
		}

		protected removeFromStage() {
			// Removed from the display list.
			this.removeDB();
			this.removeInterval();
			this.removeEvent();
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
			this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFromStage, this);
			// Log("remove");
		}

		/**设置外部字体 */
		public setFontFamily(pro: any[]) {

		}

		public showVb() {
			this.visible = true;
			this.show();
		}
		public show(any?) {

		}
		public hide() {
			this.visible = false;
		}
		/**
		 * 添加龙骨
		 */
		public addDB(target, name) {
			let role = createDB(name);
			role.x = role.width / 2;
			target.addChild(role);
			role.animation.play();
			this.dbList.push({
				db: role,
				target: target
			});
		}
		/**
		 * 清除龙骨
		 */
		public removeDB(name?) {
			let exist = false;
			for (var k = this.dbList.length - 1; k >= 0; k--) {
				let db = this.dbList[k].db as dragonBones.EgretArmatureDisplay;
				if (name && db.armature.name == name) {
					db.dispose();
					this.dbList[k].target.removeChild(db);
					this.dbList.splice(k, 1);
					exist = true;
					break;
				}
				db.dispose();
				this.dbList[k].target.removeChild(db);
			}
			if (!exist) {
				this.dbList = [];
			}
		}
		/** 
		 * 添加定时器
		 * */
		public addInterval(handle, timeout, name) {
			let inter = setInterval(handle, timeout);
			this.IntervalList.push({
				inter: inter,
				name: name
			})
		}
		/**
		 * 清除定时器
		 */
		public removeInterval(name?) {
			if (name) {
				for (let i = this.IntervalList.length - 1; i >= 0; i--) {
					let item = this.IntervalList[i];
					if (item.name == name) {
						let inter = item.inter;
						clearInterval(inter);
						this.IntervalList.splice(i, 1);
						break;
					}
				}
			} else {
				for (let i in this.IntervalList) {
					clearInterval(this.IntervalList[i].inter);
				}	
				this.IntervalList = [];
			}

		}
		/**
		 * 添加事件
		 */
		public addEvent(target, event, obj, fun, parmar?) {
			let parm = { target: target, event: event, obj: obj, fun: fun, parmar: parmar };
			this.eventList.push(parm);
			target.addEventListener(event, this.touchEnd, obj);
		}
		/**绑定事件回调 */
		private touchEnd(event) {
			let parm;

			for (var k in this.eventList) {
				if (this.eventList[k].target == event.currentTarget && this.eventList[k].event == event.type) {
					parm = this.eventList[k];
					break;
				}
			}

			// Log("type===", egret.is(parm.target, 'eui.Button'));
			// if (egret.is(parm.target, 'eui.Button')) {
			// 	cor.SoundMannage.instance().playByRes("click");
			// }
			if (parm.parmar) {
				parm.parmar.push(event);
			} else {
				parm.parmar = [event];
			}
			(<Function>parm.fun).apply(parm.obj, parm.parmar);
		}
		/**
		 * 删除事件
		 * @param target: 删除某一事件监听，没有传删除全部
		 */
		public removeEvent(target?) {
			if (target) {
				// Log(this.eventList);
				let parm;
				for (var i in this.eventList) {
					if (this.eventList[i].target == target) {
						parm = this.eventList[i];
						break;
					}
				}
				if (parm) {
					(parm.target).removeEventListener(parm.event, this.touchEnd, parm.obj);
					this.eventList.splice(this.eventList.indexOf(parm), 1);
					// Log(this.eventList);
				}

			} else {
				for (let i = 0; i < this.eventList.length; i++) {
					let parm = this.eventList[i];
					(parm.target).removeEventListener(parm.event, this.touchEnd, parm.obj);
				}
				this.eventList = [];
			}
		}

		public dispose() {
			if (this.parent) {
				this.parent.removeChild(this);
			}
		}

	}
}