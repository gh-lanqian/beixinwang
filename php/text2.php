<?php
	header("Content-type:text/html;charset=utf-8");
	//1.接受数据
	$userphone=$_POST['userphone'];
	// 2.保存
	// 1)建立连接
	$con=mysql_connect('localhost','root','mypass');
	if(!$con){
		die('连接失败');
	}
	//2)选择数据库
	mysql_select_db("mydb0715",$con);
	//3)执行SQL语句
	$sqlstr="select * from beixinvip where userphone='$userphone'";
	$res = mysql_query($sqlstr);
	$result = mysql_fetch_array($res);
	$data = array();
	
	//3.响应
	if($result)
	{
		$data[] = $result;
		$json = json_encode($data, JSON_UNESCAPED_UNICODE);
		echo $json;
	}else{
		echo 0;
	}
	//4)关闭数据库
	mysql_close($con);
?>