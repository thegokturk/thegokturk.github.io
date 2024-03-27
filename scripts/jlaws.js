const menuLinks = document.querySelectorAll('ul li a');
const menuContents = document.querySelectorAll('.menu-content');

menuLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
    
        menuContents.forEach(content => {
            content.classList.remove('active');
        });
        targetContent.classList.add('active');
    });
});