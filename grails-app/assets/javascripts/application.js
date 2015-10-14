if (typeof jQuery !== 'undefined') {
// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= require jquery-2.1.3.js
//= require lib/underscore-min
//= require lib/backbone
//= require reactjs/App.js
//= require_tree reactjs/models
//= require_tree reactjs/collections
//= require_tree reactjs/views/build/common
//= require_tree reactjs/views/build
//= require_self
//= require /webjars/bootstrap/3.3.5/js/bootstrap.min
//= require /webjars/bootstrap-tagsinput/0.5/bootstrap-tagsinput
//= require /webjars/typeaheadjs/0.11.1/typeahead.bundle.js

    (function($) {
        $('#spinner').ajaxStart(function() {
            $(this).fadeIn();
        }).ajaxStop(function() {
            $(this).fadeOut();
        });
    })(jQuery);
}
