// 1.获取元素
	
	// 参数1：轮播点元素集合
	// 参数2：图片元素集合
	// 参数3：banner盒子元素
	// 参数4：左箭头元素
	// 参数5：右箭头元素
	
	function banner_oi(dots,imgs,banner,lbtn,rbtn){
//	console.log(dots,imgs);
	// 初始状态：让第一张图片显示/层级提高
	imgs[0].style.zIndex=2;
	// 对应的轮播点改变样式
	dots[0].style.background='#fff';
	// 鼠标移入每个轮播点
	for (let i=0;i<dots.length;i++) {
		dots[i].onmouseover=function(){
			// 其余图片变回1，其余轮播点改变样式
			for (let j=0;j<imgs.length;j++) {
				imgs[j].style.zIndex=1;
				dots[j].style.background='#333';
			}
			// 对应图片层级提高
			imgs[i].style.zIndex=2;
			// 对应轮播点样式改变
			dots[i].style.background='#fff';
			// 当鼠标移走后继续轮播
			num=i;
		}
	}
	
	
	
	//  实现自动轮播
	let num=0;
	let t=setInterval(move,1500);
	function move(){
		num++;
		if(num==5){
			num=0;
		}
		// 其余图片变回1，其余轮播点改变样式
			for (let j=0;j<imgs.length;j++) {
				imgs[j].style.zIndex=1;
				dots[j].style.background='#333';
			}
			imgs[num].style.zIndex=2;
			dots[num].style.background='#fff';
		
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,1500)
	}
	
	// 点击右箭头，同move
	rbtn.onclick=function(){
		move();
	}
	
	// 点击左箭头
	lbtn.onclick=function(){
		movel();
	}
	function movel(){
		num--;
		if(num<0){
			num=4;
		}
		for (let j=0;j<imgs.length;j++) {
				imgs[j].style.zIndex=1;
				dots[j].style.background='#333';
			}
			imgs[num].style.zIndex=2;
			dots[num].style.background='#fff';
	}
}
