jQuery Fullscreen Plugin
========================


Description
-----------

This jQuery plugin provides a simple to use mechanism to control the
new fullscreen mode of modern browsers. Currently only newer Webkit-based
browsers (Like Chrome) and Firefox provide this new fullscreen feature.


Usage
-----

### Entering Fullscreen mode
 
You can either switch the whole page or a single HTML element to fullscreen
mode:

    $(document).fullScreen(true);
    $("#myVideo").fullScreen(true);

This only works when the code was triggered by a user interaction (For
example a onclick event on a button). Browsers don't allow entering
fullscreen mode without user interaction.


### Exiting Fullscreen mode

Fullscreen mode is always exited via the document but this plugin allows
it also via any HTML element. The owner document of the selected HTML 
element is used then:

    $(document).fullScreen(false);
    $("#myVideo").fullScreen(false);


### Querying Fullscreen mode

Simply pass no argument to the `fullScreen` method to query the current
state.  The method returns the current fullscreen element (or true if
browser doesn't support this) when fullscreen mode is active, `false` if not
active or `null` when the browser does not support fullscreen mode at all. 
So you can use this method also to display a fullscreen button only when the
browser supports fullscreen mode:

    $("#fullscreenButton").toggle($(document).fullScreen() != null))


### Toggling Fullscreen mode

The plugin provides another method for simple fullscreen mode toggling:

    $(document).toggleFullScreen();


### Notifications

The plugin triggers a `fullscreenchange` event on the document when the 
fullscreen mode has been changed. If the browser rejected a fullscreen 
state change then the plugin triggers a `fullscreenerror` event on the
document. Example:

    $(document).bind("fullscreenchange", function() {
        console.log("Fullscreen " + ($(document).fullScreen() ? "on" : "off"));
    });

    $(document).bind("fullscreenerror", function() {
        alert("Browser rejected fullscreen change");
    });


### Fullscreen iframe

Entering fullscreen mode from within an iframe is not allowed by default but
it can be enabled with a few attributes on the iframe:

    <iframe src="iframe.html" webkitAllowFullScreen mozAllowFullScreen allowFullScreen>
    </iframe>
