// Fade-in on scroll
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    fades.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// Club finder
function findClub() {
    const location = document.getElementById("locationInput").value.toLowerCase();
    const clubs = ["cape town", "johannesburg", "pretoria", "durban"];
    const result = document.getElementById("clubResult");

    if (clubs.includes(location)) {
        result.textContent = `Great news! Pulse Active ${location.toUpperCase()} is open.`;
    } else {
        result.textContent = "No club found in your area yet.";
    }
}
