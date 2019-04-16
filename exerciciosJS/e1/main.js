var max = document.querySelector('.max');
var min = document.querySelector('.min');

max.addEventListener('click',function(e){
    e.preventDefault();
    var valores = document.querySelectorAll('input');
    var maximo = -1;
    for(var x = 0; x < valores.length; x++){
        valores[x].style = 'border-color:gray';
        if (maximo < parseInt(valores[x].value)){
            maximo = parseInt(valores[x].value);
            eleMax = valores[x];
        }
    }
    eleMax.style = 'border-color:red';
});

min.addEventListener('click',function(e){
    e.preventDefault();
    var valores = document.querySelectorAll('input');
    var minimo = 1000;
    for(var x = 0; x < valores.length; x++){
        valores[x].style = 'border-color:gray';
        if (minimo > parseInt(valores[x].value)){
            minimo = parseInt(valores[x].value);
            eleMin = valores[x];
        }
    }
    eleMin.style = 'border-color:green';
});
