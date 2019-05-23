var calc = document.querySelector(".calc");  

calc.addEventListener("click", function(e){
   var n = document.querySelector(".nome");
    console.log(n.value);
    var a = document.querySelector(".altura");
    console.log(a.value);
    var s = document.querySelector(".sexo");
    console.log(s.value);
    var conta = parseFloat((a.value)-100)-(parseFloat((a.value)-150)/parseInt(s.value));
    console.log(conta.value);
    document.querySelector(".result").innerHTML = n.value + ", seu peso ideal é aproximadamente: " + conta + "Kg.";
    e.preventDefault();
    document.querySelector(".nome").value = "";
    document.querySelector(".altura").value = "";


});

var  tema = document.querySelector(".r1");
tema.addEventListener("click", function(e){
document.querySelector("#container").style = "background-color: aquamarine; color:black";
});
var  tema = document.querySelector(".r2");
tema.addEventListener("click", function(e){
document.querySelector("#container").style = "background-color: black; color:white";
});