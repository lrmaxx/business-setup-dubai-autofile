// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('fast');
    } else {
        $('.back-to-top').fadeOut('fast');
    }
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.btn-custom').fadeIn('fast');
    } else {
        $('.btn-custom').fadeOut('fast');
    }
});
// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm ');
        
    } else {
         $('.navbar').removeClass('sticky-top shadow-sm ');
        
    }
});