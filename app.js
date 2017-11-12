var clock;

$(document).ready(function() {
    

    clock = $('.clock').FlipClock(3, {
        // clockFace: 'MinuteCounter',
        countdown: true,
        autoStart: true,
        callbacks: {
            reset: ()=>{
                console.log("hello")
            },
            stop: ()=>{
clock.setTime(10)
clock.start();
            },
            start: function() {
                $('.message').html('The clock has started!');
            }
        }
    });


    var testthis = ()=>{
        console.log(clock.running)
        // console.log("stop")
        // clock.start()

        clock.loadClockFace()
    }
    $('.start').click(function(e) {

        clock.start();
    });

});