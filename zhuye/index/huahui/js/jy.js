	
// 随着输入的内容，字数实时变化
let	text=document.querySelector('textarea');
let num=document.querySelector('.textt span');
let btn=document.querySelector('button');
let ul=document.querySelector('.list-left');
let input=document.querySelector('input');
text.oninput=function(){
	let textnum=this.value.length;
	num.innerHTML=textnum;
}
btn.onclick=function(){
	let name=input.value;
	let con=text.value;
	let str=
			`<div class="left1">
				<p class="l1">${name}</p>
				<p class="l2">${con}</p>
			</div>`;
	ul.innerHTML+=str;
	// 清空右侧留言姓名
	input.value='';
	text.value='';
}
ul.onmousemove=function(e){
	let event=e.target;
	event.style.background=red;
}
