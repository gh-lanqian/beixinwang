class BannerPlay{
		//构造函数
		constructor(obj,boxDom,boxz){
			//1.属性
			this.boxz=boxz;
			this.backgroundColor=["#458cdc","#88c8ec"];
			this.boxDom=boxDom;
			this.boxDoms=[];
			this.douUls=[];
			this.divBox=null;
			let DefaultObj={
				width:500,
				height:300,
				imgs:["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"],
				douColor:"white",
				douSize:10,
				douHColor:"#b00000",
				// douIsCircle:true,
				douPosition:"下",
				timeSpeace:1000,
				myTimer:null,
				ord:0
			}
			for(let key in DefaultObj){
				if(obj[key]){
					this[key]=obj[key];
				}else{
					this[key]=DefaultObj[key];
				}
			}
		    //2.外观
			this.render();
			this.addevent();
			this.goPlay();
		}
		//动态创建(html和css)
		render(){
			//给传入容器的设置定位
			this.boxDom.style.position="relative";
			//创建imgs
			for(let i=0;i<this.imgs.length;i++){
				let imgDom=document.createElement("img");
				imgDom.src = this.imgs[i];
				imgDom.style.cssText=`
					width:100%;
					height:100%;
					position:absolute;
					left:0;
					top:0;
					z-index:1;
				`;
				if(i==0){
					imgDom.style.zIndex=2;
				}
				this.boxDom.appendChild(imgDom);
				this.boxDoms.push(imgDom);
			}
			//创建豆豆的ul
			let douUl=document.createElement("ul");
			douUl.style.cssText=`
				padding:0;
				position:absolute;
				z-index:${this.imgs.length};
				list-style:none;
			`;
			if(this.douPosition=="下"){
				// douUl.style.left=`${(this.width-this.douSize*this.imgs.length*2)/2}px`;
				douUl.style.left=`${this.width-this.douSize*4}px`;
				douUl.style.bottom="20px";
			}else if(this.douPosition=="上"){
				douUl.style.left=`${(this.width-this.douSize*this.imgs.length*2)/2}px`;
				douUl.style.top="20px";
			}
			this.boxDom.appendChild(douUl);
			//创建豆豆的li
			for(let i=0;i<this.imgs.length;i++){
				let douLi=document.createElement("li");
				douLi.setAttribute("index",i)
				douLi.style.cssText=`
					float:left;
					margin-right:${this.douSize/10}px;
					width:${this.douSize}px;
					height:${this.douSize/10}px;
					background-color:${this.douColor};
				`;
				// if(this.douIsCircle){
				// 	douLi.style.borderRadius="50%";
				// }else{
					// douLi.style.borderRadius="0";
				// }
				if(i==0){
					douLi.style.backgroundColor=this.douHColor;
				}
				douUl.appendChild(douLi);
				this.douUls.push(douLi);
			}
			//创建按钮div
			this.divBox=document.createElement("div");
			this.divBox.style.cssText=`
				position:absolute;
				display:none;
				width:100%;
				height:${this.height/4}px;
				left:0;
				top:${(this.height-this.height/4)/2}px;
				z-index:${this.imgs.length};
			`;
			this.boxDom.appendChild(this.divBox);
			//创建左按钮
			let leftDiv=document.createElement("div");
			leftDiv.style.cssText=`
				float:left;
				width:${this.height/12}px;
				height:100%;
				
				background-color:rgba(0,0,0,.2);
				color:white;
				text-align:center;
				line-height:${this.height/4}px;
				font-size:30px;
			`;
			this.divBox.appendChild(leftDiv);
			leftDiv.innerHTML="<";
			//创建右按钮
			let rightDiv=document.createElement("div");
			rightDiv.style.cssText=`
				float:right;
				width:${this.height/12}px;
				height:100%;
				
				background-color:rgba(0,0,0,.2);
				color:white;
				text-align:center;
				line-height:${this.height/4}px;
				font-size:30px;
			`;
			this.divBox.appendChild(rightDiv);
			rightDiv.innerHTML=">";
		}
		//绑定事件
		addevent(){
			var obj=this
			//点击按钮
			this.divBox.firstElementChild.onclick=()=>{
				this.previousImgs()
			}
			this.divBox.lastElementChild.onclick=()=>{
				this.nextImgs()
			}
			//点击豆豆
			for(let i=0;i<this.imgs.length;i++){
				this.douUls[i].onclick=function(){
					obj.goImgs(parseInt(this.getAttribute("index")))
				}
			}
			//鼠标划入
			this.boxDom.onmouseover=()=>{
				this.stopPlay();
				this.divBox.style.display="block";
			}
			//鼠标划出
			this.boxDom.onmouseout=()=>{
				this.goPlay();
				this.divBox.style.display="none";
			}
		}
		
		goPlay(){
			if(this.myTimer!==null){
				return;
			}
			this.myTimer=setInterval(()=>{
				//修改数据
				
				var perOrd=this.ord;
				this.ord++;
				//边界判断
				if(this.ord>this.imgs.length-1){
					this.ord=0;
				}
				//改变外观
				this.rerander(perOrd,this.ord)
			},this.timeSpeace)
		}
		//改变外观
		rerander(preOrd,ord){
			//改图片
			this.boxDoms[ord].style.zIndex=2;
			this.boxDoms[preOrd].style.zIndex=1;
			this.boxz.style.backgroundColor=this.backgroundColor[ord];
			//改豆豆
			this.douUls[ord].style.backgroundColor=this.douHColor;
			this.douUls[preOrd].style.backgroundColor=this.douColor;
		}
		//停止
		stopPlay(){
			window.clearInterval(this.myTimer);
			this.myTimer=null;
		}
		//点击按钮
		//left
		previousImgs(){
			this.goImgs(this.ord-1)
		}
		//right
		nextImgs(){
			this.goImgs(this.ord+1)
		}
		//点击豆豆
		goImgs(tempImg){
			var preOrd=this.ord;
			this.ord=tempImg
			if(this.ord>this.imgs.length-1){
				this.ord=0;
			}
			if(this.ord<0){
				this.ord=this.imgs.length-1;
			}
			this.rerander(preOrd,this.ord);
		}
	}