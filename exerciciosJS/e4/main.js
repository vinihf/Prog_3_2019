var adiciona = document.querySelector('.add')

adiciona.addEventListener('click',function(e){
    conteudo = document.querySelector('input');
    lista = document.querySelector('ul');
    item = document.createElement('li');
    texto = document.createTextNode(conteudo.value)
    item.appendChild(texto);
    lista.appendChild(item);
    conteudo.value='';
});

