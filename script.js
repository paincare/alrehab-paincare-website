// ========================================
// PAINCARE PHYSIO - Interactive Features
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // ========================================
    // Smooth Scrolling for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ========================================
    // Form Validation & Submission
    // ========================================
    const appointmentForm = document.getElementById('appointmentForm');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const issue = document.getElementById('issue').value;
            const preferredTime = document.getElementById('preferred-time').value.trim();
            
            // Validation
            if (!name) {
                showNotification('Please enter your name', 'error');
                return;
            }
            
            if (!phone) {
                showNotification('Please enter your phone number', 'error');
                return;
            }
            
            // Basic phone validation (10 digits)
            const phoneRegex = /^[0-9]{10}$/;
            const cleanPhone = phone.replace(/\D/g, '');
            if (!phoneRegex.test(cleanPhone)) {
                showNotification('Please enter a valid 10-digit phone number', 'error');
                return;
            }
            
            if (!issue) {
                showNotification('Please select a condition', 'error');
                return;
            }
            
            // Simulate form submission
            const submitButton = appointmentForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Success
                showNotification('Thank you! We will contact you within 24 hours.', 'success');
                appointmentForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // In production, you would send this data to your backend:
                // const formData = { name, phone, issue, preferredTime };
                // fetch('/api/appointments', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(formData)
                // });
            }, 1500);
        });
    }
    
    // ========================================
    // Notification System
    // ========================================
    function showNotification(message, type = 'info') {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '16px 24px',
            borderRadius: '8px',
            backgroundColor: type === 'success' ? '#61B292' : type === 'error' ? '#e74c3c' : '#4FA3D1',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '500',
            fontSize: '16px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
            zIndex: '10000',
            animation: 'slideInRight 0.3s ease-out',
            maxWidth: '400px'
        });
        
        document.body.appendChild(notification);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
    
    // Add notification animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ========================================
    // Scroll Animations (Fade In on Scroll)
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.spec-card, .condition-card, .testimonial-card, .pillar');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // ========================================
    // Phone Number Formatting
    // ========================================
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Limit to 10 digits
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
            
            // Format as XXX-XXX-XXXX
            if (value.length > 6) {
                value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6);
            } else if (value.length > 3) {
                value = value.slice(0, 3) + '-' + value.slice(3);
            }
            
            e.target.value = value;
        });
    }
    
    // ========================================
    // Sticky CTA Visibility (Mobile)
    // ========================================
    const stickyCTA = document.querySelector('.sticky-cta');
    const contactSection = document.getElementById('contact');
    
    if (stickyCTA && contactSection) {
        window.addEventListener('scroll', function() {
            const contactPosition = contactSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // Hide sticky CTA when contact section is visible
            if (contactPosition < windowHeight) {
                stickyCTA.style.transform = 'translateY(100%)';
            } else {
                stickyCTA.style.transform = 'translateY(0)';
            }
        });
        
        // Add transition
        stickyCTA.style.transition = 'transform 0.3s ease-out';
    }
    
    // ========================================
    // Active Navigation Link Highlighting
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // Add active link styles
    const navStyle = document.createElement('style');
    navStyle.textContent = `
        .nav-menu a.active {
            color: #1F4E79 !important;
            background-color: #F9FBFD !important;
        }
    `;
    document.head.appendChild(navStyle);
    
    // ========================================
    // Stats Counter Animation
    // ========================================
    const statItems = document.querySelectorAll('.stat-item h3');
    let hasAnimated = false;
    
    function animateStats() {
        if (hasAnimated) return;
        
        const aboutSection = document.getElementById('about');
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (aboutPosition < windowHeight * 0.75) {
            hasAnimated = true;
            
            statItems.forEach(stat => {
                const text = stat.textContent;
                const hasPlus = text.includes('+');
                const hasPercent = text.includes('%');
                const number = parseInt(text.replace(/\D/g, ''));
                
                let current = 0;
                const increment = number / 50;
                const duration = 2000;
                const stepTime = duration / 50;
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        current = number;
                        clearInterval(counter);
                    }
                    
                    let displayValue = Math.floor(current);
                    if (hasPlus) displayValue += '+';
                    if (hasPercent) displayValue += '%';
                    
                    stat.textContent = displayValue;
                }, stepTime);
            });
        }
    }
    
    window.addEventListener('scroll', animateStats);
    
    // ========================================
    // Lazy Loading for Images
    // ========================================
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease-in';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c🏥 PAINCARE PHYSIO', 'color: #61B292; font-size: 24px; font-weight: bold;');
    console.log('%cExpert Physiotherapy Care | 5.0★ Rated', 'color: #1F4E79; font-size: 14px;');
    console.log('%cWebsite developed with care and precision', 'color: #666; font-size: 12px;');
    
});

// ========================================
// Performance Optimization
// ========================================

// Debounce function for scroll events
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

// Apply debounce to scroll handlers if needed
// Example: window.addEventListener('scroll', debounce(yourFunction, 100));
