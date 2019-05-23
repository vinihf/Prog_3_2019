
var myArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    3, 3, 3, 3, 3, 3, 4, 4, 4, 4,
    4, 4, 5, 5, 5, 5, 6, 6, 6, 6,
    7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 
];

var myArray30 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 
    2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 
    3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 
    5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 
    6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 
    8, 9, 9, 9, 9, 9, 9, 10, 10, 10
];

var myArray50 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 
    4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 
    5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 
    6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 
    8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 
    9, 9, 9, 9, 9, 10, 10, 10, 10, 10
];






var pad = new String("padrao");
var mes = new String("mestra");
var len = new String("lenda");

var btnLight = document.querySelector('.radioLight');
btnLight.addEventListener('click', function(e){
    document.querySelector("body").style="background-color: rgb(243, 242, 235);";
    document.querySelector("html").style="background-color: rgb(243, 242, 235);";
    document.querySelector("footer").style="background-color: rgb(53, 1, 53);";
    document.querySelector(".fot").style="background-color: rgb(53, 1, 53);";
    document.querySelector(".title-text").style="color: rgb(53, 1, 53);";
    document.querySelector(".button-color").style="color: rgb(53, 1, 53);";
    document.querySelector(".content-text").style="color: rgb(53, 1, 53);";
    document.querySelector(".resultado").style="color: rgb(53, 1, 53);";
});

var btnDark = document.querySelector('.radioDark');
btnDark.addEventListener('click', function(e){
    document.querySelector("body").style="background-color: rgb(53, 1, 53);";
    document.querySelector("html").style="background-color: rgb(53, 1, 53);";
    document.querySelector("footer").style="background-color: rgb(243, 242, 235); color: rgb(53, 1, 53);";
    document.querySelector(".fot").style="background-color: rgb(243, 242, 235); color: rgb(53, 1, 53);";
    document.querySelector(".title-text").style="color: rgb(243, 242, 235);";
    document.querySelector(".button-color").style="color: rgb(243, 242, 235);";
    document.querySelector(".content-text").style="color: rgb(243, 242, 235);";
    document.querySelector(".resultado").style="color: rgb(243, 242, 235);";


    
});


