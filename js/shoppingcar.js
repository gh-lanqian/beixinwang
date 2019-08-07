
function rendersplist(str){
	for(let i=0;i<str.length;i++){
		$(".cart").append(`
			<div class="order" style="width: 980px;
							overflow: hidden;
							margin-top:10px;">
				<div class="ordernav" style="width: 980px;
							height: 37px;
							line-height: 37px;
							background: #e3e3e3;">
					<div class="shop" style="border-bottom: #b2d1ff 3px solid;
							width: 460px;
							height: 34px;
							float: left;">
						<input type="checkbox" style="vertical-align: middle;margin-left: 10px;" class="checkdp" checked="checked">
						<img src="http://www.bxmedia.net/template/bdw/statics/images/96.png" alt="" class="imgdp" style="vertical-align: middle;margin-left: 20px;">
						<a href="" style="color: #666666;">${str[i].beiyong2}</a>
						<a href=""><img src="http://www.bxmedia.net/template/bdw/statics/images/qq.png" alt="" style="vertical-align: middle;"></a>
					</div>
					<div class="numm" style="border-bottom: #b2d1ff 3px solid;
									width: 109px;
									height: 34px;
									margin-left: 4px;
									text-align: center;
									float: left;">数量</div>
					<div class="pricee" style="border-bottom: #b2d1ff 3px solid;
									width: 109px;
									height: 34px;
									margin-left: 4px;
									text-align: center;
									float: left;">单价</div>
					<div class="subtotal" style="border-bottom: #b2d1ff 3px solid;
									width: 109px;
									height: 34px;
									margin-left: 4px;
									text-align: center;
									float: left;">小计</div>
					<div class="operation"style="border-bottom: #b2d1ff 3px solid;
									width: 177px;
									height: 34px;
									margin-left: 4px;
									text-align: center;
									float: left;">操作</div>
				</div>
				<div class="details" style="width: 980px;
									background: #E8F1FF;
									border-top: #b2d1ff 1px solid;
									overflow: hidden;">
					<div class="details-left" style="width: 460px;
									margin-top: 10px;
									float: left;">
						<input type="checkbox" style="margin-left: 10px;float: left;" class="checkpre" checked="checked">
						<a href="" style="display: block;
									width: 51px;
									height: 51px;
									float: left;
									border-width: 1px;
									border-style: solid;
									border-color: #cccccc;
									border-image: initial;
									padding: 1px;
									margin: 0px 10px;"><img src="${str[i].goodsImg}" alt="" width="50px" height="50px"></a>
						<span style="color: #2652A5;cursor: pointer;">${str[i].goodsName}</span>
					</div>
					<div class="numc" style="width: 100px;
									float: left;
									margin-top: 20px;">
						<input type="text" value="1" style="width: 59px;
									height: 29px;
									padding-left: 5px;
									line-height: 27px;
									margin-right: 3px;
									float: left;
									border: 1px solid #a7a6ac;
									outline: none;" class="shuru">
						<span style="cursor: pointer;">
							<img src="http://www.bxmedia.net/template/bdw/statics/images/100.png" alt="" class="jia">
							<img src="http://www.bxmedia.net/template/bdw/statics/images/101.png" alt="" class="jian">
						</span>
					</div>
					<div class="pricec" style="width: 95px;
									margin-top: 20px;
									line-height: 30px;
									text-align: center;
									float: left;
									font-size: 14px;
									font-weight: 900;">${str[i].goodsPrice}</div>
					<div class="subtotalc" style="margin-top: 20px;
									line-height: 30px;
									text-align: center;
									float: left;
									font-size: 14px;
									font-weight: 900;
									width: 125px;
									color: #cc0000;">￥${str[i].goodsPrice}</div>
					<div class="operationc" style="margin-top: 20px;
									line-height: 30px;
									text-align: center;
									float: left;
									width: 177px;
									color:#2652A5;
									font-size: 12px;
									font-weight: 100;
									cursor: pointer;">删除此商品</div>
				</div>
				
				<div class="promote-sales" style="clear: both;
									width: 980px;
									height: 48px;
									border-top: 1px dashed #80b2ff;
									background: #edf4ff;">
					<span style="display: block;
									margin-left: 32px;
									margin-top: 15px;
									color: #999999;">店铺优惠：</span></div>
							
			</div>
		`)
	}
}