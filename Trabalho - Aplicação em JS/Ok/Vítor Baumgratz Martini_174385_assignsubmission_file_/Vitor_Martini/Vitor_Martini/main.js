var dark = document.getElementById("dark");
var light = document.getElementById("light");
var nome_time1 = document.getElementById("time1");
var nome_time2 = document.getElementById("time2");
var botoes_abrir = document.querySelectorAll(".botao");
var mapas = [];
var mapas_pick = [];
var mapa1 = document.querySelector(".mbutton1");
var mapa2 = document.querySelector(".mbutton2");
var mapa3 = document.querySelector(".mbutton3");
var mapa4 = document.querySelector(".mbutton4");
var mapa5 = document.querySelector(".mbutton5");
var mapa6 = document.querySelector(".mbutton6");
var mapa7 = document.querySelector(".mbutton7");

//Desabilitar todos botões antes de iniciar
var botoes = document.querySelectorAll(".botao");
for (let i = 0; i < botoes.length; i++) {
    botoes[i].disabled = true;
}


document.getElementById("reiniciar").addEventListener("click", function () {
    window.location.reload();
});


dark.addEventListener("click", function () {
    document.querySelector(".corpo_light").className = "corpo_dark";
    document.querySelector(".entrada_light").className = "entrada_dark time1";
    document.querySelector(".entrada_light").className = "entrada_dark time2";
    document.querySelector("body").style = "color: white;";
    document.querySelector(".botao1").className = "botao_dark botao botao1";
    document.querySelector(".botao2").className = "botao_dark botao botao2";
    document.querySelector(".botao3").className = "botao_dark botao botao3";
    document.querySelector(".botao4").className = "botao_dark botao botao4";
    document.querySelector(".botao5").className = "botao_dark botao botao5";
    document.querySelector(".botao6 ").className = "botao_dark botao botao6";
    document.querySelector(".modal-content").className = "modal-content_dark";
});


light.addEventListener("click", function () {
    document.querySelector(".corpo_dark").className = "corpo_light";
    document.querySelector(".entrada_dark").className = "entrada_light";
    document.querySelector(".entrada_dark").className = "entrada_light";
    document.querySelector("body").style = "color: black;";
    var botoes = document.querySelectorAll(".botao_dark");
    document.querySelector(".botao1").className = "botao botao1";
    document.querySelector(".botao2").className = "botao botao2";
    document.querySelector(".botao3").className = "botao botao3";
    document.querySelector(".botao4").className = "botao botao4";
    document.querySelector(".botao5").className = "botao botao5";
    document.querySelector(".botao6").className = "botao botao6";
    document.querySelector(".modal-content_dark").className = "modal-content";
});


document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".modal").style.display = "none";
});


//Inicio 
document.querySelector(".iniciar").addEventListener("click", function () {
    if (nome_time1.value.length > "0" & nome_time2.value.length > "0") {
        document.getElementById("nome1").innerHTML = nome_time1.value;
        document.getElementById("nome2").innerHTML = nome_time2.value;
    }
    //Abrir modal
    var botoes = document.querySelectorAll(".botaoo");
    for (let x = 0; x < botoes_abrir.length; x++) {
        botoes_abrir[x].addEventListener("click", function () {
            document.querySelector(".modal").style.display = "flex";
        });
    }
    document.querySelector(".iniciar").disabled = true;
    document.querySelector(".time1").disabled = true;
    document.querySelector(".time2").disabled = true;
    document.querySelector(".botao1").disabled = false;
});


document.querySelector(".botao1").addEventListener("click", function () {
    mapa1.addEventListener("click", function () {
        mapa1.style = "background-image: url(dust2_x.png);";
        mapa1.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao1").disabled = true;
        document.querySelector(".botao2").disabled = false;
        mapas.push("dust2");
    });
    mapa2.addEventListener("click", function () {
        mapa2.style = "background-image: url(inferno_x.png);";
        mapa2.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao1").disabled = true;
        document.querySelector(".botao2").disabled = false;
        mapas.push("inferno");
    });
    mapa3.addEventListener("click", function () {
        mapa3.style = "background-image: url(mirage_x.png);";
        mapa3.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao1").disabled = true;
        document.querySelector(".botao2").disabled = false;
        mapas.push("mirage");
    });
    mapa4.addEventListener("click", function () {
        mapa4.style = "background-image: url(nuke_x.png);";
        mapa4.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao1").disabled = true;
        document.querySelector(".botao2").disabled = false;
        mapas.push("nuke");
    });
    mapa5.addEventListener("click", function () {
        mapa5.style = "background-image: url(overpass_x.png);";
        mapa5.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao1").disabled = true;
        document.querySelector(".botao2").disabled = false;
        mapas.push("overpass");
    });
    mapa6.addEventListener("click", function () {
        mapa6.style = "background-image: url(train_x.png);";
        mapa6.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao1").disabled = true;
        document.querySelector(".botao2").disabled = false;
        mapas.push("train");
    });
    mapa7.addEventListener("click", function () {
        mapa7.style = "background-image: url(vertigo_x.png);";
        mapa7.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao1").disabled = true;
        document.querySelector(".botao2").disabled = false;
        mapas.push("vertigo");
    });
});



