 /*test prompt*/

/*    var person = prompt("Please enter your name");

    if (person !== null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
    else {
    	alert(" vui long ban nhap ten")
    }
*/

/*test confirm*/

/*var isConfirm = confirm("ban da du 18 +")
 if(isConfirm == false ){
 	window.location.assign("./tretrau.html")
 }
 else{
 	window.location.assign("./dieukien.html")
 }*/

 /* cach 2*/


/* function chuyen_trang(){
 	window.location.assign("./dieukien.html")
 }

 function ko_chuyen_trang(){
 	window.location.assign("./tretrau.html")
 }

 var isConfirm = confirm("ban da du 18+")

 if(isConfirm == false){
 	ko_chuyen_trang()
 }
 else{
 	alert(" dang chyen trang")
 	chuyen_trang()
 }*/

/*cach 3*/
/*function chuyen_trang(mes , url){
	alert(mes);
	window.location.assign(url);
}

var isConfirm = confirm("ba da du 18+")

if(isConfirm == false){
	chuyen_trang("ban chua du dieu kien" , "./tretrau.html")

}
else{
	chuyen_trang(" bat dau chuyen trang" , "./dieukien.html")
}*/

  /*cách 4 : mỗi hàm nên đẩm nhiệm 1 nhiệm vụ nhất định*/
/*
  function mes(msg){
  	alert("Thong bao : " + msg)
  }

  function navs(link){
  	window.location.assign(link)
  }

  var isConfirm = confirm("ba da du 18+")

  if(isConfirm == false){
  	mes("truy cap that bai");
  	navs("./tretrau.html")
  }
  else {
  	mes("truy cap thanh cong");
  	navs ("./dieukien.html")
  }
*/
  // setTimeOut

/*function clickMe() {
	setTimeout(function(){
		alert("ok ");
	} , 2000);
}*/



function displayDate(){
	document.getElementById("demo").innerHTML = Date();
}

function clickMe(){
	setTimeout(displayDate , 2000);
}
//---------------------------------------------
var isConfirm = confirm(" trang web khong ton tai, ban se chuyen trang sau 5s nua");

if(isConfirm == true){
	
  var second_animation = 5;
	var count_time  = setInterval(function(){

		document.getElementById("timer").innerHTML = second_animation + " " +   "<span> giay nua </span>";

		if (second_animation == 0 ) {
			clearInterval(count_time);
			window.location.assign("https://www.facebook.com/")	;
		};
		 second_animation-- ; 
	},1000);

}


