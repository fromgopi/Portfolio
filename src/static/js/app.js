
$(document).ready( function() {
    
    // Toggle Side Bar
    $('#sidebarCollapse').on('click', function () { 
            console.log("Clicked Button")
            $('#sidebar').toggleClass('active');
            $('.arrow').toggleClass('left right');
        }
    )
})