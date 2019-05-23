let btnCalcular = document.querySelector('.calcular');
let btnDark = document.querySelector('#dark');
let btnLight = document.querySelector('#light');
let formulario = document.querySelector("form");

let janeiro = [];
let fevereiro = [20, 21, 22, 25, 26, 27, 28];
let marco = [1, 6, 7, 8, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29];
let abril = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 15, 16, 17, 18, 22, 23, 24, 25, 26, 29, 30];
let maio = [2, 3, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 27, 28, 29, 31];
let junho = [3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 17, 18, 19, 21, 24, 25, 26, 27, 28];
let julho = [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 16, 17, 29, 30, 31];
let agosto = [1, 2, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 26, 27, 28, 29, 30];
let setembro = [2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 23, 24, 25, 26, 27, 30];
let outubro = [1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31];
let novembro = [1, 4, 5, 6, 7, 8, 11, 12, 13, 14, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29];
let dezembro = [2, 3, 4, 5, 6, 9, 10];
let meses = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let quant = [0, 7, 19, 22, 22, 20, 16, 22, 21, 24, 20, 7];

btnDark.addEventListener("click", function(e) {
    formulario.style.backgroundColor = "rgb(35, 35, 35)";
    formulario.style.color = "white";

});
btnLight.addEventListener('click', function(e) {
    formulario.style.backgroundColor = "white";
    formulario.style.color = "black";
})

let mes = document.querySelector('#mes');
let dia = document.querySelector('#dia');
let nome = document.querySelector('#nome');
let tema = document.querySelector('.radio');
let form = document.getElementById("#container");



