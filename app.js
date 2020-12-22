var button= document.querySelector('.button')
var inputvalue=document.querySelector('.inputvalue')
var nome=document.querySelector('.nome')
var desc=document.querySelector('.desc')
var temp=document.querySelector('.temp')

button.addEventListener('click',function(){
    
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&APPID=bf32dd4bfc789d6e3af4abebbaee5f7b`)
             .then(response=>response.json())
             .then(data=>{
                var namevalue=data['name'];
                var tempvalue=data['main']['temp'];
                var descvalue=data['weather'][0]['description'];

                nome.innerHTML= namevalue;
                temp.innerHTML=tempvalue;
                desc.innerHTML=descvalue;


        })
             

    });



    

