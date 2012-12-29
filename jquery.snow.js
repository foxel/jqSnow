/**
 * jquery.snow - jQuery Snow Effect Plugin
 *
 * Available under MIT licence
 *
 * @version 1 (21. Jan 2012)
 * @author Ivan Lazarevic
 * @requires jQuery
 * @see http://workshop.rs
 *
 * @params minSize - min size of snowflake, 10 by default
 * @params maxSize - max size of snowflake, 20 by default
 * @params newOn - frequency in ms of appearing of new snowflake, 500 by default
 * @params flakeColor - color of snowflake, #FFFFFF by default
 * @example $.fn.snow({ maxSize: 200, newOn: 1000 });
 */
(function($){
    
    $.fn.snow = function(options){
        var $flake       = $('<div class="flake" />').css({'position': 'fixed', 'top': '-50px', 'z-index': 1000}).html('&#10052;'),
            windowHeight = $(window).height(),
            windowWidth  = $(window).width(),
            defaults     = {
                minSize    : 10,
                maxSize    : 20,
                newOn      : 1000,
                flakeColor : "#FFFFFF",
                shadowColor: 'gray'
            };
        options = $.extend({}, defaults, options);
            
        
        var interval = setInterval( function(){
            var startPositionLeft = Math.random() * windowWidth - 100,
                startOpacity      = 0.5 + Math.random(),
                sizeFlake         = options.minSize + Math.random() * options.maxSize,
                endPositionTop    = windowHeight - defaults.maxSize - 40,
                endPositionLeft   = startPositionLeft - 100 + Math.random() * 200,
                durationFall      = windowHeight * 10 + Math.random() * 5000;

            $flake
                .clone()
                .appendTo('body')
                .css({
                    'left': startPositionLeft,
                    'opacity': startOpacity,
                    'font-size': sizeFlake,
                    'color': options.flakeColor,
                    'text-shadow': '1px 1px 2px ' + options.shadowColor
                })
                .animate({
                    top: endPositionTop,
                    left: endPositionLeft,
                    opacity: 0.2
                }, durationFall, 'linear', function() {
                    $(this).remove()
                });
        }, options.newOn);
    };
})(jQuery);
