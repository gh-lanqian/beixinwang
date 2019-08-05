function sale(){
	let salelist=[
		[
			"http://images.bxmedia.net/upload/259/2019/7/23/45/454ca-d957-443f-bb66-9fd3ca2d0cd.jpg",
			"暑期读物 曹文轩小说阅读与鉴赏（全10册）",
			"248.00",
			"5.0折",
			"0",
			"5",
			"124.00"
		],
		[
			"http://images.bxmedia.net/upload/259/2019/7/23/66/80dc3-fde8-4083-8bf8-3052cf4caa8.jpg",
			"暑期读物 父与子全集（上）",
			"89.00",
			"5.0折",
			"0",
			"5",
			"44.50"
		],
		[
			"http://images.bxmedia.net/upload/259/2019/7/23/66/80dc3-fde8-4083-8bf8-3052cf4caa8.jpg",
			"暑期读物 父与子全集（下）",
			"89.00",
			"5.0折",
			"0",
			"5",
			"44.50"
		],
		[
			"http://images.bxmedia.net/upload/259/2019/7/23/85/75ebb-d5a6-48ba-b150-87235d99027.jpg",
			"暑期读物 神奇大象巴巴",
			"128.00",
			"5.0折",
			"0",
			"5",
			"64.00"
		],
		[
			"http://images.bxmedia.net/upload/259/2019/7/23/68/64e8d-904d-4754-84d8-b215ce86711.jpg",
			"暑期读物 崔玉涛宝贝健康公开课",
			"48.00",
			"5.0折",
			"0",
			"11",
			"24.00"
		],
		[
			"http://images.bxmedia.net/upload/259/2019/7/23/16/70464-38e0-4a16-87b8-d97f36870ce.jpg",
			"暑期读物 谁拆了我的汽车",
			"19.80",
			"5.0折",
			"0",
			"10",
			"9.90"
		],
	]
	renderssales(salelist)
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
					<a href=""><img src="${str[i][0]}" alt="" style="width:  478px;
							height: 100%;
							margin-top: 5px;"></a>
				</div>
				<p style="font-size: 14px;
							font-weight: 900;
							padding: 15px 0 0 15px;
							overflow: hidden;">
				${str[i][1]}</p>
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
							font-size: 12px;">原价：￥${str[i][2]}</li>
					<li class="pri-list" style="float: left;
							color: #333;
							line-height: 43px;
							text-align: center;
							margin: 0px;
							width: 120px;
							border: 0;
							font-size: 12px;">折扣：${str[i][3]}</li>
					<li class="pri-list" style="float: left;
							color: #333;
							line-height: 43px;
							text-align: center;
							margin: 0px;
							width: 120px;
							border: 0;
							font-size: 12px;">购买<span style="color: #cc0000;font-weight: 900;">${str[i][4]}</span>件</li>
					<li class="pri-list" style="float: left;
							color: #333;
							line-height: 43px;
							text-align: center;
							margin: 0px;
							width: 120px;
							border: 0;
							font-size: 12px;">剩余：<span style="color: #cc0000;font-weight: 900;">${str[i][5]}</span>件</li>
				</ul>
				<div class="pro-bottom" style="background: url(http://www.bxmedia.net/template/bdw/statics/images/6-01.JPG) no-repeat;
							width: 480px;
							height: 47px;">
					<span style="color: white;
							font-size: 20px;
							font-weight: 900;
							margin-left: 20px;
							line-height: 47px;">￥${str[i][6]}</span>
					<a href="" style="margin: 10px 10px 0 0;float: right;"><img src="http://www.bxmedia.net/template/bdw/statics/images/02-08.PNG" alt=""></a>
				</div>
			</li>
		`)
	}
}