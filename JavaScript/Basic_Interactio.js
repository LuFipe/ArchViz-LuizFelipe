

function dspSobre(){
	//window.alert("Entrou Ab");
	var about = window.document.getElementById("aboutGrid_ID");
	var soft = window.document.getElementById("softGrid_ID");
	var hobby = window.document.getElementById("hobbieGrid_ID");
	var cont = window.document.getElementById("contGrid_ID");
	var expGrad = window.document.getElementById("divExpGrad_ID");

	soft.style.display = "none";
	hobby.style.display = "none";
	cont.style.display = "none";
	expGrad.style.display = "none";
	about.style.display = "block";
}
function dspSoft(){
	//window.alert("Entrou Soft");
	var about = window.document.getElementById("aboutGrid_ID");
	var soft = window.document.getElementById("softGrid_ID");
	var hobby = window.document.getElementById("hobbieGrid_ID");
	var cont = window.document.getElementById("contGrid_ID");
	var expGrad = window.document.getElementById("divExpGrad_ID");
	
	hobby.style.display = "none";
	cont.style.display = "none";
	about.style.display = "none";
	expGrad.style.display = "none";
	soft.style.display = "flex";
}
function dspHobby(){
	//window.alert("Entrou Hobby");
	var about = window.document.getElementById("aboutGrid_ID");
	var soft = window.document.getElementById("softGrid_ID");
	var hobby = window.document.getElementById("hobbieGrid_ID");
	var cont = window.document.getElementById("contGrid_ID");
	var expGrad = window.document.getElementById("divExpGrad_ID");
	
	cont.style.display = "none";
	about.style.display = "none";
	soft.style.display = "none";
	expGrad.style.display = "none";
	hobby.style.display = "flex";
}
function dspCont(){
	//window.alert("Entrou Cont");
	var about = window.document.getElementById("aboutGrid_ID");
	var soft = window.document.getElementById("softGrid_ID");
	var hobby = window.document.getElementById("hobbieGrid_ID");
	var cont = window.document.getElementById("contGrid_ID");
	var expGrad = window.document.getElementById("divExpGrad_ID");

	about.style.display = "none";
	soft.style.display = "none";
	hobby.style.display = "none";
	expGrad.style.display = "none";
	cont.style.display = "flex";
}

function dspExpGrad(){
	//window.alert("Entrou Ab");
	var about = window.document.getElementById("aboutGrid_ID");
	var soft = window.document.getElementById("softGrid_ID");
	var hobby = window.document.getElementById("hobbieGrid_ID");
	var cont = window.document.getElementById("contGrid_ID");
	var expGrad = window.document.getElementById("divExpGrad_ID");

	soft.style.display = "none";
	hobby.style.display = "none";
	cont.style.display = "none";
	about.style.display = "none";
	expGrad.style.display = "flex";
}

function dspAmbiente(){
	//window.alert("Entrou Ab");
	var vpAmbiente = window.document.getElementById("portfolioAmbientes_ID");
	var vpModelo = window.document.getElementById("portfolioModelos_ID");
	var vp3D = window.document.getElementById("portfolio3Dviews_ID");

	vpModelo.style.display = "none";
	vp3D.style.display = "none";
	vpAmbiente.style.display = "flex";
}

function dspModelo(){
	//window.alert("Entrou Ab");
	var vpAmbiente = window.document.getElementById("portfolioAmbientes_ID");
	var vpModelo = window.document.getElementById("portfolioModelos_ID");
	var vp3D = window.document.getElementById("portfolio3Dviews_ID");

	vp3D.style.display = "none";
	vpAmbiente.style.display = "none";
	vpModelo.style.display = "flex";
}

function dsp3DView(){
	//window.alert("Entrou Ab");
	var vpAmbiente = window.document.getElementById("portfolioAmbientes_ID");
	var vpModelo = window.document.getElementById("portfolioModelos_ID");
	var vp3D = window.document.getElementById("portfolio3Dviews_ID");

	vpAmbiente.style.display = "none";
	vpModelo.style.display = "none";
	vp3D.style.display = "flex";
}