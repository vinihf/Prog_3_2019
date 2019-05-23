var dark = document.getElementById('dark');
var light = document.getElementById('light');
var input = document.querySelectorAll('input.inp');
var btn = document.getElementById('btn');
var nome = document.getElementsByClassName('inp');
var nomediv = document.getElementsByName('nomes');
var personagens = [0,0,0,0,0];
var j1 = document.querySelector('.j1');
var j2 = document.querySelector('.j2');
var j3 = document.querySelector('.j3');
var j4 = document.querySelector('.j4');
var j5 = document.querySelector('.j5');
var contador = 0;
function sorteio(jogador){
    let select = document.getElementById('repetir').value;
    if(select == "1"){
        let x = Math.floor((Math.random() * 10) + 1);
        if(x==1){
            jogador.src = "Specialists/Battery.jpg";
        }else if (x == 2){
            jogador.src = "Specialists/Nomad.jpg";
        }else if (x == 3){
            jogador.src = "Specialists/Firebreak.jpg";
        }else if (x == 4){
            jogador.src = "Specialists/Ajax.jpg";
        }else if (x == 5){
            jogador.src = "Specialists/Crash.jpg";
        }else if (x == 6){
            jogador.src = "Specialists/Prophet.jpg";
        }else if (x == 7){
            jogador.src = "Specialists/Recon.jpg";
        }else if (x == 8){
            jogador.src = "Specialists/Seraph.jpg";
        }else if (x == 9){
            jogador.src = "Specialists/Torque.jpg";
        }else{
            jogador.src = "Specialists/Ruin.jpg";
        }
    }else if (select == "2"){
        while(true) {
            let x = Math.floor((Math.random() * 10) + 1);
            if (x == personagens[0] |x == personagens[1] |x == personagens[2] |x == personagens[3] |x == personagens[4]){
                 continue;
            }else{
                personagens[contador] = x;
                break;
                }
            }
        }
}

function sorteio2(jogador,x){
    if(x==1){
        jogador.src = "Specialists/Battery.jpg";
    }else if (x == 2){
        jogador.src = "Specialists/Nomad.jpg";
    }else if (x == 3){
        jogador.src = "Specialists/Firebreak.jpg";
    }else if (x == 4){
        jogador.src = "Specialists/Ajax.jpg";
    }else if (x == 5){
        jogador.src = "Specialists/Crash.jpg";
    }else if (x == 6){
        jogador.src = "Specialists/Prophet.jpg";
    }else if (x == 7){
        jogador.src = "Specialists/Recon.jpg";
    }else if (x == 8){
        jogador.src = "Specialists/Seraph.jpg";
    }else if (x == 9){
        jogador.src = "Specialists/Torque.jpg";
    }else if (x == 10){
        jogador.src = "Specialists/Ruin.jpg";
    }


}
dark.addEventListener('click', function(event){
    document.querySelector('body').style = "background-image: url(Black.jpg)"
    document.querySelector('select').style = "background-color: rgba(0, 0, 0, 0.61);border-color: #b1b1b1;color: #b1b1b1;";
    document.querySelector('button').style = "background-color: rgba(0, 0, 0, 0.61);border-color: #b1b1b1;color: #b1b1b1;";
    document.querySelector('input').style = "background-color: rgba(0, 0, 0, 0.61);border-color: #b1b1b1;color: #b1b1b1;";
    for (let index = 0; index < input.length; index++) {
        input[index].style = "background-color: rgba(0, 0, 0, 0.61);border-color: #b1b1b1;color: #b1b1b1;;"
    }
    event.preventDefault();
});

light.addEventListener('click', function(event){
    document.querySelector('body').style = "background-image: url(White.jpg)"
    document.querySelector('select').style = "background-color:#303030a8;";
    document.querySelector('button').style = "background-color:#303030a8;";
    for (let index = 0; index < input.length; index++) {
        input[index].style = "background-color:#303030a8;;"
    }
    event.preventDefault();
});

btn.addEventListener('click',function(event) {
    for (let index = 0; index < nome.length; index++) {
        if(nome[index].value == ""){
            nomediv[index].innerHTML = " Jogador " + parseInt(index+1);
        }else{
            nomediv[index].innerHTML = nome[index].value;
        }
    }
    sorteio(j1);
    contador++;
    sorteio(j2);
    contador ++;
    sorteio(j3);
    contador++;
    sorteio(j4);
    contador++;
    sorteio(j5);
    if(document.getElementById('repetir').value == "2"){
        sorteio2(j1,personagens[0]);
        sorteio2(j2,personagens[1]);
        sorteio2(j3,personagens[2]);
        sorteio2(j4,personagens[3]);
        sorteio2(j5,personagens[4]);
    }
    personagens = [0,0,0,0,0];
    contador = 0;
    event.preventDefault();
});