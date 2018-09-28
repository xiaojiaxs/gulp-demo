requirejs.config({
	baseUrl:"../js/plugins",
	paths:{
		jq:"jquery.min",
		sw:"swiper.min",
		move:"move"
	},
	shim:{
		jq:{
			exports:'jQuery'
		},
		sw:{
			deps:["jq"],
			exports:'Swiper'
		},
		move:{
			exports:'move'
		}
		
	}
});


requirejs(["jq","sw","move"],function($,swiper){
	$(function(){
		new swiper('.swiper-container', {
			// direction:"vertical",
			grabCursor:true,
			loop: true,
			parallax:true,
			slideToClickedSlide:true,

			// 如果需要分页器
			pagination: {
			  el: '.swiper-pagination',
			  clickable:true
			},

			// 如果需要前进后退按钮
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
			autoplay:{
				delay:1000,
				disableOnInteraction:false
			}

			// 如果需要滚动条
			// scrollbar: {
			//   el: '.swiper-scrollbar',
			// }
		})
});


(function(){
	var bo =document.querySelector('.bo4 a');
	 	bo.onclick=function backTop(){

			var timer = setInterval(function(){

				var scrollT = document.documentElement.scrollTop;

				console.log(scrollT);

				if(scrollT > 0){
					scrollBy(0,-200);	
				}else{
					clearInterval(timer);
				}
			},30);
		}
})();



(function(){
		var index=0;
	 	var ul= document.querySelector(".slider ul");
	 	var slider= document.querySelector(".slider");
	 	var prev= document.querySelector(".prev");
	 	var next= document.querySelector(".next");
	 	var dots= document.querySelectorAll(".dot span");
	 	//自动播放
	 	slider.timer=setInterval(fnNext,2000);
	 	//点击圆点切换图片
	 	for(var i=0;i<dots.length;i++){
	 		dots[i].index=i;
	 		dots[i].onclick=function(){
	 			index=this.index;
	 			fncome()
	 		}	
	 	}
	 	function fnNext(){
	 		index++;
	 		if(index == ul.children.length){
	 			index=1;
	 			ul.style.left=0;
	 		}
	 		fncome()
	 	}
	 	function fnPrev(){
	 		index--;
	 		if(index<0){
	 			index=ul.children.length-2;
	 			ul.style.left=-(ul.children.length-1)*slider.clientWidth+'px';
	 		}
	 		fncome()
	 	}
	 	function fncome(){
	 		var num =index;
	 		if(index==dots.length){
	 			num=0;
	 		}
	 		for(var i=0;i<dots.length;i++){
	 			dots[i].className="";
	 		}
	 		dots[num].className="active";
	 		move(ul,{
	 			left:-index*slider.clientWidth},300);
	 	}
})();



(function(){
	var btns = document.querySelectorAll('.btns span');
		var divs = document.querySelectorAll('.dis> div');
		for(var i=0; i<btns.length; i++){
			btns[i].index = i;
			btns[i].onclick=function(){
				for(var i=0; i<btns.length;i++){
					btns[i].className = "";
					divs[i].className = "";
				}
				this.className = "active";
				divs[this.index].className = "active";
			}
		}



		var se =document.querySelector('.top #am1');
	 	var sc =document.querySelector('.top #am2');
	 	sc.onclick=function(){
	 		alert('您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!');
	 	}
	 	se.onclick=function(){
	 		alert('加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.');
	 	}



	 	



	 	var tel =document.querySelector('#tel')
	 	var tel1 =document.querySelector('#tel1')
	 	var tel2 =document.querySelector('#tel2')
	 	var tel3 =document.querySelector('#tel3')
	 	tel.onclick=function(e){
	 		if((/^.+$/.test(tel1.value))&&(/^[\u4e00-\u9fa5]{2,4}$/.test(tel2.value))&&(/^1[3456789]\d{9}$/.test(tel3.value))){
	 			alert("提交成功");
	 			
	 			e = e || window.event;
				e.preventDefault?e.preventDefault():e.returnValue = false;
	 		}else{
	 			alert('请输入正确的内容！')
	 			e = e || window.event;
				e.preventDefault?e.preventDefault():e.returnValue = false;
	 		}	 	
	 	}


})();



});