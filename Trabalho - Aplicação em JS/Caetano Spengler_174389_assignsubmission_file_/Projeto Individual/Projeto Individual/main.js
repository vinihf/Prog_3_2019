var dark = document.getElementById("Dark");
var light = document.getElementById("Light");
var resultado = document.getElementById("result");
var botao = document.querySelector('button');
var ct = document.querySelector('.ct');
var tr = document.querySelector('.t');



dark.addEventListener('click', function () {

        document.querySelector('.form').style = 'background-color: #10171e;';
        document.querySelector("body").style = "color:#fff";
        document.querySelector(".bg").style = "background-color:#10171e;";
        document.querySelector("html").style = "background-color: #10171e;";



});

light.addEventListener('click', function () {

        document.querySelector('.form').style = 'background-color:white';
        document.querySelector("body").style = "color: black;";
        document.querySelector(".bg").style = "background-color: white;";
        document.querySelector("html").style = "background-color: white;";

});



botao.addEventListener("click", function (e) {
        e.preventDefault()

        if (document.querySelector('.choose').value == 1) {
                document.querySelector('.resultado').style = "background-image: url(onetaiji.png);";
                document.querySelector('.resultado1').style = "background-image: url(dlore2.png);";
                document.querySelector('.resultado2').style = "background-image: url(medusa.png);";
                document.querySelector('.resultado3').style = "background-image: url(assimov.png);";
        }
        if (document.querySelector('.choose').value == 2) {
                document.querySelector('.resultado').style = "background-image: url(sla.png);";
                document.querySelector('.resultado1').style = "background-image: url(hidro.png);";
                document.querySelector('.resultado2').style = "background-image: url(sla2.png);";
                document.querySelector('.resultado3').style = "background-image: url(neon.png);";
        }

        if (document.querySelector('.choose').value == 3) {
                document.querySelector('.resultado').style = "background-image: url(golden.png);";
                document.querySelector('.resultado1').style = "background-image: url(poseidon.png);";
                document.querySelector('.resultado2').style = "background-image: url(neonoir.png);";
                document.querySelector('.resultado3').style = "background-image: url(howl.png);";
        }

});





ct.addEventListener('click', function () {
        if (ct.checked == true) {
                document.querySelector('.choose').disabled = true;
                document.querySelector('.click').disabled = true;
                document.querySelector('.resultado').style = "background-image: url(onetaiji.png);";
                document.querySelector('.resultado1').style = "background-image: url(golden.png);";
                document.querySelector('.resultado2').style = "background-image: url(medusa.png);";
                document.querySelector('.resultado3').style = "background-image: url(howl.png);";
        }



});

tr.addEventListener('click', function () {
        if (tr.checked == true) {
                document.querySelector('.choose').disabled = true;
                document.querySelector('.click').disabled = true;
                document.querySelector('.resultado').style = "background-image: url(onetaiji.png);";
                document.querySelector('.resultado1').style = "background-image: url(dlore2.png);";
                document.querySelector('.resultado2').style = "background-image: url(hidro.png);";
                document.querySelector('.resultado3').style = "background-image: url(neon.png);";
        }

});






