var num1 = prompt("Hoeveel kleine pizza's wilt u? (€5)");
var num2 = prompt("Hoeveel medium pizza's wilt u? (€7)");
var num3 = prompt("Hoeveel grote pizza's wilt u? (€9)");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

document.write("Het eindbedrag is:" + (num1 * 4 + num2 * 6 + num3 * 9));
document.write("<br/>");
document.write("Het aantal kleine pizza's zijn:" + (num1));
document.write("<br/>");
document.write("Het aantal medium pizza's zijn:" + (num2));
document.write("<br/>");
document.write("Het aantal grote pizza's zijn:" + (num3));