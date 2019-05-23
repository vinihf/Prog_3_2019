const ano = new Date();
document.querySelector(".ano").innerHTML = ano.getFullYear();
time1 = document.querySelector('.time1');
gtime1 = document.querySelector('.gtime1');
time2 = document.querySelector('.time2');
gtime2 = document.querySelector('.gtime2');
resultado = document.querySelector('.resultado');

time1.addEventListener('input',function(e){
    if (gtime1.value!='' || gtime2.value!=''){
        if (gtime1.value>gtime2.value){
            if (time1.value!=''){
                resultado.innerHTML = time1.value;            
            }else{
                resultado.innerHTML = "TIME 1";            
            }
        }else{
            if (time2.value!=''){
                resultado.innerHTML = time2.value;            
            }else{
                resultado.innerHTML = "TIME 2";            
            }
        }

    }
});

time2.addEventListener('input',function(e){
    if (gtime1.value!='' && gtime2.value!=''){
        if (gtime1.value>gtime2.value){
            if (time1.value!=''){
                resultado.innerHTML = time1.value;            
            }else{
                resultado.innerHTML = "TIME 1";            
            }
        }else{
            if (time2.value!=''){
                resultado.innerHTML = time2.value;            
            }else{
                resultado.innerHTML = "TIME 2";            
            }
        }

    }
});

gtime1.addEventListener('input',function(e){
    if (gtime2.value==''){
        if (time1.value==''){
            resultado.innerHTML = "TIME 1";        
        }else{
            resultado.innerHTML = time1.value;
        }
    }else{
        if (gtime1.value > gtime2.value){
            if (time1.value==''){
                resultado.innerHTML = "TIME 1";        
            }else{
                resultado.innerHTML = time1.value;
            }   
        }else{
            if (time2.value==''){
                resultado.innerHTML = "TIME 2";        
            }else{
                resultado.innerHTML = time2.value;
            }   
        }
    }
});

gtime2.addEventListener('input',function(e){
    if (gtime1.value==''){
        if (time2.value==''){
            resultado.innerHTML = "TIME 2";        
        }else{
            resultado.innerHTML = time2.value;
        }
    }else{
        if (gtime2.value > gtime1.value){
            if (time2.value==''){
                resultado.innerHTML = "TIME 2";        
            }else{
                resultado.innerHTML = time2.value;
            }   
        }else{
            if (time1.value==''){
                resultado.innerHTML = "TIME 1";        
            }else{
                resultado.innerHTML = time1.value;
            }   
        }
    }
});