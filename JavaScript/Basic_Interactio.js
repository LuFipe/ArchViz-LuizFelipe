

function dspSobre(){
	//window.alert("Entrou Ab");
	var about = window.document.getElementById("aboutGrid_ID");
	var soft = window.document.getElementById("softGrid_ID");
	var hobby = window.document.getElementById("hobbieGrid_ID");
	var cont = window.document.getElementById("contGrid_ID");

	soft.style.display = "none";
	hobby.style.display = "none";
	cont.style.display = "none";
	about.style.display = "flex";
}
function dspSoft(){
	//window.alert("Entrou Soft");
	var about = window.document.getElementById("aboutGrid_ID");
	var soft = window.document.getElementById("softGrid_ID");
	var hobby = window.document.getElementById("hobbieGrid_ID");
	var cont = window.document.getElementById("contGrid_ID");
	
	hobby.style.display = "none";
	cont.style.display = "none";
	about.style.display = "none";
	soft.style.display = "flex";
}
function dspHobby(){
	//window.alert("Entrou Hobby");
	var about = window.document.getElementById("aboutGrid_ID");
	var soft = window.document.getElementById("softGrid_ID");
	var hobby = window.document.getElementById("hobbieGrid_ID");
	var cont = window.document.getElementById("contGrid_ID");
	
	cont.style.display = "none";
	about.style.display = "none";
	soft.style.display = "none";
	hobby.style.display = "flex";
}
function dspCont(){
	//window.alert("Entrou Cont");
	var about = window.document.getElementById("aboutGrid_ID");
	var soft = window.document.getElementById("softGrid_ID");
	var hobby = window.document.getElementById("hobbieGrid_ID");
	var cont = window.document.getElementById("contGrid_ID");

	about.style.display = "none";
	soft.style.display = "none";
	hobby.style.display = "none";
	cont.style.display = "flex";
}