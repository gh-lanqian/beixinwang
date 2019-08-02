
function goods(){
	let goodslist=[
		[
			"http://images.bxmedia.net/upload/1/2016/4/10/92/27f1b-a0e0-48b1-b951-4e41e913afe_200X200.jpg",
			"君主论",
			"12.75",
			"15.00",
			"中关村图书大厦",
			"5个商家",
			"尼科洛·马基雅维里&nbsp;&nbsp;著|&nbsp;&nbsp;商务印书馆|&nbsp;1985-07-01"
		],
		[
			"http://images.bxmedia.net/upload/images/1033/710000559452_1_200X200.jpg",
			"思想录",
			"38.30",
			"45.00",
			"北新自营",
			"5个商家",
			"帕斯卡尔&nbsp;&nbsp;著|&nbsp;&nbsp;商务印书馆|&nbsp;1985-05-01",
		]
	]
	goodsrender(goodslist)
}
function goodsrender(str){
	for(let i=0;i<str.length;i++){
		getI(".right-listmore")[0].innerHTML=`
			<ul class="goodslist" style="width: 977px;
								height: 5000px;
								overflow: hidden;">
				<li class="goodsli" style="position: relative;
								border:1px solid white;
								width: 226px;
								font-size: 12px;
								height: 392px;
								margin: 0 9px;
								float: left;">
					<div class="listdiv" style="position: absolute;
										left: -1px;
										top:  27px;
										border:1px solid white;
										width: 226px;
										height: 390px;">
						<div class="picture">
							<a href="" style="display: block;
									width: 200px;
									height: 200px;
									overflow: hidden;
									margin: 0 auto;">
								<img src="${str[i][0]}" alt="" style="vertical-align: middle;"></a>
						</div>
						<p style="width: 202px;
								height: 18px;
								line-height: 18px;
								margin: 16px auto 0;">
								<a href="" title="${str[i][1]}" style="color: #666666;a:hover{
						text-decoration: underline;}">${str[i][1]}</a></p>
						<div class="grade" style="width: 202px;
									height: 22px;
									line-height: 22px;
									color: #666666;
									margin: 5px auto 0;
									overflow: hidden;">
							<span style="display: inline-block;
											float: left;
											width: 62px;
											height: 22px;
											overflow: hidden;
											margin-right: 6px;
											background: url(http://www.bxmedia.net/template/bdw/statics/images/sler-stars.png) no-repeat -63px 4px;">
							</span>
							<a href="" style="color: #2362af;
										float: left;
										padding-right: 3px;">0</a>
							<i style="float: left;font-style: normal;">条评论</i>
						</div>
						<div class="gprice" style="width: 202px;
										height: 18px;
										line-height: 18px;
										margin: 8px auto 0;">
							<i style="font-style: normal;
										font-weight: 900;
										color: #ed1f23;
										font-size: 16px;
										padding-right: 3px;">￥${str[i][2]}</i>
							<span style="text-decoration: line-through;color: #999999;">￥${str[i][3]}</span>
						</div>
						<div class="operate" style="width: 200px;height: 30px;margin: 8px auto 0;">
							<span class="shoucan" style="cursor: pointer;
										display: inline-block;
										width: 37px;
										height: 28px;
										line-height: 28px;
										color: #999999;
										margin-left: -1px;
										padding-left: 29px;
										border: 1px solid #dddddd;
										float: left;
										background: url(http://www.bxmedia.net/template/bdw/statics/images/heart-icon.png) no-repeat 8px 8px;">收藏</span>
							<a href="" class="shop" style="display: inline-block;
										width: 71px;
										height: 28px;
										line-height: 28px;
										color: #eb2c3a;
										margin-left: -1px;
										padding-left: 34px;
										border: 1px solid #dddddd;
										float: left;
										background: url(http://www.bxmedia.net/template/bdw/statics/images/heart-icon.png) no-repeat 8px -40px;">加到购物车</a>
							<a href="" style="display: none;"></a>
						</div>
						<div class="store" style="width: 202px;
										height: 32px;
										margin: 5px auto 0;
										line-height: 32px;
										color: #666666;">
							<a href="" class="sa" style="width: 86px;
										height: 32px;
										margin-right: 3px;
										color: #2362af;
										float: left;
										a:hover{
											text-decoration: underline;
										}">${str[i][4]}</a>
							<span style="display: inline-block;float: left;">等
							<a href="" class="sj" style="padding: 0 2px;color: #666666;a:hover{text-decoration: underline;color: red;}">${str[i][5]}</a>
							在售</span>
						</div>
						<div class="showmore" style="display:none;
										white-space:nowrap;
										overflow:hidden;
										text-overflow:ellipsis;
										width: 211px;
										height: 30px;
										line-height: 31px;
										padding-left: 5px;
										position: absolute;
										left: 0;
										bottom: 0;
										background-color: #ededed;
										color: #666666;">
							${str[i][6]}
						</div>
					</div>
				</li>
			</ul>
		`;
	}
}