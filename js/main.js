// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle with improved functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    if (mobileMenuToggle && navMenu) {
        // Enhanced click handler with better event handling
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const isActive = navMenu.classList.contains('active');

            if (isActive) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Function to open mobile menu
        function openMobileMenu() {
            navMenu.classList.add('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-times';
            }
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        }

        // Function to close mobile menu
        function closeMobileMenu() {
            navMenu.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-bars';
            }
            // Restore body scroll
            document.body.style.overflow = '';
        }

        // Close mobile menu when clicking on nav links
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') &&
                !navMenu.contains(e.target) &&
                !mobileMenuToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Close menu on window resize if it's open
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
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

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.category-card, .feature-item, .product-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Counter animation for hero stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target.toString().includes('.')) {
                element.textContent = current.toFixed(1) + (target.toString().includes('%') ? '%' : '');
            } else {
                element.textContent = Math.floor(current) + (target.toString().includes('+') ? '+' : '');
            }
        }, 20);
    };

    // Trigger counter animation when hero is visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    let target;
                    
                    if (text.includes('%')) {
                        target = parseFloat(text.replace('%', ''));
                    } else if (text.includes('+')) {
                        target = parseInt(text.replace('+', ''));
                    } else {
                        target = parseInt(text);
                    }
                    
                    animateCounter(stat, target);
                });
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        heroObserver.observe(heroStats);
    }

    // Form handling
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-red), var(--secondary-red));
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(backToTopButton);
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });

    // Focus management for accessibility
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-red)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
});

// Global mobile menu toggle function (for inline onclick handlers)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

    if (navMenu && mobileMenuToggle) {
        const isActive = navMenu.classList.contains('active');

        if (isActive) {
            navMenu.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-bars';
            }
            document.body.style.overflow = '';
        } else {
            navMenu.classList.add('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-times';
            }
            document.body.style.overflow = 'hidden';
        }
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimization
const debouncedResize = debounce(() => {
    // Handle resize events
    const mobileBreakpoint = 768;
    const isMobile = window.innerWidth <= mobileBreakpoint;
    
    // Adjust layout for mobile
    if (isMobile) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
        // Close mobile menu if open
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            if (mobileMenuToggle) {
                const icon = mobileMenuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        }
    }
}, 250);

window.addEventListener('resize', debouncedResize);

