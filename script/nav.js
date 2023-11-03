window.addEventListener('load', function() {
    const navbar = document.getElementById('navbar');
    
    setTimeout(function() {
        navbar.style.top = '0';
    }, 200);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.style.top = '-61px';
        } else {
            navbar.style.top = '0';
        }
    });
});