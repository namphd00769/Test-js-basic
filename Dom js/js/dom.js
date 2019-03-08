//document.getElementById()===>

var by_id = document.getElementById("test").innerHTML;
console.log("BY ID : " , by_id);

//document.getElementsByClassName(name) ===>

var x = document.getElementsByClassName("intro");
var by_class = x[3].innerHTML;
console.log('ByClassName: ' , by_class);


// tim classname di tu the cha cua no vao ===>

var choose_parent = document.getElementById("wrap");
var choose_child = choose_parent.getElementsByClassName("intro");

var result = choose_child[0].innerHTML;
document.getElementById("demo").innerHTML = "<li style = 'color: red;'>" + "The first result (index 0) inside 'wrap id' is : " + result +"</li>";

//getElementsByTagName ===> 

var choose_parent_1 = document.getElementById("container");
var choose_child_1 = choose_parent_1.getElementsByTagName("h4");
var result_1 = choose_child_1[1].innerHTML;
document.getElementById("demo1").innerHTML = "<li style = 'color: red;'>" + "The second tag H4 (index 1) inside 'container id' is : " + result_1 +"</li>";

/*Finding HTML Elements by CSS Selectors : document.querySelectorAll() ===>*/

/*var select_parent = document.getElementById("container");
var select_child = select_parent.querySelectorAll("p.intro");
var select_result = select_child[1].innerHTML;
document.getElementById("demo2").innerHTML = "<li>" + 'The first second (index 1) with class="intro" inside div container : ' + select_result + "</li>" ;*/
// ====> cach nay dai , khong nen lam , ma lam theo kieu css

var select_child = document.querySelectorAll("#container p.intro");
var select_result = select_child[1].innerHTML;
document.getElementById("demo2").innerHTML = "<li style = 'color: red;'>" + 'The first second (index 1) with class="intro" inside div container : ' + select_result + "</li>" ;



// innerText method() return all content / including tagname (innerHTML NOT including tag name)
//===> day la truong hop viet truc tiep bang js , con neu lay gia tri cua no thong qua index Html thi no cung lay conrent tuong tu nhu innerHTML
// VA ben index Html thi innerText chi lay content trong " " , chu khong lay duoc toan bo style nhu innerHTML;
document.getElementById("demo3").innerText = "<li>" + result_1 + "</li>" ;

//DOM Element getAttribute() Method

var getAttrName = choose_parent.getAttribute("id");//'attr name of node choose_parent is ( id of element choosed) : '
alert ('attr name of node choose_parent is ( id of element choosed) : ' +  getAttrName);

//HTML DOM setAttribute() Method

var attrName = document.querySelectorAll('#wrap h4')[0];
var setAttrName = attrName.setAttribute("class" , "set_attr");
