//The current count of the timer is zero
var timer = 0;
var minut=0;
var bughandling=0;//
var id;

//below we are accesing minute and second which is shown on screen with help of DOM,
//and assigning them to second and minute variable
var second = document.getElementById('sec');
var minute = document.getElementById('min');

//this is a function which is defined on start-button "onclick()" attribute, and when the button is clicked 
//it start executing
function start(){
    bughandling++;
    if(bughandling==1)//start will run only one time, because if one clicks on start multiple times ,
    {                  //the same event will start running multiple times and will show wrong time value.
        id=setInterval(function(){
            timer++;
            //for displaying seconds and minute
            if(timer<60){ //this condition checks if second is less than 60 then print second corresponding value.
                second.innerText=timer.toString()+"s";}
            else if(timer>=60){//this condition is for when second value exceeds 60, in which second value is set to '0'
                second.innerText="00s";
                timer=0;
                minut++;//minute value is incremented by one for every 60 second
                minute.innerText=minut.toString()+"m";
            }
            
        },1000);//this function will run every 1 second and each time timer variable get incremented every second.
    }
}

function stop(){//this function executes when STOP BUTTON is clicked
    clearInterval(id);//it stops the setInterval function
    bughandling=0;//here this variable is again set to '0' so that if again start is clicked it runs perfectly
}

function reset(){//this function executes when RESET BUTTON is clicked
    clearInterval(id);//it stops the setInterval function
    second.innerText="00s";//set the value of min and sec to default
    minute.innerText="00m";
    bughandling=0;//it is set to zero so after reset button if start is clicked,it runs perfectly
    timer=0;//this is also set to '0' else when again when start is clicked it will start from 0.
    minut=0;
}