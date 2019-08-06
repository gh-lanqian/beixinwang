jQuery.fn.extend({
	dianji:function(obj){
		let defaultObj = {
			imgs:["http://images.bxmedia.net/upload/1/2018/7/26/64/84626-26d3-4f17-859e-c2f0c3bbde1_160X160.jpg","http://images.bxmedia.net/upload/1/2017/10/1/28/53c55-5276-4d60-92b3-50c75b61a58_160X160.jpg","http://images.bxmedia.net/upload/1/2018/6/7/65/f8c59-aabf-4010-a2f6-8aa5f58f9ef_160X160.jpg","http://images.bxmedia.net/upload/1/2018/7/31/76/67b7b-93db-42b6-9d15-cded519c65d_160X160.jpg","http://images.bxmedia.net/upload/1/2019/1/16/82/79d5c-3ecd-4ed1-94aa-cabb76f82ff_160X160.jpg","http://images.bxmedia.net/upload/1/2016/4/10/61/85af7-6eff-4aff-8d1e-c46b6f99932_160X160.jpg","http://images.bxmedia.net/upload/1/2018/6/9/53/b2c21-c2be-44db-8485-620ff5296d3_160X160.jpg","http://images.bxmedia.net/upload/images/1047/753669396_1_160X160.jpg","http://images.bxmedia.net/upload/1/2018/7/26/64/84626-26d3-4f17-859e-c2f0c3bbde1_160X160.jpg","http://images.bxmedia.net/upload/1/2017/10/1/28/53c55-5276-4d60-92b3-50c75b61a58_160X160.jpg","http://images.bxmedia.net/upload/1/2018/6/7/65/f8c59-aabf-4010-a2f6-8aa5f58f9ef_160X160.jpg","http://images.bxmedia.net/upload/1/2018/7/31/76/67b7b-93db-42b6-9d15-cded519c65d_160X160.jpg","http://images.bxmedia.net/upload/1/2019/1/16/82/79d5c-3ecd-4ed1-94aa-cabb76f82ff_160X160.jpg","http://images.bxmedia.net/upload/1/2016/4/10/61/85af7-6eff-4aff-8d1e-c46b6f99932_160X160.jpg","http://images.bxmedia.net/upload/1/2018/6/9/53/b2c21-c2be-44db-8485-620ff5296d3_160X160.jpg","http://images.bxmedia.net/upload/images/1047/753669396_1_160X160.jpg"],
			name:["一个刑警的日子","论语译注-(简体字本)","异时空少年","和鹦鹉对话的人-26-典藏升级版","陪爷爷度过最后七年","北京高考语文指定背诵默写篇目(45篇)","看世界","黑暗森林-三体-Ⅱ","一个刑警的日子","论语译注-(简体字本)","异时空少年","和鹦鹉对话的人-26-典藏升级版","陪爷爷度过最后七年","北京高考语文指定背诵默写篇目(45篇)","看世界","黑暗森林-三体-Ⅱ"],
			witer:["蓝衣","杨伯峻","雷欧幻像","杨红樱","石勐尧","杨春俏","傅莹","刘慈欣","蓝衣","杨伯峻","雷欧幻像","杨红樱","石勐尧","杨春俏","傅莹","刘慈欣"],
			nowprice:["38.4","20.8","20.0","16.0","25.6","9.6","68.8","25.6","38.4","20.8","20.0","16.0","25.6","9.6","68.8","25.6"],
			beforeprice:["48.0","26.0","25.0","20.0","32.0","12.0","86.0","32.0","48.0","26.0","25.0","20.0","32.0","12.0","86.0","32.0"],
			listwidth:197,
			num:4,
			lleft:30,
			top:180,
			rleft:885,
			timespace:500
		};
		for(let key in defaultObj){
			if(!obj[key]){
				obj[key] = defaultObj[key];
			}
		};
	
		this.each(function(){
			$(this).render(obj);
			$(this).addEvent(obj);
		});
	},
	render:function(obj){
		this.append(`
			<div style="width: ${obj.listwidth*(obj.imgs.length)}px;
				height: ${this.height()}px;
				display: flex;
				flex-wrap: nowrap;
				position: absolute;
				left: -${obj.listwidth*obj.num}px;"
			></div>
		`)
		this.before(`
			<div class="left" style="width:23px;
				height:80px;
				background:#b2b2b2;
				position:absolute;
				line-height:80px;
				z-index: 9;
				color:white;
				cursor:pointer;
				text-align:center;
				left:${obj.lleft}px;
				top:${obj.top}px;
			"><</div>
			<div class="right" style="width:23px;
				height:80px;
				background:#b2b2b2;
				position:absolute;
				line-height:80px;
				cursor:pointer;
				z-index: 9;
				color:white;
				text-align:center;
				left:${obj.rleft}px;
				top:${obj.top}px;
			">></div>
		`)
		for(let i=0;i<(obj.imgs.length);i++){
			this.children().append(`
				<div style="width:197px;
				height:255px;
				flex-shrink: 0;">
					<a href="" title="${obj.name[i]}" style="display: block;text-decoration: none;">
						<div class="pic" style="width: 165px;height: 165px;">
							<img title="${obj.name[i]}" src="${obj.imgs[i]}" style="width: 100%;height: 100%;">
						</div>
						<div class="title" style="width: 150px;
							white-space:nowrap;
							overflow:hidden;
							text-overflow:ellipsis;
							height: 27px;
							line-height: 27px;
							font-weight: 900;
							color: #292929;
							font-size: 16px;
							margin-top: 20px;">${obj.name[i]}
						</div>
						<div class="writer" style="width: 165px;
								height: 23px;
								line-height: 23px;
								color: #908f8f;
								font-size: 12px;">${obj.witer[i]}
							<label syyle="margin-left: 5px;font-size: 12px;">著</label>
						</div>
						<div class="price" style="height: 23px;
									width:100%;
									line-height: 23px;
									color: red;
									font-size: 14px;">
							<span>￥${obj.nowprice[i]}</span>
							<label class="lab" style="color: #c7c7c7;
								text-decoration: line-through;
								font-size: 12px;
								margin-left: 10px;">￥${obj.beforeprice[i]}
							</label>
						</div>
					</a>
				</div>
			`)
		}
	},
	addEvent:function(obj){
		var index=obj.num;
		this.siblings(".right").click(()=>{
			index++;
			// this.change(obj);
			let slideWidth=-1*(obj.listwidth)*index;
			this.children().animate({ 
				 'left':slideWidth+'px'
			}, obj.timespace);
			 if(index>=(obj.imgs.length-obj.num)){
			    this.children().animate({'left':-(obj.listwidth*obj.num)+'px'},0);
			    index=obj.num;
			}
			 if(index<1){
			   this.children().animate({'left':-(obj.imgs.length-obj.num*2)*obj.listwidth+'px'},0);
			    index=obj.imgs.length-obj.num*2;
			}
		})
		this.siblings(".left").click(()=>{
			index--;
			// this.change(obj);
			let slideWidth=-1*(obj.listwidth)*index;
			this.children().animate({ 
				 'left':slideWidth+'px'
			}, obj.timespace);
			 if(index>=(obj.imgs.length-obj.num)){
			    this.children().animate({'left':-(obj.listwidth*obj.num)+'px'},0);
			    index=obj.num;
			}
			 if(index<1){
			   this.children().animate({'left':-(obj.imgs.length-obj.num*2)*obj.listwidth+'px'},0);
			    index=obj.imgs.length-obj.num*2;
			}
		})
	}
	// change:function(obj){
	// 	let index=obj.num;
	// 	let slideWidth=-1*(obj.listwidth)*index;
	// 	this.children().animate({ 
	// 		 'left':slideWidth+'px'
	// 	}, 1000 );
	// 	 if(index>=(obj.imgs.length-obj.num)){
	// 	    this.children().animate({'left':-listWidth*obj.num+'px'},0);
	// 	    index=obj.num;
	// 	}
	// 	 if(index<1){
	// 	   this.children().animate({'left':-(obj.imgs.length-obj.num*2)*listWidth+'px'},0);
	// 	    index=obj.imgs.length-obj.num*2;
	// 	}
	// }
})