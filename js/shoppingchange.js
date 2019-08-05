//复选按钮
$(".checkdp").change(function(){
	$(this).parents(".order").find(".checkpre").prop("checked",$(this).prop("checked"))
})
$(".checkpre").change(function(){
	var length=$("input[class=checkpre]:checked").length;
	var len=$("input[class=checkpre]").length;
	if(length>0){
		$(this).parents(".order").find(".checkdp").prop("checked",true)
	}else{
		$(this).parents(".order").find(".checkdp").prop("checked",false)
	}
	if(length==len){
		$(".zcheckall").prop("checked",true)
	}else{
		$(".zcheckall").prop("checked",false)
	}
})
$(".checkdp").change(function(){
	var length1=$("input[class=checkdp]:checked").length;
	var len1=$("input[class=checkdp]").length;
	if(length1==len1){
		$(".zcheckall").prop("checked",true)
	}else{
		$(".zcheckall").prop("checked",false)
	}
})
$(".zcheckall").change(function(){
	if($(this).prop("checked")){
		$(".checkdp").prop("checked",true)
		$(".checkpre").prop("checked",true)
		$(".zcheckall").prop("checked",true)
	}else{
		$(".checkdp").prop("checked",false)
		$(".checkpre").prop("checked",false)
		$(".zcheckall").prop("checked",false)
	}
})
getSum()
//点击加
$(".jia").click(function(){
	//数量
	var num=$(this).parents("span").prev().val();
	num++
	$(this).parents("span").prev().val(num)
	//小计
	var p=$(this).parents(".numc").siblings(".pricec").html()
	var total=(num*p).toFixed(1)
	$(this).parents(".numc").siblings(".subtotalc").html("￥"+total)
	//总计
	getSum()
	
})
//点击减
$(".jian").click(function(){
	//数量
	var num=$(this).parents("span").prev().val();
	num--
	$(this).parents("span").prev().val(num)
	if(num<1){
		num=1
		$(this).parents("span").prev().val(num)
	}
	//小计
	var p=$(this).parents(".numc").siblings(".pricec").html()
	var total=(num*p).toFixed(1)
	$(this).parents(".numc").siblings(".subtotalc").html("￥"+total)
	//总计
	getSum()
	
})
//文本框输入
$(".shuru").change(function(){
	//小计
	var n=$(this).val()
	var p=$(this).parents(".numc").siblings(".pricec").html()
	var total=(n*p).toFixed(1)
	$(this).parents(".numc").siblings(".subtotalc").html("￥"+total)
	//总计
	getSum()
})
//点击删除
$(".operationc").click(function(evevt){
	showq()
	$(".qqq").click(()=>{
		var len3=$(this).parents(".order").find(".checkpre").length;
		$(this).parents(".details").remove();
		if(len3<=1){
			$(this).parents(".order").remove();
		}
		$(".zycc").css("display","none")
		getSum()
	})
})
//批量删除
$(".plsc").click(function(){
	showq()
	$(".qqq").click(()=>{
		$(".checkpre:checked").parents(".details").remove();
		$(".order").each(function(i,ele){
			var length2=$(ele).find(".checkpre:checked").length;
			var len2=$(ele).find(".checkpre").length;
			if(length2==len2){
				$(ele).remove();
			}
		})
		$(".zycc").css("display","none")
		getSum()
	})
})
function showq(){
	var helight1=document.body.clientHeight || document.documentElement.clientHeight
	$(".zycc").css("display","block")
	$(".zycc").css("height",helight1)
	$(".shanchu").click(function(){
		$(".zycc").css("display","none")
	})
	$(".xxx").click(function(){
		$(".zycc").css("display","none")
	})
	$(".move").mousedown(function(event){
		var evt=window.event || event;
		var offsetX=evt.offsetX;
		var offsetY=evt.offsetY;
		$(document).mousemove(function(event){
			var evt=window.event || event;
			num1=evt.clientX-offsetX
			num2=evt.clientY-offsetY
			$(".center").css("left",num1)
			$(".center").css("top",num2)
		})
	})
	$(document).mouseup(function(){
		$(document).unbind("mousemove")
	})
}
//总计模块
function getSum(){
	var count=0;
	var money=0;
	//总数量
	$(".shuru").each(function(i,ele){
		count+=parseInt($(ele).val());
	})
	$(".zj").text(count);
	//总计
	$(".subtotalc").each(function(i,ele){
		money+=parseFloat($(ele).text().substr(1));
	})
	$(".totalprice").text("￥"+money.toFixed(2));
	//积分总计
	$(".zjjf").text(parseInt(money).toFixed(1));
}