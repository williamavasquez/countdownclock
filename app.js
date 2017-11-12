var clock;

$(document).ready(function() {
    
    const timeRemaining =  () => {
        // ajax call for remaining time
        $.ajax({
            type: "GET",
            url: "/remainingTime",
            success: (data)=>{
              console.log(data)
            }
          });
        // return time 
        }

        timeRemaining();
    let time = 30

    clock = $('.clock').FlipClock(time, {
        // clockFace: 'MinuteCounter',
        countdown: true,
        autoStart: true,
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