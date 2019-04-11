let form = document.querySelector("form");

form.addEventListener("submit",function(e){
    let msgerros = [];
    let erros = false;

    e.preventDefault();
    let login = document.querySelector('.login');
    let senha = document.querySelector('.senha');
    if (login.value=="" || !login){
        msgerros.push("Login está vazio.");
        erros = true;
    }
    if (senha.value=="" || !senha){
        msgerros.push("Senha está vazio.");
        erros = true;
    }
    if (!erros){
        form.submit();
    }else{
        let erro = document.querySelector('.listaerros');
        msgerros.forEach(item => {
        var node = document.createElement("li");                 // Create a <li> node
        var textnode = document.createTextNode(item);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        erro.appendChild(node);     // Ap
        });
        
    }
});