document.querySelector(".botao2").addEventListener("click", function () {
    mapa1.addEventListener("click", function () {
        mapa1.style = "background-image: url(dust2_x.png);";
        mapa1.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao2").disabled = true;
        document.querySelector(".botao3").disabled = false;
        document.querySelector(".botao2 ");
    });
    mapa2.addEventListener("click", function () {
        mapa2.style = "background-image: url(inferno_x.png);";
        mapa2.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao2").disabled = true;
        document.querySelector(".botao3").disabled = false;
    });
    mapa3.addEventListener("click", function () {
        mapa3.style = "background-image: url(mirage_x.png);";
        mapa3.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao2").disabled = true;
        document.querySelector(".botao3").disabled = false;
    });
    mapa4.addEventListener("click", function () {
        mapa4.style = "background-image: url(nuke_x.png);";
        mapa4.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao2").disabled = true;
        document.querySelector(".botao3").disabled = false;
    });
    mapa5.addEventListener("click", function () {
        mapa5.style = "background-image: url(overpass_x.png);";
        mapa5.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao2").disabled = true;
        document.querySelector(".botao3").disabled = false;
    });
    mapa6.addEventListener("click", function () {
        mapa6.style = "background-image: url(train_x.png);";
        mapa6.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao2").disabled = true;
        document.querySelector(".botao3").disabled = false;
    });
    mapa7.addEventListener("click", function () {
        mapa7.style = "background-image: url(vertigo_x.png);";
        mapa7.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao2").disabled = true;
        document.querySelector(".botao3").disabled = false;
    });
});




document.querySelector(".botao3").addEventListener("click", function () {
    let mapas_p2 = [];
    mapa1.addEventListener("click", function () {
        mapa1.style = "background-image: url(dust2_v.png);";
        mapa1.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao3").disabled = true;
        document.querySelector(".botao4").disabled = false;
        mapas_p2.push("dust2");
        if (mapas_p2.indexOf("dust2") == 0) {
            document.querySelector(".resultado1").style = "background-image: url(dust2.jpg);";
        }
    });
    mapa2.addEventListener("click", function () {
        mapa2.style = "background-image: url(inferno_v.png);";
        mapa2.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao3").disabled = true;
        document.querySelector(".botao4").disabled = false;
        mapas_p2.push("inferno");
        if (mapas_p2.indexOf("inferno") == 0) {
            document.querySelector(".resultado1").style = "background-image: url(inferno.jpg);";
        }
    });
    mapa3.addEventListener("click", function () {
        mapa3.style = "background-image: url(mirage_v.png);";
        mapa3.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao3").disabled = true;
        document.querySelector(".botao4").disabled = false;
        mapas_p2.push("mirage");
        if (mapas_p2.indexOf("mirage") == 0) {
            document.querySelector(".resultado1").style = "background-image: url(mirage.jpg);";
        }
    });
    mapa4.addEventListener("click", function () {
        mapa4.style = "background-image: url(nuke_v.png);";
        mapa4.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao3").disabled = true;
        document.querySelector(".botao4").disabled = false;
        mapas_p2.push("nuke");
        if (mapas_p2.indexOf("nuke") == 0) {
            document.querySelector(".resultado1").style = "background-image: url(nuke.jpg);";
        }
    });
    mapa5.addEventListener("click", function () {
        mapa5.style = "background-image: url(overpass_v.png);";
        mapa5.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao3").disabled = true;
        document.querySelector(".botao4").disabled = false;
        mapas_p2.push("overpass");
        if (mapas_p2.indexOf("overpass") == 0) {
            document.querySelector(".resultado1").style = "background-image: url(overpass.jpg);";
        }
    });
    mapa6.addEventListener("click", function () {
        mapa6.style = "background-image: url(train_v.png);";
        mapa6.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao3").disabled = true;
        document.querySelector(".botao4").disabled = false;
        mapas_p2.push("train");
        if (mapas_p2.indexOf("train") == 0) {
            document.querySelector(".resultado1").style = "background-image: url(train.jpg);";
        }
    });
    mapa7.addEventListener("click", function () {
        mapa7.style = "background-image: url(vertigo_v.png);";
        mapa7.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao3").disabled = true;
        document.querySelector(".botao4").disabled = false;
        mapas_p2.push("vertigo");
        if (mapas_p2.indexOf("vertigo") == 0) {
            document.querySelector(".resultado1").style = "background-image: url(vertigo.jpg);";
        }
    });

});



