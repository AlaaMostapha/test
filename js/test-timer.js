var start = 0;
var reach=10;
var seconds = start;

function timer() {
    var days = Math.floor(seconds / 24 / 60 / 60);
    var hoursLeft = Math.floor((seconds) - (days * 86400));
    var hours = Math.floor(hoursLeft / 3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
    var minutes = Math.floor(minutesLeft / 60);
    var remainingSeconds = seconds % 60;

    function pad(n) {
        return (n < 10 ? "0" + n : n);
    }
    document.getElementById('countdown').innerHTML = pad(days) + ":" + pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
    if(start == 0){
        if (seconds == reach) {
            clearInterval(countupanddownTimer);
            document.getElementById('countdown').innerHTML = "Completed";
        } else {
            seconds++;
        }
    }else if(start > 0){
        if(seconds == reach){
            clearInterval(countupanddownTimer);
            document.getElementById('countdown').innerHTML = "Completed";
        }
        else{
            seconds --;
        } 
    }
    
    // if (seconds == 0) {
    //     clearInterval(countupanddownTimer);
    //     document.getElementById('countdown').innerHTML = "Completed";
    // } else {
    //     seconds--;
    // }
}
var countupanddownTimer = setInterval('timer()', 1000);