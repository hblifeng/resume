$(function  () {
	$.post("data/db.json",function(data) {
//		console.log($(".brief").text(data[0].brief));
		$(".name").text(data[0].name);
		$(".job").text(data[0].job);
		$(".moto1").text(data[0].moto1);
		$(".moto2").text(data[0].moto2);
		$(".tel").text(data[0].tel);
		$(".sex").text(data[0].sex);
		$(".age").text(data[0].age);
		$(".education").text(data[0].education);
		$(".school").text(data[0].school);
		$(".english").text(data[0].english);
		$(".email").text(data[0].email);
		$(".brief").text(data[0].brief);
		$(".iCan1").text(data[0].iCan1);
		$(".iCan2").text(data[0].iCan2);
		$(".iCan3").text(data[0].iCan3);
		$(".iCan4").text(data[0].iCan4);
		$(".iCan5").text(data[0].iCan5);
		$(".iCan6").text(data[0].iCan6);
		$(".iCan7").text(data[0].iCan7);
	},"json");
})
