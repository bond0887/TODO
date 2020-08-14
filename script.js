var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var butn = document.getElementById("enter");
var input1 = document.getElementById("userinput");
var ol = document.querySelector("ol");



function removeParent(evt){
	evt.target.parentNode.remove();
}

function todo(){
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input1.value));
		var button1 = li.appendChild(document.createElement("button"));
		button1.innerHTML = "Remove";
		button1.onclick = removeParent;
		ol.appendChild(li);
		ol.onclick = function(evt){
			evt.target.classList.toggle("Done");
		}
		input1.value = "";
}
function clickattr(){
	if(input1.value.length > 0){
		todo();
	}
}

function pressattr(evt){
	if(input1.value.length > 0 && evt.keyCode === 13){
		todo();
	}
}

butn.addEventListener("click", clickattr);
input1.addEventListener("keypress", pressattr);


function gradientColor(){
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"	;
}
color1.addEventListener("input" , gradientColor);
color2.addEventListener("input" , gradientColor);