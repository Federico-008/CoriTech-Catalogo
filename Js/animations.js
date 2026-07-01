/* ANIMACIONES Y EFECTOS — CSS TRANSITIONS + INTERSECTION OBSERVER */

document.addEventListener('DOMContentLoaded', function() {

    // ========== 1. HEADER: ACHICARSE AL HACER SCROLL ==========
    const header = document.querySelector('.encabezado');
    let isScrolled = false;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const shouldBeScrolled = scrollTop > 50;

        if (shouldBeScrolled !== isScrolled) {
            isScrolled = shouldBeScrolled;
            header.classList.toggle('scrolled', isScrolled);
        }
    }, { passive: true });


    // ========== 2. FADE-IN DE SECCIONES AL SCROLL ==========
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll(
        '.inicio-hero, .panel-busqueda, .seccion-servicios, .seccion-cont'
    ).forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });


    // ========== 3. HOVER EN BOTÓN DE BÚSQUEDA ==========
    const buttons = document.querySelectorAll('.form-busq button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });


    // ========== 4. HOVER EN INPUT ==========
    const inputs = document.querySelectorAll('input[type="search"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.01)';
            this.style.background = '#ffffff';
        });
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
            this.style.background = 'rgba(255, 255, 255, 0.8)';
        });
    });


    // ========== 5. ANIMACIÓN DE RESULTADOS (stagger manual) ==========
    window.animateNewResults = function() {
        const items = document.querySelectorAll('.cont-resultados > div, .resultado-card');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 80);
        });
    };


    // ========== 6. SCROLL SUAVE EN NAV ==========
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});

