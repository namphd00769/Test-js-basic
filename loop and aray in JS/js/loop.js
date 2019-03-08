 
// loop while
 var age = 0 ;
 var age_condition = 18;

/* while( age < age_condition){
 	age = prompt("Please confirm you are greater than 18 year old !");
 	window.location.assign("https://www.w3schools.com")

 }*/
// loop do  while

/*do{
	// code thuc thi
	age  = prompt("Please confirm you are greater than 18 year old !");
	window.location.assign("https://www.facebook.com/")
}
while(
	// dieu kien
	age < age_condition
);*/

 // phan array

var	city = ['An Giang' ,'Bà Rịa - Vũng Tàu' , 'Bắc Giang' ,'Bắc Kạn' ,'Bạc Liêu' ,'Bắc Ninh' ] ; 
var city_tag ="";

for (var i = 0; i < city.length; i++) {
	city_tag +=  "<option>" + city[i] + "</option>";
}
 document.getElementById("city_name").innerHTML = city_tag;