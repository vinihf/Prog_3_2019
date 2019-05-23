var form = document.querySelector(".form");
var lay = document.querySelector(".layout");
var botao = document.querySelector(".botao");
var escurol = 'dark';
var clarol = 'light';
var escurof = 'escuro';
var clarof = 'claro';
botao.addEventListener('click', function(x){
    let v1 = document.querySelector('.angulo');
    let ang = v1.value;
    let quad = ang/90;
    let sen = 0;
    let cos = 0;
    let tan = 0;
    let res = "";
    if (ang>=0){
        while (ang>=180){
            ang-=180;
        }
        if (ang>90) {
            ang=90-(ang-90);
        }
        while (quad>=4) {
            quad-=4;
        } 
    if (quad==0){
        cos=1;
    } else if (quad==1){
        sen=1;
    } else if (quad==2){
        cos=-1;
    } else if (quad==3){
        sen=-1;
    } else if (ang==60){
        sen = (Math.sqrt(3))/2;
        cos = 1/2;
    } else if (ang==30){
        cos = (Math.sqrt(3))/2;
        sen = 1/2;
    } else if (ang==45){
        sen = (Math.sqrt(2))/2;
        cos = sen;
    } else {
        let sen1 = 0.0174524064;
        let cos1 = 0.9998476952;
        if (ang < 15) {
            var xang = 1;
            var senx = 0.0174524064;
            var cosx = 0.9998476952;
        } else if (ang<30){
            var xang = 15;
            var senx = 0.2588190451;
            var cosx = 0.9659258263;
        } else if (ang<45){
            var xang = 30;
            var senx = 1/2;
            var cosx = (Math.sqrt(3))/2;
        } else if (ang<60){
            var xang = 45;
            var senx = (Math.sqrt(2))/2;
            var cosx = senx;
        } else if (ang<75){
            var xang = 60;
            var cosx = 1/2;
            var senx = (Math.sqrt(3))/2;
        } else {
            var xang = 75;
            var senx = 0.9659258263;
            var cosx = 0.2588190451;
        }
        while (xang<ang){
            senx = (sen1*cosx)+(senx*cos1);
            cosx = (cosx*cos1)-(senx*sen1);
            xang++;
        }
        sen = senx;
        cos = cosx;
    }
    if (quad>0 && quad<1) {
        quad = 1;
    } else if (quad>1 && quad <2) {
        quad = 2;
        cos*=-1;
    } else if (quad>2 && quad <3) {
        quad = 3;
        cos*=-1;
        sen*=-1;
    } else if (quad>3 && quad <4) {
        quad = 4;
        cos*=-1;
    } else {
        quad = 0;
    }
    if (cos!=0){
        tan = sen/cos;
    }

    let v2 = document.querySelector('.opcoes');
    let op = v2.value;
    if (op == "quad") {
        if (quad!=0){
            res+= quad;
        } else {
            res = "Não possui quadrante";
        }
    } else if (op == "sen"){
        res+=sen;
    } else if (op == "cos") {
        res+=cos;
    } else if (op == "tan") {
        if (cos!=0){
            res+= tan;
        } else {
            res = "Não existe";
        }
    }
    } else {
        res +="Digite um ângulo positivo!";
    }
    document.querySelector(".resultado").innerHTML = "" + res;
    x.preventDefault();
    console.log (ang);
});
function lightf(){
    document.fgColor = "black";
    lay.classList.remove(escurol);
    lay.classList.add(clarol);
    form.classList.remove(escurof);
    form.classList.add(clarof);
}
function lightd(){
    document.fgColor = "whitesmoke";
    lay.classList.remove(clarol);
    lay.classList.add(escurol);
    form.classList.remove(clarof);
    form.classList.add(escurof);
}
