let Bar = document.querySelector("#Progress_Bar");
let Select =  Math.floor((Math.random() * 100) + 1);
let b = Select + "%";


let check = 0;

if(check == 0){
    check = 1;
    let CurrentWidth = 1;
    let Timer = setInterval(SmoothBar,10);
    function SmoothBar(){
        if(CurrentWidth >= Select){
            clearInterval(Timer);
        }else{
            CurrentWidth += 1;
            LerpColorBar(CurrentWidth);
            Bar.style.width = CurrentWidth + "%";
            Bar.innerHTML = CurrentWidth + "%";
        }
    }
}

function LerpColorBar(_CurrentWidth){
    if(_CurrentWidth > 0 && _CurrentWidth < 30){
        Bar.style.background = "green";
    }else if (_CurrentWidth >= 30 && _CurrentWidth < 60){
        Bar.style.background = "yellow";
    }else if(_CurrentWidth >= 60 && _CurrentWidth < 75){
        Bar.style.background = "orange";
    }else if(_CurrentWidth >= 75 && _CurrentWidth < 100){
        Bar.style.background = "red";
    }
}

Bar.innerHTML += (Select + "%");