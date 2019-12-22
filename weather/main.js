function showTime(){
	var t = new Date();
	var year = t.getFullYear();
	var month = t.getMonth();
	var day = t.getDate();
	var week = t.getDay();
	var arr = new Array("星期一","星期二","星期三","星期四","星期五","星期六","星期天");
	var hour = t.getHours();
	var minute = t.getMinutes();
	var showTime = year+" 年 "+month+" 月 "+day+" 日 ";
	var showDay = arr[week]+" "+hour+((minute<10)?":0":":")+minute
	document.getElementById("clock").innerHTML = showTime
	document.getElementById("day").innerHTML = showDay
}

showTime()
setInterval(function(){
	showTime()
},60000)