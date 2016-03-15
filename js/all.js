'use strict'
/*   ************************************************总文件添加内容介绍
*	arr 			content页面的内容；
*	AboutArr		content页面的内容；
*	arrAbout		about页面的内容；
*/
var arr=[{Type:'电商作品',Name:'双十一电商作品',date:'2015-11'},
		{Type:'主站作品',Name:'双十一作品',date:'2015-10'},
		{Type:'主站作品',Name:'双十一作品',date:'2015-10'},
		{Type:'主站作品',Name:'双十一作品',date:'2015-10'},
		{Type:'主站作品',Name:'双十一作品',date:'2015-10'},
		{Type:'主站作品',Name:'双十一作品',date:'2015-10'},
		{Type:'主站作品',Name:'双十一作品',date:'2015-10'},
		{Type:'主站作品',Name:'双十一作品',date:'2015-10'},
		{Type:'主站作品',Name:'双十一作品',date:'2015-10'},
		{Type:'主站作品',Name:'双十一作品',date:'2015-10'},
		{Type:'主站作品',Name:'双十一作品',date:'2015-10'},
		{Type:'主站作品',Name:'双十一作品',date:'2015-10'}]
		/************************************************************arr 			content页面的内容；
		*Type:类型
		*Name:名称
		*date:链接地址
		 */
var AboutArr=[{Introduce:'蓝海世纪影业立学习发达国家电影工业化产业发展的模式和经验，结合中国实践',Type:'WEB DESIGN',Name:'双十一',url:'http://www.myyqq.cn'},
	{Introduce:'以宽阔的眼界突破角落的思维，学习发达国家电影工业化产业发展的模式和经验，结合中国实践',Type:'WEB DESIGN',Name:'双十二',url:'http://www.baidu.com'},
	{Introduce:'西部，争鸣全国，以宽阔的眼界突破角落的思维，学习发达国家电影工业化产业发展的模式和经验，结合中国实践',Type:'WEB DESIGN',Name:'双十三',url:'http://www.youku.com'},
	{Introduce:'海世纪影业立足重庆，志在西部，争鸣全国，以宽阔的眼界突破角落的思维，学习发达国家电影工业化产业发展的模式和经验，结合中国实践',Type:'WEB DESIGN',Name:'双十四',url:'http://www.taobao.com'},
	{Introduce:'蓝宽阔的眼界突破角落的思维，学习发达国家电影工业化产业发展的模式和经验，结合中国实践',Type:'WEB DESIGN',Name:'双十五',url:'http://www.myyqq.cn'}]
		/*****************************************************************AboutArr		content页面的内容；
		*Introduce:介绍内容
		*Type:类型
		*Name:项目名称
		*url:链接地址
		 */

var arrAbout=[
			{
				Time:'2015年9月—2016年12月',
				Company:'天天向上天天向上×××××',
				Job:'前端开发',
				Duty:'负责天猫店铺设××××等等我们拥有西南乃至全国领先的设计团队，并在互联网端为您提供顶尖行业的呈现方式，我们采用业界领先的HTML5+CSS3技术，为您呈现出富有视觉动感与商业价值并存的桌面端'
			},
			{
				Time:'2015年9月—2016年12月',
				Company:'天天向上天天向上×××××',
				Job:'前端开发',
				Duty:'负责天猫店铺设××××等等我们拥有西南乃至全国领先的设计团队，并在互联网端为您提供顶尖行业的呈现方式，我们采用业界领先的HTML5+CSS3技术，为您呈现出富有视觉动感与商业价值并存的桌面端'
			},
			{
				Time:'2015年9月—2016年12月',
				Company:'天天向上天天向上×××××',
				Job:'前端开发',
				Duty:'负责天猫店铺设××××等等我们拥有西南乃至全国领先的设计团队，并在互联网端为您提供顶尖行业的呈现方式，我们采用业界领先的HTML5+CSS3技术，为您呈现出富有视觉动感与商业价值并存的桌面端'
			}]
		/*****************************************************************************arrAbout		about页面的内容；
		*Time:时间
		*Company:公司名称
		*Job:职位
		*Duty:职责
		 */


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