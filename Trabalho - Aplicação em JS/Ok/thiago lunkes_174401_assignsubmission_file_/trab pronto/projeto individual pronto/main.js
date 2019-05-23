var achar = document.querySelector(".bt");
var temaLight = document.getElementById("light");
var temaDark = document.getElementById("dark");
var select = document.querySelector(".valor");

achar.addEventListener("click", function(x) {
    let v = document.querySelector(".valor1");
    let nome = v.value;
    if (valores.value == 1) {
        document.getElementById("h2").innerHTML = nome + " pertence a casa: Grifinória!";
    } else if (valores.value == 2) {
        document.getElementById("h2").innerHTML = nome + " pertence a casa: Grifinória!";
    } else if (valores.value == 3) {
        document.getElementById("h2").innerHTML = nome + " pertence a casa: Sonserina!";
    } else if (valores.value == 4) {
        document.getElementById("h2").innerHTML = nome + " pertence a casa: Sonserina!";
    } else if (valores.value == 5) {
        document.getElementById("h2").innerHTML = nome + " pertence a casa: Corvinal!";
    } else if (valores.value == 6) {
        document.getElementById("h2").innerHTML = nome + " pertence a casa: Corvinal!";
    } else if (valores.value == 7) {
        document.getElementById("h2").innerHTML = nome + " pertence a casa: Lufa-Lufa!";
    } else if (valores.value == 8) {
        document.getElementById("h2").innerHTML = nome + " pertence a casa: Lufa-Lufa!";
    }
    x.preventDefault();
});

temaDark.addEventListener("click", function() {
    document.querySelector(".container").style = "background-color: #363636;";
    document.querySelector("body").style = "color: white;";
});

temaLight.addEventListener("click", function() {
    document.querySelector(".container").style = "background-color: white;";
    document.querySelector("body").style = "color: black;";
});