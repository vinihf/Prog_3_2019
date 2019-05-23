var dark = document.getElementById('dark');
var light = document.getElementById('light');

var btnCon = document.querySelector(".confirma")

var ano1 = document.querySelector('.ano1')
var ano2 = document.querySelector('.ano2')
var ano3 = document.querySelector('.ano3')
var ano4 = document.querySelector('.ano4')

dark.addEventListener('click', function() {
    document.querySelector('.container').style = "background-image: linear-gradient(to left, #000000, #0d0d0d, #161617, #1d1d1e, #232526, #232526, #232526, #232526, #1d1d1e, #161617, #0d0d0d, #000000)";
    document.querySelector('body').style = "color: gray;";
    document.querySelector('form').style = "border-color: gray;";
    document.querySelector('footer').style = "color: gray;";
    
});

light.addEventListener('click', function(){
    document.querySelector('.container').style = "background-image: linear-gradient(to left, #00309d, #314db1, #506ac5, #6f88d7, #8ea7e9, #8ea7ea, #8fa8eb, #8fa8ec, #708bdd, #526ecd, #3351bc, #0135aa);";
    document.querySelector('.container').style = "color: black;"
    document.querySelector('form').style = "border-color: black;";
    document.querySelector('footer').style = "color: black;";

})

btnCon.addEventListener('click', function()  {
    var posicao = document.querySelector('.posicao');
    var ano1 = document.querySelector('.ano1')
    var ano2 = document.querySelector('.ano2')
    var ano3 = document.querySelector('.ano3')
    var ano4 = document.querySelector('.ano4')

    if(posicao.value == "1" & ano1.checked == true){   
        document.querySelector('.nome').innerHTML = "Manuel Neuer";
        document.querySelector('.imagem').src = "manuel.jpg";
    }else if(posicao.value == "1" & ano2.checked == true){
        document.querySelector('.nome').innerHTML = "Manuel Neuer";
        document.querySelector('.imagem').src = "manuel.jpg";
    }else if(posicao.value == "1" & ano3.checked == true){
        document.querySelector('.nome').innerHTML = "Buffon";
        document.querySelector('.imagem').src = "buffon.jpg";
    }else if(posicao.value == "1" & ano4.checked == true){
        document.querySelector('.nome').innerHTML = "David de Gea";
        document.querySelector('.imagem').src = "degea.jpg";
    }else if(posicao.value == "2" & ano1.checked == true){
        document.querySelector('.nome').innerHTML = "Sergio Ramos";
        document.querySelector('.imagem').src = "ramos.jpg";
    }else if(posicao.value == "2" & ano2.checked == true){
        document.querySelector('.nome').innerHTML = "Gerard Piqué";
        document.querySelector('.imagem').src = "pique.jpg";
    }else if(posicao.value == "2" & ano3.checked == true){
        document.querySelector('.nome').innerHTML = "Bonucci";
        document.querySelector('.imagem').src = "bonucci.jpg";
    }else if(posicao.value == "2" & ano4.checked == true){
        document.querySelector('.nome').innerHTML = "Varane";
        document.querySelector('.imagem').src = "varane.jpg";
    }else if(posicao.value == "3" & ano1.checked == true){
        document.querySelector('.nome').innerHTML = "Thiago Silva";
        document.querySelector('.imagem').src = "thiago.jpg";
    }else if(posicao.value == "3" & ano2.checked == true){
        document.querySelector('.nome').innerHTML = "Sergio Ramos";
        document.querySelector('.imagem').src = "ramos.jpg";
    }else if(posicao.value == "3" & ano3.checked == true){
        document.querySelector('.nome').innerHTML = "Sergio Ramos";
        document.querySelector('.imagem').src = "ramos.jpg";
    }else if(posicao.value == "3" & ano4.checked == true){
        document.querySelector('.nome').innerHTML = "Sergio Ramos";
        document.querySelector('.imagem').src = "ramos.jpg";
    }else if(posicao.value == "4" & ano1.checked == true){
        document.querySelector('.nome').innerHTML = "Marcelo";
        document.querySelector('.imagem').src = "marcelo.jpg";
    }else if(posicao.value == "4" & ano2.checked == true){
        document.querySelector('.nome').innerHTML = "Marcelo";
        document.querySelector('.imagem').src = "marcelo.jpg";
    }else if(posicao.value == "4" & ano3.checked == true){
        document.querySelector('.nome').innerHTML = "Marcelo";
        document.querySelector('.imagem').src = "Marcelo.jpg";
    }else if(posicao.value == "4" & ano4.checked == true){
        document.querySelector('.nome').innerHTML = "Marcelo";
        document.querySelector('.imagem').src = "Marcelo.jpg";
    }else if(posicao.value == "5" & ano1.checked == true){
        document.querySelector('.nome').innerHTML = "Daniel Alves";
        document.querySelector('.imagem').src = "danialves.jpg";
    }else if(posicao.value == "5" & ano2.checked == true){
        document.querySelector('.nome').innerHTML = "Daniel Alves";
        document.querySelector('.imagem').src = "danialves.jpg";
    }else if(posicao.value == "5" & ano3.checked == true){
        document.querySelector('.nome').innerHTML = "Daniel Alves";
        document.querySelector('.imagem').src = "danialves.jpg";
    }else if(posicao.value == "5" & ano4.checked == true){
        document.querySelector('.nome').innerHTML = "Daniel Alves";
        document.querySelector('.imagem').src = "danialves.jpg";
    }else if(posicao.value == "6" & ano1.checked == true){
        document.querySelector('.nome').innerHTML = "Luca Modric";
        document.querySelector('.imagem').src = "modric.jpg";
    }else if(posicao.value == "6" & ano2.checked == true){
        document.querySelector('.nome').innerHTML = "Toni Kross";
        document.querySelector('.imagem').src = "kross.jpg";
    }else if(posicao.value == "6" & ano3.checked == true){
        document.querySelector('.nome').innerHTML = "Toni Kross";
        document.querySelector('.imagem').src = "kross.jpg";
    }else if(posicao.value == "6" & ano4.checked == true){
        document.querySelector('.nome').innerHTML = "N'Golo Kanté ";
        document.querySelector('.imagem').src = "kante.jpg";
    }else if(posicao.value == "7" & ano1.checked == true){
        document.querySelector('.nome').innerHTML = "Andrés Iniesta ";
        document.querySelector('.imagem').src = "iniesta.jpg";
    }else if(posicao.value == "7" & ano2.checked == true){
        document.querySelector('.nome').innerHTML = "Andrés Iniesta ";
        document.querySelector('.imagem').src = "iniesta.jpg";
    }else if(posicao.value == "7" & ano3.checked == true){
        document.querySelector('.nome').innerHTML = "Andrés Iniesta";
        document.querySelector('.imagem').src = "iniesta.jpg";
    }else if(posicao.value == "7" & ano4.checked == true){
        document.querySelector('.nome').innerHTML = "Hazard ";
        document.querySelector('.imagem').src = "hazard.jpg";
    }else if(posicao.value == "8" & ano1.checked == true){
        document.querySelector('.nome').innerHTML = "Pogba";
        document.querySelector('.imagem').src = "pogba.jpg";
    }else if(posicao.value == "8" & ano2.checked == true){
        document.querySelector('.nome').innerHTML = "Luka Modric";
        document.querySelector('.imagem').src = "modric.jpg";
    }else if(posicao.value == "8" & ano3.checked == true){
        document.querySelector('.nome').innerHTML = "Luka Modric";
        document.querySelector('.imagem').src = "modric.jpg";
    }else if(posicao.value == "8" & ano4.checked == true){
        document.querySelector('.nome').innerHTML = "Luka Modric";
        document.querySelector('.imagem').src = "modric.jpg";
    }else if(posicao.value == "9" & ano1.checked == true){
        document.querySelector('.nome').innerHTML = "Cristiano Ronaldo";
        document.querySelector('.imagem').src = "cris.jpg";
    }else if(posicao.value == "9" & ano2.checked == true){
        document.querySelector('.nome').innerHTML = "Cristiano Ronaldo";
        document.querySelector('.imagem').src = "cris.jpg";
    }else if(posicao.value == "9" & ano3.checked == true){
        document.querySelector('.nome').innerHTML = "Neymar";
        document.querySelector('.imagem').src = "neymar.jpg";
    }else if(posicao.value == "9" & ano4.checked == true){
        document.querySelector('.nome').innerHTML = "Cristiano Ronaldo";
        document.querySelector('.imagem').src = "cris.jpg";
    }else if(posicao.value == "10" & ano1.checked == true){
        document.querySelector('.nome').innerHTML = "Neymar";
        document.querySelector('.imagem').src = "neymar.jpg";
    }else if(posicao.value == "10" & ano2.checked == true){
        document.querySelector('.nome').innerHTML = "Lionel Messi";
        document.querySelector('.imagem').src = "messi.jpg";
    }else if(posicao.value == "10" & ano3.checked == true){
        document.querySelector('.nome').innerHTML = "Lionel Messi";
        document.querySelector('.imagem').src = "messi.jpg";
    }else if(posicao.value == "10" & ano4.checked == true){
        document.querySelector('.nome').innerHTML = "Kylian Mbappé";
        document.querySelector('.imagem').src = "mbappe.jpg";
    }else if(posicao.value == "11" & ano1.checked == true){
        document.querySelector('.nome').innerHTML = "Lionel Messi";
        document.querySelector('.imagem').src = "messi.jpg";
    }else if(posicao.value == "11" & ano2.checked == true){
        document.querySelector('.nome').innerHTML = "Suarez";
        document.querySelector('.imagem').src = "suarez.jpg";
    }else if(posicao.value == "11" & ano3.checked == true){
        document.querySelector('.nome').innerHTML = "Cristiano Ronaldo";
        document.querySelector('.imagem').src = "cris.jpg";
    }else if(posicao.value == "11" & ano4.checked == true){
        document.querySelector('.nome').innerHTML = "Lionel Messi";
        document.querySelector('.imagem').src = "messi.jpg";
    }else if(posicao.value == "0") {
        document.querySelector('.nome').innerHTML = "Selecione uma posição!"; 
        document.querySelector('.imagem').src = "default.png";
          
    }
});
    


    
    
    
    
    
    
    



