'use strict';
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}
function addWheel(obj,fn){
	
	function fnWheel(ev){
		var bOk = true;//标识是往下还是往上，往下true，往上false
		var oEvent = ev||event;
		if(oEvent.wheelDelta){
			if(oEvent.wheelDelta<0){
				//下
				bOk=true;
			}else{
				//上
				bOk=false;
			}
		}else{
			if(oEvent.detail>0){
				//下
				bOk=true;
			}else{
				//上
				bOk=false;
			}
		}
		fn&&fn(bOk);
		oEvent.preventDefault&&oEvent.preventDefault();
		return false;
	}
	//判断浏览器是否是火狐
	if(window.navigator.userAgent.indexOf('Firefox')!=-1){
		addEvent(obj,'DOMMouseScroll',fnWheel);
	}else{
		addEvent(obj,'mousewheel',fnWheel);
	}
}