// alert("Сообщение")
// confirm("жиза")
let name = prompt("Введите имя вашего персонажа:");

let money = 800;
let status = "здоровый";
let health = 75;
let gps = "город";

update();

function update() {
	if (health > 100) {
		health = 100
	}


	document.querySelector("#name").textContent  = name;
	document.querySelector("#money").textContent  = money;
	document.querySelector("#status").textContent  = status;
	document.querySelector("#health").textContent  = health;
	document.querySelector("#gps").textContent  = gps;

	if (gps == "город") {
		document.querySelector(".img").style.backgroundImage  = "url(style/img/town.jpg)";
		document.querySelector(".actionInTavern").style.display  = "none";
		document.querySelector(".actionInTown").style.display  = "flex";
	}
	if (gps == "таверна") {
		document.querySelector(".img").style.backgroundImage  = "url(style/img/tavern.jpg)";
		document.querySelector(".actionInTavern").style.display  = "flex";
		document.querySelector(".actionInTown").style.display  = "none";
	}

}


function inHospital() {
	if ( money > 49) {
		money = money - 50;
		health = health + 25;
		status = "здоровый ";
		alert(name + " посетил Госпиталь. ");
	}else {
		alert(" Денег нет уходите!!!!!!!!!!! ");
	
}
update();
}


function inTavern() {
	gps = "таверна"
	update();
}
function inTown(){
	gps = "город"
	update();
}
function eat () {
	if ( money > 9 && status != "сытый" && status != "болеет") {
		money = money - 10;
		health = health + 5;
		status = "сытый";
		alert(name + " поел курочки.");
	}else if(money < 10){
		alert("Денег не хватает.");
	}
	else if(status == "сытый"){
		alert(name + "сейчас сыт и не хочет есть")
	}else {
		alert(name + "сейчас болеет и не хочет есть")
	}
update();
}
function drink () {
	if (money > 14 ) {
		money = money - 15;
		health = health - 8;
		if (status == "очень пьяный") {
			alert("Вы напились и устроили драку. ")
			status = "болеет"
		}
		if (status == "пьяный") {
			status = "очень пьяный"
		}else{
			status = "пьяный"
		}
		alert(name + "немножечко выпил");
	}else if(money < 15){
		alert("Денег не хватает.")
	}
	update();
}
function inHouse () {
	if (money > 149) {
		money = money - 150;
		if(status == "сытый"){
			health = health + 100;
		}
		status = "отдохнувший" 
		alert("вы отдохнули.")
	}else  if (money < 150){
			alert("Денег не хватает.")
	}
update();	
}
		



