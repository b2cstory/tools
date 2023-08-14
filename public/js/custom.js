// 网页刷新时判断系统时间，适配深浅模式
window.onload = function checkTime() {
	var t = new Date().getHours();
	if (t >= 18 || t <= 6) {
		document.body.classList.add('night');
		document.cookie = "night=1;path=/"
	} else {
		document.body.classList.remove('night');
		document.cookie = "night=0;path=/"
	}
}