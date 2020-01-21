// Add and Initialize map
function initMap() {
    // Location on the map
    const loc = {
        lat: 40.036366,
        lng: -3.609984
    };
    // Centered location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    // Position marker at location
    const marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}

// Sticky menu background opacity
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});


//Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});