var alfa = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var senha =document.getElementById("passagem");
var container = document.querySelector("#container");
var d = 'dark';
var l = 'light';

botao = document.querySelector(".botao");
botao.addEventListener("click",function(e){
    if(tipo.value==0){
        document.getElementById("resultado").innerHTML = "Selecione o tipo...";
    }
    if(tipo.value==1){
        if(senha>25){
            senha=25;
        }
        if(senha<0){
            senha=0;
        }
        var input = document.getElementById("palavra").value.toLowerCase();
        var inputSeparado = input.split("");
        var resultado = "";   
        for(var i = 0; i<input.length; i++){
            for(var j = 0; j<alfa.length; j++){
                if(alfa[j]==inputSeparado[i]){
                    var posicaoDaLetraNoAlfabeto = j;
                    var letraComDeslocamento = (parseInt(posicaoDaLetraNoAlfabeto) + parseInt(senha.value));
                    if(letraComDeslocamento>25){
                        letraComDeslocamento-=25;
                        resultado += alfa[letraComDeslocamento];
                    }else{
                        resultado += alfa[letraComDeslocamento];
                    }
                    console.log(letraComDeslocamento); 
                } 
            }
        }
        document.getElementById("resultado").innerHTML = resultado;
        }
    else if(tipo.value==2){
        if(senha>25){
            senha=25;
        }
        if(senha>0){
            senha=0;
        }
        var input = document.getElementById("palavra").value.toLowerCase();
        var inputSeparado = input.split("");
        var resultado = ""; 
           
        for(var i = 0; i<input.length; i++){
            for(var j = 0; j<alfa.length; j++){
                if(alfa[j]==inputSeparado[i]){
                    var posicaoDaLetraNoAlfabeto = j;
                    var letraComDeslocamento = (parseInt(posicaoDaLetraNoAlfabeto) - parseInt(senha.value));
                    if(letraComDeslocamento>25){
                        letraComDeslocamento-=25;
                        resultado += alfa[letraComDeslocamento];
                    }else if(letraComDeslocamento<0){
                        letraComDeslocamento+=25;
                        resultado += alfa[letraComDeslocamento];
                    }else{
                        resultado += alfa[letraComDeslocamento];
                    }
                    console.log(letraComDeslocamento); 
                } 
            }
        }
        document.getElementById("resultado").innerHTML = resultado;
        }
        e.preventDefault()
    }); 

    
function skin0(){
    document.fgColor = "black";
    container.classList.add(l);
    container.classList.remove(d);
}
function skin1(){
    document.fgColor = "white";
    container.classList.add(d);
    container.classList.remove(l);
}
