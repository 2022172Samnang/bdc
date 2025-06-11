// Cookie utility functions
function setCookie(name, value, days = 365) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = getCookie('theme') || localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        this.updateThemeIcon();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.theme = theme;
        // Save to both cookie and localStorage for compatibility
        setCookie('theme', theme);
        localStorage.setItem('theme', theme);
        this.updateThemeIcon();
        this.updateHeaderBackground();
    }

    updateHeaderBackground() {
        const header = document.querySelector('.header');
        if (header) {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                if (this.theme === 'dark') {
                    header.style.background = 'rgba(31, 41, 55, 0.95)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                }
                header.style.backdropFilter = 'blur(20px)';
            } else {
                if (this.theme === 'dark') {
                    header.style.background = 'rgba(31, 41, 55, 0.98)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                }
                header.style.backdropFilter = 'blur(10px)';
            }
        }
    }

    updateThemeIcon() {
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) {
            if (this.theme === 'dark') {
                themeIcon.className = 'fas fa-sun';
            } else {
                themeIcon.className = 'fas fa-moon';
            }
        }
    }

    toggle() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        
        // Add smooth transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
}

// Initialize theme manager
const themeManager = new ThemeManager();

// Global function for theme toggle
function toggleTheme() {
    themeManager.toggle();
}

// Auto-detect system theme preference
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

// Listen for system theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            themeManager.applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    // If no theme is stored, use system preference
    if (!localStorage.getItem('theme')) {
        const systemTheme = detectSystemTheme();
        themeManager.applyTheme(systemTheme);
    }
});

