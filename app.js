var me = document.getElementById("me");
var side = document.getElementById("side");
console.log(side.style);
me.addEventListener("mouseover", function(){
    console.log("ok");
    side.style.marginLeft = "0px";
})
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
    var heure = now.getHours();
    var minutes = now.getMinutes();
    var secondes = now.getSeconds();
    var hour = document.getElementById("hour");
    hour.innerHTML = heure + ":" + minutes + ":" + secondes;
}