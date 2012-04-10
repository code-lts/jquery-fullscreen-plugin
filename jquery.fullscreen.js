/** 
 * @preserve jquery.fullscreen 1.0.0
 * https://github.com/kayahr/jquery-fullscreen-plugin
 * Copyright (C) 2012 Klaus Reimer <k@ailis.de>
 * Licensed under the MIT license
 * (See http://www.opensource.org/licenses/mit-license)
 */
 
(function() {

/**
 * Sets or gets the fullscreen state.
 * 
 * @param {boolean=} state
 *            True to enable fullscreen mode, false to disable it. If not
 *            specified then the current fullscreen state is returned.
 * @return {boolean|jQuery|null}
 *            When querying the fullscreen state then true, false or null
 *            is returned. Null indicates a browser without fullscreen
 *            support. When setting the state then the current jQuery
 *            selection is returned for chaining.
 * @this {jQuery}
 */
function fullScreen(state)
{
    var e, func, doc;
    
    // Do nothing when nothing was selected
    if (!this.length) return this;
    
    // We only use the first selected element because it doesn't make sense
    // to fullscreen multiple elements.
    e = (/** @type {Element} */ this[0]);
    
    // Find the real element and the document (Depends on wether the
    // document itself or a HTML element was selected)
    if (e instanceof Document)
    {
        doc = e;
        e = doc.documentElement;
    }
    else
    {
        doc = e.ownerDocument;
    }
    
    // When no state was specified then return the current state.
    if (state == null)
    {
        // When fullscreen mode is not supported then return null
        if (!((/** @type {?Function} */ doc["cancelFullScreen"])
            || (/** @type {?Function} */ doc["webkitCancelFullScreen"])
            || (/** @type {?Function} */ doc["mozCancelFullScreen"])))
        {
            return null;
        }
        
        // Return the current fullscreen state
        return !!doc["fullScreen"]
            || !!doc["webkitIsFullScreen"]
            || !!doc["mozFullScreen"];
    }
    
    // When state was specified then enter or exit fullscreen mode.
    if (state)
    {
        // Enter fullscreen
        func = (/** @type {?Function} */ e["requestFullScreen"])
            || (/** @type {?Function} */ e["webkitRequestFullScreen"])
            || (/** @type {?Function} */ e["mozRequestFullScreen"]);
        if (func) func.call(e);
        return this;
    }
    else
    {
        // Exit fullscreen
        func = (/** @type {?Function} */ doc["cancelFullScreen"])
            || (/** @type {?Function} */ doc["webkitCancelFullScreen"])
            || (/** @type {?Function} */ doc["mozCancelFullScreen"]);
        if (func) func.call(doc);
        return this;
    }
};

/**
 * Toggles the fullscreen mode.
 * 
 * @return {!jQuery}
 *            The jQuery selection for chaining.
 * @this {jQuery}
 */
function toggleFullScreen()
{
    return (/** @type {!jQuery} */ fullScreen.call(this, 
        !fullScreen.call(this)));
};

jQuery.fn["fullScreen"] = fullScreen;
jQuery.fn["toggleFullScreen"] = toggleFullScreen;

})();
