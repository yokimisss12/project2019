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
		})
		
	
		$(function() {
			$("#submitbtn").click(function() {

				$("#myphone").val(function() {
					var reg = /^1\d{10}$/;
					console.log("$('#myphone').val()")
					if (reg.test(this.value)) {
						console.log("正确");
					} else {
						alert("手机号码格式错误")
					}
					

				})
				
				
				$("#passwords").val(function() {
					var reg = /\w{2,}/;
					if (reg.test(this.value)) {
						console.log("正确");
					} else {
						alert("密码格式错误");
					}
				})
				
				
				
					var $myphone = $("#myphone").val();
					var $passwords=$("#passwords").val();
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
								window.location.href = "Network mall.html";
							}else{
								alert("登录失败");
								
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
