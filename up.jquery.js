(function( $ ){
    $.fn.up = function(level, selector) {
        level = level!==undefined ? level : 1;
        var el = this;
        while (level) {
            el = el.parent(selector);
            level--;
        }
        return el;
    };
})( jQuery );