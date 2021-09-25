var tabButton = document.querySelectorAll('.tabContainer .buttonContainer button');
var tabPanel = document.querySelectorAll('.tabContainer .tabPanel');

function showPanel(panelIndex,colorCode) {
	tabButton.forEach(function(node){
		node.style.backgroundcolor="";
		node.style.color="";
	});
	tabButton[panelIndex].style.backgroundcolor=colorCode;
	tabButton[panelIndex].style.color="white";

	tabPanel.forEach(function(node){
		node.style.display="none";
	});
	tabPanel[panelIndex].style.display="block";
	tabPanel[panelIndex].style.backgroundcolor=colorCode;
}

showPanel(0,'#F8F8FF');


function run(){
	let htmlcode = document.querySelector(".container #html-code").value;
	let csscode = "<style>"+document.querySelector(".container #css-code").value+"</style";
	let jscode = document.querySelector(".container #js-code").value;
	let output = document.querySelector(".container #output");
	//console.log(htmlcode,csscode,jscode,output);

	output.contentDocument.body.innerHTML = htmlcode+csscode;
	output.contentWindow.eval(jscode);
}
document.querySelector(".container #html-code").addEventListener("keyup",run);
document.querySelector(".container #css-code").addEventListener("keyup",run);
document.querySelector(".container #js-code").addEventListener("keyup",run);