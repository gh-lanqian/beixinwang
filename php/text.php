<?php
	header("Content-type:text/html;charset=utf-8");
	//1.接受数据
	// $userpass=$_POST['userpass'];
	$userphone=$_POST['userphone'];
	//2.保存
	//1)建立连接
	$con=mysql_connect('localhost','root','mypass');
	if(!$con){
		die('连接失败');
	}
	//2)选择数据库
	mysql_select_db("mydb0715",$con);
	//3)执行SQL语句
	$sqlstr="select * from beixinvip where userphone='$userphone'";
	$result = mysql_query($sqlstr);
	//4)关闭数据库
	mysql_close($con);
	
	//3.响应
	//判断查询出来的表格的行数。
	$rows = mysql_num_rows($result);
	if($rows==1){
		echo 1;
	}else{
		echo 0;
	}
?>
