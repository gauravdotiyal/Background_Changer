var Imgcont=document.querySelector(".img_cont");
var Imgwrap=document.querySelector(".img_wrap");
var originalimg=document.getElementById("original");
var line=document.getElementById("line");

originalimg.style.width=Imgcont.offsetWidth+"px";

var leftSpace=Imgcont.offsetLeft;

Imgcont.onmousemove=function(e){
    var boxwidth=(e.pageX-leftSpace)+"px";
    Imgwrap.style.width=boxwidth;
    line.style.left=boxwidth;
}

 