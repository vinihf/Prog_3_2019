var arrayPop = [
    "All The Lies - ALOK",
    "Sucker - Jonas Brothers",
    "Medellín - Madonna with Maluma",
    "ME! - Taylor Swift with Brendon Urie of Panic! At The Disco",
    "7 Rings - Ariana Grande",
    "Kill This Love - BLACKPINK",
    "Too Bad - Giulia Be",
    "wish you were gay - Billie Eilish",
    "Talk - Khalid",
    "bad guy - Billie Eilish",
    "Walk Me Home - P!nk",
    "HP - Maluma",
    "bury a friend - Billie Eilish"

]

var arrayRock = [
    "Hotel California - Eagles",
    "Come Together - The Beatles",
    "Bohemian Rhapsody - Queen",
    "Come As You Are -  Nirvana",
    "Comfortably Numb - Pink Floyd",
    "Rock And Roll All Nite - Guns N' Roses",
    "Sweet Emotion - Aerosmith",
    "Love Her Madly - The Doors",
    "Tempo Perdido - Legião Urbana",
    "Love Of My Life - Queen",
    "Wonderwall - Oasis",
    "Californication - Red Hot Chili Peppers",
    "Tomorrow - Silverchair"
]

var arrayReggae = [
    "All Of Me - Jah Cure",
    "Pisando Descalço - Maneva with Deko",
    "Real Gold - Black Alien",
    "Brisa Positiva - Chimarruts",
    "Selecta - BRAZA",
    "Pescador - Armandinho",
    "Lay You Down Easy - MAGIC! with Sean Paul",
    "I'm Yours - Jason Mraz",
    "Refugee - Skip Marley",
    "Living Dread - Alborosie",
    "Three Little Birds - Bob Marley & The Wailers",
    "Poor Fool - UB40"

]

var arrayFunk = [
    "Ela É do Tipo - MC Kevin e Chris",
    "Bye Bye - Mc Don Juan e Mc Davi",
    "Hoje Eu Vou Parar Na Gaiola - Mc Livinho e Rennan da Penha",
    "Facilita - Mc Kevinho",
    "Vamos Pra Gaiola - Mc Kevin o Chris e FP do Trem Bala",
    "Coisa Boa - Gloria Groove",
    "Dentro do Carro - MC Kevin e Chris",
    "Agora é Tudo Meu - Dennis DJ e Mc Kevinho",
    "Embraza - MC Gury",
    "To Sofrendo Nada - MC Bin Laden",
    "Várias no Interesse - MC V7",
    "Só Depois do Carnaval - Lexa"
]

var arrayIndie = [
    "R.I.P 2 My Youth - The Neighbourhood",
    "West Coast - Lana Del Rey",
    "Do I Wanna Know? - Artic Monkeys",
    "Too Late To Say Goodbye - Cage The Elephant",
    "K. - Cigarettes After Sex",
    "Somebody Else - The 1975",
    "Team - Lorde",
    "Use Somebody - Kings of Leon",
    "If You Wanna - The Vaccines",
    "Where Is My Mind? - Pixies",
    "Breezeblocks - alt-J",
    "Angels - The xx",
    "Starlight - Muse"
]

let random = document.querySelector(".btnResultado");
    random.addEventListener("click",function(e){
    var num = document.querySelector(".numero").value;

    if (document.querySelector(".genero").value == "Pop"){
        var arrayResultado = [];
        for (let x = 0; x < num; x++) {
            const element = arrayPop[x];
            var randomPop = arrayPop[Math.floor(Math.random()*arrayRock.length)];
            arrayResultado.push(" " + randomPop);
            document.querySelector(".resultado").innerHTML = arrayResultado;
             e.preventDefault();}
        }

    if (document.querySelector(".genero").value == "Rock"){
        var arrayResultado = [];
        for (let x = 0; x < num; x++) {
            const element = arrayRock[x];
            var randomRock = arrayRock[Math.floor(Math.random()*arrayRock.length)];
            arrayResultado.push(" " + randomRock);
            document.querySelector(".resultado").innerHTML = arrayResultado;
             e.preventDefault();}
    }
    
    if (document.querySelector(".genero").value == "Reggae"){
        var arrayResultado = [];
        for (let x = 0; x < num; x++) {
            const element = arrayReggae[x];
            var randomReggae = arrayReggae[Math.floor(Math.random()*arrayReggae.length)];
            arrayResultado.push(" " + randomReggae);
            document.querySelector(".resultado").innerHTML = arrayResultado;
            e.preventDefault();} 
    }

    if (document.querySelector(".genero").value == "Funk"){
        var arrayResultado = [];
        for (let x = 0; x < num; x++) {
            const element = arrayFunk[x];
            var randomFunk = arrayFunk[Math.floor(Math.random()*arrayFunk.length)];
            arrayResultado.push(" " + randomFunk);
            document.querySelector(".resultado").innerHTML = arrayResultado;
            e.preventDefault();}
    }

    if (document.querySelector(".genero").value == "Indie"){
        var arrayResultado = [];
        for (let x = 0; x < num; x++) {
            const element = arrayRock[x];
            var randomIndie = arrayIndie[Math.floor(Math.random()*arrayIndie.length)];
            arrayResultado.push(" " + randomIndie);
            document.querySelector(".resultado").innerHTML = arrayResultado;
            e.preventDefault();
        }
    }
});

const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
var form = document.querySelector(".form");
var tema = document.querySelector(".tema");
var resultado = document.querySelector(".resultado");
var h1 = document.querySelector("h1");
var h4 = document.querySelector("h4");
var h3 = document.querySelector("h3");
var footer = document.querySelector("footer");

dark.addEventListener("click", function(e) {
    form.style = "background-color: #1C1C1C";
    h1.style = "color:white";
    h4.style = "color:white";
    h3.style = "color:white";
    resultado.style = "color:white";
    tema.style = "color:white";
    footer.style = "background-color: #1C1C1C";
});

light.addEventListener("click", function(e){
    form.style = "background-color:#F5FFFA";
    h1.style = "color:black";
    h4.style = "color:black";
    h3.style = "color:black";
    resultado.style = "color:black";
    tema.style = "color:black";
    footer.style = "background-color: #F5FFFA";
})