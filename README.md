jQuery Fullscreen Plugin
========================

[![npm version](https://badge.fury.io/js/jquery-fullscreen-plugin.svg)](https://badge.fury.io/js/jquery-fullscreen-plugin)

[![CDNJS](https://img.shields.io/cdnjs/v/jquery-fullscreen-plugin.svg)](https://cdnjs.com/libraries/jquery-fullscreen-plugin)


Description
-----------

This jQuery plugin provides a simple to use mechanism to control the
new fullscreen mode of modern browsers. Currently only newer Webkit-based
browsers (Like Chrome and Safari), Firefox and IE11+ provide this new 
fullscreen feature.


Usage
-----

### Entering Fullscreen mode

You can either switch the whole page or a single HTML element to fullscreen
mode:
```js
    $(document).fullScreen(true);
    $("#myVideo").fullScreen(true);
```
This only works when the code was triggered by a user interaction (For
example a onclick event on a button). Browsers don't allow entering
fullscreen mode without user interaction.


### Exiting Fullscreen mode

Fullscreen mode is always exited via the document but this plugin allows
it also via any HTML element. The owner document of the selected HTML 
element is used then:
```js
    $(document).fullScreen(false);
    $("#myVideo").fullScreen(false);
```

### Querying Fullscreen mode

Simply pass no argument to the `fullScreen` method to query the current
state.  The method returns the current fullscreen element (or true if
browser doesn't support this) when fullscreen mode is active, `false` if not
active or `null` when the browser does not support fullscreen mode at all. 
So you can use this method also to display a fullscreen button only when the
browser supports fullscreen mode:
```js
    $("#fullscreenButton").toggle($(document).fullScreen() != null))
```

### Toggling Fullscreen mode

The plugin provides another method for simple fullscreen mode toggling:
```js
    $(document).toggleFullScreen();
```

### Notifications

The plugin triggers a `fullscreenchange` event on the document when the 
fullscreen mode has been changed. If the browser rejected a fullscreen 
state change then the plugin triggers a `fullscreenerror` event on the
document. Example:
```js
    $(document).bind("fullscreenchange", function() {
        console.log("Fullscreen " + ($(document).fullScreen() ? "on" : "off"));
    });

    $(document).bind("fullscreenerror", function() {
        alert("Browser rejected fullscreen change");
    });
```

### Fullscreen iframe

Entering fullscreen mode from within an iframe is not allowed by default but
it can be enabled with a few attributes on the iframe:
```html
    <iframe src="iframe.html" webkitAllowFullScreen mozAllowFullScreen allowFullScreen>
    </iframe>
```
### Known issues

* In IE 11 an empty page is displayed when entering fullscreen from within an
  iframe. No idea why. Any help is welcome.
* In Safari (At least in Safari 7) no keyboard input is allowed in fullscreen
  mode.
