## Motivation
Bassicly I needed to know if some element is visible in the viewport or not in order to run other features.
Here is a simple plugin that checks if element is visible in the viewport.
It returns true if any portion of the element is visible in the viewport, or false if it's not visible.
It considers element’s position and dimension compared to dimension and scroll position of window.


### Prerequisites

JavaScript + jQuery 1.7.2 


### Installing
Just include isVisible.js just before the ending body tag and have fun :)


## Running the tests

Simple check. Simple onscroll function that checks visibility and log's it in the console.

$(window).on('scroll',function() {
    var visibilityStatus = $('.elementClass').isVisible();
    console.log(visibilityStatus);
});




## Acknowledgments/Credits

* https://github.com/moagrius/isOnScreen

