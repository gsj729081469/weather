// 当页面加载完成时
$(function(){
	
	// 1.获取当前城市的天气信息
	let tianqi;
	$.ajax({
		type:"get",
		url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=运城",
		dataType:"jsonp",
		success:function(obj){
//			console.log(obj);
			tianqi=obj.data;
			console.log(tianqi);
			updata(tianqi);
			
		}
	})
	// 获取天气数据
	function updata(){
		//	获取当前的城市
		$(".addr span").html(tianqi.city);
		//	获取当前城市天气状况
		$(".air span").html(tianqi.weather.dat_condition);
		//	获取当前的温度
		$(".zt h2").html(tianqi.weather.current_temperature+"°");
		//	获取当前的天气状况
		$(".zt h3").html(tianqi.weather.dat_condition);
		//	获取当前风向
		$(".zt h4").html(tianqi.weather.wind_direction);
		//	今天的天气
		$(".left span:first").html(tianqi.weather.dat_condition);
		//	今天的温度
		$(".left .wd").html(tianqi.weather.dat_high_temperature+"/"+tianqi.weather.dat_low_temperature+"°");
		//	天气图标
		$(".left img").attr("src","./img/"+tianqi.weather.dat_weather_icon_id+".png");
		//	明天天气
		$(".right span:first").html(tianqi.weather.tomorrow_condition);
		//	明天的温度
		$(".right .wd").html(tianqi.weather.tomorrow_high_temperature+"/"+tianqi.weather.tomorrow_low_temperature+"°");
		//	天气图标
		$(".right img").attr("src","./img/"+tianqi.weather.tomorrow_weather_icon_id+".png");
		
		
		
		//	未来24小时的天气
		let hweather=tianqi.weather.hourly_forecast;
		console.log(hweather);
		hweather.forEach(function(v,i){
//			console.log(v,i);
//			let li=document.createElement("li");
//			$(".conter-top ul").append(li);
			let str2=`
				<li>
					<p class="time"></p>
					<img src="" alt="" class="img"/>
					<p class="last"><span class="tp"></span></p>
				</li>`
			$(".conter-top ul").append(str2);
			$(".conter-top ul li .time").eq(i).html(v.hour+":00");
			$(".conter-top ul li .img").eq(i).attr("src","./img/"+v.weather_icon_id +".png");
			$(".tp").eq(i).html(v.temperature+"°");
		})
		
		// 未来多天的天气信息
		let dweather=tianqi.weather.forecast_list;
		dweather.forEach(function(v,i){
			let str3=`<li>
				<span class="data">09/20</span>
				<span class="wea">01-15°</span>
				<p class="big">南风</p>
				<img src="./img/31.png" alt="">
			</li>`
			$(".con").append(str3);
			$(".con li .data").eq(i).html(v.date.substr(5,5));
			$(".con li .wea").eq(i).html(v.high_temperature+"/"+v.low_temperature+"°");
//			$("").eq(i).thml(v.high_temperature);
//			$("").eq(i).html(v.low_temprature);
			$(".con li .big").eq(i).html(v.wind_direction);
			$(".con li img").eq(i).attr("src","./img/"+v.weather_icon_id + ".png");
			
//			$("").eq(i).html(v.wind_level+"级");
		})
		
		
	}
	
	
	
	//	点击城市,.出现城市页面
	$(".addr").click(function(){
		$(".search").css({"display":"block"});
		$(".conter").css({"display":"none"});
	})

	//	点击取消，消失
	$(".search1 span").click(function(){
		$(".search").css({"display":"none"});
		$(".conter").css({"display":"block"});
	})
	
	//	获取城市信息
	let city;
	$.ajax({
		type:"get",
		url:"https://www.toutiao.com/stream/widget/local_weather/city/",
		dataType:"jsonp",
		success:function(obj){
			city=obj.data;
			console.log(city);
			updataCity(city);
		}
	})
	// 获取每个城市信息
	function updataCity(city){
		let k=0;
		for(let i in city){
//		console.log(city[i]);
			let str=`
			<div class="diqu">${i}</div>
			<ul class="ul"></ul>
		`;
			$(".pos2").append(str);
			for(let j in city[i]){
				let str1=`
				<li>${j}</li>
				`;
				$(".ul").eq(k).append(str1);	
			}
			k++;
		}
	}

	//	点击每个城市，获取城市天气信息
//	window.onload=function(){
	let d=document.querySelectorAll(".search .ul li");
	console.log(d);
	$(".ul").children("li");
	
//	console.log($(".search .ul li"));
		$(".pos2 .ul li").mousemove(function(){
			console.log($(".search .pos2 .ul li"));
			$(".search").css({"display":"none"});
			$(".conter").css({"display":"block"});
			let con=$(this).html();
//			console.log(con);
			ajaxs(con);
		})
		function ajaxs(str){
			let url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
			$.ajax({
				type:"get",
				url:url1,
				dataType:"jsonp",
				success:function(obj){
					let tianqi2=obj.data;
//					console.log(tianqi2);
					updata(tianqi2);
				}

			})
		}
	
	
	// 搜索框输入内容，搜索当前城市天气情况
	$("input").focus(function(){
		$(".search1 span").html("搜索");
	})
	
	$("input").blur(function(){
		$(".search1 span").html("取消");
	})
	//	点击搜索时，获得input中的内容
	$(".search1 span").click(function(){
		
		let text=$("input").val();
		ajaxs(text);
		$(".search").css({"display":"none"});
		$(".conter").css({"display":"block"});
	
	

	for(let i in city){
		for(let j in city[i]){
			if(text==j){
				ajaxs(text);
			}
		}
	}
	alert("输入有误");
})
//}
	
})



/*1.获取默认城市天气信息
2.获取所有城市的信息
3.点击每个城市可以获取当前城市的天气信息
4.在搜索框内输入所要搜索的城市,点击搜索按钮可以进行搜索*/