# stopwatch
A Stopwatch with basic functionalities like start, stop and reset.

This project is made using only HTML,CSS, Vanilla JS.

So in this stopwatch Html has One stopwatch Container 
Inside which their is <div id="display"> which contains the display screen where time will be displayed 
and  <div id="contain"> which contains START,STOP,RESET buttons.
  
  The Html Code Looks like this:-
<div id="stopwatch">

        <!-- display inside stopwatch where minutes and second will be shown -->
       
        <div id="display">
            <span class="time" id="min">00m</span>
            <span class="time">:</span>
            <span class="time" id="sec">00s</span>
        </div>

        <!-- three buttons as start,reset and stop are made -->
        <div id="contain">
        <button id="start" class="buttons" onclick="start();">START</button>
        <button id="reset" class="buttons" onclick="reset();">RESET</button>
        <button id="stop" class="buttons" onclick="stop();">STOP</button>
        </div>
    </div>
  
  For CSS part I have made use of media Querries in addition to normal CSS to make it moreresponsive accross different devices.
  For Javascript I would like you to open js file of the Project Where I have written Comments which show which code is doing which work.
  
  Thank YOu
