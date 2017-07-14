/*
 jquery.fullscreen 1.1.5
 https://github.com/kayahr/jquery-fullscreen-plugin
 Copyright (C) 2012-2013 Klaus Reimer <k@ailis.de>
 Licensed under the MIT license
 (See http://www.opensource.org/licenses/mit-license)
*/
!function(e){function l(e){var l,n,r;return this.length?(l=this[0],l.ownerDocument?r=l.ownerDocument:(r=l,l=r.documentElement),null==e?r.exitFullscreen||r.webkitExitFullscreen||r.webkitCancelFullScreen||r.msExitFullscreen||r.mozCancelFullScreen?(e=!!(r.fullscreenElement||r.msFullscreenElement||r.webkitIsFullScreen||r.mozFullScreen),e?r.fullscreenElement||r.webkitFullscreenElement||r.webkitCurrentFullScreenElement||r.msFullscreenElement||r.mozFullScreenElement||e:e):null:e?(n=l.requestFullscreen||l.webkitRequestFullscreen||l.webkitRequestFullScreen||l.msRequestFullscreen||l.mozRequestFullScreen,n&&n.call(l),this):(n=r.exitFullscreen||r.webkitExitFullscreen||r.webkitCancelFullScreen||r.msExitFullscreen||r.mozCancelFullScreen,n&&n.call(r),this)):this}function n(){return l.call(this,!l.call(this))}function r(l){e(document).trigger(new e.Event("fullscreenchange"))}function c(l){e(document).trigger(new e.Event("fullscreenerror"))}function u(){var l,n,u;l=document,l.webkitCancelFullScreen?(n="webkitfullscreenchange",u="webkitfullscreenerror"):l.msExitFullscreen?(n="MSFullscreenChange",u="MSFullscreenError"):l.mozCancelFullScreen?(n="mozfullscreenchange",u="mozfullscreenerror"):(n="fullscreenchange",u="fullscreenerror"),e(document).bind(n,r),e(document).bind(u,c)}e.fn.fullScreen=l,e.fn.toggleFullScreen=n,u()}(jQuery);
