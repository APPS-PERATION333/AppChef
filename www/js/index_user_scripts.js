/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  Noodles */
    $(document).on("click", ".uib_w_6", function(evt)
    {
      document.location.href="http://pizzahut,com";
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
