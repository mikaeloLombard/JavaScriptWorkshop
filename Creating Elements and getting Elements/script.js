var p1 = document.getElementById("p1");

//changes p1  the value using .innerHTML
p1.innerHTML = "I change the text by using JavaScript";

// creates a P tag
var createPTag = document.createElement("p");
createPTag.innerHTML = "I just created a new P tag with javascript updated";
document.getElementById("maincontainer").appendChild(createPTag);

var createTextElement = document.createTextNode("This is another text node");
document.getElementById("maincontainer").appendChild(createTextElement);


console.log("What is the type of this Element: ", p1.nodeType);
console.log("This is the Inner HTML: ", p1.innerHTML);
console.log("Does it have any child nodes? ", p1.childNodes);


var listItem = document.getElementsByTagName("li");
console.log("We have: ", listItem.length, " li Items");


var listItem2 = document.getElementsByTagName("p");
console.log("We have: ", listItem2.length, " p Items");