document.querySelector(".botao4").addEventListener("click", function () {
    let mapas_p = [];
    mapa1.addEventListener("click", function () {
        mapa1.style = "background-image: url(dust2_v.png);";
        mapa1.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao4").disabled = true;
        document.querySelector(".botao5").disabled = false;
        mapas_p.push("dust2");
        if (mapas_p.indexOf("dust2") == 0) {
            document.querySelector(".resultado2").style = "background-image: url(dust2.jpg);";
        }
    });
    mapa2.addEventListener("click", function () {
        mapa2.style = "background-image: url(inferno_v.png);";
        mapa2.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao4").disabled = true;
        document.querySelector(".botao5").disabled = false;
        mapas_p.push("inferno");
        if (mapas_p.indexOf("inferno") == 0) {
            document.querySelector(".resultado2").style = "background-image: url(inferno.jpg);";
        }
    });
    mapa3.addEventListener("click", function () {
        mapa3.style = "background-image: url(mirage_v.png);";
        mapa3.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao4").disabled = true;
        document.querySelector(".botao5").disabled = false;
        mapas_p.push("mirage");
        if (mapas_p.indexOf("mirage") == 0) {
            document.querySelector(".resultado2").style = "background-image: url(mirage.jpg);";
        }
    });
    mapa4.addEventListener("click", function () {
        mapa4.style = "background-image: url(nuke_v.png);";
        mapa4.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao4").disabled = true;
        document.querySelector(".botao5").disabled = false;
        mapas_p.push("nuke");
        if (mapas_p.indexOf("nuke") == 0) {
            document.querySelector(".resultado2").style = "background-image: url(nuke.jpg);";
        }
    });
    mapa5.addEventListener("click", function () {
        mapa5.style = "background-image: url(overpass_v.png);";
        mapa5.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao4").disabled = true;
        document.querySelector(".botao5").disabled = false;
        mapas_p.push("overpass");
        if (mapas_p.indexOf("overpass") == 0) {
            document.querySelector(".resultado2").style = "background-image: url(overpass.jpg);";
        }
    });
    mapa6.addEventListener("click", function () {
        mapa6.style = "background-image: url(train_v.png);";
        mapa6.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao4").disabled = true;
        document.querySelector(".botao5").disabled = false;
        mapas_p.push("train");
        if (mapas_p.indexOf("train") == 0) {
            document.querySelector(".resultado2").style = "background-image: url(train.jpg);";
        }
    });
    mapa7.addEventListener("click", function () {
        mapa7.style = "background-image: url(vertigo_v.png);";
        mapa7.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao4").disabled = true;
        document.querySelector(".botao5").disabled = false;
        mapas_p.push("vertigo");
        if (mapas_p.indexOf("vertigo") == 0) {
            document.querySelector(".resultado2").style = "background-image: url(vertigo.jpg);";
        }
    });

});




document.querySelector(".botao5").addEventListener("click", function () {
    mapa1.addEventListener("click", function () {
        mapa1.style = "background-image: url(dust2_x.png);";
        mapa1.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao5").disabled = true;
        document.querySelector(".botao6").disabled = false;
    });
    mapa2.addEventListener("click", function () {
        mapa2.style = "background-image: url(inferno_x.png);";
        mapa2.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao5").disabled = true;
        document.querySelector(".botao6").disabled = false;
    });
    mapa3.addEventListener("click", function () {
        mapa3.style = "background-image: url(mirage_x.png);";
        mapa3.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao5").disabled = true;
        document.querySelector(".botao6").disabled = false;
    });
    mapa4.addEventListener("click", function () {
        mapa4.style = "background-image: url(nuke_x.png);";
        mapa4.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao5").disabled = true;
        document.querySelector(".botao6").disabled = false;
    });
    mapa5.addEventListener("click", function () {
        mapa5.style = "background-image: url(overpass_x.png);";
        mapa5.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao5").disabled = true;
        document.querySelector(".botao6").disabled = false;
    });
    mapa6.addEventListener("click", function () {
        mapa6.style = "background-image: url(train_x.png);";
        mapa6.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao5").disabled = true;
        document.querySelector(".botao6").disabled = false;
    });
    mapa7.addEventListener("click", function () {
        mapa7.style = "background-image: url(vertigo_x.png);";
        mapa7.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao5").disabled = true;
        document.querySelector(".botao6").disabled = false;
    });
});




