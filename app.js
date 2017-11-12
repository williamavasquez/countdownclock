var clock;

$(document).ready(function() {

    const timeRemaining =  () => {
        console.log("fetching time Remaining")
        // ajax call for remaining time
        $.ajax({
            type: "GET",
            url: "https://countdownclockserver.herokuapp.com/remainingTime",
            success: (data)=>{
              console.log(data)
              clock.set(data.timeLeft)
              clock.start()
            }
          });
        }

    timeRemaining()
        var time;

    clock = $('.clock').FlipClock(time, {
        // clockFace: 'MinuteCounter',
        countdown: true,
        autoStart: false,
        callbacks: {
            stop: ()=>{
            clock.setTime(time)
            clock.start();
            },
            start: function() {
                $('.message').html('The clock has started!');
            }
        }
    });
});