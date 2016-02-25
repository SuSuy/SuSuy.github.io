'use strict'
function HeaderArea(id){
	var Show=document.getElementById(id);
	var ShowChild0=Show.children[0];
	var ShowChild1=Show.children[1];
	var oUl=ShowChild1.children[1];
	var ShowALi=oUl.getElementsByTagName('li');


	ShowChild0.onclick=function(){
		this.style.display='none';
		ShowChild1.style.display='block';
	}
	ShowChild1.onclick=function(){
		this.style.display='none';
		ShowChild0.style.display='block';	
		for (var j = 0; j < ShowALi.length; j++) {
			ShowALi[j].firstChild.style.color='#fffefe';
		};
	};
	for (var i = 0; i < ShowALi.length; i++) {
		ShowALi[i].index=i;
		ShowALi[i].onmouseover=function(){
			for (var j = 0; j < ShowALi.length; j++) {
				ShowALi[j].firstChild.style.color='#fffefe';
			};
			this.firstChild.style.color='#dc2f64';
		}
	};
}