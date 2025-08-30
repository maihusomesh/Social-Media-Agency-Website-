document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.team-card, .service-card');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Removed all Interactive Service Path JavaScript logic, as per new UI requirements.

    // Click animation for team cards
    /* Removed click event listener as animation is now on hover
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('clicked');
        });
    });
    */

    // Accordion functionality for Services section
    const accordionItems = document.querySelectorAll('.accordion-item');
    const servicesContainer = document.querySelector('.services-accordion-container');
    const servicesSection = document.getElementById('services');

    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const wasActive = item.classList.contains('active');

            // Close all other accordion items and remove spotlight
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            servicesContainer.classList.remove('spotlight-active');
            servicesSection.style.backgroundColor = 'var(--background-white)'; // Reset background

            if (!wasActive) {
                // Activate clicked item
                item.classList.add('active');
                servicesContainer.classList.add('spotlight-active');

                // Apply color-coded journey background
                const serviceColor = item.dataset.serviceColor;
                if (serviceColor) {
                    servicesSection.style.backgroundColor = serviceColor + '20'; // Subtle background tint
                }
            }
        });
    });
});
