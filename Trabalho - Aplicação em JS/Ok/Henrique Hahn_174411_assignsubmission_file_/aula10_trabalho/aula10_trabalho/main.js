/*Comentário rápido:
    -> Ao usar o array movimentos, utilizei movimentos = [] (dentro de cada botão) e usei o push;
    -> Mas eu podeira ter usado movimentos = [] (fora dos botões) e assim teria que usar 
    movimentos[x] = document.querySelector("movimento_x"), isso resultaria em ter de chamar menos vezes,
    mas como não tenho certeza se o funcionamento seria o mesmo, preferi não arriscar;
*/

var cor = document.querySelector(".claro");
cor.addEventListener("click", function(e){
    document.querySelector("#container").style = "color: black; background-image: url('imagem_light.png')";
});

var cor = document.querySelector(".escuro");
cor.addEventListener("click", function(e){
    document.querySelector("#container").style = "color: white; background-image: url('imagem_dark.png')";
});


var vidas = document.querySelector(".vida");
var direcoes = [];
var cont = 0;

var btnConfirm_movimentos = document.querySelector(".movimento")
btnConfirm_movimentos.addEventListener("click", function(e){
    e.preventDefault();
    var name = document.querySelector(".nome");
    if (name.value == "" || name.value == null) {
        name.value = "Gasparzinho";
        console.log("Cheguei "+name.value);
    }
    document.querySelector(".nome").disabled = true;
    document.querySelector(".vida").disabled = true;
    if (vidas.value > 0) {
        vidas.value --;

        var movimentos = [];
        movimentos.push(document.querySelector(".movimento_1"));
        movimentos.push(document.querySelector(".movimento_2"));
        movimentos.push(document.querySelector(".movimento_3"));
        movimentos.push(document.querySelector(".movimento_4"));
        movimentos.push(document.querySelector(".movimento_5"));

        if (cont == 0) {
            for (let index = 0; index < movimentos.length; index++) {
                direcoes[index] = Math.floor(Math.random() * 3);
            }
        }
        cont ++;

        var saida = movimentos.length;
        for (let index = 0; index < movimentos.length; index++) {
            if (parseInt(movimentos[index].value) == direcoes[index]){
                movimentos[index].style = "background-color: #006400";
                saida -= 1;
            }
            else{
                for (index; index < movimentos.length; index++) {
                    movimentos[index].style = "background-color: #8B0000";
                }
                break;
            }
        }
        
        if (saida == 0) {
            document.querySelector(".resultado").innerHTML = "O resultado é: "+ name.value +" conseguiu sair.";
            document.querySelector(".movimento").disabled = true;
            vidas.value ++;
        }
        else{
            document.querySelector(".resultado").innerHTML = "O resultado é: "+ name.value +", além de não conseguir sair, ainda conseguiu ficar mais perdido.";
            if(vidas.value == 0){
                document.querySelector(".resultado").innerHTML = "O resultado é: "+ name.value +", morreu no labirinto.";
                document.querySelector(".movimento").disabled = true;
            }
        }
    }
});

var btnReboot = document.querySelector(".reboot")
btnReboot.addEventListener("click", function(e){
    e.preventDefault();
    var movimentos = [];
    movimentos.push(document.querySelector(".movimento_1"));
    movimentos.push(document.querySelector(".movimento_2"));
    movimentos.push(document.querySelector(".movimento_3"));
    movimentos.push(document.querySelector(".movimento_4"));
    movimentos.push(document.querySelector(".movimento_5"));

    for (let index = 0; index < movimentos.length; index++) {
        movimentos[index].style = "background-color: white";
        movimentos[index].value = 1;
    }

    document.querySelector(".nome").disabled = false;
    document.querySelector(".nome").value = null;

    document.querySelector(".vida").disabled = false;
    document.querySelector(".vida").value = 1;

    document.querySelector(".movimento").disabled = false;
    document.querySelector(".resultado").innerHTML = "O resultado é: ";
    cont = 0;

});
