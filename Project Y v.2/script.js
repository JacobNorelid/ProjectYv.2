document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const openMenuIcon = document.getElementById('open-menu');
    const closeMenuIcon = document.getElementById('close-menu');
    const navMenu = document.getElementById('nav-menu');

    console.log('openMenuIcon:', openMenuIcon);
    console.log('closeMenuIcon:', closeMenuIcon);
    console.log('navMenu:', navMenu);

    openMenuIcon.addEventListener('click', () => {
        console.log('Open menu icon clicked');
        navMenu.classList.add('show-menu');
        openMenuIcon.style.display = 'none';
        closeMenuIcon.style.display = 'block';
    });

    closeMenuIcon.addEventListener('click', () => {
        console.log('Close menu icon clicked');
        navMenu.classList.remove('show-menu');
        openMenuIcon.style.display = 'block';
        closeMenuIcon.style.display = 'none';
    });
});
