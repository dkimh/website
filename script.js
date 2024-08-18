// smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');

    if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }
});



// sticky index column
document.addEventListener('DOMContentLoaded', function() {
    const index = document.querySelector('.index');
    const stickyOffset = index.offsetTop;

    console.log('Sticky Offset:', stickyOffset);

    function handleScroll() {
        console.log('Scroll Y:', window.scrollY);
        if (window.scrollY >= stickyOffset) {
            index.classList.add('sticky');
        } else {
            index.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', handleScroll);
});

