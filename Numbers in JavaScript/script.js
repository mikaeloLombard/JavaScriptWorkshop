var num1 = 5;
var num2 = 3;
document.write(num1 + num2 + "<br>"); //8

var num3 = "5";
var num4 = "5";
document.write(num3 + num4 +"<br>"); //55

var num3 = 5;
var num4 = "5";
document.write(num3 + num4 + "<br>"); //its is still going to concatinate as string

var num3 = 5;
var num4 = "a";
document.write(num3 + num4 + "<br>"); // displayed also as string

var num3 = 5;
var num4 = "a";
document.write(num3 * num4 + "</br>"); // NaN means Not a Number


var num3 = 5;
var num5 = "5";
// To convert the variable into a number
var convertTONumber = Number(num5);
document.write(num3 * num5);


