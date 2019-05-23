var light = document.getElementById("L");
var dark = document.getElementById("D");
var cal = document.querySelector(".C");

    light.addEventListener('click',function(){
        document.querySelector("body").style = "background-image: url(foto2.png);background-size: cover;color:black";
        document.querySelector("html").style = "background-image: url(foto2.png);background-size: cover;color:black";
        document.querySelector("header").style = "border-color:black; background-image: linear-gradient(to bottom, #ffffff, #fbfbfb, #f7f7f7, #f4f4f4, #f0f0f0);";
        document.querySelector("footer").style = "border-color:black; background-image: linear-gradient(to bottom, #ffffff, #fbfbfb, #f7f7f7, #f4f4f4, #f0f0f0);";
        document.querySelector(".descricao").style = "border-color:black; background-image: linear-gradient(to bottom, #ffffff, #fbfbfb, #f7f7f7, #f4f4f4, #f0f0f0);";
        document.querySelector(".preco").style = "border-color:black; background-image: linear-gradient(to bottom, #ffffff, #fbfbfb, #f7f7f7, #f4f4f4, #f0f0f0);";
        document.querySelector(".seleciona").style = "border-color:black; background-image: linear-gradient(to bottom, #ffffff, #fbfbfb, #f7f7f7, #f4f4f4, #f0f0f0);";
        document.querySelector(".fundo").style = "border-color:black; background-image: linear-gradient(to bottom, #ffffff, #fbfbfb, #f7f7f7, #f4f4f4, #f0f0f0);";
    });
    dark.addEventListener('click',function(){
        document.querySelector("body").style = "background-image: url(foto.jpg);background-size: cover;color:white";
        document.querySelector("html").style = "background-image: url(foto.jpg);background-size: cover;color:white";
        document.querySelector("header").style = "border-color:white; background-image: linear-gradient(to bottom, #121212, #171717, #1b1b1b, #1f1f1f, #232323);";
        document.querySelector("footer").style = "border-color:white; background-image: linear-gradient(to bottom, #121212, #171717, #1b1b1b, #1f1f1f, #232323);";
        document.querySelector(".descricao").style = "border-color:white; background-image: linear-gradient(to bottom, #121212, #171717, #1b1b1b, #1f1f1f, #232323);";
        document.querySelector(".preco").style = "border-color:white;; background-image: linear-gradient(to bottom, #121212, #171717, #1b1b1b, #1f1f1f, #232323);";
        document.querySelector(".seleciona").style = "border-color:white; background-image: linear-gradient(to bottom, #121212, #171717, #1b1b1b, #1f1f1f, #232323);";
        document.querySelector(".fundo").style = "border-color:white; background-image: linear-gradient(to bottom, #121212, #171717, #1b1b1b, #1f1f1f, #232323);";
    });
    cal.addEventListener('click',function(){
        valor = document.querySelector('.Di');
        boneco = parseInt(valor.value)/5;
        ct = document.querySelector(".CT");
        t = document.querySelector(".T");
        sele = document.getElementById("lado");
        document.querySelector(".r1").innerHTML = "";
        document.querySelector(".r2").innerHTML = "";
        document.querySelector(".r3").innerHTML = "";
        document.querySelector(".r4").innerHTML = "";
        document.querySelector(".r5").innerHTML = "";
        if(valor.value < 4000 | valor.value > 80000){
            document.querySelector(".r1").innerHTML = "---------------Valor inválido, Dinheiro(Min):R$4000 Dinheiro(Max):R$80000---------------";
        }
        else if(boneco >= 800 & boneco <= 16000) {
            document.querySelector(".r1").innerHTML = "";
            if(boneco >= 800 & boneco < 1000){
                if(sele.value == "tr"){
                    document.querySelector(".r1").innerHTML = "Tec-9 ou CZ75-Auto , Smoke";
                    document.querySelector(".r2").innerHTML = "Colete , Glock-18";
                    document.querySelector(".r3").innerHTML = "Glock-18, Smoke e 2-Flashbangs";
                    document.querySelector(".r4").innerHTML = "Colete , Glock-18";
                    document.querySelector(".r5").innerHTML = "Colete , Glock-18";
                }
                else{
                    document.querySelector(".r2").innerHTML = "Colete , USP-S";
                    document.querySelector(".r3").innerHTML = "Defuse , Five-Seven";
                    document.querySelector(".r1").innerHTML = "Colete , USP-S";
                    document.querySelector(".r5").innerHTML = "USP-S , Molotov e Flashbangs";
                    document.querySelector(".r4").innerHTML = "Colete , USP-S";
                }
            }
            if(boneco >= 1000 & boneco < 1400){
                if(sele.value == "tr"){
                    document.querySelector(".r1").innerHTML = "Colete , Glock-18 , Molotov e Granada explosiva";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete , Glock-18";
                    document.querySelector(".r3").innerHTML = "Colete , Glock-18 , Smoke";
                    document.querySelector(".r4").innerHTML = "Colete , Glock-18 , Smoke + Flashbangs";
                    document.querySelector(".r5").innerHTML = "Colete , Glock-18 , Smoke";
                }
                else{
                    document.querySelector(".r2").innerHTML = "Colete, USP-S , Molotov";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete , USP-S";
                    document.querySelector(".r1").innerHTML = "Colete , USP-S , Molotov";
                    document.querySelector(".r5").innerHTML = "Colete e Defuse , USP-S ";
                    document.querySelector(".r4").innerHTML = "Colete , Desert Eagle";
                }
            }
            else if(boneco >= 1400 & boneco < 2000){
                if(sele.value == "ct"){
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, Desert Eagle ";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, Five-Seven ";
                    document.querySelector(".r3").innerHTML = "Colete , Desert Eagle ";
                    document.querySelector(".r4").innerHTML = "Colete , CZ75-Auto ";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, P250 ";
                }
                else{
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, Desert Eagle ";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, Tec-9 ";
                    document.querySelector(".r1").innerHTML = "Colete , Desert Eagle ";
                    document.querySelector(".r4").innerHTML = "Colete , CZ75-Auto ";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, P250 ";
                }
            }
            else if(boneco >= 2000 & boneco < 3000){
                if(sele.value == "ct"){
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, Desert Eagle , Smoke";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, Five-Seven , Smoke e Flashbangs";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, Desert Eagle , Smoke";
                    document.querySelector(".r4").innerHTML = "Colete e Capacete, CZ75-Auto , 2-Flashbangs ";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, P250 , Smoke e 2-Flashbangs";
                }
                else{
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, Desert Eagle , Smoke";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, Tec-9 , Smoke e Flashbangs";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, CZ75-Auto , Flashbangs ";
                    document.querySelector(".r4").innerHTML = "Colete e Capacete, P250 , Smoke e 2-Flashbangs";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, Desert Eagle , Smoke";
                }
            }
            else if(boneco >=3000 & boneco < 4000){
                if(sele.value == "ct"){
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, MP7";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, XM-1014, Molotov , Defuse";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, FAMAS , Molotov , Defuse";
                    document.querySelector(".r4").innerHTML = "Colete e Capacete, UMP-45 , Granada Explosiva , Defuse";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, SSG-08 , Granada Explosiva";
                }
                else{
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, Galil AR";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, UMP-45 , Smoke ";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, SSG-08 , 2-Flashbangs";
                    document.querySelector(".r4").innerHTML = "Colete e Capacete, MP7";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, Galil AR , Smoke";
                }
            }
            else if(boneco >=4000 & boneco < 5000){
                if(sele.value == "ct"){
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, M4 , 2-Flashbangs";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, AUG , Defuse";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, FAMAS , Defuse,2-Flashbangs";
                    document.querySelector(".r4").innerHTML = "Colete e Capacete, M4 , 2-Flashbangs ";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, AUG , Defuse";
                }
                else{
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, AK-47 , Smoke";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, AK-47 , Smoke";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, SG-553 ";
                    document.querySelector(".r4").innerHTML = "Colete e Capacete, Galil AR , Smoke, 2-Flashbangs, Molotov ";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, AK-47 , Smoke ";
                }
            }
            else if(boneco >=5000 & boneco < 6000){
                if(sele.value == "ct"){
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, M4, Defuse, 2-Flashbangs";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, AUG, Defuse, Molotov";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, AUG, Defuse, 2-Flashbangs";
                    document.querySelector(".r4").innerHTML = "Colete e Capacete, M4, 2-Flashbangs ";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, AUG, Defuse, Molotov";
                }
                else{
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, AK-47 , Smoke, 2-Flashbangs, Molotov";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, AK-47 , Smoke, Molotov";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, SG-553, Smoke, 2-Flashbangs";
                    document.querySelector(".r4").innerHTML = "Colete e Capacete, SG-553, Smoke, 2-Flashbangs";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, AK-47 , Smoke, Molotov";
                }
            }
            else if(boneco >=6000 & boneco < 7000){
                if(sele.value == "ct"){
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, M4, Defuse, Smoke, 2-Flashbangs, Molotovs";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, AUG, Defuse, Smoke, 2-Flashbangs, Molotov";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, AWP, Defuse, Five-Seven";
                    document.querySelector(".r4").innerHTML = "Colete e Capacete, M4, Smoke, 2-Flashbangs, Molotov ";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, AUG, Defuse, Smoke, 2-Flashbangs, Molotov";
                }
                else{
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, AK-47 , Smoke, 2-Flashbangs, Molotov";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, AK-47 , Smoke, Molotov";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, SG-553, Smoke, 2-Flashbangs";
                    document.querySelector(".r4").innerHTML = "Colete e Capacete, AWP, Tec-9, Smoke, 2-Flashbangs, Molotov";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, AK-47 , Smoke, Molotov";
                }
            }
            else if(boneco >=7000 & boneco < 8200){
                if(sele.value == "ct"){
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, AWP, Defuse, Five-Seven, Smoke, 2-Flashbangs, Molotovs";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, AUG, Defuse, Desert Eagle,Smoke, 2-Flashbangs, Molotov";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, AWP, Defuse, Five-Seven,Smoke, 2-Flashbangs, Moloto";
                    document.querySelector(".r4").innerHTML = "Colete e Capacete, SCAR-20, Defuse, Smoke, 2-Flashbangs, Molotov ";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, AUG, Defuse, Desert Eagle, Smoke, 2-Flashbangs, Molotov";
                }
                else{
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, AWP, Tec-9, Smoke, 2-Flashbangs, Molotov";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, G3SG-1, Smoke, Molotov";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, SG-553, Desert Eagle, Smoke, 2-Flashbangs";
                    document.querySelector(".r4").innerHTML = "Colete e Capacete, AWP, Tec-9, Smoke, 2-Flashbangs, Molotov";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, M249, Smoke, Molotov";
                }
            }
            else if(boneco >= 8200 & boneco <= 16000){
                if(sele.value == "ct"){
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, AWP, Defuse, Five-Seven, Smoke, 2-Flashbangs, Molotovs";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, SCAR-20, Defuse, Desert Eagle,Smoke, 2-Flashbangs, Molotov";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, AWP, Defuse, Five-Seven,Smoke, 2-Flashbangs, Molotov";
                    document.querySelector(".r4").innerHTML = "Colete e Capacete, SCAR-20, Defuse, Desert Eagle,Smoke, 2-Flashbangs, Molotov ";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, M249, Defuse, Desert Eagle, Smoke, 2-Flashbangs, Molotov";
                }
                else{
                    document.querySelector(".r1").innerHTML = "Colete e Capacete, AWP, Tec-9, Smoke, 2-Flashbangs, Molotov";
                    document.querySelector(".r2").innerHTML = "Colete e Capacete, G3SG-1, Tec-9, Smoke, 2-Flashbangs, Molotov";
                    document.querySelector(".r3").innerHTML = "Colete e Capacete, M249, Desert Eagle, Smoke, 2-Flashbangs, Molotov";
                    document.querySelector(".r4").innerHTML = "Colete e Capacete, AWP, Tec-9, Smoke, 2-Flashbangs, Molotov";
                    document.querySelector(".r5").innerHTML = "Colete e Capacete, M249, Desert Eagle Smoke, 2-Flashbangs, Molotov";
                }
            }
        }
        else {
            document.querySelector(".r1").innerHTML = "Erro ao digitar";
        }    
    });