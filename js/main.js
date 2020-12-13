function scrollToId(id) {
    document
        .getElementById(id)
        .scrollIntoView({
            behavior: 'smooth'
        });
}

function toggleMenu() {
    [ ...document.querySelectorAll('.navbar-burger, .navbar-menu') ].forEach(e => {
        e.classList.toggle('is-active');
    });
}