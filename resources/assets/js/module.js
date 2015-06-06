/**
 * @file An example module extending the the functionality of Bootstraps »Foo«
 * module or an own module which has nothing to do with Bootstraps JavaScript
 * code.
 * @author Dave Richer <dave@ir0ny.com>
 */

/*global $, jQuery, getRandomInt, window, setInterval*/

/**
 * Make sure our global object is available.
 * @namespace developsio
 * @ignore
 */
var developsio = window.developsio || {};


developsio.Site = function ($) {
    'use strict';

    var idFromVar = (id) => $('#' + id),

	    // Handle Switches
        toggelSwtich =  (self) => {
            $(self).find('h1').css('cursor', 'pointer');
            self.onclick =  ()  => {
                var attached = idFromVar($(self).data('attached'));
                attached.slideToggle('fast');
                $(self).find('h1 i').toggleClass('fa-chevron-up fa-chevron-down');
            };
        };

    /**
     * Executed on DOM ready within the scope of this module.
     * @event
     */
    $( () => {
        // Page load transitions
        $('body').hide().fadeIn(1000); // Fade in the page
        $("#soc").hide().fadeIn(2000); // Fade in the social bar

        // Build the switch handlers
        $('[id$=Switch]').each( (key,value) => toggelSwtich(value));
    });

    // Return functions to make them accessible from outside.
    return {};

}(jQuery);