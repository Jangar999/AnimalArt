// Write our JavaScript in here
// alert("HELLO FROM APP.JS!");
var pics = [
	"imgs/art1.jpg",
	"imgs/art2.jpg",
	"imgs/art3.jpg",
	"imgs/art4.jpg",
	"imgs/art5.jpg",
	"imgs/art6.jpg",
	"imgs/art7.jpg",
	"imgs/art8.jpg",
	"imgs/art9.jpg",
	"imgs/art10.jpg",
	"imgs/art11.jpg",
	"imgs/art12.jpg",
	"imgs/art13.jpg",
	"imgs/art14.jpg",
	"imgs/art15.jpg",
	"imgs/art16.jpg",
	"imgs/art17.jpg",
	"imgs/art18.jpg",
	"imgs/art19.jpg",
	"imgs/art20.jpg",
	"imgs/art21.jpg",
	"imgs/art22.jpg",
	"imgs/art23.jpg",
	"imgs/art24.jpg",
	"imgs/art25.jpg",
	"imgs/art26.jpg",
	"imgs/art27.jpg",
	"imgs/art28.jpg",
	"imgs/art29.jpg",
	"imgs/art30.jpg",
	"imgs/art31.jpg",
	"imgs/art32.jpg",
	"imgs/art33.jpg",
	"imgs/art34.jpg",
	"imgs/art35.jpg",
	"imgs/art36.jpg",
	"imgs/art37.jpg",
	"imgs/art38.jpg",
	"imgs/art39.jpg",
	"imgs/art40.jpg",
	"imgs/art41.jpg",
	"imgs/art42.jpg",

]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 42){
		counter = 0;
	}
	img.src = pics[counter]
	counter = counter + 1;
});
