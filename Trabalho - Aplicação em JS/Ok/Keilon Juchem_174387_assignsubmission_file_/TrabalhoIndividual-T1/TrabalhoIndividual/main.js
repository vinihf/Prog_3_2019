var btnCalc = document.querySelector('.btnAcao');

btnCalc.addEventListener('click', function(e){
    e.preventDefault();
    let name = document.querySelector('.nome');
    let colecao = document.querySelector('.n_hw');
    let tamanho = " ";
    if(parseInt(colecao.value) <= -1){tamanho = name.value + " está devendo HotWheels";}
    if(parseInt(colecao.value) > -1 && parseInt(colecao.value) < 1){tamanho = "Você não tem HotWheels";}
    if(parseInt(colecao.value) >= 1){tamanho = name.value + " tem uma coleção muito pequena";}
    if(parseInt(colecao.value) >= 10){tamanho = name.value + " tem uma coleção pequena";}
    if(parseInt(colecao.value) >= 30){tamanho = name.value + " tem uma coleção mediana";}
    if(parseInt(colecao.value) >= 50){tamanho = name.value + " tem uma coleção grande";}
    if(parseInt(colecao.value) >= 80){tamanho = name.value + " tem uma coleção muito grande";}
    if(parseInt(colecao.value) >= 100){tamanho = name.value + " tem uma coleção gigantesca";}

    document.querySelector('.tamanhoColecao').innerHTML = tamanho;
});

    var tema = document.querySelector('.stiloL');
    
    tema.addEventListener('click', function(x){
    document.querySelector('.container').style = 'background-color: lightblue';
    document.querySelector('.container2').style = 'background-color: lightcoral; color: black'
});

    var tema = document.querySelector('.stiloD');
    
    tema.addEventListener('click', function(x){
    document.querySelector('.container').style = 'background-color: darkblue';
    document.querySelector('.container2').style = 'background-color: black; border-color: red; color: white'
    document.querySelector('.tamanhoColecao').style = 'color: black';

});