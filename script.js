// 스크롤 애니메이션 (AOS - Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    
    // 간단한 AOS 구현
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // 모든 data-aos 요소 관찰
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));

    // 그래니 스퀘어 클릭 시 부드러운 스크롤
    const squareLinks = document.querySelectorAll('.square-link');
    squareLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                // 실제 섹션이 있다면 스크롤
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 마우스 따라다니는 실 효과 (선택적)
    let yarnTrail = [];
    const maxTrailLength = 20;

    document.addEventListener('mousemove', function(e) {
        // 모바일에서는 비활성화
        if (window.innerWidth < 768) return;

        yarnTrail.push({
            x: e.clientX,
            y: e.clientY,
            opacity: 1
        });

        if (yarnTrail.length > maxTrailLength) {
            yarnTrail.shift();
        }

        // 기존 트레일 제거
        const existingTrails = document.querySelectorAll('.yarn-trail');
        existingTrails.forEach(trail => trail.remove());

        // 새 트레일 그리기
        yarnTrail.forEach((point, index) => {
            const trail = document.createElement('div');
            trail.className = 'yarn-trail';
            trail.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: rgba(217, 118, 82, ${point.opacity});
                border-radius: 50%;
                left: ${point.x}px;
                top: ${point.y}px;
                pointer-events: none;
                z-index: 999;
                transition: opacity 0.3s ease;
            `;
            document.body.appendChild(trail);

            // 페이드 아웃
            point.opacity -= 0.05;
            
            // 너무 오래된 트레일 제거
            setTimeout(() => {
                if (trail && trail.parentNode) {
                    trail.remove();
                }
            }, 300);
        });
    });

    // 그래니 스퀘어 호버 시 미묘한 회전 효과
    const grannySquares = document.querySelectorAll('.granny-square');
    grannySquares.forEach(square => {
        square.addEventListener('mouseenter', function() {
            this.style.transform = `translateY(-10px) rotate(${Math.random() * 4 - 2}deg)`;
        });
        
        square.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // 페이지 로드 시 헤더 애니메이션
    setTimeout(() => {
        document.querySelector('.main-header').style.opacity = '1';
    }, 100);

    // 스크롤 진행 표시 (선택적)
    const createProgressBar = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--terracotta), var(--mustard));
            width: 0%;
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };

    createProgressBar();

    // 이미지 placeholder에 호버 시 효과
    const placeholders = document.querySelectorAll('.update-image-placeholder');
    placeholders.forEach(placeholder => {
        placeholder.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        placeholder.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    console.log('🌿 SoopSoop Studio 로드 완료!');
});

// 실제 그래니 스퀘어 이미지 로드 함수 (나중에 사용)
function loadGrannySquareImages() {
    // 예시: 실제 이미지가 있을 때 사용
    const imagePlaceholders = document.querySelectorAll('.update-image-placeholder');
    imagePlaceholders.forEach((placeholder, index) => {
        // placeholder.style.backgroundImage = `url('images/granny-square-${index + 1}.jpg')`;
        // placeholder.style.backgroundSize = 'cover';
        // placeholder.style.backgroundPosition = 'center';
    });
}
