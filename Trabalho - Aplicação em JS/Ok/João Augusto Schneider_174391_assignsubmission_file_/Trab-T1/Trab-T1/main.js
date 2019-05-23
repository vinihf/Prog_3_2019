let confirma = document.querySelector("#ok");
var cpu = document.querySelector("#Processador");
var vga = document.querySelector("#VGA");
var oc = document.querySelector("#overclock");
var dark = document.querySelector("#Dark");
var light = document.querySelector("#Light");
var TDPcpu = 0;
var TDPvga = 0;
var TDPadd = 175;
var TDP = 0;
var x = 0;

Dark.addEventListener('click', function(x){ 
    document.querySelector("body").style = "background-image: url(Dark.jpg);";
    document.querySelector("form").style = "border-color: black";
});
Light.addEventListener('click', function(x){
    document.querySelector("body").style = "background-image: url(Light.jpg)";
    document.querySelector("form").style = "border-color: green";
});

ok.addEventListener("click",function(e){
    onclick="this.disabled=true;"

    //Definir o TDP da CPU

    if (cpu.value == "1" || cpu.value == "4" || cpu.value == "5"){
        TDPcpu = 65;
    } else if (cpu.value == "2" || cpu.value == "6" || cpu.value == "7"){
        TDPcpu = 105;
    } else if (cpu.value == "3") {
        TDPcpu = 250;
    } else {
        TDPcpu = 0;
    }

    //Definir o TDP da VGA

    if (vga.value == "1") {
        TDPvga = 80;
    } else if (vga.value == "2") {
        TDPvga = 150;
    } else if (vga.value == "3") {
        TDPvga = 300;
    } else if (vga.value == "4") {
        TDPvga = 120;
    } else if (vga.value == "5" || cpu.value == "8") {
        TDPvga = 300;
    } else if (vga.value == "6") {
        TDPvga = 180;
    } else if (vga.value == "7") {
        TDPvga = 220;
    } else {
        TDPvga = 0;
    }

    //Definir se há necessidade de TDP adicional

    if(oc.value == "CPU")  {
        TDPadd += 15;
    } else if(oc.value == "VGA") { 
        TDPadd += 30;
    } else if(oc.value == "CPUeVGA"){
        TDPadd += 50;
    } else if(oc.value == "N"){
        TDPadd += 0;
    }

    x = TDPcpu + TDPvga + TDPadd;
    console.log(x);
    document.querySelector("#resposta").innerHTML = x+"W";
    e.preventDefault();
});
