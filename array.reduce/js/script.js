var numbers = [1,2,3,4];
 var number_result = numbers.reduce(function(a,b){
 	console.log(a,b);
	return a + b;
});

 alert(number_result);
// bai tap
var oders = [
	{name: "phone" , quantity : 2 , price : 100},
	{name: "decktop" , quantity : 1 , price : 400},
	{name: "tables" , quantity : 5 , price : 15}
];
/*var oder = "";
for (var i = 0; i < oders.length; i++) {
	 oder = oders[i];

}

var detail_oder = (oder.quantity * oder.price);
var sumOders = oders.reduce(function(detail_oder , detail_oder){
	return detail_oder + detail_oder;

});==> cach nay sai */


// create a new array by map() method 
/*-----------------*/
/*var detail_oder = oders.map(function(value ,index , array){
	return value.quantity * value.price
});

console.log(detail_oder);
// then use this array with reduce() method de calculate sumOders
var sumOders = detail_oder.reduce(function(a, b){
	return a + b ;
});

alert(sumOders);*/

// cách 2 :

var total  = oders.reduce(function(currentTotal , oder){
	return currentTotal + (oder.quantity * oder.price)
} , 0);

alert(total);

/*--------------------*/

var users = [
	{name: "Nam" , gender: "male"},
	{name: "Quynh" , gender: "female"},
	{name: "Viet" , gender: "male"},
	{name: "Mai" , gender: "female"},
	{name: "Vinh" , gender: "male"}

];

var userList = document.getElementById("userList") ; 
var genderFilter =  document.getElementById("genderFilter");

render(userList , users);

document.getElementById("genderFilter").addEventListener('change' , function(){// this dai dien cho chinh no (genderFilter). gia tri hien tai khi ban chon
	var selectedGender = this.value;

	var filterUsers = users.filter(function(user) {
		return user.gender === selectedGender ;

	});

	render(userList , filterUsers);// van gan gia tri thoa man vao id ="userList"(paramater 1)
	// paramater 2 la cac user khi da da loc , thay the vao user cu chua duoc loc

});

function render(container , items){//container la <ul> tag ben html , item dai dien cho users
	var htmlItems = items.map(function(item){
		return '<li>' + item.name + '</li>'
	});
	var html = htmlItems.join(" ");

	container.innerHTML = html;

}
