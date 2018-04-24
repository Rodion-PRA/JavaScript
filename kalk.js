function plus(){
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	result = num1 + num2;
	document.getElementById('out').innerHTML = result;
}
function minus(){
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	result = num1 - num2;
	document.getElementById('out').innerHTML = result;
}
function del(){
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	result = num1 / num2;
	document.getElementById('out').innerHTML = result;
}
function umn(){
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	result = num1 * num2;
	document.getElementById('out').innerHTML = result;
}
function kvadrat_koren(obj){
  var a=1*obj.st1.value;
  var b=1*obj.st2.value;
  var c=1*obj.st3.value;
  var p=(a+b+c)/2;
  var s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
  s=s.toFixed(2);
  obj.res.value=s;
}
function square root{
var num1, result;
	num1 = document.getElementById('n4').value;
	num1 = parseInt(num1);
document.write(Math.sqrt('n4'))
}
