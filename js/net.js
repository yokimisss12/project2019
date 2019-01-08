$(function() {
			var mySwiper = new Swiper('.swiper-container', {
				direction: 'horizontal', // 垂直切换选项
				loop: true, // 循环模式选项
				autoplay: {
					delay: 2000,
				},

				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},

				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},

			})
		})
		
		
		

		$(function() {
			//search//
			$(".icon-sousuo").click(function() {
				$("#mainPage").css("display", "none");
				$("#searchBox").css("display", "block");
				$('body').css('overflow', 'hidden');
				//$('body').css('overflow','hidden');//禁止滚动  这句话加在搜索框弹出后

			})
			$("#search_pic").click(function() {
				$("#mainPage").css("display", "block");
				$("#searchBox").css("display", "none");
				$('body').css('overflow', 'visible');
			})

			//classify//
			$(".icon-fenlei").click(function() {
				$("#mainPage").css("display", "none");
				$("#classify").css("display", "block");
				$('body').css('overflow', 'hidden');


			})
			$("#classify_pic").click(function() {
				$("#mainPage").css("display", "block");
				$("#classify").css("display", "none");
				$('body').css('overflow', 'visible');
			})
				
				//app//

				
		







			//login//

			$(".icon-xiaoxiduihuaxinxi").click(function() {
				$("#loginBox").css({
					"display": "block",
					"z-index": 999
				})
				// $("#mainPage").css("display", "none");
				$('body').css('overflow', 'hidden');


				$("#loginBox").animate({
					"top": "-620px",
				}, 300, function() {
					$("#login_service").css("display", "block");
					$("#mainPage").css("display", "none");

				})
			})

			$("#close").click(function() {
				$("#mainPage").css("display", "block"); 
				$("#loginBox").animate({
					"top": "750px"
				}, 300, function() {
					$("#loginBox").css({
						"display": "none",
						"z-index": 0
					})
					$('body').css('overflow', 'visible');
				})
			})
			
			$("#login").click(function(){
				$("#loginBox").css({
									"display": "block",
									"z-index": 999
								})
								// $("#mainPage").css("display", "none");
								$('body').css('overflow', 'hidden');
				
				
								$("#loginBox").animate({
									"top": "-620px",
								}, 300, function() {
									$("#login_service").css("display", "block");
									$("#mainPage").css("display", "none");
				
								})
			})
			
		})
		$(function(){
						// 从cookie中获取用户名
						
				let $myphone=getCookie("myphone");
				if($myphone){
					$("#login").css("display","none");
					$("#user_img img").css("display","block");
					$("#boxx").css("display","block");
				// alert($myphone)
				}
				
				$("#account").click(function(){
					window.location.href = "myAccount.html"
				})
				
		})

	
		$(function() {
			$("#submitbtn").click(function() {
				
					var $myphone = $("#myphone").val();
					var $passwords=$("#passwords").val();
					var reg=/^1\d{10}$/;
						
						if($myphone==""){
							alert("请输入用户名");
						}else if(reg.test($myphone)){
							console.log("正确");
						}else{
							alert("手机号码格式错误");
							return;
						}

						var reg=/\w{3,12}/;
					
						if($passwords==""){
							alert("请输入密码");
						}else if(reg.test($passwords)){
							console.log("正确");
						}else{
							alert("密码不正确");
							return;
						}
					$.ajax({
						type:"post",
						url:"loginCheck.php",
						data: { 
							myphone:$myphone,
							passwords:$passwords
						},
						success:function(xhr){
							if(xhr==1){
								alert("登陆成功！")
								saveCookie("myphone",$("#myphone").val(),7)
								window.location.href = "networkmall.html";
						
							}else{
								alert("登录失败");
								return;
							}
						}
					})
				 
				   
				})
				
})

		$(function() {
			$('#newperson').click(function() {
				window.location.href = "reg.html";
			})
		})
		
		$(function(){
			$("#boxx").mouseleave(function(){
				$("#boxx").children().hide("normal");
			})
			$("#boxx").mouseenter(function(){
				$("#boxx").children().show("normal");
			})
			
// 		$("#app_text").mouseleave(function(){
// 					$("#app_pic").hide("normal");
// 			})
// 			$("#app_text").mouseenter(function(){
// 					$("#app_pic").show("normal");
// 			})
// 
			$("#app").mouseover(function(){
				$("#app_pic").css("display","block")
			})
			$("#app").mouseout(function(){
				$("#app_pic").css("display","n")
			})

			
		})




// 	$(function(){
// 		$("#accountbox").css("display","none")
// 		$("#user_img").mouseover(function(){
// 			$("#accountbox").css("display","block")
// 		})
// 		
// 		
// 	})
		// $("#parentBox").animate({
		// 	"width":"500",
		// 	"height":"300",
		// 	"opacity":1,
		// 	"background-color":"blue"			
		// },2000);
