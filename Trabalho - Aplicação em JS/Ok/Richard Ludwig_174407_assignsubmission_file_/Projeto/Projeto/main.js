document.getElementById("bd").style.backgroundImage = "url(sol.jpg)";
var selec= document.getElementById("sel");
var btn = document.getElementById("search")
var div = document.getElementById("text");

btn.addEventListener("click", function(e) {
    if(selec.value == "terra"){
        div.innerHTML=""; 
        var img = document.createElement("IMG");
        img.style.width = "400px";
        img.src = "terra.jpg";
        div.innerHTML = "<p>"+"----------------------------------------------------------------------------------------------------------------------------"+"</p>"+"<h2>"+"Terra"+"</h2>"+"<p>"+"A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos,incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos, e a vida surgiu na sua superfície um bilhão de anos depois. Desde então, a biosfera terrestre alterou significativamente a atmosfera e outros fatores abióticos do planeta, permitindo a proliferação de organismos aeróbicos, bem como a formação de uma camada de ozônio, a qual, em conjunto com o campo magnético terrestre, bloqueia radiação solar prejudicial, permitindo a vida no planeta. As propriedades físicas do planeta, bem como sua história geológica e órbita, permitiram que a vida persistisse durante este período. Acredita-se que a Terra poderá suportar vida durante pelo menos outros 500 milhões de anos."+"</p>";
        div.appendChild(img);
    }
    else if(selec.value == "marte"){
        div.innerHTML=""; 
        var img = document.createElement("IMG");
        img.style.width = "400px";
        img.src = "marte.jpg";
        div.innerHTML = "<p>"+"----------------------------------------------------------------------------------------------------------------------------"+"</p>"+"<h2>"+"Marte" +"</h2>"+"<p>"+"Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o Planeta Vermelho, porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada."+"</p>"+"<p>"+"Marte é um planeta rochoso com uma atmosfera fina, com características de superfície que lembram tanto as crateras de impacto da Lua quanto vulcões, vales, desertos e calotas polares da Terra. O período de rotação e os ciclos sazonais de Marte são também semelhantes aos da Terra, assim como é a inclinação que produz as suas estações do ano. Marte é o lar do Monte Olimpo, a segunda montanha mais alta conhecida no Sistema Solar (a mais alta em um planeta), e do Valles Marineris, um desfiladeiro gigantesco. A suave Bacia Polar Norte, no hemisfério norte marciano, cobre cerca de 40% do planeta e pode ser uma enorme marca de impacto. Marte tem duas luas conhecidas, Fobos e Deimos, que são pequenas e de forma irregular. Estas luas podem ser asteroides capturados, semelhante ao 5261 Eureka, um asteroide troiano marciano."+"</p>";
        div.appendChild(img);
    }
    else if(selec.value == "eestelar"){
        div.innerHTML=""; 
        var img = document.createElement("IMG");
        img.style.width = "400px";
        img.src = "eestelar.jpg";
        div.innerHTML = "<p>"+"----------------------------------------------------------------------------------------------------------------------------"+"</p>"+"<h2>"+"Evolução Estelar"+"</h2>"+"<p>"+"Em astronomia, evolução estelar é a sequência de mudanças radicais que uma estrela sofre durante seu tempo de vida. Dependendo da massa da estrela, sua vida varia entre alguns milhões de anos (para as mais massivas) até trilhões de anos (para as menos massivas), o que é muito mais do que a idade do universo."+"</p>"+"<p>"+"A evolução estelar não é estudada pela observação do ciclo de vida de uma única estrela; a maioria das mudanças estelares ocorre tão vagarosamente que só seriam detectáveis depois de muitos e muitos séculos. Em vez disto, astrofísicos tentam entender como as estrelas evoluem pela observação de numerosas estrelas, cada uma em um diferente ponto do ciclo da vida, e pela simulação da estrutura estelar com modelos em computador."+"</p>";
        div.appendChild(img);
    }
    else if(selec.value == "bnegro"){
        div.innerHTML=""; 
        var img = document.createElement("IMG");
        img.style.width = "400px";
        img.src = "bnegro.jpg";
        div.innerHTML = "<p>"+"----------------------------------------------------------------------------------------------------------------------------"+"</p>"+"<h2>"+"Buraco Negro" +"</h2>"+"<p>"+"De acordo com a Teoria da Relatividade Geral, um buraco negro é uma região do espaço da qual nada, nem mesmo partículas que se movem à velocidade da luz, podem escapar, pois a sua velocidade é inferior à velocidade de escape desses corpos celestes infinitamente densos. Este é o resultado da deformação do espaço-tempo, causada após o colapso gravitacional de uma estrela massiva com pelo menos 30 vezes a massa do Sol em uma supernova, e que logo depois, desaparecerá, dando lugar ao que a Física chama de singularidade, o coração de um buraco negro, onde espaço-tempo deixa de existir. Um buraco negro começa a partir de uma superfície esférica denominada horizonte de eventos, que marca a região a partir da qual, se algo a atravessar, não poderá regressar. O adjetivo negro em buraco negro se deve ao fato de que se presumia que este não refletia nenhuma parte da luz que venha atingir seu horizonte de eventos, atuando assim como se fosse um corpo negro perfeito em termodinâmica, porém, atualmente existe a teoria da radiação Hawking que, resumidamente, prevê que os buracos negros não são realmente negros, e emitem radiação devido a efeitos quânticos, tais como flutuações quânticas."+"</p>";
        div.appendChild(img);
    }
    console.log(selec.value);
    e.preventDefault();
});
function l(){
    document.getElementById("bd").style.background = "white";
    document.getElementById("bd").style.color = "black";
    document.getElementById("bd").style.backgroundImage = "url(sol.jpg)";
    document.getElementById("bd").style.backgroundRepeat = "no-repeat";
    document.getElementById("bd").style.backgroundAttachment = "fixed";
    document.getElementById("bd").style.backgroundPosition = "center";
}
function d(){
    document.getElementById("bd").style.background = "black";
    document.getElementById("bd").style.color = "white";
    document.getElementById("bd").style.backgroundImage = "url(ceu.jpg)";
    document.getElementById("bd").style.backgroundRepeat = "no-repeat";
    document.getElementById("bd").style.backgroundAttachment = "fixed";
    document.getElementById("bd").style.backgroundPosition = "center";
}
function planclick(){
    while(selec.firstChild)
    {
        selec.removeChild(selec.firstChild);
    }
    var option1 = document.createElement("option");
    option1.value = "terra";
    option1.innerHTML = "Terra";
    selec.appendChild(option1);
    var option2 = document.createElement("option");
    option2.value = "marte";
    option2.innerHTML = "Marte";
    selec.appendChild(option2);
}
function afisclick(){
    while(selec.firstChild)
    {
        selec.removeChild(selec.firstChild);
    }
    var option1 = document.createElement("option");
    option1.value = "eestelar";
    option1.innerHTML = "Evolução Estelar";
    selec.appendChild(option1);
    var option2 = document.createElement("option");
    option2.value = "bnegro";
    option2.innerHTML = "Buraco Negro";
    selec.appendChild(option2);
}
