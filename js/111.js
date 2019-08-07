function renderdescription(str){
	$(".des-z").append(`
		<div class="goodtitle" style="width: 100%;height: 34px;">
			<ul class="goodtitles" style="width: 1200px;
							height: 34px;
							margin: 0 auto;">
				<li class="lileft" style="font-size: 12px;
							height: 34px;
							line-height: 34px;
							float: left;
							background: url(http://www.bxmedia.net/template/bdw/statics/images/list_icon02.png) no-repeat right 12px;
							padding: 0 20px 0 19px;"><a href="" style="color: #333333;">首页</a></li>
				<li class="lileft" style="font-size: 12px;
							height: 34px;
							line-height: 34px;
							float: left;
							background: url(http://www.bxmedia.net/template/bdw/statics/images/list_icon02.png) no-repeat right 12px;
							padding: 0 20px 0 19px;"><a href="" style="color: #333333;">社科馆</a></li>
				<li class="lileft" style="font-size: 12px;
							height: 34px;
							line-height: 34px;
							float: left;
							background: url(http://www.bxmedia.net/template/bdw/statics/images/list_icon02.png) no-repeat right 12px;
							padding: 0 20px 0 19px;"><a href="" style="color: #333333;">社会科学</a></li>
				<li class="lilast1" style="font-size: 12px;
							height: 34px;
							line-height: 34px;
							float: left;
							padding: 0 20px 0 19px;"><a href="" style="color: #ed1f23;">经典著作</a></li>
			</ul>
		</div>
		<div class="des-m" style="width: 1190px;
							margin: 0 auto;
							overflow: hidden;">
			<div class="shang" style="width: 1190px;
							height: 565px;
							font-size: 12px;">
				<div class="mirror" style="width: 422px;
							height: 555px;
							float: left;">
					<div class="backmirr" style="background: url(${str.goodsImg}) no-repeat;
							width: 420px;
							height: 420px;
							border: #f2f2f2 1px solid;"></div>
					<div class="list-pic" style="width: 422px;
							overflow: hidden;
							margin: 20px auto 15px;">
						<div class="anni ll" style="float: left;
								width: 10px;
								height: 46px;
								line-height: 46px;
								text-align: center;
								margin-top: 7px;
								cursor: pointer;
								border: #cecece 1px solid;"><</div>
						<div class="middle" style="width: 370px;
								height: 62px;
								float: left;
								cursor: pointer;
								overflow: hidden;
								margin: 0 13px;"><span class="nowimg" style="display: block;
									width: 58px;
									height: 58px;
									border: #ed1f23 2px solid;
									text-align: center;"><img src="http://images.bxmedia.net/upload/1/2016/4/10/92/27f1b-a0e0-48b1-b951-4e41e913afe_58X58.jpg" alt=""></span></div>
						<div class="anni rr" style="float: left;
									width: 10px;
									height: 46px;
									line-height: 46px;
									text-align: center;
									margin-top: 7px;
									cursor: pointer;
									border: #cecece 1px solid;">></div>
					</div>
					<div class="mirr-btm" style="width: 422px;height: 30px;">
						<span style="background: url(http://www.bxmedia.net/template/bdw/statics/images/de_icon05.png) no-repeat 5px 9px;
									width: 230px;
									padding-top: 8px;
									height: 30px;
									color: #666;
									float: left;
									padding-left: 25px;
									margin-left: 25px;">分享给好友</span>
						<label style="background: url(http://www.bxmedia.net/template/bdw/statics/images/de_icon06.png) no-repeat 5px 9px;
									width: 65px;
									height: 30px;
									color: #666;
									line-height: 30px;
									float: left;
									padding-left: 25px;
									margin-left: 50px;
									cursor: pointer;">收藏商品</label>
					</div>
				</div>
				<div class="descript" style="width: 537px;
								height: 555px;
								float: left;
								margin-left: 20px;">
					<div class="infotitle" style="width: 540px;
								border-bottom: #e3e3e3 1px dashed;
								font-size: 20px;
								line-height: 30px;
								margin-bottom: 10px;">
						${str.goodsName}<br/>
						<p style="margin-top: 2px;font-size: 12px;"><span style="color: #2362AF;">${str.beiyong4.split("&")[0]}</span>&nbsp;(作者)&nbsp;<span style="color: #2362AF;">潘汉典</span>&nbsp;(译者)&nbsp;</p>
					</div>
					<ul>
						<li class="shoujia"><label style="width: 60px;
												height: 35px;
												color: #999;
												line-height: 35px;
												margin-top: 10px;
												margin-right: 8px;">销&nbsp;&nbsp;售&nbsp;&nbsp;价</label><span style="font-size: 34px;color: #ED1F23;"><span style="font-size: 18px;">￥</span>${str.goodsPrice}</span><i style="font-size: 13px;
						color: #ED1F23;
						font-style: normal;
						margin-left: 10px;">[8.5折][库存${str.goodsCount}件]</i>&nbsp;
						<a href="" style="color: #666666;font-size: 13px;">(降价通知)</a></li>
						<li class="li-r li-r1" style="margin-bottom: 5px; 
					width: 537px;"><label style="width: 60px;
												height: 35px;
												color: #999;
												line-height: 35px;
												margin-top: 10px;
												margin-right: 8px;">市&nbsp;&nbsp;场&nbsp;&nbsp;价</label><span style="text-decoration: line-through;color: #999999;">￥${str.beiyong1}</span></li>
						<li class="li-r li-r2" style="margin-bottom: 5px; 
					width: 537px;color: #5c5c5c;"><label style="width: 60px;
												height: 35px;
												color: #999;
												line-height: 35px;
												margin-top: 10px;
												margin-right: 8px;">商品评价</label><span style="background: url(http://www.bxmedia.net/template/bdw/statics/images/de_icon07.png);
						width: 70px;
						height: 14px;
						display: inline-block;
						margin: 5px 5px 0 0;
						vertical-align: middle;"></span>(共有${str.beiyong5}条评论)</li>
						<li class="li-r li-r3" style="margin-bottom: 5px; 
					width: 537px;color: #666666;"><label style="width: 60px;
												height: 35px;
												color: #999;
												line-height: 35px;
												margin-top: 10px;
												margin-right: 8px;">服&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务</label>&nbsp;&nbsp;由&nbsp;&nbsp;<a href="" style="color: #2362AF;">${str.beiyong2}</a>&nbsp;&nbsp;负责发货，并提供售后服务。</li>
						<li class="xinxi" style="color: #666666;"><label style="width: 60px;
												height: 35px;
												color: #999;
												line-height: 35px;
												margin-top: 10px;
												margin-right: 8px;">图书信息</label> ISBN：7-100-01648-7 <a href="" style="margin-left: 30px;color: #2362AF;">更多基本信息></a><br/>
						    <p style="text-indent: 58px;line-height: 20px;">出版社：${str.beiyong4.slice(-22,-17)}</p>
							<p style="text-indent: 58px;line-height: 20px;">出版日期：${str.beiyong4.slice(-10)}</p>
							<p style="color: #666666;text-indent: 58px;line-height: 20px;">装帧/页数：平装：131页</p>
						</li>
					</ul>
					<div class="i-btm" style="background: #f2f2f2;
								width: 500px;
								overflow: hidden;
								margin-top: 10px;
								padding: 12px 12px 90px 12px;">
						<div class="i-btmtop" style="margin-bottom: 5px;">
							<span style="height: 30px;
										color: #999;
										line-height: 30px;
										overflow: hidden;">购买数量</span>
							<label class="lab1" style="display: inline-block;
										width: 22px;
										height: 22px;
										vertical-align: middle;
										cursor: pointer;
										background: url(http://www.bxmedia.net/template/bdw/statics/images/de_icon10.png) no-repeat;"></label>
							<input type="text" value="1" style="width: 34px;
										height: 20px;
										border: #ddd 1px solid;
										background: #fff;
										color: #333;
										font-size: 14px;
										text-align: center;
										line-height: 20px;
										margin: 0 1px;
										vertical-align: middle;
										outline: none;">
							<label class="lab2" style="display: inline-block;
										width: 22px;
										height: 22px;
										vertical-align: middle;
										cursor: pointer;
										background: url(http://www.bxmedia.net/template/bdw/statics/images/de_icon11.png) no-repeat;"></label>
						</div>
						<div class="i-btmdow" style="width: 480px;
									height: 45px;
									line-height: 45px;
									margin-left: 10px;
									margin-top: 14px;">
							<a href="" style="display: inline-block;
						background: url(http://www.bxmedia.net/template/bdw/statics/images/de_icon12.png) no-repeat;
									width: 141px;
									height: 43px;
									margin-right: 12px;"></a>
							<span style="display: inline-block;
						background: url(http://www.bxmedia.net/template/bdw/statics/images/de_icon13.png) no-repeat;
									width: 141px;
									height: 43px;"></span>
						</div>
					</div>
				</div>
				<div class="shopmessige" style="width: 210px;
								height: 555px;
								float: right;">
					<div class="shop-info" style="width: 208px;
							overflow: hidden;
							border: 1px solid #dddddd;">
						<div class="b-layer" style="width: 194px;
								height: 39px;
								background: #fafafa;
								border-bottom: #ddd 1px solid;
								padding-left: 14px;
								color: #666;
								font-size: 18px;
								line-height: 39px;">店铺信息</div>
						<div class="b-rows" style="width: 192px;
									margin: 0 auto;
									border-bottom: #ddd 1px solid;
									padding: 9px 0 9px 8px;">
							<div class="b-t" style="width: 182px;
									height: 22px;
									overflow: hidden;
									margin-bottom: 5px;"><a href="" style="color: #2362af;
							line-height: 22px;">${str.beiyong2}</a></div>
							<div class="b-d" style="width: 182px;height: 13px;"><img src="http://images.bxmedia.net/upload/1/2016/4/5/c91f1029-d153-447a-a502-61c0d679698e.gif" alt=""></div>
						</div>
						<ul class="b-rowss" style="width: 192px;
									margin: 0 auto;
									border-bottom: #ddd 1px solid;
									padding: 9px 0 9px 8px;">
							<li class="xinred" style="width: 182px;
										overflow: hidden;
										margin-bottom: 10px;
										color: #666666;">描述相符：<span style="display: inline-block;
														width: 64px;
														height: 13px;
														background: url(http://www.bxmedia.net/template/bdw/statics/images/de_icon20.png)"></span></li>
							<li class="xinred" style="width: 182px;
										overflow: hidden;
										margin-bottom: 10px;
										color: #666666;">服务态度：<span style="display: inline-block;
														width: 64px;
														height: 13px;
														background: url(http://www.bxmedia.net/template/bdw/statics/images/de_icon20.png)"></span></li>
							<li class="xinred" style="width: 182px;
										overflow: hidden;
										margin-bottom: 10px;
										color: #666666;">发货速度：<span style="display: inline-block;
														width: 64px;
														height: 13px;
														background: url(http://www.bxmedia.net/template/bdw/statics/images/de_icon20.png)"></span></li>
						</ul>
						<ul class="b-rowss" style="width: 192px;
									margin: 0 auto;
									border-bottom: #ddd 1px solid;
									padding: 9px 0 9px 8px;">
							<li style="width: 200px;
										margin-bottom: 5px;
										color: #666666;">联系客服：<img src="http://www.bxmedia.net/template/bdw/statics/images/qq.png" alt="" style="vertical-align: middle;"></li>
							<li style="width: 200px;
										margin-bottom: 5px;
										color: #666666;">联系电话：010-82676668</li>
							<li style="width: 200px;
										margin-bottom: 5px;
										color: #666666;">工作时间：每周一至周日9:00-18:00</li>
							<li style="width: 200px;
										margin-bottom: 5px;
										color: #666666;">认证信息：</li>
						</ul>
						<div class="sc" style="height: 31px;
									color: #999;
									margin: 7px auto 10px;">
							<span style="width: 62px;
											display: block;
											cursor: pointer;
											line-height: 31px;
											margin: 0 auto;
											padding-left: 30px;
											background: url(http://www.bxmedia.net/template/bdw/statics/images/de_icon24.png) no-repeat;">收藏本店</span>
						</div>
					</div>
					<div class="shop-more" style="width: 208px;
							height: 194px;
							margin-top: 10px;
							border: 1px solid #dddddd;">
						<div class="b-layer" style="width: 194px;
								height: 39px;
								background: #fafafa;
								border-bottom: #ddd 1px solid;
								padding-left: 14px;
								color: #666;
								font-size: 18px;
								line-height: 39px;">更多卖家</div>
						<ul style="width: 192px;
									margin: 0 auto;
									padding: 9px 7px 9px 8px;">
							<li style="width: 100%;
									height: 30px;
									overflow: hidden;
									line-height: 30px;"><a href="" style="display: block;
												width: 130px;
												color: #666666;
												line-height: 30px;
												float: left;">中关村图书大厦</a><span style="float: right;
							color: #ed1f23;">￥12.75</span></li>
							<li style="width: 100%;
									height: 30px;
									overflow: hidden;
									line-height: 30px;"><a href="" style="display: block;
												width: 130px;
												color: #666666;
												line-height: 30px;
												float: left;">北新自营</a><span style="float: right;
							color: #ed1f23;">￥11.60</span></li>
							<li style="width: 100%;
									height: 30px;
									overflow: hidden;
									line-height: 30px;"><a href="" style="display: block;
												width: 130px;
												color: #666666;
												line-height: 30px;
												float: left;">北京图书大厦</a><span style="float: right;
							color: #ed1f23;">￥12.00</span></li>
						</ul>
						<a href="" class="look" style="display: block;
										text-align: center;
										line-height: 28px;
										border-radius: 2px;
										color: #666666;
										width: 90px;
										height: 28px;
										border: 1px solid #e9e9e9;
										margin: 8px auto 0;">查看所有卖家</a>
					</div>
				</div>
			</div>
			
			
			
			<div class="zhong" style="width: 1190px;
							height: 290px;
							margin-top: 10px;">
				<div class="z-layer" style="width: 178px;
							height: 40px;
							border-top: #ed1f23 2px solid;
							color: #ed1f23;
							margin-right: -1px;
							cursor: pointer;
							border-left: #eee 1px solid;
							border-right: #eee 1px solid;
							font-size: 16px;
							text-align: center;
							line-height: 40px;">推荐商品</div>
				<div class="z-spmore" style="width: 1188px;
							height: 242px;
							position: relative;
							border: #eee 1px solid;">
					<div class="btn left" style="width:23px;
								height:80px;
								background:#b2b2b2;
								position:absolute;
								cursor: pointer;
								line-height:80px;
								z-index: 2;
								color:white;
								text-align:center;
								position: absolute;
								left: 10px;
								top: 70px;"><</div>
					<div class="btn right" style="width:23px;
								height:80px;
								background:#b2b2b2;
								position:absolute;
								cursor: pointer;
								line-height:80px;
								z-index: 2;
								color:white;
								text-align:center;
								position: absolute;
								left: 1140px;
								top: 70px;">></div>
					<div class="mrt-bot" style="width: 1090px;
								margin:0 auto;
								height: 222px;
								margin-top: 20px;
								overflow: hidden;
								position: relative;">
						<div class="box" style="width: 4368px;
								height: 242px;
								display: flex;
								flex-wrap: nowrap;
								position: absolute;
								left: -1092px;">
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/images/1068/710000447998320_1_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">十八世纪科学、技术和</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥67.92</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/images/1030/710000315322788_1_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">精神分析引论</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥27.20</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/4/10/32/6497a-aa17-44c8-bb71-4fe96d10c90_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">十九世纪欧洲史</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥23.80</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/4/10/43/48573-613e-4c79-a5fa-0eb5fc5ad75_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">联邦党人文集</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥39.10</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/images/1063/710009817_1_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">意识形态与乌托邦</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥28.50</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/images/1033/710001975483898_1_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">罗马帝国衰亡史-下册</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥40.80</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
									<a href="" title="" style="display: block;">
										<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/4/12/2/3e44a-a405-4615-8039-b7053c3c568_160X160.jpg" ></div>
										<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">正义法的理论</div>
										<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥40.80</span></div>
									</a>
							</div>
										
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/6/18/28/be66d-eee8-4448-b513-b94f7ca1f8c_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">拉奥孔</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥21.25</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/6/18/77/697d0-1805-4b29-943c-b3b2e5f24e0_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">地方知识</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥29.20</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/6/18/0/f9596-ad0d-4652-945a-e1ee9406d7c_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">世界历史与救赎历史</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥25.10</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/6/18/21/f7827-7461-490d-bef1-cafd7bbd646_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">论德国宗教和哲学的历史</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥15.30</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/4/20/56/826cf-f033-4b25-8868-ca02c91d45f_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">福利经济学评述</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥27.20</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/images/1055/710006876285_1_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">耶稣传</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥23.80</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/4/10/48/5d6fc-7192-4c3a-a6fd-a91119bf2d4_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">西方哲学史-下卷</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥32.30</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/images/1068/710000447998320_1_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">十八世纪科学、技术和</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥67.92</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/images/1030/710000315322788_1_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">精神分析引论</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥27.20</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/4/10/32/6497a-aa17-44c8-bb71-4fe96d10c90_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">十九世纪欧洲史</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥23.80</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/4/10/43/48573-613e-4c79-a5fa-0eb5fc5ad75_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">联邦党人文集</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥39.10</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/images/1063/710009817_1_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">意识形态与乌托邦</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥28.50</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/images/1033/710001975483898_1_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">罗马帝国衰亡史-下册</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥40.80</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
									<a href="" title="" style="display: block;">
										<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/4/12/2/3e44a-a405-4615-8039-b7053c3c568_160X160.jpg" ></div>
										<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">正义法的理论</div>
										<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥40.80</span></div>
									</a>
							</div>
						
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/6/18/28/be66d-eee8-4448-b513-b94f7ca1f8c_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">拉奥孔</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥21.25</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/6/18/77/697d0-1805-4b29-943c-b3b2e5f24e0_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">地方知识</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥29.20</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/6/18/0/f9596-ad0d-4652-945a-e1ee9406d7c_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">世界历史与救赎历史</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥25.10</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/6/18/21/f7827-7461-490d-bef1-cafd7bbd646_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">论德国宗教和哲学的历史</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥15.30</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/4/20/56/826cf-f033-4b25-8868-ca02c91d45f_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">福利经济学评述</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥27.20</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/images/1055/710006876285_1_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">耶稣传</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥23.80</span></div>
								</a>
							</div>
							<div class="list" style="width:156px;
									height:242px;
									flex-shrink: 0;">
								<a href="" title="" style="display: block;">
									<div class="pic" style="width: 165px;height: 165px;"><img title="" src="http://images.bxmedia.net/upload/1/2016/4/10/48/5d6fc-7192-4c3a-a6fd-a91119bf2d4_160X160.jpg" ></div>
									<div class="title" style="width: 120px;
											white-space:nowrap;
											overflow:hidden;
											text-overflow:ellipsis;
											height: 20px;
											line-height: 20px;
											color: #666666;
											font-size: 12px;">西方哲学史-下卷</div>
									<div class="price" style="height: 27px;
											line-height: 27px;
											color: #ed1f23;
											font-size: 14px;
											font-weight: 900;"><span>￥32.30</span></div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="xia" style="width: 1190px;
						height: 1140px;
						font-size: 12px;">
				<div class="xia-left" style="width: 980px;
						overflow: hidden;
						float: left;">
					<ul class="xl-t" style="border: #ddd 1px solid;
							width: 978px;
							height: 38px;
							font-size: 14px;">
						<li style="width: 109px;
									height: 38px;
									color: #333;
									font-size: 14px;
									line-height: 38px;
									text-align: center;
									cursor: pointer;
									float: left;
									border-right: #ddd 1px solid;">商品详情</li>
						<li style="width: 109px;
									height: 38px;
									color: #333;
									font-size: 14px;
									line-height: 38px;
									text-align: center;
									cursor: pointer;
									float: left;
									border-right: #ddd 1px solid;">包装清单</li>
						<li style="width: 109px;
									height: 38px;
									color: #333;
									font-size: 14px;
									line-height: 38px;
									text-align: center;
									cursor: pointer;
									float: left;
									border-right: #ddd 1px solid;">售后服务</li>
						<li style="width: 109px;
									height: 38px;
									color: #333;
									font-size: 14px;
									line-height: 38px;
									text-align: center;
									cursor: pointer;
									float: left;
									border-right: #ddd 1px solid;">客户评论（<span>0</span>）</li>
						<li style="width: 109px;
									height: 38px;
									color: #333;
									font-size: 14px;
									line-height: 38px;
									text-align: center;
									cursor: pointer;
									float: left;
									border-right: #ddd 1px solid;">售前咨询</li>
					</ul>
					<div class="xl-list1" style="width: 980px;overflow: hidden;">
					<div class="xllist-n" style="width: 936px;
									padding-left: 8px;
									border-left: 6px solid #ed1f23;
									font-size: 14px;
									background-color: #fafafa;
									line-height: 35px;
									height: 35px;
									margin-left: 13px;">内容简介</div>
						<div class="xllist1-txt" style="padding: 10px 14px;   
										color: #333333;
										line-height: 26px;
										overflow: hidden;">${str.beiyong6} </div>
					</div>
					<div class="xl-list2">
						<div class="xllist-n" style="width: 936px;
									padding-left: 8px;
									border-left: 6px solid #ed1f23;
									font-size: 14px;
									background-color: #fafafa;
									line-height: 35px;
									height: 35px;
									margin-left: 13px;">目录</div>
						<div class="xllist2-txt" style="padding: 10px 14px;   
									color: #333333;
									line-height: 26px;
									overflow: hidden;">
							<div class="xllist2-txt1"></div>
							<div class="ckmore" style="display: block;
									width: 112px;
									height: 30px;
									line-height: 30px;
									margin: 10px 0 50px;
									border-radius: 2px;
									background-color: #ed1f23;
									color: #fff;
									text-align: center;
									cursor: pointer;">查看全部内容</div>
							<div class="shouqi" style="display: none;
									cursor: pointer;
									width: 110px;
									height: 28px;
									line-height: 28px;
									border: 1px solid #e9e9e9;
									margin: 20px 0;
									border-radius: 2px;
									color: #333333;
									text-align: center;">收起</div>
						</div>
					</div>
					<div class="xl-list3" style="padding: 10px 14px;   
								color: #333333;
								line-height: 26px;
								overflow: hidden;">
						<div class="xllist-n" style="width: 936px;
									padding-left: 8px;
									border-left: 6px solid #ed1f23;
									font-size: 14px;
									background-color: #fafafa;
									line-height: 35px;
									height: 35px;
									margin-left: 13px;">节选</div>
						<div class="xllist3-txt">
							<div class="xllist2-txt2"></div>
							<div class="ckmore"  style="display: block;
									width: 112px;
									height: 30px;
									line-height: 30px;
									margin: 10px 0 50px;
									border-radius: 2px;
									background-color: #ed1f23;
									color: #fff;
									text-align: center;
									cursor: pointer;">查看全部内容</div>
							<div class="shouqi" style="display: none;
									cursor: pointer;
									width: 110px;
									height: 28px;
									line-height: 28px;
									border: 1px solid #e9e9e9;
									margin: 20px 0;
									border-radius: 2px;
									color: #333333;
									text-align: center;">收起</div>
						</div>
					</div>
				</div>
				<div class="xia-right" style="height: 1140px;">
					<div class="left-box02" style="float: right;">
						<div class="b-title">我的足迹<a href="">清空</a></div>
						<ul class="b-list1">
							<li>
								<a href="" title="理想国"><img src="http://images.bxmedia.net/upload/images/1035/710001756362_1_160X160.jpg" alt="" width="60" height="60"></a>
								<p>
									<i>理想国</i>
									<b>￥29.50</b>
								</p>
							</li>
						</ul>
						<ul class="b-list1">
							<li>
								<a href="" title="理想国"><img src="http://images.bxmedia.net/upload/images/1035/710001756362_1_160X160.jpg" alt="" width="60" height="60"></a>
								<p>
									<i>理想国</i>
									<b>￥29.50</b>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	`)
}
