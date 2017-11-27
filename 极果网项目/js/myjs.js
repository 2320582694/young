	$(function(){
//轮播实现
		var index = 0;
		var timer;
		var len = $(".b-page-con li").length;
		console.log(len)
		//鼠标点击li的时候
		$(".b-page-con li").click(function(){
			index = $(this).index();//获取当前点击的li的index
			$(this).addClass('on').siblings().removeClass('on');
			//改变图片的索引
			$(".img-ul li").addClass("listitem").siblings().removeClass("listitem");
			//淡入淡出
			$(".img-ul li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
		});
		//点击右箭头的时候
		$("#bn-next").click(function(){
			//索引的循环方法
				index++;
				//取模%的妙用  当前者小于后者时，结果为前者。如4%5==4，5%5==0.所以当索引加到5的时候，又会返回从0开始
				index = index % len;
				//找到对应的原点 
				$(".b-page-con li").eq(index).addClass("on").siblings().removeClass("on");
				//改变原点对应的li的图片
				$(".img-ul li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
		});
		//点击左箭头的时候
		$("#bn-prve").click(function(){
			//索引的循环方法
				index--;
				index = index % len;
				//找到对应的原点 
				$(".b-page-con li").eq(index).addClass("on").siblings().removeClass("on");
				//改变原点对应的li的图片
				$(".img-ul li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
		});
		
		//定时轮播
		function auto(){
			timer = setInterval(function(){
				//索引的循环方法
				index++;
				index = index % len;
				//找到对应的原点 
				$(".b-page-con li").eq(index).addClass("on").siblings().removeClass("on");
				//改变原点对应的li的图片
				$(".img-ul li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
			},1500);
		};
		auto();
		
		//鼠标移入时关闭定时器
		$(".banner").hover(function(){
			clearInterval(timer);
		},function(){
			//否则开启
			auto();
		})
		
		/*热门相关主要内容样式*/
		$("#hot-event-box li").hover(function(){
			var index = $(this).index();
			var hideDom = $(".e-item-hide");
			hideDom.eq(index).stop(true,true).toggle('slow');
		})
		
		
		
		
  /*右边置顶及头部导航特效*/
		/*点击盒子 滚动条为0 达到指定效果*/
		$("#query-top").click(function(){
			$("body,html").animate({scrollTop:0},500);
		});
		$(window).on("scroll",function(){
		/*当窗口高于600的时候出现盒子  出现右下栏*/
			if($(this).scrollTop()>=600){
				$("#ri-warp").stop(true,true).show('slow');
			}else{
				$("#ri-warp").stop(true,true).hide('slow');
			}
		});
		/*当窗口距离顶部的距离大于热门相关的时候就让吸顶的导航添加样式使之显示*/
        var fixTop = $('#hot-relevant').offset().top;//热门相关距离顶部的距离
        var doc = $('#XDmynav');
        var scrollTop = null;
        $(window).scroll(function () {
            scrollTop = $(window).scrollTop();
            if (scrollTop > fixTop) {//当滚动条距离顶部的距离大于热门相关距离的顶部的时候
                doc.addClass('header-move');
            } else if(scrollTop <fixTop){
                doc.removeClass('header-move');
            }
        });
			
		/*电话 微信弹出内容*/
			$("#ri-warp .call-i").hover(function(){
				$(".call-info").toggle();
			})
			$("#ri-warp .wx-i").hover(function(){
				$(".wx-info").toggle();
			})
			$('#app-a').hover(function(){
				$('.app-download').toggle();
			})
		//展开更多   给相应的div加上最小高度 以达到展开的目的
		$("#myclick").click(function(){
			var hotDom = $(".hot-rel-warp");
			var hoteventDom = $(".hot-event");
			hotDom.addClass("minhg825");
			hoteventDom.addClass("minhg825");
			$("#hot-relevant").addClass("minhg825");
			$(".load-hot-warp").css('display','none');
			$("#Selected").css('margin-top','50px')
		});
			
	});
	//登录表单验证及其他
	$(function(){

			
		//点击登录  弹出登录模态框弹出框
		$('#mylogin,#mylogin2').click(function(){
			$('.login-layer').css('visibility','visible');
			$('.layer-shade').css('visibility','visible')
		});
		//点击叉取消登录
		$('.close-icon').click(function(){
			$('.login-layer').css('visibility','hidden');
			$('.layer-shade').css('visibility','hidden');
		})
		//点击模态框 取消登录
		$('.layer-shade').click(function(){
			$('.login-layer').css('visibility','hidden');
			$(this).css('visibility','hidden');
		})
		
		//账号失去焦点的时候
		$('.tel').blur(function(){
			var reg = /^1[3|5|7|8]\d{9}$/;
			var tel = $('.tel').val();
			if(tel == ''){
				$('#t-non-empty').show();
				//键盘事件的时候  提示消息清空
				$('.tel').keyup(function(){
					$('#t-non-empty')[0].innerHTML = '';
				})
				return false;
			}else if(!reg.test(tel)){
					$('#t-non-empty')[0].innerHTML='请输入规范的账号';
				
				return false;
			}else{
				$('#t-non-empty').hide();
				return true;
			}
		});
		
		
		
		//账号获取焦点时   清空输入框
		$('.tel').focus(function(){
			$('.tel').val('');
		})
		
		
		//密码失去焦点的时候
		$('.pass').blur(function(){
			var reg2 = /\w{6,12}/;
			var psw = $('.pass').val();	
			if(psw == ''){
				$('#p-non-empty').show();
				//键盘事件时清空 提示框
				$('.pass').keyup(function(){
					$('#p-non-empty')[0].innerHTML = '';
				})
				return false;
			}else if(!reg2.test(psw)){
				$('#p-non-empty')[0].innerHTML='密码格式不正确';
				return false;
			}else{
				$('#p-non-empty').hide();
				return true;
			}
		})
		//获取焦点  清空输入框
		$('.pass').focus(function(){
			$('.pass').val('');
			//$('#p-non-empty')[0].innerHTML='请输入您的账号';
		})
//?为什么没有返回  布尔值		
		//console.log($('.pass').blur())
		//点击登录框表单验证
		$('#window-login-submit').click(function(){
			if($('.tel').blur()&&$('.pass').blur()){
				console.log(111)
					$('#layer').show();
				setTimeout(function(){
					$('#layer').hide()						
				},2000)
			}else{
				console.log(2222)
				$('.tel').focus();
			}
		})
	})
	//表单相关结束
