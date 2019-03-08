var myString = "Hoc Vue js Basic , Vue js that tuyet voi";
var uc = myString.toUpperCase();
alert(uc);
// co 2 paramater ( start , end) , if paramater la am , thi se dem nguoc tu duoi len tren
var pos = myString.search("Vue");
/*var cut = myString.slice(4 , 11);*/
var cut = myString.slice( -22 , -15 );
var cutting = myString.slice(4);
alert( cut );
alert( cutting );
document.getElementById("demo").innerHTML = pos;

// substring khong chap nhan gia tri am
var sub  = myString.substring(4 , 11);
console.log(sub);

//substr() Method : co 2 paramater (start , length) , va chap nahn gai tri am
// neu ci co 1 paramater thi se cat string tu do tro di , den khi nao het thi  thoi

 var sub1 = myString.substr(4 , 3);
 var sub2 = myString.substr(-22);
 console.log(sub1);
 console.log(sub2);

 // thay the 1 chuoi , replace()

 

function myFunction(){
 	var myString_replace = document.getElementById("test").innerHTML;
 	var replace = myString_replace.replace("Vue JS that tuyet voi" , "Evan !");
 	document.getElementById("demo2").innerHTML = replace;
 }

// chuyen doi chuoi sang mang
var arr = myString.split(" ");
console.log(arr);


var string_subject = "HTML , CSS , JAVASCRIPT , VUE.JS , REACT.JS"; 
var arr_subject = string_subject.split(",");
var txt_subject = "<select>";


for (var i = 0; i < arr_subject.length; i++) {
	txt_subject += "<option>"+ arr_subject[i] +"</option>"
}

txt_subject += "</select>"
document.getElementById("subject").innerHTML = txt_subject;

// danh sach san pham 

var products = [
	{
		name: "Phone",
		price :1000
	},
		{
		name: "Tabled",
		price :2000
	},
		{
		name: "Computer",
		price :3000
	}
];	

var product = "";
var html_product = "<ul>";
for (var i = 0; i < products.length; i++) {
	product = products[i];
	html_product += "<li>";
		html_product +="<h5>" + product.name + "</h5>";
		html_product +="<p>" + product.price + "</p>";

	html_product += "</li>";


}
html_product +="</ul>";

document.getElementById("product_list").innerHTML = html_product;
