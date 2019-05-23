//tema form
var tema = document.querySelector("#b1");
tema.addEventListener('click', function(x){
    document.querySelector(".container").style = "background-color: white; color:black";
});
var tema_ = document.querySelector("#b2");
tema_.addEventListener('click', function(x){
    document.querySelector(".container").style = "background-color: black; color:white";
});
//tema resultado
var temar = document.querySelector("#b1");
temar.addEventListener('click', function(x){
    document.querySelector(".resultado").style = "background-image: url(fundo-em-quadrinhos-de-meio-tom-azul_23-2147920996.jpg); color:black";
});
var temar = document.querySelector("#b2");
temar.addEventListener('click', function(x){
    document.querySelector(".resultado").style = "background-image: url(linakalina171100027.jpg); color:white";
});
//tema header
var temat = document.querySelector("#b1");
temat.addEventListener('click', function(x){
    document.querySelector(".layout-inicial").style = "background-image: url(fundo-em-quadrinhos-de-meio-tom-azul_23-2147920996.jpg); color:black";
});
var temat = document.querySelector("#b2");
temat.addEventListener('click', function(x){
    document.querySelector(".layout-inicial").style = "background-image: url(linakalina171100027.jpg); color:white";
});
//tema footer
var temaf = document.querySelector("#b1");
temaf.addEventListener('click', function(x){
    document.querySelector(".tema").style = "background-image: url(fundo-em-quadrinhos-de-meio-tom-azul_23-2147920996.jpg); color:black";
});
var temaf = document.querySelector("#b2");
temaf.addEventListener('click', function(x){
    document.querySelector(".tema").style = "background-image: url(linakalina171100027.jpg); color:white";
});
//tema h1
var temah = document.querySelector("#b1");
temah.addEventListener('click', function(x){
    document.querySelector(".troca").style = "background-image: url(fundo-em-quadrinhos-de-meio-tom-azul_23-2147920996.jpg); color:black";
});
var temah = document.querySelector("#b2");
temah.addEventListener('click', function(x){
    document.querySelector(".troca").style = "background-image: url(linakalina171100027.jpg); color:white";
});
var valorhq1 = 0;
var valorhq2 = 0;
var valorhq3 = 0;
var valor = 0;
var tira = 0;
var editora = document.querySelector("#curso");
editora.addEventListener('change', function(x){
    var hq = document.querySelector("#Nhq");
    for(i = 1; i<hq.length;i++){
        hq.options[i].remove();
    }
    if(hq != 0){
        if(this.value == 1){
            if(valor != 1){
                item1 = document.createElement('option');
                texto1 = document.createTextNode("Homem Aranha +20,00$")
                item1.appendChild(texto1);
                item1.value=1;
                hq.appendChild(item1);
                item = document.createElement('option');
                texto = document.createTextNode("Homem de Ferro +25,00$")
                item.appendChild(texto);
                item.value=2;
                hq.appendChild(item);
                item2 = document.createElement('option');
                texto2 = document.createTextNode("Hulk +10,00$")
                item2.appendChild(texto2);
                item2.value=3;
                hq.appendChild(item2);
                if(valor != 0){
                    hq.options[1].remove();
                }
                valor=1;
            }
        }
        if(this.value == 2){
            if(valor != 2){
                item = document.createElement('option');
                texto = document.createTextNode("Batman +25,00$")
                item.appendChild(texto);
                item.value=1;
                hq.appendChild(item);
                item1 = document.createElement('option');
                texto1 = document.createTextNode("Flash +20,00$")
                item1.appendChild(texto1);
                item1.value=2;
                hq.appendChild(item1);
                item2 = document.createElement('option');
                texto2 = document.createTextNode("Super Homem +10,00$")
                item2.appendChild(texto2);
                item2.value=3;
                hq.appendChild(item2);
                if(valor != 0){
                    hq.options[1].remove();
                }
                valor=2;
            }
        }
    
 }
});
var vHQ = 0;
var hq1 = document.querySelector("#Nhq");
hq1.addEventListener('change',function(x){
    console.log(hq1);
    if(hq1.value == 1){
        vHQ = 20;
        valor1 = 1;
    }
    if(hq1.value == 2){
        vHQ = 25;
        valor1 = 2;
    }
    if(hq1.value == 3){
        vHQ = 10;
        valor1 = 3;
    }
});
var vCapa = 0;
var capa = document.querySelector("#capa");
capa.addEventListener('change', function(x){
    if(capa != 0){
        if(this.value == 1){
            vCapa = 20;
            valor = 1;
            }
        if(this.value == 2){
            vCapa = 8;
            valor = 2;
            }
        
    }
});
var soma = document.querySelector(".soma")
soma.addEventListener('click',function(e){
    e.preventDefault();
    let v1 = document.querySelector("#qtde");
    document.querySelector(".resultado").innerHTML =("O resultado é:")+(" ")+(parseInt(v1.value) * (parseInt(vCapa) + parseInt(vHQ)))+(",00$");
    
})