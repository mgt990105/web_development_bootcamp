// console.dir(document);

// document.body.children[1].children[0].href = "https:/google.com";

// alert();
// window.alert();

// let anchorElement = document.getElementById("external-link");

// anchorElement.href = "https://google.com";

// anchorElement = document.querySelector("#external-id");
// anchorElement.href = "https://google.com";

// ADD AN ELEMENT

// 1. Create a new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://amazon.com";
newAnchorElement.textContent = "This leads to Amazon";

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

// Remove

//  1. Select the elemnt that you want removed

let firstH1Element = document.querySelector("h1");

//  2. Remove it.

// firstH1Element.remove();

// Move Elements

firstParagraph.parentElement.append(firstParagraph);

// inner HTML property

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = "Hi! This is <strong> important! </strong>";
