
var myArray = ["Html" , "Css" , "Js" , "Vue JS" , "PHP"] ; 

myArray.length = 4;

var x = myArray.join(", ") + "....." + " " + "is my skills";

var y = typeof x;
alert(y);
 /*==> Join() la 1 method cua array va dung de chuyen doi tu 1 array sang 1 string , ngoai ra con noi them duoc ky tu vao string*/

document.getElementById("demo").innerHTML = x;


/*The push() method adds a new element to an array (at the end):*/

myArray.push(" PHP" , " GitHub");
document.getElementById("demo1").innerHTML = myArray;

/*The pop() method removes the last element from an array:*/

myArray.pop();
document.getElementById("demo2").innerHTML = myArray;

var indexOf = myArray.indexOf("Vue JS");
alert(indexOf);

/*The unshift() method adds a new element to an array (at the beginning),*/

myArray.unshift("My" + " skills : ")
document.getElementById("demo3").innerHTML = myArray;

/*The shift() method removes the first array element and "shifts" all other elements to a lower index.
*/ var z = myArray.shift();
 alert(z);


 /*The splice() method can be used to add new items to an array:(position defined)*/

 myArray.splice(4 , 0 ,"Laravel" , " is the best"); // 4 la vi tri muon dat new element
 document.getElementById("demo4").innerHTML = myArray

 /*The first parameter (2) defines the position where < New Elements > should be added (spliced in).

 The second parameter (0) defines how many elements should be removed.( la so luong phan tu  ma ban muon xoa bat dau tu tham so thu nhat chuyen vao)*/



 /*The concat() method creates a new array by merging (concatenating) existing arrays */

 var arraySecond = [" programing is my life"];
 var new_array = myArray.concat(arraySecond);

 document.getElementById("demo5").innerHTML = new_array; 



 /*The slice() method slices out a piece of an array into a new array.
( lay ra 1 mang moi , giu nguyen vi tri tu paramater ) ===> khong thay doi array ban dau , ma return ve 1 mang moi*/

 var slice_array  = myArray.slice(2, 4);
/* The method then selects elements from the start argument, and up to (but not including) the end argument.*/

/*(the first parameter la index bat dau lay , parameter thu 2 la vi tri hat len tren <up to> , va khong bao gom parameter so 2)*/

 
 document.getElementById("demo6").innerHTML = slice_array;


/*The sort() method sorts an array alphabetically:*/
 var array_sort = myArray.sort();// neu la number se xap xep tu be den lon , va sap xep lai index

 document.getElementById("demo7").innerHTML = array_sort;


 /*The reverse() method reverses the elements in an array.(sap xep nguoc khong theo  alphabet)*/

 var myArray_1 = ["Vue js" , 5 , 2 , 6 , 9 , "Html" , "Css3"];

 myArray_1.reverse();

 document.getElementById("demo8").innerHTML = myArray_1;

/* (neu muon xap xep 1 mang theo thu tu nguoc alphabet ==> thi phai  ket  hop 2 ham nay lai voi nhau)*/

var myArray_1_sort = myArray_1.sort();
console.log(myArray_1_sort);

var myArray_1_sort_reverse = myArray_1_sort.reverse();

document.getElementById("demo9").innerHTML = myArray_1_sort_reverse;


                          /*  --------  bai tap cu the -----------*/
var peoples = [
	{
		ID :1,
		Name : 'Phan Hải Nam',
		Age : 22,
		Address : 'Hà Nội'
	} , 
	{
		ID :2,
		Name : 'Trịnh Phương Nga',
		Age : 22,
		Address : 'Nam Định'
	} 
] ;   

//  ha de tao ra danh sach nguoi
function renderView(){
	var people_html = "";
	peoples.map(function(people, index){
		people_html += "<li>";
		people_html +="<h5>" + "ID :" + people.ID + "</h5>";
		people_html +="<h5>" + "Name: " + people.Name + "</h5>";
		people_html +="<p>" +  "Age :" + people.Age + "</p>";
		people_html +="<p>" +  "Address :" + people.Address + "</p>";
		people_html += '<button onclick = "people_delete('+ index +')">Delete</button>';//goi ham people_delete
		people_html += "</li>"; 
	});
	
	document.getElementById("student_data").innerHTML = people_html; 
}

// goi ham renderView
renderView(); 
// dinh nghia ham people_delete
function people_delete(people_index){
	peoples.splice(people_index , 1);
	renderView();
}	 
  

// su kien onclick khi nhan vao nut tao
document.getElementById("myBtn").addEventListener("click" , add_people);

function add_people() {
	var people_id = document.getElementById("people_id").value;
	var people_name = document.getElementById("name").value;
	var people_age = document.getElementById("age").value;
	var people_address = document.getElementById("address").value;

	var enter_people_result = {
		ID: people_id,
		Name: people_name,
		Age :  people_age ,
		Address: people_address

	};
	peoples.push(enter_people_result);
	renderView();  

}

