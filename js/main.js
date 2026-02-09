// PEAK 2026 - Main JavaScript avec animations au scroll

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
    
    // Countdown Timer
    initCountdown();
    
    // Animate Stats
    animateStats();
    
    // Smooth scroll for anchor links
    initSmoothScroll();
    
    // Scroll animations
    initScrollAnimations();
    
    // Navbar scroll effect
    initNavbarScroll();
});

// Countdown Timer
function initCountdown() {
    const eventDate = new Date('2026-02-27T09:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance < 0) {
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');
            
            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Animate Stats Numbers
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    if (stats.length === 0) return;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                if (target) {
                    animateNumber(entry.target, 0, target, 2000);
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, start, end, duration) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    
    const timer = setInterval(function() {
        current += increment;
        element.textContent = current.toLocaleString();
        
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Scroll Animations avec Intersection Observer (évite tout chevauchement)
function initScrollAnimations() {
    var observerOptions = {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    };

    var fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Sections : fade-in-up sauf stats et countdown pour qu’elles ne couvrent jamais le hero
    var sections = document.querySelectorAll('section:not(.hero):not(.page-header):not(.stats-countdown-section)');
    sections.forEach(function(section) {
        section.classList.add('fade-in-up');
        fadeInObserver.observe(section);
    });

    // Cartes : animation en cascade légère
    var cards = document.querySelectorAll('.about-card, .panel-card, .speaker-card, .project-card, .criteria-card, .feature-card, .info-card, .audience-item, .program-schedule, .partner-card, .contact-card, .partner-logo-item');
    cards.forEach(function(card, index) {
        card.classList.add('fade-in-up');
        card.style.transitionDelay = (index % 8) * 0.06 + 's';
        fadeInObserver.observe(card);
    });

    // Titres de section
    var sectionTitles = document.querySelectorAll('.section-title, .section-header');
    sectionTitles.forEach(function(title) {
        title.classList.add('fade-in-up');
        fadeInObserver.observe(title);
    });

    // Enfants des grilles (délai progressif)
    var grids = document.querySelectorAll('.about-grid, .panels-grid, .speakers-grid, .projects-grid, .criteria-grid, .features-grid, .partners-logos, .partners-grid');
    grids.forEach(function(grid) {
        var children = grid.children;
        Array.from(children).forEach(function(child, index) {
            child.classList.add('fade-in-up');
            child.style.transitionDelay = index * 0.08 + 's';
            fadeInObserver.observe(child);
        });
    });
}

// Navbar scroll effect amélioré
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    let lastScroll = 0;
    let ticking = false;
    
    function updateNavbar() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scrolled');
            navbar.style.transform = 'translateY(0)';
            ticking = false;
            return;
        }
        
        // Ajouter la classe scrolled après un certain scroll
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Cacher/montrer la navbar au scroll
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
}

// Pas de parallax sur le hero pour éviter tout chevauchement avec le bloc 2

// Animation au hover pour les boutons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Effet de particules animées pour le hero (optionnel)
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${Math.random() > 0.5 ? '250, 99, 6' : '243, 52, 10'}, ${Math.random() * 0.5 + 0.3})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.pointerEvents = 'none';
        particle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        hero.appendChild(particle);
    }
}

// Créer les particules au chargement
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
});
