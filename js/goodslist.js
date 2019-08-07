
function goodsrender(str){
	for(let i=0;i<str.length;i++){
		$(".right-listmore").append(`
			<li class="goodsli" style="position: relative;
							border:1px solid white;
							width: 224px;
							font-size: 12px;
							height: 392px;
							margin: 0 9px;
							float:left;
							">
							
				<div class="listdiv" style="position: relative;
									left: -1px;
									top:  27px;
									border:1px solid white;
									width: 224px;
									height: 390px;">
					<div class="picture">
						<a href="" style="display: block;
								width: 200px;
								height: 200px;
								overflow: hidden;
								margin: 0 auto;" class="descript">
							<img src="${str[i].goodsImg}" alt="" style="vertical-align: middle;" title="${str[i].goodsName}"></a>
					</div>
					<p style="width: 202px;
							height: 18px;
							line-height: 18px;
							margin: 16px auto 0;">
							<a href="" title="${str[i].goodsName}" style="color: #666666;
									width:200px;
									white-space:nowrap;
									overflow:hidden;
									text-overflow:ellipsis;
									">
									${str[i].goodsName}</a></p>
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
									padding-right: 3px;">${str[i].beiyong5}</a>
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
									padding-right: 3px;">￥${str[i].goodsPrice}</i>
						<span style="text-decoration: line-through;color: #999999;">￥${str[i].beiyong1}</span>
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
						<span class="shop" style="display: inline-block;
									width: 71px;
									height: 28px;
									line-height: 28px;
									cursor:pointer;
									color: #eb2c3a;
									margin-left: -1px;
									padding-left: 34px;
									border: 1px solid #dddddd;
									float: left;
									background: url(http://www.bxmedia.net/template/bdw/statics/images/heart-icon.png) no-repeat 8px -40px;">加到购物车</span>
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
									">${str[i].beiyong2}</a>
						<span style="display: inline-block;float: left;">等
						<a href="" class="sj" style="padding: 0 2px;color: #666666;">${str[i].beiyong3}</a>
						在售</span>
					</div>
					<div class="showmore" style="display:none;
									z-index:2;
									white-space:nowrap;
									overflow:hidden;
									text-overflow:ellipsis;
									width: 211px;
									height: 30px;
									line-height: 31px;
									padding-left: 5px;
									position: relative;
									left: 0;
									bottom: 0;
									background-color: #ededed;
									color: #666666;">
						${str[i].beiyong4}
					</div>
				</div>
			</li>
	`)
	}
}
function addevent(str){
	$(".descript").click(function(){
		$(this).prop("href","description.html")
	})
	$(".shop").each(function(i,ele){
		$(ele).click(function(){
			var userphone=getCookie("userphone");
			// console.log(userphone)
			var goodsId=str[i].goodsId
			console.log(goodsId)
			var goodsCount="1"
			$.get("php/addShoppingCart.php",{vipName:userphone,
			goodsId:goodsId,goodsCount:goodsCount
			},
			function(str){
				if(str==0){
					alert("加入购物车失败")
				}else{
					var helight1=document.body.clientHeight || document.documentElement.clientHeight;
					$(".zyc").css({"display":"block","height": helight1 });
					$(".godele").click(function(){
						$(".zyc").css({"display":"none"});
					})
					$(".contgoods").click(function(){
						$(".zyc").css({"display":"none"});
					})
				}
			})
		})
	})
	// $(".shop").click(function(){
	// 	var helight1=document.body.clientHeight || document.documentElement.clientHeight;
	// 	$(".zyc").css({"display":"block","height": helight1 });
	// 	$(".godele").click(function(){
	// 		$(".zyc").css({"display":"none"});
	// 	})
	// 	$(".contgoods").click(function(){
	// 		$(".zyc").css({"display":"none"});
	// 	})
	// })
	// 
	$(".goodsli").mouseenter(function(){
		$(this).css({"border-color":"#e6e6e6","border-bottom-color":"white"});
		$(this).children(".listdiv").css({"border-color":"#e6e6e6","border-top-color":"white"});
		$(this).find(".showmore").css({"display":"block"});
		$(this).find(".sj").css({"color":"red"});
	})
	$(".goodsli").mouseleave(function(){
		$(this).css({"border-color":"white"});
		$(this).children(".listdiv").css({"border-color":"white"});
		$(this).find(".showmore").css({"display":"none"});
		$(this).find(".sj").css({"color":"#666666"});
	})
	$(".shop").mouseenter(function(){
		$(this).css({"border":"1px solid red"});
	})
	$(".shop").mouseleave(function(){
		$(this).css({"border":"1px solid #dddddd"});
	})
	$(".shoucan").mouseenter(function(){
		$(this).css({"border":"1px solid red","background-position":"8px -14px","transition":"background-position .1s"});
		$(this).next().css({"border-left":"1px solid red"});
	})
	$(".shoucan").mouseleave(function(){
		$(this).next().css({"border-left":"1px solid #dddddd"});
		$(this).css({"border":"1px solid #dddddd","background-position":"8px 8px","transition":"background-position .1s"});
	})
}	
