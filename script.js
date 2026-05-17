function toggleMenu() {

    const nav = document.getElementById('nav-menu');

    if (nav.style.display === 'flex') {

        nav.style.display = 'none';

    } else {

        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';

        nav.style.position = 'absolute';
        nav.style.top = '80px';
        nav.style.left = '0';

        nav.style.width = '100%';

        nav.style.background = '#030712';

        nav.style.padding = '2rem';

        nav.style.gap = '1.5rem';

        nav.style.zIndex = '999';
    }
}

