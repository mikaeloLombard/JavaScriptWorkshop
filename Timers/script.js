var myImage = document.getElementById("image");
var ArrayImage = ["image2.png","image3.jpg", "image4.jpg"];
var imageIndex = 0

function changeImage() {
    myImage.setAttribute("src", ArrayImage[imageIndex]);
    imageIndex++;

    if(imageIndex >= ArrayImage.length) {
        imageIndex = 0
    }
}

setInterval(changeImage, 3000);

function timer5Seconds(){
    alert("This is the 5 second timer"); 
}

setTimeout(timer5Seconds, 5000);




console.log("What is the type of this Element: ", p1.nodeType);
console.log("This is the Inner HTML: ", p1.innerHTML);
console.log("Does it have any child nodes? ", p1.childNodes);


var listItem = document.getElementsByTagName("p");
var aTag = listItem.getElementsByTagName("a");
console.log("We have: ", listItem.length, " p Items");
