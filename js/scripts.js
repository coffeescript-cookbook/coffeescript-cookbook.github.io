
/*jshint browser: true, devel: true, debug: true */


(function( window, document, undefined ) {

    var activePage, position, sidebar,
        narrowScreen = ( window.getComputedStyle( document.body, ':after' ).getPropertyValue( 'content' ) === 'narrow' ) ? true : false


    // if it's not the index page and not a narrow screen
    if ( window.location.pathname.length && !narrowScreen ) {

        // get the sidebar
        sidebar = document.getElementById( 'sidebar' )

        // query the dom for the active page
        activePage = document.getElementsByClassName( 'page-active' )

        // if an active page was found
        if ( activePage.length ) {

            // get the offset position and give a padding of 80px
            position = activePage[0].offsetTop - 80

            // set the scroll position of the sidebar to the new position
            sidebar.scrollTop = position
        }
    }


})( window, document )

