/**
 * @file
 *
 * Custom module js file.
 */

(function ($) {
  Drupal.voicecommander.bookNavigation = function(phrase) {
   // see if we should go to the previous page or next
   if (phrase.indexOf('previous') !== -1) {
     $('.page-previous').click();
   }
   else if (phrase.indexOf('next') !== -1) {
     $('.page-next').click();
   }
  };
})(jQuery);
