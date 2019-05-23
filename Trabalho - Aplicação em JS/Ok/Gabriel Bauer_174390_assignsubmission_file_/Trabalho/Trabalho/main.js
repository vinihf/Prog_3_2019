var Radio = document.querySelector("#light");
var Radio2 = document.querySelector("#dark");
var bCalcula = document.querySelector("#ação");

Radio.addEventListener("click",function(e){
    document.getElementById("contain").style.background = "white";
    document.getElementById("contain").style.color = "black";
    document.getElementById("ação").style.background = "lightgray";
    document.getElementById("ação").style.color = "black";
    let imagem = document.querySelectorAll("img");
    imagem[0].src = "bambuP.png";
    imagem[1].src = "bambuP.png";
})

Radio2.addEventListener("click",function(e){
    document.getElementById("contain").style.background = "#001";
    document.getElementById("contain").style.color = "white";
    document.getElementById("ação").style.background = "gray";
    document.getElementById("ação").style.color = "white";
    let imagem = document.querySelectorAll("img");
    imagem[0].src = "agua.png";
    imagem[1].src = "agua.png";

})
bCalcula.addEventListener("click",function(e){
    e.preventDefault();
    let necessario = 2;
    let Qnt = document.querySelector("#quantidade").value;
    let Cont = document.querySelector("#conteudo").value;
    let falta = 0;

    if (Qnt == 'ml') {
        necessario = 2000;
    }else if(Qnt == 'l'){
        necessario = 2;
    }

    let bebido = document.querySelector("#number").value;

    if (Cont == 'ba') {
        falta =  necessario + parseInt(bebido);
    }else if (Cont == 'a') {
        falta = necessario - parseInt(bebido);
    }else{
        falta = necessario + parseInt(bebido) * 32;
    }

    if (Qnt == 'ml') {
        if (falta >= 0) {
            document.querySelector('#resultado').value = "Falta beber: " + falta + " mililitros";
        }else{
            document.querySelector('#resultado').value = "Água extra: " + falta + " mililitros";
        }
    }else if(Qnt == 'l'){
        if (falta >= 0) {
            document.querySelector('#resultado').value = "Falta beber: " + falta + " Litros";
        }else{
            document.querySelector('#resultado').value = "Água extra: " + falta + " Litros";
        }
    }
   
})