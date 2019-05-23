var dark = document.getElementById('D');
var light = document.getElementById('L');
var calc = document.querySelector('.but');
var valor = document.querySelector('.valor');
var select = document.querySelector('.slct');
var aleatorio = document.querySelector('.al');
var cores = [240,0,60,120,30,270,330]

light.addEventListener('click',function(){
    document.querySelector('.painel').style = "border: 1px solid #333;";
    document.querySelector('.content').style = "background-color: #eeeeee;";
    document.querySelector('body').style = "color: black; background-color: " + document.body.style.backgroundColor +";";

});

dark.addEventListener('click',function(){
    document.querySelector('.painel').style = "border: 1px solid #ccc;";
    document.querySelector('.content').style = "background-color: #222831;";
    document.querySelector('body').style = "color: white; background-color: " + document.body.style.backgroundColor +"";
});

calc.addEventListener('click',function(){
    let v = valor.value;
    let s = select.value;
    if(v === "" && s === '0') {
        alert("Informe algum valor HSL ou escolha um preset!");
    }
    else if(v > 359) {
        alert("O valor HSL deve estar entre 0 e 359!");
    }

    else if(v !== ""){
        document.querySelector('#d1').style = "background-color: hsl(" + v + ", 100%, 50%);"
        document.querySelector('#d2').style = "background-color: hsl(" + v + ", 70%, 40%);"
        document.querySelector('#d3').style = "background-color: hsl(" + v + ", 50%, 30%);"
        document.querySelector('#d4').style = "background-color: hsl(" + v + ", 30%, 20%);"
        document.querySelector('#d5').style = "background-color: hsl(" + v + ", 10%, 15%);"
    }

    else if(s !== '0'){
        document.querySelector('#d1').style = "background-color: hsl(" + cores[s-1] + ", 100%, 50%);"
        document.querySelector('#d2').style = "background-color: hsl(" + cores[s-1] + ", 70%, 40%);"
        document.querySelector('#d3').style = "background-color: hsl(" + cores[s-1] + ", 50%, 30%);"
        document.querySelector('#d4').style = "background-color: hsl(" + cores[s-1] + ", 30%, 20%);"
        document.querySelector('#d5').style = "background-color: hsl(" + cores[s-1] + ", 10%, 15%);"  
    }
    

})

aleatorio.addEventListener('click',function() {
    let r = Math.floor(Math.random() * 360);
    document.querySelector('#d1').style = "background-color: hsl(" + r + ", 100%, 50%);"
    document.querySelector('#d2').style = "background-color: hsl(" + r + ", 70%, 40%);"
    document.querySelector('#d3').style = "background-color: hsl(" + r + ", 50%, 30%);"
    document.querySelector('#d4').style = "background-color: hsl(" + r + ", 30%, 20%);"
    document.querySelector('#d5').style = "background-color: hsl(" + r + ", 10%, 15%);"
    
})

function cor(elem) {
    document.querySelector('body').style = "color:" + document.body.style.color + "; background-color: " + elem.style.backgroundColor + "";

}

function cortar(object) {
    if (object.value.length > 3)
      object.value = object.value.slice(0, 3);
  }

function copy(elem) {
    window.prompt("Copiar para a área de transferência: Ctrl+C, Enter", elem.style.backgroundColor);
}



