// ========================================
// PRELOADER
// ========================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 500);
});

// ========================================
// NAVIGATION
// ========================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ========================================
// AOS INITIALIZATION
// ========================================
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});

// ========================================
// RENDER PROJECTS
// ========================================
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = projectsData.map(project => {
        const imageHtml = project.image 
            ? `<img src="${project.image}" alt="${project.title}" loading="lazy">`
            : `<div class="project-image-placeholder"><i class="fas ${project.placeholderIcon || 'fa-code'}"></i></div>`;

        const techHtml = project.tech.map(tech => 
            `<span>${tech}</span>`
        ).join('');

        const demoButton = project.demo 
            ? `<a href="${project.demo}" target="_blank" class="btn btn-primary btn-small">Live Demo</a>`
            : '';

        const extraButton = project.extra 
            ? `<a href="${project.extra}" target="_blank" class="btn btn-secondary btn-small">API Docs</a>`
            : '';

        return `
            <div class="project-card" data-aos="fade-up">
                <div class="project-image">
                    ${imageHtml}
                </div>
                <div class="project-body">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">${techHtml}</div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="btn btn-secondary btn-small">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        ${demoButton}
                        ${extraButton}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ========================================
// RENDER CERTIFICATIONS
// ========================================
function renderCertifications() {
    const grid = document.getElementById('certificationsGrid');
    if (!grid) return;

    grid.innerHTML = certificationsData.map(cert => {
        const linkHtml = cert.link && cert.link !== 'YOUR_CERTIFICATION_LINK_1' 
            ? `<a href="${cert.link}" target="_blank" class="cert-link">Verify Credential</a>`
            : '';

        return `
            <div class="certification-card" data-aos="fade-up">
                <div class="cert-icon"><i class="fas fa-certificate"></i></div>
                <h4>${cert.name}</h4>
                <p class="cert-issuer">${cert.issuer}</p>
                <span class="cert-year">${cert.year}</span>
                ${linkHtml}
            </div>
        `;
    }).join('');
}

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderCertifications();
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// PARALLAX EFFECT ON HERO
// ========================================
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero-content');
    if (!hero) return;
    
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    const image = document.querySelector('.profile-image-wrapper');
    if (image) {
        image.style.transform = `translate(${x * -0.1}px, ${y * -0.1}px)`;
    }
});  