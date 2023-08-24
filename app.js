var me = document.getElementById("me");
var side = document.getElementById("side");
console.log(side.style);
me.addEventListener("mouseover", function(){
    console.log("ok");
    side.style.marginLeft = "0px";
});
side.addEventListener("mouseover", function(){
    side.style.marginLeft = "0px";
});
me.addEventListener("mouseout", function(){
    side.style.marginLeft = "-300px";
});
side.addEventListener("mouseout", function(){
    side.style.marginLeft = "-300px";
});



setInterval(displayHour, 1000);

function displayHour() {
    var now = new Date();
    var heures = now.getHours();
    var minutes = now.getMinutes();
    var secondes = now.getSeconds();
    if(heures < 10) {heures = '0' + heures;}
    if(minutes < 10) {minutes = '0' + minutes;}
    if(secondes < 10) {secondes = '0' + secondes;}
    var hour = document.getElementById("hour");
    hour.innerHTML = heures + ":" + minutes + ":" + secondes;
};

function sentence() {

};

var prj1 = document.getElementById("prj1");
var txt1 = document.getElementById('txt1');
console.log(side.style);
prj1.addEventListener("click", function(){
    if (txt1.style.display === "none") {
        txt1.style.display = "block";
        txt2.style.display = "none";
        txt3.style.display = "none";
        } else {
        txt1.style.display = "none";
    }
});

var prj2 = document.getElementById("prj2");
var txt2 = document.getElementById('txt2');
console.log(side.style);
prj2.addEventListener("click", function(){
    console.log("ok");
    if (txt2.style.display === "none"){
        txt2.style.display = "block";
        txt1.style.display = "none";
        txt3.style.display = "none";
    } else {
        txt2.style.display = "none";
    }
});

var prj3 = document.getElementById("prj3");
var txt3 = document.getElementById('txt3');
console.log(side.style);
prj3.addEventListener("click", function(){
    console.log("ok");
    if (txt3.style.display === "none") {
        txt3.style.display = "block";
        txt1.style.display = "none";
        txt2.style.display = "none";
    } else {
        txt3.style.display = "none";
    }
});

var imgprj1 = document.getElementById("img-prj1")
var imgprj2 = document.getElementById("img-prj2")
var imgprj3 = document.getElementById("img-prj3")

prj1.addEventListener("mouseover", function(){
    imgprj1.style.filter = "blur(0)";
    imgprj2.style.filter = "blur(5px)";
    imgprj3.style.filter = "blur(5px)";
});

prj2.addEventListener("mouseover", function(){
    imgprj2.style.filter = "blur(0)";
    imgprj1.style.filter = "blur(5px)";
    imgprj3.style.filter = "blur(5px)";
});

prj1.addEventListener("mouseout", function(){
    imgprj1.style.filter = "blur(5px)";
});

prj2.addEventListener("mouseout", function(){
    imgprj2.style.filter = "blur(5px)";
});

prj3.addEventListener("mouseout", function(){
    imgprj3.style.filter = "blur(5px)";
});

prj3.addEventListener("mouseover", function(){
    imgprj3.style.filter = "blur(0)";
    imgprj1.style.filter = "blur(5px)";
    imgprj2.style.filter = "blur(5px)";
});