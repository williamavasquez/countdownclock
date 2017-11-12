var clock;

$(document).ready(function() {

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

    const timeRemaining =  () => {
        console.log("fetching time Remaining")
        // ajax call for remaining time
        $.ajax({
            type: "GET",
            url: "https://countdownclockserver.herokuapp.com/remainingTime",
            success: (data)=>{
              console.log(data)
              console.log(clock)
              clock.setTime(data.timeLeft)
              clock.start()
            }
          });
        }

    timeRemaining()
});