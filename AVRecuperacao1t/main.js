btn = document.querySelector("button");
btn.addEventListener("click",function(){
    jogada1 = document.querySelector("input[name=jogada1]:checked").value;
    jogada2 = document.querySelector("input[name=jogada2]:checked").value;
    if (jogada1==jogada2){
        document.querySelector('#resultado').innerHTML = "EMPATE";
    }else if ((jogada1==1 && jogada2==3) ||(jogada1==2 && jogada2==1)|| (jogada1==3 && jogada2==2)){
        document.querySelector('#resultado').innerHTML = "VENCEDOR: JOGADOR 1";
    }else if((jogada2==1 && jogada1==3) ||(jogada2==2 && jogada1==1)|| (jogada2==3 && jogada1==2)){
        document.querySelector('#resultado').innerHTML = "VENCEDOR: JOGADOR 2";
    }
});