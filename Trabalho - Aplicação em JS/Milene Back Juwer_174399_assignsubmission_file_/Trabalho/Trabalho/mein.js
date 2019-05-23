var tema = document.querySelector('.selectl');
tema.addEventListener ('click', function(e){
    document.querySelector('#container').style = "background-color: rgb(228, 193, 153) ";
    document.querySelector('form').style = 'background-color:  rgb(255, 234, 200)';
    document.querySelector('.imagemr').src = 'comedy.png';
    document.querySelector('.imagemx').src = 'lightpipoca2.png';
    document.querySelector('.letra').style = "font-family: 'Concert One', cursive ; cursive;font-size: 65px;color: rgb(78, 48, 40);";
    e.preventDefault;

});
var tema2 = document.querySelector('.selectd');
tema2.addEventListener('click', function(x){
    x.preventDefault;
    document.querySelector('#container').style = 'background-color:  rgb(39, 15, 15) ';
    document.querySelector('form').style = 'background-color: rgb(92, 58, 58)  ';
    document.querySelector('.imagemr').src = 'macabre-2219857_960_720.png';
    document.querySelector('.imagemx').src = 'darkpipoca2.png';
    document.querySelector('.letra').style = "font-family: 'Akronim' ; cursive;font-size: 90px;color: rgb(2, 0, 0);";
});

var sel = document.querySelector('.pesquisar');
sel.addEventListener('click',function(w){
    w.preventDefault();
    console.log("oi");
    let infocor = document.querySelector('.infocor');

    if(infocor.value == 9){
        console.log('infocor');
        document.querySelector('.filme11').src = 'vermelho.jpg';
        document.querySelector('.link1').href = 'https://www.telecineplay.com.br/filme/Azul_%C3%89_A_Cor_Mais_Quente_10620';
    }else if(infocor.value==1){
        document.querySelector('.filme11').src = 'amarelo.jpg';
        document.querySelector('.link1').href = 'https://www.netflix.com/title/60022048';

    } else if(infocor.value==2){
        document.querySelector('.filme11').src = 'verde.jpg';
        document.querySelector('.link1').href = 'http://www.adorocinema.com/filmes/filme-216316/';

    } else if(infocor.value==3){
        document.querySelector('.filme11').src = 'azul.jpg';
        document.querySelector('.link1').href = 'https://www.youtube.com/watch?v=krHi1m5sJuI';

    } else if(infocor.value==4){
        document.querySelector('.filme11').src = 'roxo.jpg';
        document.querySelector('.link1').href = 'https://www.youtube.com/watch?v=MhHqCRhImms';

    } else if(infocor.value==5){
        document.querySelector('.filme11').src = 'rosa.jpg';
        document.querySelector('.link1').href = 'https://www.netflix.com/title/80203147';

    } else if(infocor.value==6){
        document.querySelector('.filme11').src = 'laranja.jpg';
        document.querySelector('.link1').href = 'http://www.adorocinema.com/filmes/filme-125828/';

    } else if(infocor.value==7){
        document.querySelector('.filme11').src = 'preto.jpg';
        document.querySelector('.link1').href = 'https://www.youtube.com/watch?v=M83ncMqv1ko';

    
    }else if(infocor.value==8){
    document.querySelector('.filme11').src = 'branco.jpg';
    document.querySelector('.link1').href = 'https://www.youtube.com/watch?v=aDIaOTTqqqQ';

    }

    let infot = document.querySelector('.infotem');
    if((infot.value)<17){
        document.querySelector('.filme22').src = 'triste.jpg';
        document.querySelector('.link2').href = 'https://www.youtube.com/watch?v=5UPtdPvp5gA';

    }else{
        document.querySelector('.filme22').src = 'feliz.jpg';
        document.querySelector('.link2').href = 'https://www.netflix.com/title/80200642';

    }

    let infoa = document.querySelector('.infoagua');
    if((infoa.value)>150){
        document.querySelector('.filme33').src = 'pansativo.jpg';
        document.querySelector('.link3').href = 'https://www.youtube.com/watch?v=QBKEi8qamKM';

    }
    else{
        document.querySelector('.filme33').src = 'leve.jpg';
        document.querySelector('.link3').href = 'https://www.netflix.com/title/80100906';

    }

    let infos = document.querySelector('.infosau');
    if(infos.value=="sim"){
        document.querySelector('.filme44').src = 'alimentoubem.jpg';
        document.querySelector('.link4').href = 'https://www.netflix.com/title/80013762';

    }else{
        document.querySelector('.filme44').src = 'alimentou mal.jpg';
        document.querySelector('.link4').href = 'http://www.adorocinema.com/filmes/filme-182605/vod/';

    }

    let infol = document.querySelector('.infolua');
    if(infol.value=="lua cheia"){
        document.querySelector('.link5').href = 'https://www.youtube.com/watch?v=JyufYOrtobE';
        document.querySelector('.filme55').src = 'lua cheia.jpg';
    }else if(infol.value=="lua crescente"){
        document.querySelector('.filme55').src = 'lua crescente.jpg';
        document.querySelector('.link5').href = 'https://www.netflix.com/title/80070182';

    } else if(infol.value=="lua nova"){
        document.querySelector('.filme55').src = 'lua nova.jpg';
        document.querySelector('.link5').href = 'https://www.netflix.com/title/60031236';

    }else if(infol.value=="lua minguante"){
        document.querySelector('.filme55').src = 'lua minguante.jpg';
        document.querySelector('.link5').href = 'https://www.youtube.com/watch?v=fzauyj5Mk7Q';

    }
   

});






