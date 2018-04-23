$.fn.isVisible = function(){	
    		
    var screenView = $(window);    
    var viewport = {
            top : screenView.scrollTop(),
            left : screenView.scrollLeft()
    };
    viewport.right = viewport.left + screenView.width();
    viewport.bottom = viewport.top + screenView.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    //return true or false depending if the file is in viewport or not    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));    
};