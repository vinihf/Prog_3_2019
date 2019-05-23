var dark = document.querySelector("#dark");
var light = document.querySelector("#light");
var res = document.querySelector("#result");
var sel = document.querySelector("#tipo");
var inp = document.querySelector("#ano");
var form = document.querySelector("#form");
var btn = document.querySelector("#btn");
var classeClara = 'light'
var classeEscura = 'color'
function changeColor(){
    if(light.checked){
        res.classList.remove(classeEscura);
        inp.classList.remove(classeEscura);
        form.classList.remove(classeEscura);
        sel.classList.remove(classeEscura);
        res.classList.add(classeClara);
        inp.classList.add(classeClara);
        form.classList.add(classeClara);
        sel.classList.add(classeClara);
    } else if(dark.checked){
        res.classList.add(classeEscura);
        inp.classList.add(classeEscura);
        form.classList.add(classeEscura);
        sel.classList.add(classeEscura);
        res.classList.remove(classeClara);
        inp.classList.remove(classeClara);
        form.classList.remove(classeClara);
        sel.classList.remove(classeClara);
    }
}
btn.addEventListener("click", function(e){
    e.preventDefault();
    if(sel.value == "1" && inp.value == "1"){
        document.getElementById("h2").innerHTML = "Alohomora, Expelliarmus, Lumos, Nox, Wingardium Leviosa, Protego";
    }else if(sel.value == "1" && inp.value == "2"){
        document.getElementById("h2").innerHTML = "Immobilus, Lumos Solem, Vera Verto, Impedimenta, Episkey, Eat Slugs";
    }else if(sel.value == "1" && inp.value == "3"){
        document.getElementById("h2").innerHTML = "Revelium, Confundus, Erecto, Herbivicus, Lumos Maxima, Rictusempra, Riddikulus";    
    }else if(sel.value == "1" && inp.value == "4"){
        document.getElementById("h2").innerHTML = "Estupefaça, Glacius, Incendio, Mobilicorpus";    
    }else if(sel.value == "1" && inp.value == "5"){
        document.getElementById("h2").innerHTML = "Flipendo, Levicorpus, Obscuro";    
    }else if(sel.value == "1" && inp.value == "6"){
        document.getElementById("h2").innerHTML = "Animus Corpus, Deprimo, Expecto Patronum, Reducto, Sectumsempra";    
    }else if(sel.value == "1" && inp.value == "7"){
        document.getElementById("h2").innerHTML = "Deletrius, Homenum Revelio, Obliviate";    
    }else if(sel.value == "2" && inp.value == "1"){
        document.getElementById("h2").innerHTML = "Poção Adurganic, Poção para curar picada de Aranha, Poção Fotográfica";    
    }else if(sel.value == "2" && inp.value == "2"){
        document.getElementById("h2").innerHTML = "Poção para Arrepiar Cabelo, Antídoto Le Bas, Cura para Furúnculos, Poção Cura Bocal, Poção Aromática";   
    }else if(sel.value == "2" && inp.value == "3"){
        document.getElementById("h2").innerHTML = "Poção do Esquecimento, Poção da Memória, Poção Drenhose, Filtro dos Sonhos, Herbicida";    
    }else if(sel.value == "2" && inp.value == "4"){
        document.getElementById("h2").innerHTML = "Poção Apimentada, Antídoto para Venenos Comuns, Poção Restauradora, Poção Sacebak";    
    }else if(sel.value == "2" && inp.value == "5"){
        document.getElementById("h2").innerHTML = "Poção Simples do Amor, Poção Anti-paixão, Poção Azul-hidratante, Poção do Sono";    
    }else if(sel.value == "2" && inp.value == "6"){
        document.getElementById("h2").innerHTML = "Poção Limpa Feridas, Pasta Laranja para Queimaduras, Super Poção de Cura";    
    }else if(sel.value == "2" && inp.value == "7"){
        document.getElementById("h2").innerHTML = "Poção Audiens, Poção do Odor, Poção Invisivlem, Poção Rejuvenescedora, Poção Envelhecedora";    
    }else if(sel.value == "3" && inp.value == "1"){
        document.getElementById("h2").innerHTML = "Transfigurare Papyrum, Receptum Vertere, Pluma Transfiguratio, Horologium";  
    }else if(sel.value == "3" && inp.value == "2"){
        document.getElementById("h2").innerHTML = "Avis, Corandio, Feraverto, Orchideous, Serpensortia, Densaugeo, Orelhuddus";  
    }else if(sel.value == "3" && inp.value == "3"){
        document.getElementById("h2").innerHTML = "Melofors, Piscifor, Vermiculus, Aracnotrivia, Obscurecerae";  
    }else if(sel.value == "3" && inp.value == "4"){
        document.getElementById("h2").innerHTML = "Draconifors, Lapifors, Tartugofors, Emannare";  
    }else if(sel.value == "3" && inp.value == "5"){
        document.getElementById("h2").innerHTML = "Fênixfors, Glisseo, Revertus Totallus, Transforminous Obecterum";  
    }else if(sel.value == "3" && inp.value == "6"){
        document.getElementById("h2").innerHTML = "Defodio, Distorccio, Evanesco, Geminio, Mutare Face";  
    }else if(sel.value == "3" && inp.value == "7"){
        document.getElementById("h2").innerHTML = "Enjaulius, Humanis Animalesco";  
    }else{
        document.getElementById("h2").innerHTML = "";
    }
});