$( document ).ready(function() {
    console.log( "ready!" );

//this has to be modified!
var hi = new Vivus('Layer_1', {type: 'delayed', duration: 400, start: 'autostart', dashGap: 50, forceRender: false},
        function () {
          if (window.console) {
            console.log('Animation finished. [log triggered from callback]');
          }
    setTimeout(function(){
        $("#footer").typed({
            strings: ["ORGZR is being built. Please check back in March."],
            typeSpeed: 20, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 0);
        });

//text animation part

});
