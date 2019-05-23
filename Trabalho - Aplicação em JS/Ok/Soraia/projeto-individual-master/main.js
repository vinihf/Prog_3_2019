const darkMode = document.querySelector('#dark');
const lightMode = document.querySelector('#light');
var fieldset = document.querySelector("fieldset");
var labeld = document.querySelector('.labeld');
var labell = document.querySelector('.labell');
var resultado = document.querySelector('.resultado');
var h1 = document.querySelector('h1');
var p = document.querySelector('p');
var ano = document.querySelector('.ano');
var calcular = document.querySelector('.soma');

darkMode.addEventListener("click", function(e) {
    e.preventDefault();
    fieldset.style = "background-color:black";
    h1.style = 'color:white';
    p.style = 'color:white';
    resultado.style = 'color:white';
    labeld.style = 'color:white';
    labell.style = 'color:white'
});
lightMode.addEventListener('click', function(e){
    e.preventDefault();
    fieldset.style = 'background-color:white';
    h1.style = 'color:black';
    p.style = 'color:black';
    resultado.style = 'color:black';
    labeld.style = 'color:black';
    labell.style = 'color:black';
})

calcular.addEventListener('click', function(e){
    var opcoes = document.getElementById('opcoes');
    e.preventDefault();
    if(opcoes.value == 1){
        document.querySelector('.resultado').innerHTML = ("O produto irá se decompor em " + (parseInt(ano.value)+100));
    }
    else if(opcoes.value == 2){
        document.querySelector('.resultado').innerHTML = ("O produto irá se decompor em " + (parseInt(ano.value)+40));
    }
    else if(opcoes.value == 3){
        document.querySelector('.resultado').innerHTML = ("O produto irá se decompor em " + (parseInt(ano.value)+450));
    }
    else if(opcoes.value == 4){
        document.querySelector('.resultado').innerHTML = ("O produto irá se decompor em " + (parseInt(ano.value)+0));
    }
    else if(opcoes.value == 5){
        document.querySelector('.resultado').innerHTML = ("O produto irá se decompor em " + (parseInt(ano.value)+5));
    }
    else if(opcoes.value == 6){
        document.querySelector('.resultado').innerHTML = ("O produto irá se decompor em " + (parseInt(ano.value)+15));
    }
    else if(opcoes.value == 7){
        document.querySelector('.resultado').innerHTML = ("O produto irá se decompor em " + (parseInt(ano.value)+150));
    }
    else if(opcoes.value == 8){
        document.querySelector('.resultado').innerHTML = ("O produto irá se decompor em " + (parseInt(ano.value)+50));
    }
    else if(opcoes.value == 9){
        document.querySelector('.resultado').innerHTML = ("O produto irá se decompor em " + (parseInt(ano.value)+1000));
    }
    else if(opcoes.value == 10){
        document.querySelector('.resultado').innerHTML = ("O produto irá se decompor em " + (parseInt(ano.value)+100000000));
    }
    else if(opcoes.value == 11){
        document.querySelector('.resultado').innerHTML = ("O produto irá se decompor em " + (parseInt(ano.value)+600));
    }
});

