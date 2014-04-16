(function($) {

    'use strict';

    $.fn.fadey = function(options) {

        var delay = 0;

        options = $.extend({
            delay: 250,
            speed: 500,
            callback: function(elem, delay, speed) {
                elem.delay(delay).fadeIn(speed);
            }
        }, options);

        this.each(function(index) {
            delay += options.delay;
            options.callback($(this), delay, options.speed);
        });
    }
}(jQuery));