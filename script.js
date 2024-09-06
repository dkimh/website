//custom cursor
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');

    if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }
});



// 모든 섹션 요소와 네비게이션 링크를 가져옵니다.
const sections = document.querySelectorAll('.box');
const navLinks = document.querySelectorAll('.index ul li a');

// IntersectionObserver 생성
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`.index ul li a[href="#${id}"]`);
        
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');    
        }
    });
}, { threshold: 0.7 }); 

// 각 섹션에 Observer 적용
sections.forEach(section => {
    observer.observe(section);
});

