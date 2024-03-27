const menuLinks = document.querySelectorAll('ul li a');
const menuContents = document.querySelectorAll('.menu-content');

menuLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        
        const activeContent = document.querySelector('.menu-content.active');
        if (activeContent) {
            activeContent.classList.remove('active');
            activeContent.style.height = 0;
        }

        targetContent.classList.add('active');
        targetContent.style.height = `${targetContent.scrollHeight}px`;
    });
});