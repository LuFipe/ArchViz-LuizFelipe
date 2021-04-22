//Declaração e inicialização de var para elementos fixos
var body = window.document.getElementById("corpo_ID");
var viewPort = window.document.getElementById("ViewPort_ID");

//Declaração de variaveis para elementos criados
var post;
var smokeScreen;
var titPost;
var imgPerf;
var authPost;
var imgPost;

//Var textos
var titulo = window.document.createTextNode("Aqui foi");
var autor = window.document.createTextNode("Luiz Felipe");

function genPost(){
	// Inicializaçao de variaveis
	post = document.createElement("div");
	smokeScreen = document.createElement("div");
	titPost = document.createElement("h1");
	imgPerf = document.createElement("IMG");
	authPost = document.createElement("h2");
	imgPost = document.createElement("IMG");

	//Adicao de classes
	post.classList.add("post_CLASS");
	smokeScreen.classList.add("smokeScreen_CLASS");
	titPost.classList.add("titPost_CLASS");
	imgPerf.classList.add("imgPerf_CLASS");
	authPost.classList.add("authPost_CLASS");
	imgPost.classList.add("imgPost_CLASS");

	//Definição de parentalidade
	viewPort.appendChild(post);
	
	post.appendChild(smokeScreen);
	post.appendChild(imgPost);

	smokeScreen.appendChild(titPost);
	smokeScreen.appendChild(imgPerf);
	smokeScreen.appendChild(authPost);

	//Definição do conteudo
	titPost.appendChild(titulo);
	authPost.appendChild(autor);
	imgPerf.src = "./Images/Perfil.png";
	imgPost.src = "./Images/Projects/Loft_Exterior_Edit.png"

	window.alert(imgPost.src);
}