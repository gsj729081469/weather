window.onload=function(){
//1.获取元素
//轮播
	let btns=document.querySelectorAll('.btn-banner li');
	let imgs=document.querySelectorAll('.banner-img img');
	let banner=document.querySelector('.banner');
	let lbtn=document.querySelector('.img-left');
	let rbtn=document.querySelector('.img-right');
    banner_oi(btns,imgs,banner,lbtn,rbtn,'hot',3000);
    
//选项卡 
    let li=document.querySelectorAll('.right-list > li > a');
	let list=document.querySelectorAll('.jd-bottom-right');
	xuanxiangka(li,list,'right-list-hot');
	
//左右轮播   
    let btns1=document.querySelectorAll('.content-item li:first-child .content-btn-bottom a');
    let imgs1=document.querySelectorAll('.content-item li:first-child .content-text-1');
    let banner1=document.querySelector('.content-item li:first-child');
    let lbtn1=document.querySelector('.content-item li:first-child .content-btn-left');
    let rbtn1=document.querySelector('.content-item li:first-child .content-btn-right');
    let widths=parseInt(getComputedStyle(banner1,null).width);
	banner_lr(btns1,imgs1,banner1,lbtn1,rbtn1,"content-btn-bottom-hot");
	
	let btns2=document.querySelectorAll('.content-item li:nth-child(2) .content-btn-bottom a');
    let imgs2=document.querySelectorAll('.content-item li:nth-child(2) .content-text-1');
    let banner2=document.querySelector('.content-item li:nth-child(2)');
    let lbtn2=document.querySelector('.content-item li:nth-child(2) .content-btn-left');
    let rbtn2=document.querySelector('.content-item li:nth-child(2) .content-btn-right');
    let widths2=parseInt(getComputedStyle(banner2,null).width);
	banner_lr(btns2,imgs2,banner2,lbtn2,rbtn2,"content-btn-bottom-hot");
	
	let btns3=document.querySelectorAll('.content-item li:nth-child(3) .content-btn-bottom a');
    let imgs3=document.querySelectorAll('.content-item li:nth-child(3) .content-text-1');
    let banner3=document.querySelector('.content-item li:nth-child(3)');
    let lbtn3=document.querySelector('.content-item li:nth-child(3) .content-btn-left');
    let rbtn3=document.querySelector('.content-item li:nth-child(3) .content-btn-right');
    let widths3=parseInt(getComputedStyle(banner3,null).width);
	banner_lr(btns3,imgs3,banner3,lbtn3,rbtn3,"content-btn-bottom-hot");
	
	let btns4=document.querySelectorAll('.content-item li:nth-child(4) .content-btn-bottom a');
    let imgs4=document.querySelectorAll('.content-item li:nth-child(4) .content-text-1');
    let banner4=document.querySelector('.content-item li:nth-child(4)');
    let lbtn4=document.querySelector('.content-item li:nth-child(4) .content-btn-left');
    let rbtn4=document.querySelector('.content-item li:nth-child(4) .content-btn-right');
    let widths4=parseInt(getComputedStyle(banner4,null).width);
	banner_lr(btns4,imgs4,banner4,lbtn4,rbtn4,"content-btn-bottom-hot");
	
//左右滑动	
	let leftb=document.querySelector('.btn-right');
	let rightb=document.querySelector('.btn-left');
	let con=document.querySelector('.star-box');
	let windths=parseInt(getComputedStyle(con,null).width)/3;
	let num=0;
	leftb.onclick=function(){
		num--;
		if(num==0){
			leftb.classList.add('star-btn-hot');
		}
		if(num==1){
			rightb.classList.remove('star-btn-hot');
		}
		if(num==-1){
			num=0;
			return;	
		}
		con.style.transform='translateX('+(-windths*num)+'px)';
	}
	rightb.onclick=function(){
		num++;
		if(num==2){
			rightb.classList.add('star-btn-hot');
		}
		if(num==1){
			leftb.classList.remove('star-btn-hot');
		}
		if(num==3){
			num=2;
			return;
		}
		con.style.transform='translateX('+(-windths*num)+'px)';
	}
	
	
//返回顶部
	let back=document.querySelector('.back');
	back.onclick=function(){
//		document.body.scrollTop || document.documentElement.scrollTop;
//		res=0;
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
	}
}



