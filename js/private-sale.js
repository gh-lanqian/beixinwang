function sale(){
	
	$.get("php/getGoodsList.php",
		function(data){
			data=JSON.parse(data)
			renderssales(data)
		});

}
function renderssales(str){
	for(let i=0;i<str.length;i++){
		$(".list-process").append(`
			<li style="border: #d7d7d7 1px solid;
							width: 478px;
							margin: 10px 18px 10px 0;
							float: left;">
				<div class="listImage" style="height: 300px;
							width: 480px;
							overflow: hidden;">
					<a href=""><img src="${str[i+32].goodsImg}" alt="" style="width:  478px;
							height: 100%;
							margin-top: 5px;"></a>
				</div>
				<p style="font-size: 14px;
							font-weight: 900;
							padding: 15px 0 0 15px;
							overflow: hidden;">
				${str[i+32].goodsName}</p>
				<ul class="pricesale" style="background: url(http://www.bxmedia.net/template/bdw/statics/images/06-3-11.png) repeat-x;
							width: 480px;
							height: 43px;
							cursor: pointer;">
					<li class="pri-list" style="float: left;
							color: #333;
							line-height: 43px;
							text-align: center;
							margin: 0px;
							width: 120px;
							border: 0;
							font-size: 12px;">原价：￥${str[i+32].beiyong1}</li>
					<li class="pri-list" style="float: left;
							color: #333;
							line-height: 43px;
							text-align: center;
							margin: 0px;
							width: 120px;
							border: 0;
							font-size: 12px;">折扣：${str[i+32].goodsDesc}</li>
					<li class="pri-list" style="float: left;
							color: #333;
							line-height: 43px;
							text-align: center;
							margin: 0px;
							width: 120px;
							border: 0;
							font-size: 12px;">购买<span style="color: #cc0000;font-weight: 900;">${str[i+32].beiyong13}</span>件</li>
					<li class="pri-list" style="float: left;
							color: #333;
							line-height: 43px;
							text-align: center;
							margin: 0px;
							width: 120px;
							border: 0;
							font-size: 12px;">剩余：<span style="color: #cc0000;font-weight: 900;">${str[i+32].goodsCount}</span>件</li>
				</ul>
				<div class="pro-bottom" style="background: url(http://www.bxmedia.net/template/bdw/statics/images/6-01.JPG) no-repeat;
							width: 480px;
							height: 47px;">
					<span style="color: white;
							font-size: 20px;
							font-weight: 900;
							margin-left: 20px;
							line-height: 47px;">￥${str[i+32].goodsPrice}</span>
					<a href="" style="margin: 10px 10px 0 0;float: right;"><img src="http://www.bxmedia.net/template/bdw/statics/images/02-08.PNG" alt=""></a>
				</div>
			</li>
		`)
	}
}