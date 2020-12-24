/*
 Copyright (C) Bdtask 2020
 Web address: https://www.bdtask.com/
 */
//Create iframe DOM element
var iframe = document.createElement('iframe');
var html = '<body>Foo</body>';
iframe.setAttribute("id", "bdIframe");
iframe.src = 'chat-ui.html';
iframe.style = "position: fixed; height: 100%; width: 400px; right: -400px;  bottom: 0px; box-shadow: none; transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0s; border: 0px;";
document.body.appendChild(iframe);
console.log('iframe.contentWindow =', iframe.contentWindow);
//Create button DOM element
var button = document.createElement('button');
button.style = "position: fixed;bottom: 30px;right: 30px;border: 0;opacity: 1;background: #2c7be5;width: 50px;height: 50px;border-radius: 4px;color: white;padding: 12px;cursor: pointer;box-shadow: 0 2px 6px 0 rgba(0,0,0,.4);-webkit-transition: all .4s cubic-bezier(.77, 0, .175, 1);-o-transition: all .4s cubic-bezier(.77, 0, .175, 1);transition: all .4s cubic-bezier(.77, 0, .175, 1);visibility: visible;z-index: 999999;";
button.setAttribute("id", "chatOpen");
document.body.appendChild(button);
console.log('button.contentWindow =', button.contentWindow);

function hideShow() {
    let frame = document.getElementById("bdIframe");
    frame.style.right = frame.style.right === "-400px" ? "0px" : "-400px";
    frame.style.boxShadow = frame.style.boxShadow === "none" ? "rgba(0, 0, 0, 0.25) 0px 4px 16px" : "none";
    button.style.bottom = button.style.bottom === "30px" ? "0px" : "30px";
    button.style.visibility = button.style.visibility === "visible" ? "hidden" : "visible";
    button.style.opacity = button.style.opacity === "1" ? "0" : "1";
    eyeCatcher.style.visibility = eyeCatcher.style.visibility === "visible" ? "hidden" : "visible";
    eyeCatcher.style.opacity = eyeCatcher.style.opacity === "1" ? "0" : "1";
}
var button = document.getElementById("chatOpen");
button.addEventListener("click", hideShow);

var iconImg = document.createElement("img");
iconImg.setAttribute('src', 'assets/img/chat-icon.svg');
iconImg.setAttribute('alt', '');
document.body.appendChild(iconImg);
var element = document.getElementById("chatOpen");
element.appendChild(iconImg);

var eyeCatcher = document.createElement('div');
eyeCatcher.style = "position: fixed;display: block;visibility: visible;z-index: 999999;background: transparent;bottom: 80px;right: 25px;    transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0s;opacity: 1;";
eyeCatcher.setAttribute("id", "eyeCatcher");
document.body.appendChild(eyeCatcher);

var eyeCatcherImg = document.createElement("img");
eyeCatcherImg.setAttribute('src', 'assets/img/eye-catcher.png');
eyeCatcherImg.setAttribute('alt', '');
document.body.appendChild(eyeCatcherImg);
var element = document.getElementById("eyeCatcher");
element.appendChild(eyeCatcherImg);


var eyeCatcherClose = document.createElement('div');
eyeCatcherClose.style = "position: absolute;display: block;top: -17px;right: 6px;width: 16px;height: 16px;line-height: 16px;text-align: center;cursor: pointer;color: rgb(0, 0, 0);font-size: 20px;font-family: Arial, sans-serif;border-radius: 50%;background-color: rgba(255, 255, 255, 0.5);";
eyeCatcherClose.setAttribute("id", "eyeCatcherClose");

document.body.appendChild(eyeCatcherClose);
var element = document.getElementById("eyeCatcher");
element.appendChild(eyeCatcherClose);
document.getElementById("eyeCatcherClose").innerText = "×";

function catcherClose() {
    eyeCatcher.style.display = eyeCatcher.style.display === "block" ? "none" : "block";
    eyeCatcherClose.style.display = eyeCatcherClose.style.display === "block" ? "none" : "block";
}
var eyeCatcherClose = document.getElementById("eyeCatcherClose");
eyeCatcherClose.addEventListener("click", catcherClose);

//Interaction between Iframe and Parent
iframe.onload = function () {
    var iframe = document.getElementById("bdIframe");
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var button = iframeDocument.getElementById("btnClose");
    button.addEventListener("click", hideShow, false);
};

//Media query matches
function myFunction(x) {
    let frame = document.getElementById("bdIframe");
    if (x.matches) { // If media query matches
        frame.style.width = frame.style.width === "400px" ? "320px" : "400px";
    } else {
        frame.style.width = frame.style.width = "400px";
    }
}
var x = window.matchMedia("(max-width: 475px)");
myFunction(x);// Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
