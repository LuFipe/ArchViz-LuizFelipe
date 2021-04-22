var poPah = document.getElementById("PopUp_ID");
var curr = document.getElementById("Curr_ID");
var auth = document.getElementById("Autor_ID");
var cont = document.getElementById("Cont_ID");
var soft = document.getElementById("Soft_ID");
var sec_prin = document.getElementById("SecPrinc_ID");
var n = 0

function showCurr(){
	n = 0;
}

function showSoft(){
	n = 1;
}

function showAuth(){
	n = 2;
}

function showCont(){
	n = 3;
}


function showPopUp(){
	poPah.style.display = "block";
	switch(n){
		case 0:
			curr.style.display = "block";
			auth.style.display = "none";
			cont.style.display = "none";
			soft.style.display = "none";
			break;
		case 1:
			curr.style.display = "none";
			auth.style.display = "none";
			cont.style.display = "none";
			soft.style.display = "grid";
			break;
		case 2:
			curr.style.display = "none";
			auth.style.display = "block";
			cont.style.display = "none";
			soft.style.display = "none";
			break;
		case 3:
			curr.style.display = "none";
			auth.style.display = "none";
			cont.style.display = "block";
			soft.style.display = "none";
			break;
		default:
			curr.style.display = "none";
			auth.style.display = "none";
			cont.style.display = "none";
			soft.style.display = "none";
	}
	sec_prin.style.borderRadius = "1% 1% 1% 1%";
}

function hidePopUp(){
	poPah.style.display = "none";
	sec_prin.style.borderRadius = "1% 1% 10% 1%";
}