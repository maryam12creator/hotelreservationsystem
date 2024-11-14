// Main JS (For general interactivity)
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.category-cards .card');
    
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
// Placeholder for future interactions
document.addEventListener('DOMContentLoaded', () => {
    console.log('Luxury Hotel main page loaded.');
});


        });
    });
});
