
function calculate(){
var name1 = document.getElementById("name1").value;
var quantity1 = parseFloat(document.getElementById("quantity1").value);
var price1 = parseFloat(document.getElementById("price1").value);
var type1 = parseFloat(document.getElementById("type1").value);
var place1 = parseFloat(document.getElementById("place1").value);

var name2 = document.getElementById("name2").value;
var quantity2 = parseFloat(document.getElementById("quantity2").value);
var price2 = parseFloat(document.getElementById("price2").value);
var type2 = parseFloat(document.getElementById("type2").value);
var place2 = parseFloat(document.getElementById("place2").value);

var name3 = document.getElementById("name3").value;
var quantity3 = parseFloat(document.getElementById("quantity3").value);
var price3 = parseFloat(document.getElementById("price3").value);
var type3 = parseFloat(document.getElementById("type3").value);
var place3 = parseFloat(document.getElementById("place3").value);

var name4 = document.getElementById("name4").value;
var quantity4 = parseFloat(document.getElementById("quantity4").value);
var price4 = parseFloat(document.getElementById("price4").value);
var type4 = parseFloat(document.getElementById("type4").value);
var place4 = parseFloat(document.getElementById("place4").value);



var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab3 = document.getElementById("tab3");
var tab4 = document.getElementById("tab4");

var result = document.getElementById("result");

var tax1 = type1+place1;
var tax2 = type2+place2;
var tax3 = type3+place3;
var tax4 = type4+place4;



var f1Tax = ((price1*tax1)/100);
var f2Tax = ((price2*tax2)/100);
var f3Tax = ((price3*tax3)/100);
var f4Tax = ((price4*tax4)/100);


parseFloat(quantity1);

var finalprice1 = (price1+f1Tax).toFixed(2);
var finalprice2 = (price2+f2Tax).toFixed(2);
var finalprice3 = (price3+f3Tax).toFixed(2);
var finalprice4 = (price4+f4Tax).toFixed(2);



var totalTax = (f1Tax+f2Tax+f3Tax+f4Tax).toFixed(2);
var totalPrice = ((price1+f1Tax)+(price2+f2Tax)+(price3+f3Tax)+(price4+f4Tax)).toFixed(2);


tab1.innerHTML = "<td>"+name1+"</td>"+"<td>"+finalprice1+"</td>"
tab2.innerHTML = "<td>"+name2+"</td>"+"<td>"+finalprice2+"</td>"
tab3.innerHTML = "<td>"+name3+"</td>"+"<td>"+finalprice3+"</td>"
tab4.innerHTML = "<td>"+name4+"</td>"+"<td>"+finalprice4+"</td>"


result.innerHTML = "<h3>"+"Tax = "+totalTax+"</h3><h3>"+"Total = "+totalPrice+"</h3>";


console.log(typeof(price1));
console.log(typeof(f1Tax));
console.log(typeof(f2Tax));
console.log(typeof(finalprice2));
console.log(typeof(tax1));

}