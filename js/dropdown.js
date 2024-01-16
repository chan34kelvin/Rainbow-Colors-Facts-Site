/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function () {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

function OpenDropDown() {
  if (document.getElementById("List-contents").style.display == "block") {
    document.getElementById("List-contents").style.display = "none";
    document.getElementById("List-button").style.borderBottom = "none";
    document.getElementById("List-button").style.paddingBottom = "0px";
    document.querySelectorAll(".down-arrow").forEach(arrow => {
      arrow.style.transform = "rotate(0deg)";
    });
  } else {
    document.getElementById("List-contents").style.display = "block";
    document.getElementById("List-button").style.borderBottom =
      "1px solid grey";
    document.getElementById("List-button").style.paddingBottom = "10px";
    document.querySelectorAll(".down-arrow").forEach(arrow => {
      arrow.style.transform = "rotate(180deg)";
    });
  }
}
// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
