document.querySelector('.nav-link[href="#about-card"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about-card').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav-link[href="#team-card"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#team-card').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav-link[href="#events-card"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#events-card').scrollIntoView({ behavior: 'smooth' });
});