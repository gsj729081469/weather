/*let leftb=document.querySelector('.left-btn');
let rightb=document.querySelector('.right-btn');
let con=document.querySelector('.qwer ul');
let windths=parseInt(getComputedStyle(con,null).width)/2;
*/
let num=0;
function pingyi(leftb,rightb,con,windths){
leftb.onclick=function(){
	num--;
	if(num==0){
		leftb.classList.add('star-btn-hot');
	}
	if(num>0){
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
	if(num==3){
		rightb.classList.add('star-btn-hot');
	}
	if(num<3){
		leftb.classList.remove('star-btn-hot');
	}
	if(num==4){
		num=3;
		return;
	}
	con.style.transform='translateX('+(-windths*num)+'px)';
}
}