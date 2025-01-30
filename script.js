// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Poll System
class CommunityPoll {
    constructor() {
        this.options = [];
        this.loadPoll();
    }

    vote(optionId) {
        // Add voting logic
    }

    updateResults() {
        // Update progress bars
    }
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.feature-card, .timeline-item').forEach(el => {
    observer.observe(el);
});
