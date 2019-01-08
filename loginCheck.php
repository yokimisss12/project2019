<?php
	header("Content-type:text/html;charset=utf-8");

	//一、获取用户的输入
	$myphone = $_POST['myphone'];
	$passwords = $_POST['passwords'];
	//二、处理

	//1、建立连接（搭桥）
	$conn = mysql_connect('localhost','root','root');
	if(!$conn){
		die("连接失败");
	}
	//2、选择数据库（选择目的地）
	mysql_select_db("muji",$conn);

	//3、执行SQL语句（传输数据）
	$sqlstr="select * from login where myphone='$myphone' and password='$passwords'";
									

	$result = mysql_query($sqlstr,$conn);//结果是个表格

	//4、关闭数据库（过河拆桥）
	mysql_close($conn);

	//三、响应
	if(mysql_num_rows($result)>0){
		echo "1";
	}else{
		echo "0";
	}

?>