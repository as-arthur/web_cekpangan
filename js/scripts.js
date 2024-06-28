let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    let top = window.scrollY + 66;
    sections.forEach(sec => {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('bg-gradients');
                document.querySelector('nav a[href*=' + id + ']').classList.add('bg-gradients');
            });
        }
    });
};

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('bg-gradients'));
        this.classList.add('bg-gradients');

        // Smooth scroll to section
        let section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
