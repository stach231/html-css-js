const tile1 = document.querySelector('.tile>input[type="text"]#first-name');
const tile2 = document.querySelector('#last-name');

const tile3 = document.querySelector('input[type="email"]');

const tile0 = document.querySelector('.hack');
const shape = document.querySelector('#task-frontend')
const checkbox = document.querySelectorAll('input[type="checkbox"]');

const span = document.querySelector('.tile3');

const butt = document.querySelector('input[type="submit"]');
let pop = 0;
function check(){
    let checks = 0;
    for(item of checkbox){
        if(item.checked){
            checks++;
        }
    }
    return checks;
}

function data(){
    let bites = "";
    if(tile1.value==""||!/[A-Z|a-z]+/.test(tile1.value)) bites += "0";
    else bites += "1";
    if(tile2.value==""||!/[A-Z|a-z]+/.test(tile2.value)) bites += "0";
    else bites += "1";
    if(tile3.value=="") bites += "-";
    else if(tile3.value!=""&&!/^[a-z][a-z|\.]*@[a-z|\.]+[a-z]$/i.test(tile3.value)) bites += "0";
    else bites += "1";
    return bites;
}
butt.addEventListener("click", function(e){
    let word = data();
    pop = 0;
    if(word=="001") 
    {   
        tile0.innerHTML='<span style="font-size:20px; color:red; float: right;">*Wpisz imię i nazwisko</span>'
        shape.setAttribute("height", true);
    }else if(word=="000") 
    {   
        tile0.innerHTML='<span style="font-size:20px; color:red; float: right;">*Wpisz imię, nazwisko i prawidłowy email</span>'
        shape.setAttribute("height", true);
    }else if(word=="00-") 
    {   
        tile0.innerHTML='<span style="font-size:20px; color:red; float: right;">*Wpisz imię, nazwisko i email</span>'
        shape.setAttribute("height", true);
    }else if(word=="011") 
    {   
        tile0.innerHTML='<span style="font-size:20px; color:red; float: right;">*Wpisz imię</span>'
        shape.setAttribute("height", true);
    }else if(word=="010") 
    {   
        tile0.innerHTML='<span style="font-size:20px; color:red; float: right;">*Wpisz imię i prawidłowy email</span>'
        shape.setAttribute("height", true);
    }else if(word=="01-") 
    {   
        tile0.innerHTML='<span style="font-size:20px; color:red; float: right;">*Wpisz imię i email</span>'
        shape.setAttribute("height", true);    
    }else if(word=="110") 
    {   
        tile0.innerHTML='<span style="font-size:20px; color:red; float: right;">*Wpisz prawidłowy email</span>'
        shape.setAttribute("height", true);
    }else if(word=="111") 
    {   
        pop++;
    }else if(word=="11-") 
    {   
        tile0.innerHTML='<span style="font-size:20px; color:red; float: right;">*Wpisz email</span>'
        shape.setAttribute("height", true);
    }else if(word=="100") 
    {   
        tile0.innerHTML='<span style="font-size:20px; color:red; float: right;">*Wpisz nazwisko i prawidłowy email</span>'
        shape.setAttribute("height", true);
    }else if(word=="101") 
    {   
        tile0.innerHTML='<span style="font-size:20px; color:red; float: right;">*Wpisz nazwisko</span>'
        shape.setAttribute("height", true);
    }else if(word=="10-") 
    {   
        tile0.innerHTML='<span style="font-size:20px; color:red; float: right;">*Wpisz nazwisko i email</span>'
        shape.setAttribute("height", true);
    }
    if(check()==0){
        span.innerHTML = '<span>Sekcja</span><span style="font-size:20px; color:red; margin-left:30px;">*Zaznacz opcje!</span></div>';
        e.preventDefault();
    }else{
        pop++;
        if(pop==2){
        shape.setAttribute("height", true);
        tile0.innerHTML='<span style="font-size:20px; float: right;">Twoje zgłoszenie zostało przyjęte</span>'
        }
        tile1.value="";
        tile2.value="";
        tile3.value="";
        for(item of checkbox){
            item.checked = false;
        }
        e.preventDefault();
    }
    
})