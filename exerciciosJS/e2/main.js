var divide = document.querySelector('.divide')

divide.addEventListener('click',function(e){
    e.preventDefault();
    valor = document.querySelector('.valor');
    qtd = document.querySelector('.qtd');
    resultado = parseFloat(valor.value)/parseFloat(qtd.value);
    document.querySelector('.resultado').innerHTML = "Valor dividido: R$"+(resultado.toFixed(2));
});

