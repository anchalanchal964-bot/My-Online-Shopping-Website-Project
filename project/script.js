// ===== Simple Front-End Interactivity =====

// Animate header on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "#b3202c";  // Darker red on scroll
        header.style.transition = "0.4s";
    } else {
        header.style.background = "#e23744";
    }
});

// Input placeholder animation
const searchBox = document.querySelector("main input");
searchBox.addEventListener("focus", () => {
    searchBox.placeholder = "Type your favorite food... 🍔🍕🍜";
});
searchBox.addEventListener("blur", () => {
    searchBox.placeholder = "Search for restaurant , cuisine or a dish";
});

// Small animation on nav links click
document.querySelectorAll("header ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // stop default behavior
        alert(`You clicked on: ${link.textContent}`);
    });
});

// Logo bounce on click
const logo = document.querySelector(".logo img");
logo.addEventListener("click", () => {
    logo.style.transform = "scale(1.3)";
    setTimeout(() => {
        logo.style.transform = "scale(1)";
    }, 400);
});
