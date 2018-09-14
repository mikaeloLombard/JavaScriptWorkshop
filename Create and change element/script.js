var p1 = document.getElementById("p1");

p1.innerHTML = "I change the text by using javascript!";

var createPTag = document.createElement("p");
document.getElementById("maincontainer").appendChild(createPTag);

var createTextElement = document.createTextNode("this is another text node");
document.getElementById("maincontainer").appendChild(createTextElement);

createPTag.innerHTML = "I just created a new p tag with Javascript!";
console.log("What is the type of this Element: ", p1.nodeType);
console.log("This is the Inner HTML: ", p1.innerHTML);
console.log("Does it have any child nodes? ", p1.childNodes);


var listItem = document.getElementsByTagName("li");
console.log("We have: ", listItem.length, " li Items");


var listItem2 = document.getElementsByTagName("p");
console.log("We have: ", listItem2.length, " p Items");