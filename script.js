setTimeout(function() {
    document.body.style.transition = "opacity 2.5s ease-in-out";
    document.body.style.opacity = '0';
    setTimeout(function() {
        window.location.href = "Home.html";
    }, 2500);
}, 3000);


