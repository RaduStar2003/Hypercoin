// Poll functionality
document.getElementById('poll-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedFeature = document.querySelector('input[name="feature"]:checked');
    if (selectedFeature) {
        document.getElementById('poll-result').textContent = `Thank you for voting for ${selectedFeature.value}!`;
    } else {
        document.getElementById('poll-result').textContent = 'Please select an option to vote.';
    }
});

// Add animations
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});
