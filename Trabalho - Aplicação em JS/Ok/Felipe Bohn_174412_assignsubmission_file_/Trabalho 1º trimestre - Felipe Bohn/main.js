var tema = document.querySelector('#light');
tema.addEventListener('click', function(){
    document.querySelector('#container').style = "background-color: white; color: black;";
});

tema = document.querySelector('#dark');
tema.addEventListener('click', function(){
    document.querySelector('#container').style = " background-color:rgb(19, 19, 19); color: white;";
});


var imposto = document.querySelector('#opcao'); 
var calcular = document.querySelector('.Calcular');
calcular.addEventListener('click', function(e){
    let produto = document.querySelector('.valor1').value;
    let dolar =  document.querySelector('.valor2').value;
    var resultado = 0;
    if (imposto.value == 1) {
        resultado  = (produto * dolar) * 1.80;
        if (resultado != 0) {
            document.querySelector('.resultado').innerHTML = 'O Valor será de: R$ ' + resultado.toFixed(2);
        }else{
            document.querySelector('.resultado').innerHTML = 'Valores invalidos!!!'
        }
    }if (imposto.value == 2) {
        resultado = produto * dolar;
        if (resultado != 0) {
            document.querySelector('.resultado').innerHTML = 'O Valor será de: R$ ' + resultado.toFixed(2);
        }else{
            document.querySelector('.resultado').innerHTML = 'Valores invalidos!!!'
        }
    }
});