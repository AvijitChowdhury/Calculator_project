let screen =document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue="";

for(item of buttons){
    item.addEventListener('click',(event)=>{
        buttonText = event.target.innerText;
        console.log('button is ',buttonText);

        if(buttonText =="X"){
            buttonText='*';
            screenValue  += buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='C'){
            screenValue  += "";
            screen.value=screenValue;
            screen.value="";
        }else if(buttonText=='='){
            screen.value=eval(screenValue);
        }
        else if(buttonText=="<"){
            screen.value=screenValue.substr(0,screen.value.length-1);
        }
        else{
            screenValue  += buttonText;
            screen.value=screenValue;

        }

    })
}