document.querySelector(".botao6").addEventListener("click", function () {
    mapa1.addEventListener("click", function () {
        mapa1.style = "background-image: url(dust2_x.png);";
        mapa1.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao6").disabled = true;
        if (mapas.indexOf("dust2") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(dust2.jpg);";
            document.querySelector(".nome_map").innerHTML = "Dust 2";
        }
        else if (mapas.indexOf("inferno") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(inferno.jpg);";
            document.querySelector(".nome_map").innerHTML = "Inferno";
        }
        else if (mapas.indexOf("mirage") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(mirage.jpg);";
            document.querySelector(".nome_map").innerHTML = "Mirage";
        }
        else if (mapas.indexOf("nuke") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(nuke.jpg);";
            document.querySelector(".nome_map").innerHTML = "Nuke";
        }
        else if (mapas.indexOf("overpass") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(overpass.jpg);";
            document.querySelector(".nome_map").innerHTML = "Overpass";
        }
        else if (mapas.indexOf("train") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(train.jpg);";
            document.querySelector(".nome_map").innerHTML = "Train";
        }
        else if (mapas.indexOf("vertigo") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(vertigo.jpg);";
            document.querySelector(".nome_map").innerHTML = "Vertigo";
        }
    });
    mapa2.addEventListener("click", function () {
        mapa2.style = "background-image: url(inferno_x.png);";
        mapa2.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao6").disabled = true;
        if (mapas.indexOf("dust2") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(dust2.jpg);";
            document.querySelector(".nome_map").innerHTML = "Dust 2";
        }
        else if (mapas.indexOf("inferno") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(inferno.jpg);";
            document.querySelector(".nome_map").innerHTML = "Inferno";
        }
        else if (mapas.indexOf("mirage") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(mirage.jpg);";
            document.querySelector(".nome_map").innerHTML = "Mirage";
        }
        else if (mapas.indexOf("nuke") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(nuke.jpg);";
            document.querySelector(".nome_map").innerHTML = "Nuke";
        }
        else if (mapas.indexOf("overpass") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(overpass.jpg);";
            document.querySelector(".nome_map").innerHTML = "Overpass";
        }
        else if (mapas.indexOf("train") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(train.jpg);";
            document.querySelector(".nome_map").innerHTML = "Train";
        }
        else if (mapas.indexOf("vertigo") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(vertigo.jpg);";
            document.querySelector(".nome_map").innerHTML = "Vertigo";
        }
    });
    mapa3.addEventListener("click", function () {
        mapa3.style = "background-image: url(mirage_x.png);";
        mapa3.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao6").disabled = true;
        if (mapas.indexOf("dust2") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(dust2.jpg);";
            document.querySelector(".nome_map").innerHTML = "Dust 2";
        }
        else if (mapas.indexOf("inferno") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(inferno.jpg);";
            document.querySelector(".nome_map").innerHTML = "Inferno";
        }
        else if (mapas.indexOf("mirage") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(mirage.jpg);";
            document.querySelector(".nome_map").innerHTML = "Mirage";
        }
        else if (mapas.indexOf("nuke") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(nuke.jpg);";
            document.querySelector(".nome_map").innerHTML = "Nuke";
        }
        else if (mapas.indexOf("overpass") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(overpass.jpg);";
            document.querySelector(".nome_map").innerHTML = "Overpass";
        }
        else if (mapas.indexOf("train") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(train.jpg);";
            document.querySelector(".nome_map").innerHTML = "Train";
        }
        else if (mapas.indexOf("vertigo") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(vertigo.jpg);";
            document.querySelector(".nome_map").innerHTML = "Vertigo";
        }

    });
    mapa4.addEventListener("click", function () {
        mapa4.style = "background-image: url(nuke_x.png);";
        mapa4.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao6").disabled = true;
        if (mapas.indexOf("dust2") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(dust2.jpg);";
            document.querySelector(".nome_map").innerHTML = "Dust 2";
        }
        else if (mapas.indexOf("inferno") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(inferno.jpg);";
            document.querySelector(".nome_map").innerHTML = "Inferno";
        }
        else if (mapas.indexOf("mirage") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(mirage.jpg);";
            document.querySelector(".nome_map").innerHTML = "Mirage";
        }
        else if (mapas.indexOf("nuke") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(nuke.jpg);";
            document.querySelector(".nome_map").innerHTML = "Nuke";
        }
        else if (mapas.indexOf("overpass") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(overpass.jpg);";
            document.querySelector(".nome_map").innerHTML = "Overpass";
        }
        else if (mapas.indexOf("train") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(train.jpg);";
            document.querySelector(".nome_map").innerHTML = "Train";
        }
        else if (mapas.indexOf("vertigo") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(vertigo.jpg);";
            document.querySelector(".nome_map").innerHTML = "Vertigo";
        }

    });
    mapa5.addEventListener("click", function () {
        mapa5.style = "background-image: url(overpass_x.png);";
        mapa5.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao6").disabled = true;
        if (mapas.indexOf("dust2") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(dust2.jpg);";
            document.querySelector(".nome_map").innerHTML = "Dust 2";
        }
        else if (mapas.indexOf("inferno") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(inferno.jpg);";
            document.querySelector(".nome_map").innerHTML = "Inferno";
        }
        else if (mapas.indexOf("mirage") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(mirage.jpg);";
            document.querySelector(".nome_map").innerHTML = "Mirage";
        }
        else if (mapas.indexOf("nuke") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(nuke.jpg);";
            document.querySelector(".nome_map").innerHTML = "Nuke";
        }
        else if (mapas.indexOf("overpass") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(overpass.jpg);";
            document.querySelector(".nome_map").innerHTML = "Overpass";
        }
        else if (mapas.indexOf("train") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(train.jpg);";
            document.querySelector(".nome_map").innerHTML = "Train";
        }
        else if (mapas.indexOf("vertigo") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(vertigo.jpg);";
            document.querySelector(".nome_map").innerHTML = "Vertigo";
        }

    });
    mapa6.addEventListener("click", function () {
        mapa6.style = "background-image: url(train_x.png);";
        mapa6.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao6").disabled = true;
        if (mapas.indexOf("dust2") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(dust2.jpg);";
            document.querySelector(".nome_map").innerHTML = "Dust 2";
        }
        else if (mapas.indexOf("inferno") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(inferno.jpg);";
            document.querySelector(".nome_map").innerHTML = "Inferno";
        }
        else if (mapas.indexOf("mirage") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(mirage.jpg);";
            document.querySelector(".nome_map").innerHTML = "Mirage";
        }
        else if (mapas.indexOf("nuke") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(nuke.jpg);";
            document.querySelector(".nome_map").innerHTML = "Nuke";
        }
        else if (mapas.indexOf("overpass") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(overpass.jpg);";
            document.querySelector(".nome_map").innerHTML = "Overpass";
        }
        else if (mapas.indexOf("train") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(train.jpg);";
            document.querySelector(".nome_map").innerHTML = "Train";
        }
        else if (mapas.indexOf("vertigo") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(vertigo.jpg);";
            document.querySelector(".nome_map").innerHTML = "Vertigo";
        }
    });
    mapa7.addEventListener("click", function () {
        mapa7.style = "background-image: url(vertigo_x.png);";
        mapa7.disabled = true;
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".botao6").disabled = true;
        if (mapas.indexOf("dust2") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(dust2.jpg);";
            document.querySelector(".nome_map").innerHTML = "Dust 2";
        }
        else if (mapas.indexOf("inferno") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(inferno.jpg);";
            document.querySelector(".nome_map").innerHTML = "Inferno";
        }
        else if (mapas.indexOf("mirage") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(mirage.jpg);";
            document.querySelector(".nome_map").innerHTML = "Mirage";
        }
        else if (mapas.indexOf("nuke") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(nuke.jpg);";
            document.querySelector(".nome_map").innerHTML = "Nuke";
        }
        else if (mapas.indexOf("overpass") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(overpass.jpg);";
            document.querySelector(".nome_map").innerHTML = "Overpass";
        }
        else if (mapas.indexOf("train") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(train.jpg);";
            document.querySelector(".nome_map").innerHTML = "Train";
        }
        else if (mapas.indexOf("vertigo") < 0) {
            document.querySelector(".resultado3").style = "background-image: url(vertigo.jpg);";
            document.querySelector(".nome_map").innerHTML = "Vertigo";
        }
    });

});




