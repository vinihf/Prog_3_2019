
var listaACDC=['Highway To Hell','Back in Black','Thunderstruck','T.N.T'];
var listaGuns=["Sweet Child O' Mine","Patience","November Rain"];
var listaNirvana=['Smells Like Teen Spirit','Come As You Are','Heart - Shaped Box'];
var listaMetallica=['Enter Sandeman','Sad But True','Nothing Else Matters','Metalica Fuel'];

var dicionarioDeMusicas = {
	"Highway":"musicas/Highway.mp3",/*ACDC  */
	"Back":"musicas/back.mp3",
	"Thunderstruck":"musicas/Thunderstruck.mp3",
	"T.N.T":"musicas/TNT.mp3",
	"Patience":"musicas/Patience.mp3",/* Guns */
	"Sweet":"musicas/Sweet.mp3",
	"November":"musicas/November.mp3",
	"Smells":"musicas/Smells.mp3", /*Nirvana */
	"Come":"musicas/Come.mp3",
	"Heart":"musicas/Heart.mp3",
	"Enter":"musicas/Enter.mp3",/*Metallica*/
	"Sad":"musicas/Sad.mp3",
	"Nothing":"musicas/Nothing.mp3",
	"Metalica":"musicas/Metalica.mp3",
};


function Pesquisar(){
	Recarregar();
	
	var d = document.getElementById("banda");
	var itemSelecionado = d.options[d.selectedIndex].value;
	/** Talvez posso só fazer um for e testar só a lista que devo usar de acordo com a banda!!! */
	if (itemSelecionado=="acdc") {

		let p = document.getElementById("musica"); 
		for (var i = 0; i < listaACDC.length; i++) {
			let option = document.createElement('option');
			option.innerHTML = listaACDC[i];
			p.appendChild(option);
		}
	}else if(itemSelecionado=="guns"){
		let p = document.getElementById("musica");
		for (var i = 0; i < listaGuns.length; i++) {
			let option = document.createElement('option');
			option.innerHTML = listaGuns[i];
			p.appendChild(option);
		}
	}else if (itemSelecionado=="nirvana"){
		let p = document.getElementById("musica");
		for (var i = 0; i < listaNirvana.length; i++) {
			let option = document.createElement('option');
			option.innerHTML = listaNirvana[i];
			p.appendChild(option);
		}
	}else if (itemSelecionado=="metallica") {
		let p = document.getElementById("musica");
		for (var i = 0; i < listaMetallica.length; i++) {
			let option = document.createElement('option');
			option.innerHTML = listaMetallica[i];
			p.appendChild(option);
		}
	}
}

function Recarregar() {
	var p = document.getElementById("musica");
	var len = document.getElementById("musica").length;
	for (var i = 0; i < len; i++) {
		let option = document.createElement('option');
		
		p.remove(option);
	}
 
}

function loadmusic(){
	
	var m = document.getElementById("musica");
	var musicaSelecionada = m.value;
	var quebra = musicaSelecionada.split(" ");
	var nome = quebra[0];
	var audio = document.getElementById("audio");
	audio.src = dicionarioDeMusicas[nome];
	audio.load();

}


function trocar(){
	
	if (document.getElementById('L').checked==true) { /**quandoo for branco*/
		document.getElementById('tudo').style.backgroundColor = "#FFFFFF";
		document.getElementById('tudo').style.color = "#000000";
		document.getElementById("banda").style.backgroundColor="#F0FFFF";
		document.getElementById("musica").style.backgroundColor="#F0FFFF";
		document.getElementById("banda").style.color="black";
		document.getElementById("musica").style.color="black";

	}else{  /*quando for preto */
		document.getElementById('tudo').style.backgroundColor = "#000000";
		document.getElementById('tudo').style.color = "#696969";
		document.getElementById("banda").style.backgroundColor="black";
		document.getElementById("musica").style.backgroundColor="black";
		document.getElementById("banda").style.color="red";
		document.getElementById("musica").style.color="red";



		
		
	}
}
