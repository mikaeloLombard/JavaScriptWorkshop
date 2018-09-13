var p1 = document.getElementById("p1");

console.log("What is the type of this Element: ", p1.nodeType);
console.log("This is the Inner HTML: ", p1.innerHTML);
console.log("Does it have any child nodes? ", p1.childNodes);


var listItem = document.getElementsByTagName("li");
console.log("We have: ", listItem.length, " li Items");


var listItem2 = document.getElementsByTagName("p");
console.log("We have: ", listItem2.length, " p Items");