/**
* @file
* A JavaScript file for the theme.
*
* In order for this JavaScript to be loaded on pages, see the instructions in
* the README.txt next to this file.
*/

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


    // To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
        attach: function(context, settings) {

            // Place your code here.
            $(document).ready(function() {

                // Smooth Scroll on clicking nav items
                $('nav a').click(function () {
                    var $href = $(this).attr('href');
                    $('body').stop().animate({
                        scrollTop: $($href).offset().top
                    }, 1000);
                    return false;
                });

                // back to top
                $('#toTop a').click(function () {
                    $('body').animate({
                        scrollTop: 0
                    }, 1000);
                    return false;
                });

                // Parallaxing + add class active on scroll
                $(document).scroll(function () {



                    // add class active to nav a on scroll
                    var scrollPos = $(document).scrollTop() + 100;
                    $('nav a').each(function () {
                        var currLink = $(this);
                        var refElement = $(currLink.attr("href"));
                        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                            $('nav a').removeClass("active");
                            currLink.addClass("active");
                        }
                    });

                    // changing padding of nav a on scroll
                    if (scrollPos > 250) {
                        $('nav a').addClass('small');
                        $('nav img').addClass('move');
                        $('nav span').removeClass('movetext');
                    } else {
                        $('nav a').removeClass('small');
                        $('nav img').removeClass('move');
                        $('nav span').addClass('movetext');
                    }

                });
            });

        }
    };


})(jQuery, Drupal, this, this.document);
