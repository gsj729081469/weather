


let t;
let now=[0];
let next=[0];
function lunbo(dots,imgs,banner,widths){
imgs[0].style.left=0;
	dots[0].classList.add('active');
	for (let i=0;i<dots.length;i++) {
		dots[i].onmouseover=function(){
			for(let j=0;j<dots.length;j++){
				imgs[j].style.left=widths+'px';
				dots[j].classList.remove('active');
			}
			imgs[i].style.left=0;
			dots[i].classList.add('active');
			now=i;
			next=i;
		}
	}
	// 4.自动轮播
	t=setInterval(move,1500);
	function move(){
		next++;
		if(next==imgs.length){
			next=0;
		}
		imgs[now].style.left=0;
		imgs[next].style.left=widths+'px';
		animate(imgs[now],{left:-widths},function(){
			dots[now].classList.remove('active');
			flag=true;
		})
		animate(imgs[next],{left:0},function(){
			for (let j=0;j<dots.length;j++) {
				dots[j].classList.remove('active');
			}
			dots[next].classList.add('active');
			flag=true;
		})
		now=next;
	}
	// 5.鼠标移入banner清除时间间隔函数
	banner.onmouseover=function(){
		clearInterval(t);
	}
	
	// 6.鼠标移走继续时间间隔函数
	banner.onmouseout=function(){
		t=setInterval(move,1500);
	}
}