window.onload = function () {
    // assigning values
    var mins = 00;
    var seconds = 00;
    var tens = 00;

    var appendmins = document.getElementById('mins');
    var appendSeconds = document.getElementById('seconds');
    var appendTens = document.getElementById('tens');
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;


    buttonStart.onclick = function () {
        Interval = setInterval(startTimer, 10);
    }
    
    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        mins = "00";
        appendTens.innerText = tens;
        appendSeconds.innerText = seconds;
        appendmins.innerText = mins;

    }

    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++
            appendSeconds.innerHTML = "0" + seconds;
            tens = seconds;
            appendTens.innerHTML = "0" + 0;
        }

         if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
    
        if (seconds >= 60){
      console.log("mins");
      mins++;
      appendmins.innerHTML = "0" + "0";
      seconds = mins;
      appendSeconds.innerHTML = "0" + 0;
    }
    
    if (seconds > 0){
      appendmins.innerHTML = 0 + mins;
    }
        
   }


}