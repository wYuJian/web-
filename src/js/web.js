$(function(){
			$(".skill-content-item").hide();
			$(".skill-info").hide();
			$(".skill-content-item h2").hide();
			$(".skill-title").hide();
		    $('#dowebok').fullpage({
		    	anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
				menu: '#menu',
				'navigation': true,
				'navigationPosition': 'right',
				'navigationTooltips': ['首页', '关于我', '心路历程', '专业技能',"我的作品","联系我"],
				'slidesNavigation':true,
				'controlArrowColor':"#036572",
				'loopHorizontal':false,
				afterLoad:function(anchorLink,index){
					if(index == 1){
						 bounceIn()
					}
					if(index != 1){
						$(".index-title").css("display","none");
						$(".index-secp").css("display","none");
					}
					if(index==2){
						$(".about-me").addClass('animated fadeInDown isNone');
						$(".about_info").fadeIn('slow');
						$(".about_info").css({
							display: 'flex'
						});
					}
					if(index != 2){
						$(".about-me").removeClass('animated fadeInDown isNone');
						$(".about_info").fadeOut('slow');
					}
					if(index == 3){
						$(".sec3Nav li").addClass('animated slideInLeft');
						$(".sec3Nav").show();
						$(".sec3Wrap").addClass('animated slideInRight');
						$(".sec3Wrap").show();

					}
					if(index != 3){
						$(".sec3Nav li").removeClass('animated slideInLeft');
						$(".sec3Nav").hide();
						$(".sec3Wrap").hide();
						$(".sec3Wrap").removeClass('animated slideInRight');
					}
					if(index == 4){
						$(".skill-title").show();
						$(".skill-title").addClass('animated bounceInDown');
						$(".skill-content-item h2").show();
						$(".skill-content-item h2").addClass('animated rollIn')
						$(".skill-content-item").fadeIn(2000);
						$(".skill-info").fadeIn(4000);
					}
					if(index != 4){
						$(".skill-title").hide();
						$(".skill-title").removeClass('animated bounceInDown');
						$(".skill-content-item h2").hide();
						$(".skill-content-item h2").removeClass('animated rollIn')
						$(".skill-content-item").fadeOut(1000);
						$(".skill-info").fadeOut(1000);
					}
				}
		    });
		    bounceIn()
		     $("#menu li").hover(function() {
			   		$(this).addClass('animated tada');
			   }, function() {
			   		$(this).removeClass('tada');
			   });
		     function bounceIn(){
		     	$(".index-title").css("display","block");
		     	$(".index-title").addClass('animated bounceInDown');
		     	$(".secp1").css("display","block");
	    		$(".secp1").addClass('animated bounceInUp');
		     	setTimeout(function(){
			    	$(".secp2").css("display","block");
	    			$(".secp2").addClass('animated bounceInUp');
			    }, 300);
		     	setTimeout(function(){
			    	$(".secp3").css("display","block");
	    			$(".secp3").addClass('animated bounceInUp');
			    }, 600);
	    		setTimeout(function(){
			    	$(".secp4").css("display","block");
	    			$(".secp4").addClass('animated bounceInUp');
			    }, 900);
			    setTimeout(function(){
			    	$(".index-title").removeClass('bounceInDown');
			    	$(".secp1").removeClass('animated bounceInUp');
			    	$(".secp2").removeClass('animated bounceInUp');
			    	$(".secp3").removeClass('animated bounceInUp');
			    	$(".secp4").removeClass('animated bounceInUp');
			    }, 2000);
		     }
		     var lichengTitle = ["简单的自我介绍-->","为什么想做前端工程师-->","有什么样的优势和不足-->","我的梦想-->"];
		   $.each(lichengTitle, function(index, val) {
		   		var secClass = "sec3-li"+(index+1); 
		   	 	$(".sec3Nav").append('<li class='+secClass+'>'+val+'</li>');
		   });
		   var content = ["您好，我是王玉剑&爱编程，爱前端，爱新技术，&爱运动，爱健身，爱旅行，&生活中活泼开朗、喜欢沟通交流，&工作上认真负责、热爱学习创新，&目前，自身技术还差很远，&但，路程虽远，仍要负重前行！！",
		   "可能就像这一句情话&You are the css to my html.&“我的生活索然无味，&直到遇见了你。”&为爱好而学，为看好这个行业而学",
		   "我的不足是：应届毕业生，实战经验不足，改进ing!&我的优势是：计算机专业&这使我对专业名词有一定是了解。&如果您看好我，&那就选我吧！",
		   "有人说【IT是个青春饭】&但我 (ฅ´ω`ฅ)&会一直走下去&成为一名优秀的前端工程师&。&。&当然，得先有一个您给我发的offer！"];
		    $.each(content, function(index, val) {
		   	 	var div = $('<div class="NoShow sec3Box"></div>');
		   	 	$.each(val.split("&"), function(i,item) {
		   	 		 div.append('<p>'+item+'</p>')
		   	 	});
		   	 	
		   	 	$(".sec3Wrap").append(div);
		   });
		    $(".sec3Box").eq(0).removeClass('NoShow');
		    $(".sec3Nav li").on("mouseover",function(){
		    	var index = $(this).index();
		    	$(".sec3Box").eq(index).removeClass('NoShow').siblings().addClass('NoShow');
		    })
		    $(".W-lian-bottom").on("mouseover",function(){
		    	$(this).children('span').fadeIn(2000).siblings().stop();
		    })
		    $(".W-lian-bottom").hover(function() {
		    	$(this).children('span').fadeIn(100).siblings().stop();
			$(this).siblings().animate().stop();
		    }, function() {
		    	$(this).children('span').fadeOut(100);
			$(this).siblings().animate().stop();
		    });
		});
