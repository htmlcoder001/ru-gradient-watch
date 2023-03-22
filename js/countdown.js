$(document).ready(function() {
	
	function updater( h, m, s) {
	// День сброса - 06 сентября 2017 года (и далее каждые три дня)
	var baseTime = new Date(2017, 11, 06);
	// Период сброса — 1 день
	var period = 15*60*60*1000;

	function update() {
	var cur = new Date();

	// сколько осталось миллисекунд
	var diff = period - (cur - baseTime) % period;
	// сколько миллисекунд до конца секунды
	var millis = diff % 1000;
	diff = Math.floor(diff/1000);
	// сколько секунд до конца минуты
	var sec = diff % 60;
	if(sec < 10) sec = "0"+sec;
	diff = Math.floor(diff/60);
	// сколько минут до конца часа
	var min = diff % 60;
	if(min < 10) min = "0"+min;
	diff = Math.floor(diff/60);
	// сколько часов до конца дня
	var hours = diff % 24;
	if(hours < 10) hours = "0"+hours;
	var days = Math.floor(diff / 24);
	
	h.innerHTML = hours.toString();
	m.innerHTML = min.toString();
	s.innerHTML = sec.toString();

	// следующий раз вызываем себя, когда закончится текущая секунда
	setTimeout(update, millis);
	}
	setTimeout(update, 0);
	}
	updater(document.getElementById("hours"), document.getElementById("minutes"), document.getElementById("seconds"));
	updater(document.getElementById("hours1"), document.getElementById("minutes1"), document.getElementById("seconds1"));
});