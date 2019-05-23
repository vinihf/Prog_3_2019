let radioLight = document.querySelector(".radioLight");
let radioDark = document.querySelector(".radioDark");

radioLight.addEventListener("click", function(){
    document.querySelector(".form").style='background-color: #FF6347; color: black;';
});

radioDark.addEventListener("click", function(e){
    document.querySelector(".form").style='background-color: #B22222; color: white';
});

let radioThanos = document.querySelector(".radioThanos");
let radioLoki = document.querySelector(".radioLoki");
let radioUltron = document.querySelector(".radioUltron");
let radioCoringa = document.querySelector(".radioCoringa");
let radioLex = document.querySelector(".radioLex");

let grana = document.querySelector(".grana");

radioThanos.addEventListener("click", function(){
    grana.innerHTML = "Você possui <b><u>R$100,00</b></u> para comprar seus heróis";
});
radioLoki.addEventListener("click", function(){
    grana.innerHTML = "Você possui <b><u>R$60,00</b></u> para comprar seus heróis";
});
radioUltron.addEventListener("click", function(){
    grana.innerHTML = "Você possui <b><u>R$70,00</b></u> para comprar seus heróis";
});
radioCoringa.addEventListener("click", function(){
    grana.innerHTML = "Você possui <b><u>R$50,00</b></u> para comprar seus heróis";
});
radioLex.addEventListener("click", function(){
    grana.innerHTML = "Você possui <b><u>R$30,00</b></u> para comprar seus heróis";
});

let checkFerro = document.querySelector(".checkFerro");
let checkSuperman = document.querySelector(".checkSuperman");
let checkCapita = document.querySelector(".checkCapita");
let checkBatman = document.querySelector(".checkBatman");
let checkThor = document.querySelector(".checkThor");

let btnLutar = document.querySelector(".btnLutar");

let dinheiro = 0;
btnLutar.addEventListener("click", function(e){
    if(radioThanos.checked == true){
        dinheiro = 100;
    }
    else if(radioLoki.checked == true){
        dinheiro = 60;
    }
    else if(radioUltron.checked == true){
        dinheiro = 70;
    }
    else if(radioCoringa.checked == true){
        dinheiro = 50;
    }
    else if(radioLex.checked == true){
        dinheiro = 30;
    }

    if(dinheiro==0){
        alert("Selecione algum vilão");
    }else{
        let iron = 0;
    let superman = 0;
    let capita = 0;
    let batman = 0;
    let thor = 0;

    if(checkFerro.checked == true){
        dinheiro-=50;
        iron++;
    }
    if(checkSuperman.checked == true){
        dinheiro-=70;
        superman++;
    }
    if(checkCapita.checked == true){
        dinheiro-=30;
        capita++;
    }
    if(checkBatman.checked == true){
        dinheiro-=20;
        batman++;
    }
    if(checkThor.checked == true){
        dinheiro-=60;
        thor++;
    }

    
    let herois = iron+superman+capita+batman+thor;
    if(dinheiro<0){
        alert("Você gastou mais dinheiro do que possuía, por favor selecione outros heróis!")
    }else if(herois==0){
        alert("Você precisa selecionar um herói!"); // Caso nao seja escolhido nenhum heroi
    }else{
        let ganhou = 0;
        if(radioThanos.checked == true){
            if(iron==1 & capita==1 & batman==1){
                ganhou++;
            }else if(superman==1 & capita==1){
                ganhou++;
            }
        }
        else if(radioLoki.checked == true){
            if(thor==1){
                ganhou++;
            }else if(capita==1 & batman==1){
                ganhou++;
            }
        }
        else if(radioUltron.checked == true){
            if(iron==1 & batman ==1){
                ganhou++;
            }
        }
        else if(radioCoringa.checked == true){
            if(iron==1){
                ganhou ++;
            }else if(capita==1 & batman==1){
                ganhou++;
            }
        }
        else if(radioLex.checked == true){
            if(capita==1){
                ganhou++;
            }
        }

        if(ganhou!= 0){
            var img = document.createElement("IMG");
            img.src = "win.png";
            img.style.width = "250px";
            img.style.height = "250px";
            document.querySelector(".resultado").innerHTML = "";
            document.getElementById('resultado').appendChild(img);
            
        }else{
            var img = document.createElement("IMG");
            img.src = "lose.png";
            img.style.width = "200px";
            img.style.height = "200px";
            document.querySelector(".resultado").innerHTML = "";
            document.getElementById('resultado').appendChild(img);
        }

    }

    
    }
    e.preventDefault();
});