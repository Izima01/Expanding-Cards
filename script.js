let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener('click', function() {
        removeActive();
        card.classList.add("active");
    });
});

function removeActive() {
    cards.forEach(card => {
        card.classList.remove("active");
    });
};