var btnOpen = document.querySelector('.abrir');
btnOpen.addEventListener('click', function(e) {
    var moeda = document.querySelector(".moeda");
    var moe = ((moeda.value).localeCompare("dolar"));;
    var select = document.querySelector(".chave");
    var pad = ((select.value).localeCompare("padrao"));
    var mes = ((select.value).localeCompare("mestra"));
    var len = ((select.value).localeCompare("lenda"));
    var custo = 0;
    if(pad == 0){
        var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
        console.log("Aberta Caixa 10");

    }
    else if(mes == 0){
        var randomItem = myArray30[Math.floor(Math.random() * myArray30.length)];
        console.log("Aberta Caixa 30");
        custo=30;
    }
    else if (len == 0){
        var randomItem = myArray50[Math.floor(Math.random() * myArray50.length)];
        document.querySelector(".img-random").style = "background-image: url(item2.png); max-width:550px; max-height:550px;width: auto; height: auto;";
        console.log("Aberta Caixa 50");
        custo= 50;
    }
    $skin = "Default"
if (randomItem == 1) {
    custo = 1;
    console.log("Berettas Duplas | Roseira");
    if(moe==0){
        skin = ("Berettas Duplas | Roseira | " + "US$ "+ custo);
    } else{
        custo = custo * 4;
        skin = ("Berettas Duplas | Roseira | " + "R$ "+ custo);
    }
}
if (randomItem == 2) {
    custo = 1;
    console.log("P90 | Tempestade" );
    if(moe==0){
        skin = ("P90 | Tempestade | " + "US$ "+ custo);
    } else{
        custo = custo * 4;
        skin = ("P90 | Tempestade | Roseira | " + "R$ "+ custo);
    }
}
if (randomItem == 3) {
    custo = 2;
    console.log( "MAG-7 | Prateado");
    if(moe==0){
        skin = ("MAG-7 | Prateado | " + "US$ "+ custo);
    } else{
        custo = custo * 4;
        skin = ("MAG-7 | Prateado | " + "R$ "+ custo);
    }
}
if (randomItem == 4) {
    custo = 3;
    console.log( "USP-S | Azul Real");
    if(moe==0){
        skin = ("USP-S | Azul Real | Roseira | " + "US$ "+ custo);
    } else{
        custo = custo * 4;
        skin = ("USP-S | Azul Real | Roseira | " + "R$ "+ custo);
    }
}
if (randomItem == 5) {
    custo = 12;
    console.log( "MP9 | Idade das Trevas");
    if(moe==0){
        skin = ("MP9 | Idade das Trevas | " + "US$ "+ custo);
    } else{
        custo = custo * 4;
        skin = ("MP9 | Idade das Trevas | " + "R$ "+ custo);
    }
}
if (randomItem == 6) {
    custo = 13;
    console.log("P2000 | Cota de Malha" );
    if(moe==0){
        skin = ("P2000 | Cota de Malha | " + "US$ "+ custo);
    } else{
        custo = custo * 4;
        skin = ("P2000 | Cota de Malha | " + "R$ "+ custo);
    }
}
if (randomItem == 7) {
    custo = 70;
    console.log("CZ75-Auto | Chalice" );
    if(moe==0){
        skin = ("CZ75-Auto | Chalice | " + "US$ "+ custo);
    } else{
        custo = custo * 4;
        skin = ("CZ75-Auto | Chalice | " + "R$ "+ custo);
    }
}
if (randomItem == 8) {
    custo = 70;
    console.log("Desert Eagle | Canhão Portátil" );
    if(moe==0){
        skin = ("Desert Eagle | Canhão Portátil | " + "US$ "+ custo);
    } else{
        custo = custo * 4;
        skin = ("Desert Eagle | Canhão Portátil | " + "R$ "+ custo);
    }
}
if (randomItem == 9) {
    custo = 500;
    console.log("M4A1-S | Cavaleiro" );
    if(moe==0){
        skin = ("M4A1-S | Cavaleiro | " + "US$ "+ custo);
    } else{
        custo = custo * 4;
        skin = ("M4A1-S | Cavaleiro | " + "R$ "+ custo);
    }
}
if (randomItem == 10) {
    custo = 910;
    console.log("AWP | Sabedoria do Dragão" );
    if(moe==0){
        skin = ("AWP | Sabedoria do Dragão | " + "US$ "+ custo);
    } else{
        custo = custo * 4;
        skin = ("AWP | Sabedoria do Dragão | " + "R$ "+ custo);
    }
}
    document.querySelector(".resultado").innerHTML = "Você abriu a caixa e ganhou: " + (skin);
    if(randomItem == 1){
        document.querySelector(".img-random").style = "background-image: url(item1.png); max-width:550px; max-height:550px;width: auto; height: auto;";
    } 
    else if(randomItem == 2){
        document.querySelector(".img-random").style = "background-image: url(item2.png); max-width:550px; max-height:550px;width: auto; height: auto;";
    }
    else if(randomItem == 3){
        document.querySelector(".img-random").style = "background-image: url(item3.png); max-width:550px; max-height:550px;width: auto; height: auto;";
    }
    else if(randomItem == 4){
        document.querySelector(".img-random").style = "background-image: url(item4.png); max-width:550px; max-height:550px;width: auto; height: auto;";
    }
    else if(randomItem == 5){
        document.querySelector(".img-random").style = "background-image: url(item5.png); max-width:550px; max-height:550px;width: auto; height: auto;";
    }
    else if(randomItem == 6){
        document.querySelector(".img-random").style = "background-image: url(item6.png); max-width:550px; max-height:550px;width: auto; height: auto;";
    }
    else if(randomItem == 7){
        document.querySelector(".img-random").style = "background-image: url(item7.png); max-width:550px; max-height:550px;width: auto; height: auto;";
    }
    else if(randomItem == 8){
        document.querySelector(".img-random").style = "background-image: url(item8.png); max-width:550px; max-height:550px;width: auto; height: auto;";
    }
    else if(randomItem == 9){
        document.querySelector(".img-random").style = "background-image: url(item9.png); max-width:550px; max-height:550px;width: auto; height: auto;";
    }
    else if(randomItem == 10){
        document.querySelector(".img-random").style = "background-image: url(item10.png); max-width:550px; max-height:550px;width: auto; height: auto;";
    }


    e.preventDefault();
});
