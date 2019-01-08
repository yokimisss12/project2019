function getCookie(key){
	// 一、获取全部的cookie
	var str=unescape(document.cookie);

	// 将获取的cookie以（";"）分隔后，赋给数组
	var arr=str.split(";");

	for(var i in arr){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].split("=")[1];
		}
	}
	return null;
}
$(function(){
	showWelecom();
})
function showWelecom(){
	// 从cookie中获取用户名
	let $userName=getCookie("userName");
	alert($userName);
	
}