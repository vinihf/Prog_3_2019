let soma = document.querySelector(".btSo");
let subtrai = document.querySelector(".btSu");
let divide = document.querySelector(".btDi");
let multiplica = document.querySelector(".btMu");

soma.addEventListener("click",function(e){
    let v1 = document.querySelector(".valor1");
    let v2 = document.querySelector(".valor2");
    document.querySelector("#resultado").innerHTML = (parseInt(v1.value) + parseInt(v2.value));
    e.preventDefault();
})
