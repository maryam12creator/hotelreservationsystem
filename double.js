// Example JS for dynamically rendering Double Room Listings
document.addEventListener('DOMContentLoaded', function() {
    const rooms = [
        { name: "Room 201", price: "$80", features: ["Free Wi-Fi", "24/7 Room Service", "Air Conditioning", "Private Bathroom", "Mini-Bar"], img: "images/double-room-1.jpg" },
        { name: "Room 202", price: "$85", features: ["Free Wi-Fi", "24/7 Room Service", "Air Conditioning", "Private Bathroom", "Mini-Bar", "Bathtub"], img: "images/double-room-2.jpg" },
        // Add more rooms here...
    ];

    const roomCardsContainer = document.querySelector('.room-cards');

    rooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.classList.add('room-card');
        roomCard.innerHTML = `
           
                
           
        `;
        roomCardsContainer.appendChild(roomCard);
    });
});