btnCalcular.addEventListener('click', function(e) {
    e.preventDefault();

    let a = 0

    for (let index = 1; index < mes.value; index++) {
        a += quant[index - 1];
    }

    let diaV = dia.value;

    if (mes.value == 1 || mes.value == 3 || mes.value == 5 || mes.value == 7 || mes.value == 8 || mes.value == 10 || mes.value == 12) {
        if (dia.value > 31 || dia.value < 1) {
            document.querySelector(".resultado").innerHTML = nome.value + ", esse dia não existe! Tente novamente.";

        } else if (mes.value == 1) {
            document.querySelector(".resultado").innerHTML = nome.value + ", você está de férias! 😃";

        } else if (mes.value == 3) {
            let b = 0;
            for (let index = 0; index < marco.length; index++) {
                if (dia.value == marco[index]) {
                    a += 1 + index;
                    var falta = 202 - a;
                    b = 1
                    break;
                }
            }
            if (b == 1) {
                document.querySelector(".resultado").innerHTML = nome.value + ", faltam " + falta + " dias para as férias 😕";
            } else {
                document.querySelector(".resultado").innerHTML = nome.value + ", hoje não tem aula 😃";
            }

        } else if (mes.value == 5) {
            let b = 0;
            for (let index = 0; index < maio.length; index++) {
                if (dia.value == maio[index]) {
                    a += 1 + index;
                    var falta = 202 - a;
                    b = 1;
                    break;
                }

            }
            if (b == 1) {
                document.querySelector(".resultado").innerHTML = nome.value + ", faltam " + falta + " dias para as férias 😕";
            } else {
                document.querySelector(".resultado").innerHTML = nome.value + ", hoje não tem aula 😃";
            }

        } else if (mes.value == 7) {
            let b = 0;
            for (let index = 0; index < julho.length; index++) {
                if (dia.value == julho[index]) {
                    a += 1 + index;
                    var falta = 202 - a;
                    b = 1;
                    break;
                }

            }
            if (b == 1) {
                document.querySelector(".resultado").innerHTML = nome.value + ", faltam " + falta + " dias para as férias 😕";
            } else {
                document.querySelector(".resultado").innerHTML = nome.value + ", hoje não tem aula 😃";
            }

        } else if (mes.value == 8) {
            let b = 0;
            for (let index = 0; index < agosto.length; index++) {
                if (dia.value == agosto[index]) {
                    a += 1 + index;
                    var falta = 202 - a;
                    b = 1;
                    break;
                }
            }
            if (b == 1) {
                document.querySelector(".resultado").innerHTML = nome.value + ", faltam " + falta + " dias para as férias 😕";
            } else {
                document.querySelector(".resultado").innerHTML = nome.value + ", hoje não tem aula 😃";
            }

        } else if (mes.value == 10) {
            let b = 0;
            for (let index = 0; index < outubro.length; index++) {
                if (dia.value == outubro[index]) {
                    a += 1 + index;
                    var falta = 202 - a;
                    b = 1;
                    break;
                }
            }
            if (b == 1) {
                document.querySelector(".resultado").innerHTML = nome.value + ", faltam " + falta + " dias para as férias 😕";
            } else {
                document.querySelector(".resultado").innerHTML = nome.value + ", hoje não tem aula 😃";
            }

        } else if (mes.value == 12 && dia.value > 10) {
            document.querySelector(".resultado").innerHTML = nome.value + ", você está de férias! 😃";
        } else if (mes.value == 12) {
            let b = 0;
            for (let index = 0; index < dezembro.length; index++) {
                if (dia.value == dezembro[index]) {
                    a += 1 + index;
                    var falta = 200 - a;
                    b = 1;
                    break;
                }
            }
            if (b == 1) {
                document.querySelector(".resultado").innerHTML = nome.value + ", faltam " + falta + " dias para as férias 😕";
            } else {
                document.querySelector(".resultado").innerHTML = nome.value + ", hoje não tem aula 😃";
            }

        }

    } else if (mes.value == 2) {
        if (dia.value > 28 || dia.value < 1) {
            document.querySelector(".resultado").innerHTML = nome.value + ", esse dia não existe! Tente novamente.";

        } else if (dia.value < 20) {
            document.querySelector(".resultado").innerHTML = nome.value + ", você está de férias! 😃";

        } else if (mes.value == 2) {
            alert('oi')
            let b = 0;
            for (let index = 0; index < fevereiro.length; index++) {
                if (dia.value == fevereiro[index]) {
                    a += 1 + index;
                    var falta = 202 - a;
                    b = 1
                    break;
                }
            }
            if (b == 1) {
                document.querySelector(".resultado").innerHTML = nome.value + ", faltam " + falta + " dias para as férias 😕";
            } else {
                document.querySelector(".resultado").innerHTML = nome.value + ", hoje não tem aula 😃";
            }
        } else if (mes.value == 4 || mes.value == 6 || mes.value == 9 || mes.value == 11) {
            if (dia.value > 30 || dia.value < 1) {
                document.querySelector(".resultado").innerHTML = nome.value + ", esse dia não existe! Tente novamente.";
            } else if (mes.value == 4) {
                let b = 0;
                for (let index = 0; index < abril.length; index++) {
                    if (dia.value == abril[index]) {
                        a += 1 + index;
                        var falta = 202 - a;
                        b = 1
                        break;
                    }
                }
                if (b == 1) {
                    document.querySelector(".resultado").innerHTML = nome.value + ", faltam " + falta + " dias para as férias 😕";
                } else {
                    document.querySelector(".resultado").innerHTML = nome.value + ", hoje não tem aula 😃";
                }
            } else if (mes.value == 6) {
                let b = 0;
                for (let index = 0; index < junho.length; index++) {
                    if (dia.value == junho[index]) {
                        a += 1 + index;
                        var falta = 202 - a;
                        b = 1;
                        break;
                    }

                }
                if (b == 1) {
                    document.querySelector(".resultado").innerHTML = nome.value + ", faltam " + falta + " dias para as férias 😕";
                } else {
                    document.querySelector(".resultado").innerHTML = nome.value + ", hoje não tem aula 😃";
                }

            } else if (mes.value == 9) {
                let b = 0;
                for (let index = 0; index < setembro.length; index++) {
                    if (dia.value == setembro[index]) {
                        a += 1 + index;
                        var falta = 202 - a;
                        b = 1;
                        break;
                    }
                }
                if (b == 1) {
                    document.querySelector(".resultado").innerHTML = nome.value + ", faltam " + falta + " dias para as férias 😕";
                } else {
                    document.querySelector(".resultado").innerHTML = nome.value + ", hoje não tem aula 😃";
                }

            } else if (mes.value == 11) {
                let b = 0;
                for (let index = 0; index < novembro.length; index++) {

                    if ((dia.value) == novembro[index]) {
                        a += 1 + index;
                        var falta = 202 - a;
                        b = 1;
                        break;
                    }
                }
                if (b == 1) {
                    document.querySelector(".resultado").innerHTML = nome.value + ", faltam " + falta + " dias para as férias 😕";
                } else {
                    document.querySelector(".resultado").innerHTML = nome.value + ", hoje não tem aula 😃";
                }

            }
        }

    }














});