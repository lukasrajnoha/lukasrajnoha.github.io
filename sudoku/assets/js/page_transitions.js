$(function(){
  'use strict';
  var options = {
    prefetch: true,
    cacheLength: 2,
    onStart: {
      duration: 2000, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        $container.addClass('is-exiting');

        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');


        // Inject the new content
        $container.html($newContent);

      }
    },
    onAfter: function($container) {
      $container.onPageLoad();
      smoothState.restartCSSAnimations();
    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});