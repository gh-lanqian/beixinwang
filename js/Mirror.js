class Mirror{
		//构造函数
		constructor(obj,boxDom) {
			this.boxDom=boxDom;
			this.mirrorDom=null;
			this.showDom=null;
		    let defaultObj={
				width:100,
				height:100,
				opacity:.5,
				mulitple:2,
				color:"white"
			}
			for(let key in defaultObj){
				if(obj[key]){
					this[key]=obj[key];
				}else{
					this[key]=defaultObj[key];
				}
			}
			this.render();
			this.addevent();
		}
		//创建html和css
		render(){
			this.boxDom.style.position="relative";
			//创建放大镜mirrorDom
			this.mirrorDom=document.createElement("div");
			this.mirrorDom.style.cssText=`
				position:absolute;
				width:${this.width}px;
				height:${this.height}px;
				opacity:${this.opacity};		
				background-color: ${this.color};
				display:none;
			`;
			this.boxDom.appendChild(this.mirrorDom);
			//创建显示器showDom
			this.showDom=document.createElement("div");
			this.showDom.style.cssText=`
				display:none;
				position:absolute;
				top:0;
				left:${this.boxDom.offsetWidth+40}px;
				width:${this.width*this.mulitple}px;
				height:${this.height*this.mulitple}px;
				background-image: ${getStyle(this.boxDom,"backgroundImage")};
				background-size: ${this.boxDom.offsetWidth*this.mulitple}px ${this.boxDom.offsetHeight*this.mulitple}px;
			`;
			this.boxDom.appendChild(this.showDom);
		}
		//绑定事件
		addevent(){
			this.boxDom.onmouseover=()=>{
				this.mirrorDom.style.display="block";
				this.showDom.style.display="block";
			}
			this.boxDom.onmouseout=()=>{
				this.mirrorDom.style.display="none";
				this.showDom.style.display="none";
			}
			this.boxDom.onmousemove=(event)=>{
				let evt=window.event || event;
				//计算数据
				let left1=evt.pageX-this.boxDom.offsetLeft-this.mirrorDom.offsetWidth/2;
				let top1=evt.pageY-this.boxDom.offsetTop-this.mirrorDom.offsetHeight/2;
				//边界判断
				if(left1<0){
					left1=0;
				}
				if(left1>this.boxDom.offsetWidth-this.mirrorDom.offsetWidth){
					left1=this.boxDom.offsetWidth-this.mirrorDom.offsetWidth;
				}
				if(top1<0){
					top1=0;
				}
				if(top1>this.boxDom.offsetHeight-this.mirrorDom.offsetHeight){
					top1=this.boxDom.offsetHeight-this.mirrorDom.offsetHeight;
				}
				//呈现外观
				this.mirrorDom.style.left=`${left1}px`;
				this.mirrorDom.style.top=`${top1}px`;
				this.showDom.style.backgroundPosition=`-${left1*this.mulitple}px -${top1*this.mulitple}px`;
			}
			
		}
	}
		
	function getStyle(domObj,attr) {
		if(domObj.currentStyle){//IE
			return domObj.currentStyle[attr];
		}else{//其它主流浏览器
			var cssObj = window.getComputedStyle(domObj);
			return cssObj[attr];
		}
	}