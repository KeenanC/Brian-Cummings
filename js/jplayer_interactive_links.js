
$(document).ready(function(){

  $("#jquery_jplayer_1").jPlayer({

        ready: function () {

          $(this).jPlayer("setMedia", {
            m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
          });
        },

        swfPath: "/js/jplayer",
        supplied: "m4a, oga",
        
       

      });
    
    });



/*
The ready event handler function uses the $(this) jQuery code
to select the entity that generated the event, which is the 
jPlayer <div>. The jPlayer("setMedia", media) jPlayer code 
sets up jPlayer with the media. The media is defined using a
JSON object with properties matching the supplied formats and
an optional poster image URL.
*/