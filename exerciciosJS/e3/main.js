let mensagem = document.querySelector('.mensagem');
let horario = document.querySelector('.horario');
let aux = new Date();
horario.innerHTML = aux.getHours()+":"+aux.getMinutes()+":"+aux.getSeconds();
mensagens = ["Bom dia!","Boa tarde!","Boa noite!"];
if (aux.getHours()>=6 && aux.getHours()<=12){
    mensagem.innerHTML = mensagens[0];
}
else if (aux.getHours()>12 && aux.getHours()<18){
    mensagem.innerHTML = mensagens[1];
}else{
    mensagem.innerHTML = mensagens[2];
}


